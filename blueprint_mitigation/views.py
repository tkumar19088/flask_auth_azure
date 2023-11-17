from flask import Blueprint, current_app, request, jsonify
import pandas as pd
import json
import numpy as np
import os
from utils import AzureBlobReader, SKUManager, replace_missing_values
import numpy as np
import pandas as pd
import pulp
from azure.storage.blob import BlobServiceClient
import pandas as pd
import openpyxl
import pyarrow as pa
import pyarrow.parquet as pq
from io import BytesIO, StringIO

from dotenv import load_dotenv

load_dotenv()


mitigation_blueprint = Blueprint("mitigation", __name__)
CONNECTION_STRING = os.getenv("azure_connection_string")
CONTAINER_NAME = os.getenv("container_name")

# ****************** CHOOSE MITIGATION SCENARIO ******************
# ****************************************************************
@mitigation_blueprint.route("/choosescenario", methods=["POST"])
def choose_scenario():
    """
    Handles the 'choosescenario' POST request.

    Returns:
        flask.Response: A JSON response containing the True/False results of the 'pushaltskus' and 'rarbysku' scenarios.

    Raises:
        ValueError: If the request data is missing the 'rbsku' key.
        ValueError: If no customer is selected.
        Exception: If any other error occurs.
    """
    global_filters = current_app.config.get("global_filters", {})
    resp_scen = {}
    try:
        # pushaltskus
        sku_manager = SKUManager(current_app.config, request.json)
        response = sku_manager.get_alternative_skus()
        altskus = response.get("data", [])
        resp_scen.update({"pushaltskus": f"{(len(altskus) > 0)}"})

        # rarbysku
        data = request.json
        if not data:
            raise ValueError("Missing required parameter: RB SKU!")

        if not global_filters.get("Customer"):
            raise ValueError("No customer selected!")

        rardf = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")

        rardf = rardf[rardf["RB SKU"] == data["rbsku"]]
        staticrow = rardf[rardf["Customer"] == global_filters["Customer"]]
        otherrows = rardf[rardf["Customer"] != global_filters["Customer"]]
        resp_scen.update({"rarbysku": str(len(otherrows) > 0)})

        response = {
            "status": "success",
            "status_code": 200,
            "message": "Scenario Assessment Successful!",
            "data": resp_scen,
        }

    except Exception as e:
        response = {
            "status": "error",
            "status_code": e.__dict__.get("status_code", 500),
            "message": e.__dict__.get("reason", "Internal Server Error"),
            "data": "",
        }
    # return jsonify(response)
    return response


# ************************** MITIGATION SCENARIO # 1 ***************************
#                             PUSH ALTERNATIVE SKU
# ******************************************************************************
@mitigation_blueprint.route("/getalternativeskus", methods=["POST"])
def getalternativeskus():
    """
    Handles the 'getalternativeskus' POST request.

    Returns:
        flask.Response: A JSON response containing the alternative SKUs and their scores.

    Raises:
        ValueError: If the request data is missing the 'rbsku' key.
        ValueError: If no customer is selected.
        ValueError: If no SKU is selected.
        ValueError: If no alternative SKUs are found.
        Exception: If any other error occurs.
    """
    sku_manager = SKUManager(current_app.config, request.json)
    try:
        response = sku_manager.get_alternative_skus()
        altskus = response.get("data", [])
        if len(altskus) < 1:
            response = {
                "status": "success",
                "status_code": 500,
                "message": "No alternative SKUs found!",
                "data": []
            }
        else:
            altskus = cleandf(altskus)
            response = {
                "status": "success",
                "status_code": 200,
                "message": f"{len(altskus)} Alternative SKUs found!",
                "data": json.loads(altskus.to_json(orient="records")),
            }
    except Exception as e:
        response = {
            "status": "error",
            "status_code": e.__dict__.get("status_code", 500),
            "message": e.__dict__.get("reason", "Internal Server Error"),
            "data": "",
        }
    # return jsonify(response)
    return response


# **************************  MITIGATION SCENARIO # 2 **************************
#             Get Reallocation across Retailers data by SKU code
# ******************************************************************************
@mitigation_blueprint.route("/rarbysku", methods=["POST"])
def getrarbysku():
    global_filters = current_app.config.get("global_filters", {})

    try:
        data = request.json
        staticrow, otherrows = pd.DataFrame(), pd.DataFrame()

        if not data:
            raise ValueError("Missing required parameter: RB SKU!")

        if not global_filters.get("Customer"):
            raise ValueError("No customer selected!")

        rardf = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")

        rardf = rardf[rardf["RB SKU"] == data["rbsku"]]

        # Filter out rows there Channel is empty
        rardf = rardf[rardf["Channel"] != ""]

        # set new allocation by default to 0
        rardf["newallocation"] = 0

        staticrow = rardf[rardf["Customer"] == global_filters["Customer"]]

        if len(rardf) > 1:
            otherrows = rardf[rardf["Customer"] != global_filters["Customer"]]
        else:
            otherrows = pd.DataFrame()

        minsl = 95
        avg_wocmin, avg_wocmax = 4, 8

        pctdev, woc, sl = 0, 0, 0

        # Labels for Service Level and WOC
        # # 2 = Green = Completely Satisfied ; 1 = Yellow = Partially Satisfied ; 0 = Red = Not Satisfied

        if len(otherrows) > 0:
            # Label for Service Level
            if (otherrows["expectedservicelevel"] >= minsl).all():
                sl = 2
            elif (otherrows["expectedservicelevel"] < minsl).any():
                sl = 0
            else:
                sl = 1

            # Label for WOC
            if (otherrows["custwoc-current"] >= avg_wocmin).all() and (
                otherrows["custwoc-current"] <= avg_wocmax
            ).all():
                woc = 2
            elif (otherrows["custwoc-current"] < avg_wocmin).any() or (
                otherrows["custwoc-current"] > avg_wocmax
            ).any():
                woc = 0
            else:
                woc = 1

            # Label for Pct Deviation # TODO: How do we calculate this? Presently using WOC
            if (otherrows["custwoc-current"] >= avg_wocmin).all() and (
                otherrows["custwoc-current"] <= avg_wocmax
            ).all():
                pctdev = 2
            elif (otherrows["custwoc-current"] < avg_wocmin).any() or (
                otherrows["custwoc-current"] > avg_wocmax
            ).any():
                pctdev = 0
            else:
                pctdev = 1

        if staticrow.iloc[0]["stocksafetoreallocate"] == 0 or pd.isna(staticrow.iloc[0]["stocksafetoreallocate"]):
            PCT_DEVIATION = 0  # Or any other suitable value
        else:
            PCT_DEVIATION = (max(staticrow.iloc[0]["stocksafetoreallocate"], 0) / staticrow.iloc[0]["stocksafetoreallocate"])

        avgsl = rardf["expectedservicelevel"].mean()
        avgsl = (avgsl * 100).round(2)

        constraints = [
            {
                "Name": "PCT DEVIATION FROM INIT ALLOC",
                "Value": PCT_DEVIATION,
                "Label": pctdev,
            },
            {
                "Name": "MIN Expected Service Level",
                "Value": minsl,
                "Label": sl,
            },
            {"Name": "MIN Deviation from Target WOC", "Value": avg_wocmin},
            {
                "Name": "MAX Deviation from Target WOC",
                "Value": avg_wocmax,
                "Label": woc,
            },
        ]

        results = [
            {"Name": "AVG EXP SERVICE LEVEL (%)", "Value": avgsl},
            {"Name": "EXP OLA", "Value": "99%"},
        ]

        # column_mapping = {
        #     "atf-sof": "Sell out",
        #     "customer": "Customer",
        #     "reckitt_sif": "sif-reckitt",
        #     "brand": "Brand",
        #     "sku": "RB SKU",
        #     "atf-sif": "sif-atf",
        # }

        # staticrow.rename(columns=column_mapping, inplace=True)
        # otherrows.rename(columns=column_mapping, inplace=True)

        # replace missing values and NaN and NULL with 0
        staticrow = staticrow.replace(np.nan, 0).fillna(0)
        otherrows = otherrows.replace(np.nan, 0).fillna(0)

        for col in staticrow.columns:
            if staticrow[col].dtype in ['float', 'float64']:
                staticrow[col] = staticrow[col].round(2)
            if otherrows[col].dtype in ['float', 'float64']:
                otherrows[col] = otherrows[col].round(2)
        staticrow['expectedservicelevel'] = (staticrow['expectedservicelevel']*100).round(4)
        otherrows['expectedservicelevel'] = (otherrows['expectedservicelevel']*100).round(4)


        data = {
            "static_row": json.loads(staticrow.to_json(orient="records"))[0],
            "other_rows": json.loads(otherrows.to_json(orient="records")),
            "constraints": constraints,
            "results": results,
        }

        response = {
            "status": "success",
            "status_code": 200,
            "message": "Data fetched successfully!",
            "data": data,
        }
    except Exception as e:
        response = {
            "status": "error",
            "status_code": e.__dict__.get("status_code", 500),
            "message": e.__dict__.get("reason", "Internal Server Error"),
            "data": "",
        }
    # return jsonify(response)
    return response


# **************************  Run RAR Optimization Model **************************
#                           Run optimization Model code
# ******************************************************************************
@mitigation_blueprint.route("/runoptimizemodel", methods=["POST"])
def runoptimizemodel():
    global_filters = current_app.config.get("global_filters", {})
    global_user = current_app.config.get("global_user", {})

    data = request.json

    if not data:
        raise ValueError("Missing required parameter: RB SKU!")
    try:
        df = read_data_from_blob(CONNECTION_STRING,CONTAINER_NAME,'ui_data/retailerreallocation.csv')
        dfa = df.copy()
        data_dict2 = {
                        0: 'customer',
                        1: 'Channel',
                        2: 'reckitt_sif',
                        3: 'currentallocation',
                        4: 'allocationconsumed',
                        5: 'openorders',
                        6: 'custsoh-target',
                        7: 'custwoc-target',
                        8: 'cmuscore',
                        9: 'reckitt_sif',
                        10: 'custsoh-current',
                        11: 'atf-sof'
                    }
        column_mapping = {
                            "Sell out" : "atf-sof",
                            "Customer" : "customer",
                            "sif-reckitt" : "reckitt_sif",
                            "Brand" : "brand",
                            "RB SKU" : "sku",
                            "sif-atf" : "atf-sif"
                        }

        df.rename(columns=column_mapping, inplace=True)

        skuid, customer = data["rbsku"], global_filters['Customer']
        MINIMUM_SERVICE_LEVEL = data["MINIMUM_SERVICE_LEVEL"] or 0
        ALLOCATION_CHANGE_THRESHOLD = data["ALLOCATION_CHANGE_THRESHOLD"] or 10
        WOC_MIN_PCT = data["WOC_MIN"] or 0
        WOC_MAX_PCT = data["WOC_MAX"] or 10

        ddf = df[list(data_dict2.values()) + ['atf-sif', 'sku']].copy()
        ddf = ddf[ddf['sku'] == skuid]
        ddf = pd.concat([ddf.iloc[:, :-5], ddf.iloc[:, -4:]], axis = 1)
        ddf['reckitt_sif'] = ddf[['atf-sif', 'reckitt_sif']].sum(axis = 1)
        ddf.drop(columns = ['atf-sif', 'sku'], inplace = True)
        ddf.reset_index(drop = True, inplace = True)

        for x in ['reckitt_sif','currentallocation','allocationconsumed','openorders','cmuscore','reckitt_sif','custsoh-current','atf-sof']:
            try:
                ddf[x] = ddf[x].fillna(df[x].mean()).astype(int)
            except ValueError:
                ddf[x] = ddf[x].fillna(0)
                ddf[x] = ddf[x].astype(int)

        ddf['custwoc-target'] = 4
        ddf['custsoh-target'] = ddf[['custwoc-target', 'atf-sof']].prod(axis = 1)
        conds = (~((df['reckitt_sif'].isna()) & (df['atf-sif'].isna())))
        conds &= (~(df['currentallocation'].isna()))

        status, final, optimalvalue = optimise_supply(ddf,MINIMUM_SERVICE_LEVEL, ALLOCATION_CHANGE_THRESHOLD, WOC_MIN_PCT, WOC_MAX_PCT)
        print(f"\nskuid - {skuid}\ncustomer - {customer}\nnum unique customers - {ddf['customer'].unique()}\nstatus - {status}\nOptimal value of X_0 : {optimalvalue}\n")

        if status == "Infeasible":
            response = {
                        "status": "error",
                        "status_code": 500,
                        "message": f"Optimization Infeasible for selected SKU - {skuid} & Customer - {customer}.",
                        "data": {},
                    }
        else:
            minsl = final['Expected_weekly_service_level'].min()
            aloc_thresh = 12
            wocmin = final['Updated_Customer_WoC'].min()
            wocmax = final['Updated_Customer_WoC'].max()
            rardf = final.copy()

            staticrow = rardf[rardf["customer"] == global_filters["Customer"]]
            otherrows = rardf[rardf["customer"] != global_filters["Customer"]]

            # Default label values
            sl, woc = 0, 0
            # Set labels by value of the params
            if len(otherrows) > 0:
                # Label for Service Level
                if (otherrows["Expected_weekly_service_level"] >= minsl).all():
                    sl = 2
                elif (otherrows["Expected_weekly_service_level"] < minsl).any():
                    sl = 0
                else:
                    sl = 1
                # Label for WOC
                if (otherrows["Updated_Customer_WoC"] >= wocmin).all() and (
                    otherrows["Updated_Customer_WoC"] <= wocmax
                ).all():
                    woc = 2
                elif (otherrows["Updated_Customer_WoC"] < wocmin).any() or (
                    otherrows["Updated_Customer_WoC"] > wocmax
                ).any():
                    woc = 0
                else:
                    woc = 1
                # Label for Pct Deviation # TODO: How do we calculate this?
                if (otherrows["Updated_Customer_WoC"] >= wocmin).all() and (
                    otherrows["Updated_Customer_WoC"] <= wocmax
                ).all():
                    woc = 2
                elif (otherrows["Updated_Customer_WoC"] < wocmin).any() or (
                    otherrows["Updated_Customer_WoC"] > wocmax
                ).any():
                    woc = 0
                else:
                    woc = 1
            if staticrow.iloc[0]["currentallocation"] == 0 or pd.isna(
                staticrow.iloc[0]["currentallocation"]
            ):
                PCT_DEVIATION = 0
            else:
                PCT_DEVIATION = (
                    max(staticrow.iloc[0]["SOH_safe_to_reallocate"], 0)
                    / staticrow.iloc[0]["currentallocation"])

            constraints = [
                {
                    "Name": "PCT DEVIATION FROM INIT ALLOC",
                    "Value": PCT_DEVIATION,
                    "Label": 0,
                },
                {
                    "Name": "MIN Expected Service Level",
                    "Value": minsl,
                    "Label": sl,
                },
                {"Name": "MIN Deviation from Target WOC", "Value": wocmin},
                {
                    "Name": "MAX Deviation from Target WOC",
                    "Value": wocmax,
                    "Label": woc,
                },
            ]

            avgsl = rardf["Expected_weekly_service_level"].mean()
            avgsl = (avgsl * 100).round(2) #type: ignore
            results = [
                        {"Name": "AVG EXP SERVICE LEVEL", "Value": avgsl},
                        {"Name": "EXP OLA", "Value": "99%"},
                    ]

            cols = [
                "customer",
                "AvgYTDsellout",
                "brand",
                "Location",
                "sku",
                "custwoc-current",
                "newallocation",
                "atf-sif",
                "sumofPOsinalloccycle",
                "idealallocationvalues",
            ]
            mergingdf = df[cols]
            staticrow["sku"], otherrows["sku"] = data["rbsku"], data["rbsku"]
            staticrow = pd.merge(staticrow, mergingdf, on=["customer", "sku"], how="left")
            otherrows = pd.merge(otherrows, mergingdf, on=["customer", "sku"], how="left")

            column_mapping = {
                "Channel": "Channel",
                "Expected_weekly_service_level": "expectedservicelevel",
                "Remaining_allocation": "remainingallocation",
                "SOH_safe_to_reallocate": "stocksafetoreallocate",
                "Suggested_Supply": "suggestedallocation",
                "allocationconsumed": "allocationconsumed",
                "atf-sof": "Sell out",
                "cmuscore": "cmuscore",
                "currentallocation": "currentallocation",
                "customer": "Customer",
                "custsoh-current": "custsoh-current",
                "custsoh-target": "custsoh-target",
                "custwoc-target": "custwoc-target",
                "openorders": "openorders",
                "reckitt_sif": "sif-reckitt",
                "AvgYTDsellout": "AvgYTDsellout",
                "brand": "Brand",
                "Location": "Location",
                "sku": "RB SKU",
                "custwoc-current": "custwoc-current",
                "newallocation": "newallocation",
                "atf-sif": "sif-atf",
                "sumofPOsinalloccycle": "sumofPOsinalloccycle",
                "idealallocationvalues": "idealallocationvalues",
            }
            staticrow.rename(columns=column_mapping, inplace=True)
            otherrows.rename(columns=column_mapping, inplace=True)

            # replace missing values and NaN and NULL with 0
            staticrow = staticrow.replace(np.nan, 0).fillna(0)
            otherrows = otherrows.replace(np.nan, 0).fillna(0)

            for col in staticrow.columns:
                staticrow[col] = (
                    staticrow[col]
                    if col in ["itf", "sku", "RB SKU"]
                    else staticrow[col].apply(
                        lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x
                    )
                )

            for col in otherrows.columns:
                otherrows[col] = (
                    otherrows[col]
                    if col in ["itf", "sku", "RB SKU"]
                    else otherrows[col].apply(
                        lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x
                    )
                )

            data = {
                    "static_row": json.loads(staticrow.to_json(orient="records"))[0],
                    "other_rows": json.loads(otherrows.to_json(orient="records")),
                    "constraints": constraints,
                    "results": results,
                }

            response = {
                        "status": "success",
                        "status_code": 200,
                        "message": "Data fetched successfully!",
                        "data": data,
                    }

    except Exception as e:
        response = {
                    "status": "error",
                    "status_code": e.__dict__.get("status_code", 500),
                    "message": e.__dict__.get("reason", "Internal Server Error"),
                    "data": {},
                }
    return response



## Helper Function
def cleandf(df):
    missing_values = [
        None,
        "null",
        "NULL",
        "Null",
        "Nan",
        "nan",
        "NaN",
        " ",
        "",
        "None; None",
        np.nan,
        "0; None",
        "nan; nan",
        "0; 0",
    ]
    df = df.replace(missing_values, "-")
    df = df.fillna("-")
    for col in df.columns:
        df[col] = (
            df[col]
            if col in ["itf", "sku", "RB SKU"]
            else df[col].apply(
                lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x
            )
        )
    df = df.replace([0.00, 0.0, "0.00", "0.0"], 0)
    return df


def read_data_from_blob(CONNECTION_STRING,CONTAINER_NAME, blob_name, file_format="auto", sheet_name=None, header = 0, **kwargs):
    """
    Reads a file (CSV, Excel, or Parquet) from an Azure Blob Storage container.

    Args:
        blob_name (str): Name of the file to read from the container.
        file_format (str, optional): 'csv', 'xlsx', 'parquet', or 'auto' to auto-detect based on file extension.
            Default is 'auto'.
        sheet_name (str, optional): Name of the sheet to read when reading an Excel (xlsx) file.
            Default is None, which means the first sheet will be read.
        **kwargs: Additional keyword arguments to pass to the data reading function.

    Returns:
        pandas.DataFrame: DataFrame containing the data from the specified sheet in the file, or None if an error occurs.
    """
    try:
        blob_service_client = BlobServiceClient.from_connection_string(
            CONNECTION_STRING
        )
        container_client = blob_service_client.get_container_client(CONTAINER_NAME)
        blob_client = container_client.get_blob_client(blob_name)

        blob_data = blob_client.download_blob().readall()

        if file_format == "auto":
            if blob_name.lower().endswith(".csv"):
                file_format = "csv"
            elif blob_name.lower().endswith(".xlsx"):
                file_format = "xlsx"
            elif blob_name.lower().endswith(".parquet"):
                file_format = "parquet"
            else:
                raise ValueError("Unsupported file format")

        if file_format == "csv":
            csv_string = blob_data.decode("utf-8")
            df = pd.read_csv(StringIO(csv_string), header = header, **kwargs)

        elif file_format == "xlsx":
            excel_io = BytesIO(blob_data)
            if sheet_name is None:
                df = pd.read_excel(excel_io, header = header, **kwargs)
            else:
                df = pd.read_excel(excel_io, sheet_name=sheet_name, header = header, **kwargs)

        elif file_format == "parquet":
            parquet_io = BytesIO(blob_data)
            table = pq.read_table(parquet_io)
            df = table.to_pandas()

        else:
            raise ValueError("Unsupported file format")

        return df

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return None
    
def optimise_supply(
    df, 
    MINIMUM_SERVICE_LEVEL = 0.7, 
    ALLOCATION_CHANGE_THRESHOLD = 0.5,
    WOC_MIN_PCT = 0,
    WOC_MAX_PCT = 10
):

    # Create a LP minimization problem
    problem = pulp.LpProblem("Optimization_Problem", pulp.LpMinimize)

    # Define the number of rows
    num_rows = len(df)

    data_dict = {
        0: 'customer',
        1: 'Channel',
        2: 'reckitt_sif',
        3: 'currentallocation',
        4: 'allocationconsumed',
        5: 'openorders',
        6: 'custsoh-target',
        7: 'custwoc-target',
        8: 'cmuscore',
        9: 'reckitt_sif',
        10: 'custsoh-current',
        11: 'atf-sof'
    }
    # Define variable dictionary
    var_dict = {
        0: 'Remaining_allocation',
        1: 'Expected_weekly_service_level',
        2: 'Updated_customer_SOH',
        3: 'Updated_Customer_WoC',
        4: 'SOH_safe_to_reallocate',
        5: 'Suggested_Supply'
    }
    n_vars = len(var_dict.keys())


    WOC_MIN = df[data_dict[7]] * WOC_MIN_PCT
    WOC_MAX = df[data_dict[7]] * WOC_MAX_PCT

    # Define main variable = 1 - expected service level
    X_0 = pulp.LpVariable("X_0", lowBound=0)

    # Variables to define in the data
    X_vars = {}

    # Auxiliary variables to apply constraints
    aux_vars = {}

    # Initiate variables
    for i in range(num_rows):
        X_vars[i] = {}
        aux_vars[i] = {}

        # Variables
        # Remaining allocation
        X_vars[i][0] = pulp.LpVariable(f"X_var_{i}_0", lowBound=0)

        # Expected weekly service level
        X_vars[i][1] = pulp.LpVariable(f"X_var_{i}_1", lowBound=0)

        # Updated customer SOH
        X_vars[i][2] = pulp.LpVariable(f"X_var_{i}_2", lowBound=0)

        # Updated customer WOC
        X_vars[i][3] = pulp.LpVariable(f"X_var_{i}_3", lowBound=0)

        # SOH safe to reallocate
        X_vars[i][4] = pulp.LpVariable(f"X_var_{i}_4", lowBound=0)

        # Suggested supply - No lower bound for the suggested supply
        X_vars[i][5] = pulp.LpVariable(f"X_var_{i}_5", lowBound=None)

        # Initiate auxiliary variables
        # Auxiliary variables - Expected weekly service level
        aux_vars[i][1] = pulp.LpVariable(f"aux_var_{i}_1_", lowBound=None)

        # Auxiliary variables - Updated customer SOH
        aux_vars[i][2] = pulp.LpVariable(f"aux_var_{i}_2", lowBound=None)

        # Auxiliary variables - SOH safe to reallocate
        aux_vars[i][4] = pulp.LpVariable(f"aux_var_{i}_4", lowBound=None)


    # Add objective function
    problem += X_0

    # Add constraints
    for i in range(num_rows):
        problem += X_vars[i][0] == df[data_dict[3]][i] - df[data_dict[4]][i] + X_vars[i][5]


        # Expected SOH considers both current stock and potential change in allocation
        problem += X_vars[i][2] == df[data_dict[10]][i] - df[data_dict[11]][i] + df[data_dict[4]][i] + X_vars[i][0] + X_vars[i][5] - df[data_dict[5]][i]
        problem += X_vars[i][2] >= 0

        # Apply thresholds for weeks of coverage
        problem += X_vars[i][3] >= WOC_MIN[i]
        problem += X_vars[i][3] <= WOC_MAX[i]
        problem += X_vars[i][2] == X_vars[i][3] * df[data_dict[11]][i]
        problem += aux_vars[i][2] >= X_vars[i][0] - df[data_dict[5]][i]
        problem += aux_vars[i][2] >= 0
        problem += X_vars[i][4] == aux_vars[i][2]
        problem += aux_vars[i][4] >= X_vars[i][0] - max(df[data_dict[2]][i] - df[data_dict[9]][i], df[data_dict[5]][i])
        problem += aux_vars[i][4] >= 0
        problem += X_vars[i][4] == aux_vars[i][4]

        # Expected service level considers both current allocation and potential change in allocation
        problem += aux_vars[i][1] <= (df[data_dict[3]][i] + X_vars[i][5]) / max(df[data_dict[2]][i], df[data_dict[9]][i] + df[data_dict[5]][i])
        problem += aux_vars[i][1] <= 1
        problem += aux_vars[i][1] >= MINIMUM_SERVICE_LEVEL
        problem += X_vars[i][1] == aux_vars[i][1]

        # Suggested supply should be below SOH safe to reallocate
        problem += X_vars[i][5] <= X_vars[i][4]


        # Suggested supply cannot be greater than current allocation
        problem += X_vars[i][5] <= df[data_dict[3]][i]

        # Stock safe to reallocate is a function of the allocation
        problem += X_vars[i][4] <= df[data_dict[3]][i] * ALLOCATION_CHANGE_THRESHOLD


    # Trying to minimise 1 - service level <--> maximise service level
    problem += X_0 == num_rows - pulp.lpSum([X_vars[i][1] for i in range(num_rows)])

    # Sum of suggested reallocation equals to 0 since it is a closed system
    problem += pulp.lpSum([X_vars[i][5] for i in range(num_rows)]) == 0

    # Solve the LP problem
    problem.solve()

    # Print the results
    # print("Status:", pulp.LpStatus[problem.status])
    # print("Optimal value of X_0:", pulp.value(X_0))

    status = pulp.LpStatus[problem.status]
    arr = np.zeros((num_rows, n_vars))
    for k1 in X_vars.keys():
        for k2, v in X_vars[k1].items():
            arr[k1, k2] = v.varValue
    df_res = pd.DataFrame(np.round(arr, 4), columns = var_dict.values())
    final = pd.concat([df, df_res], axis=1)
    return status, final, pulp.value(X_0)