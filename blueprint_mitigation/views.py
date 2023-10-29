from flask import Blueprint, current_app, request, jsonify
import pandas as pd
import json
import numpy as np
from utils import AzureBlobReader, replace_missing_values
from dotenv import load_dotenv

load_dotenv()

from utils import optimise_supply, SKUManager

mitigation_blueprint = Blueprint("mitigation", __name__)


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
        altskus = sku_manager.get_alternative_skus()
        resp_scen.update({"pushaltskus": f"{(len(altskus) > 0)}"})

        # rarbysku
        data = request.json
        if not data:
            raise ValueError("Missing required parameter: RB SKU!")

        if not global_filters.get("Customer"):
            raise ValueError("No customer selected!")

        rardf = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")

        rardf = rardf[rardf["sku"] == data["rbsku"]]
        staticrow = rardf[rardf["customer"] == global_filters["Customer"]]
        otherrows = rardf[rardf["customer"] != global_filters["Customer"]]
        resp_scen.update({"rarbysku": str(len(otherrows) > 0)})
        return jsonify(resp_scen), 200

    except Exception as e:
        return jsonify(status="error", message=e), 500


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
        altskus = sku_manager.get_alternative_skus()
        if len(altskus) < 1:
            return jsonify(status="error", message="No alternative SKUs found!"), 500
        else:
            altskus = cleandf(altskus)
            return json.loads(altskus.to_json(orient='records'))
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


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
        rardf = rardf[rardf["sku"] == data["rbsku"]]

        # Filter out rows there Channel is empty
        rardf = rardf[rardf["Channel"] != ""]

        # set new allocation by default to 0
        rardf['newallocation'] = 0

        staticrow = rardf[rardf["customer"] == global_filters["Customer"]]
        # print(f"\n5. staticrow.columns :\n{staticrow.columns}\n")

        if len(rardf) > 1:
            otherrows = rardf[rardf["customer"] != global_filters["Customer"]]
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
            if (otherrows["custwoc-current"] >= avg_wocmin).all() and (otherrows["custwoc-current"] <= avg_wocmax).all():
                woc = 2
            elif (otherrows["custwoc-current"] < avg_wocmin).any() or (otherrows["custwoc-current"] > avg_wocmax).any():
                woc = 0
            else:
                woc = 1

            # Label for Pct Deviation # TODO: How do we calculate this? Presently using WOC
            if (otherrows["custwoc-current"] >= avg_wocmin).all() and (otherrows["custwoc-current"] <= avg_wocmax).all():
                pctdev = 2
            elif (otherrows["custwoc-current"] < avg_wocmin).any() or (otherrows["custwoc-current"] > avg_wocmax).any():
                pctdev = 0
            else:
                pctdev = 1

        if staticrow.iloc[0]["stocksafetoreallocate"] == 0 or pd.isna(staticrow.iloc[0]["stocksafetoreallocate"]):
            PCT_DEVIATION = 0  # Or any other suitable value
        else:
            PCT_DEVIATION = max(staticrow.iloc[0]["stocksafetoreallocate"], 0) / staticrow.iloc[0]["stocksafetoreallocate"]

        avgsl = rardf["expectedservicelevel"].mean()

        constraints = [
                        {
                            "Name": "PCT DEVIATION FROM INIT ALLOC",
                            "Value": f"{int(PCT_DEVIATION)}",
                            "Label": f"{pctdev}",
                        },
                        {
                            "Name": "MIN Expected Service Level",
                            "Value": f"{minsl}",
                            "Label": f"{sl}",
                        },
                        {"Name": "MIN Deviation from Target WOC", "Value": f"{avg_wocmin}"},
                        {
                            "Name": "MAX Deviation from Target WOC",
                            "Value": f"{avg_wocmax}",
                            "Label": f"{woc}",
                        },
                    ]

        results = [
            {"Name": "AVG EXP SERVICE LEVEL", "Value": f"{avgsl}"},
            {"Name": "EXP OLA", "Value": "99%"},
        ]

        column_mapping = {'atf-sof': 'Sell out',
                          'customer': 'Customer',
                          'reckitt_sif': 'sif-reckitt',
                          'brand': 'Brand',
                          'sku': 'RB SKU',
                          'atf-sif': 'sif-atf'}

        staticrow.rename(columns=column_mapping, inplace=True)
        otherrows.rename(columns=column_mapping, inplace=True)

        # replace missing values and NaN and NULL with 0
        staticrow = staticrow.replace(np.nan, 0).fillna(0)
        otherrows = otherrows.replace(np.nan, 0).fillna(0)

        for col in staticrow.columns:
            staticrow[col] = staticrow[col] if col in ['itf','sku', 'RB SKU'] else staticrow[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)

        for col in otherrows.columns:
            otherrows[col] = otherrows[col] if col in ['itf','sku', 'RB SKU'] else otherrows[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)

        return {
            "static_row": json.loads(staticrow.to_json(orient="records"))[0],
            "other_rows": json.loads(otherrows.to_json(orient="records")),
            "constraints": constraints,
            "results": results,
        }
    except Exception as e:
        return jsonify(status="error", message=e), 500


# **************************  Run RAR Optimization Model **************************
#                           Run optimization Model code
# ******************************************************************************
@mitigation_blueprint.route("/runoptimizemodel", methods=["POST"])
def runoptimizemodel():
    global_filters = current_app.config.get("global_filters", {})

    try:
        data = request.json
        staticrow, otherrows = pd.DataFrame(), pd.DataFrame()
        if not data:
            raise ValueError("Missing required parameter: RB SKU!")
        # else:
        #     print(f"\n1. data : {data}\n")

        if not global_filters.get("Customer"):
            raise ValueError("No customer selected!")
        # else:
        #     print(f"\n2. global_filters : {global_filters}\n")

        df = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
        df = df[df["sku"] == data["rbsku"]]

        # Filter out rows there Channel is empty
        df = df[df["Channel"] != ""]

        # set new allocation by default to 0
        df['newallocation'] = 0

        minsl, wocmin, wocmax, status, rardf, optimalvalue = optimise_supply(df, data["rbsku"], 0.95, 10, 3, 8)

        # print(f"\n3. skuid - {data['rbsku']} ; status - {status} ; Optimal value of X_0 : {optimalvalue}")
        # print(f"\n4. rardf.columns :\n{rardf.columns}\n")

        staticrow = rardf[rardf["customer"] == global_filters["Customer"]]
        # print(f"\n5. staticrow.columns :\n{staticrow.columns}\n")

        sl, woc = 0, 0
        avg_wocmin, avg_wocmax = np.average(wocmin), np.average(wocmax)

        if len(rardf) > 1:
            otherrows = rardf[rardf["customer"] != global_filters["Customer"]]
        else:
            otherrows = pd.DataFrame()

        # Labels for Service Level and WOC
        # # 2 = Green = Completely Satisfied ; 1 = Yellow = Partially Satisfied ; 0 = Red = Not Satisfied

        if len(otherrows) > 0:
            # Label for Service Level
            if (otherrows["Expected_weekly_service_level"] >= minsl).all():
                sl = 2
            elif (otherrows["Expected_weekly_service_level"] < minsl).any():
                sl = 0
            else:
                sl = 1

            # Label for WOC
            if (otherrows["Updated_Customer_WoC"] >= avg_wocmin).all() and (otherrows["Updated_Customer_WoC"] <= avg_wocmax).all():
                woc = 2
            elif (otherrows["Updated_Customer_WoC"] < avg_wocmin).any() or (otherrows["Updated_Customer_WoC"] > avg_wocmax).any():
                woc = 0
            else:
                woc = 1

            # Label for Pct Deviation # TODO: How do we calculate this?
            if (otherrows["Updated_Customer_WoC"] >= avg_wocmin).all() and (otherrows["Updated_Customer_WoC"] <= avg_wocmax).all():
                woc = 2
            elif (otherrows["Updated_Customer_WoC"] < avg_wocmin).any() or (otherrows["Updated_Customer_WoC"] > avg_wocmax).any():
                woc = 0
            else:
                woc = 1

        if staticrow.iloc[0]["currentallocation"] == 0 or pd.isna(staticrow.iloc[0]["currentallocation"]):
            PCT_DEVIATION = 0
        else:
            PCT_DEVIATION = (max(staticrow.iloc[0]["SOH_safe_to_reallocate"], 0) / staticrow.iloc[0]["currentallocation"])

        avgsl = rardf["Expected_weekly_service_level"].mean()

        constraints = [
            {
                "Name": "PCT DEVIATION FROM INIT ALLOC",
                "Value": f"{int(PCT_DEVIATION)}",
                "Label": 0,
            },
            {
                "Name": "MIN Expected Service Level",
                "Value": f"{minsl}",
                "Label": f"{sl}",
            },
            {"Name": "MIN Deviation from Target WOC", "Value": f"{avg_wocmin}"},
            {
                "Name": "MAX Deviation from Target WOC",
                "Value": f"{avg_wocmax}",
                "Label": f"{woc}",
            },
        ]

        results = [
            {"Name": "AVG EXP SERVICE LEVEL", "Value": f"{avgsl}"},
            {"Name": "EXP OLA", "Value": "99%"},
        ]

        cols = ['customer','AvgYTDsellout','brand','Location','sku','custwoc-current','newallocation','atf-sif','sumofPOsinalloccycle','idealallocationvalues']
        mergingdf = df[cols]
        print(f"\n6. mergingdf.columns :\n{mergingdf.columns}\n")
        print(f"\n7. staticrow.columns :\n{staticrow.columns}\n")
        print(f"\n8. otherrows.columns :\n{otherrows.columns}\n")

        staticrow['sku'], otherrows['sku'] = data["rbsku"], data["rbsku"]
        staticrow = pd.merge(staticrow, mergingdf, on=['customer','sku'], how='left')
        otherrows = pd.merge(otherrows, mergingdf, on=['customer','sku'], how='left')

        column_mapping = {
                            'Channel' : "Channel",
                            'Expected_weekly_service_level' : "expectedservicelevel",
                            'Remaining_allocation' : "remainingallocation",
                            'SOH_safe_to_reallocate' : "stocksafetoreallocate",
                            'Suggested_Supply' : "suggestedallocation",
                            'allocationconsumed' : "allocationconsumed",
                            'atf-sof' : "Sell out",
                            'cmuscore' : "cmuscore",
                            'currentallocation' : "currentallocation",
                            'customer' : "Customer",
                            'custsoh-current' : "custsoh-current",
                            'custsoh-target' : "custsoh-target",
                            'custwoc-target' : "custwoc-target",
                            'openorders' : "openorders",
                            'reckitt_sif' : "sif-reckitt",
                            'AvgYTDsellout' : "AvgYTDsellout",
                            'brand' : "Brand",
                            'Location' : "Location",
                            'sku' : "RB SKU",
                            'custwoc-current' : "custwoc-current",
                            'newallocation' : "newallocation",
                            'atf-sif' : "sif-atf",
                            'sumofPOsinalloccycle' : "sumofPOsinalloccycle",
                            'idealallocationvalues' : "idealallocationvalues"}

        staticrow.rename(columns=column_mapping, inplace=True)
        otherrows.rename(columns=column_mapping, inplace=True)

        # replace missing values and NaN and NULL with 0
        staticrow = staticrow.replace(np.nan, 0).fillna(0)
        otherrows = otherrows.replace(np.nan, 0).fillna(0)

        for col in staticrow.columns:
            staticrow[col] = staticrow[col] if col in ['itf','sku', 'RB SKU'] else staticrow[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)

        for col in otherrows.columns:
            otherrows[col] = otherrows[col] if col in ['itf','sku', 'RB SKU'] else otherrows[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)

        return {
            "static_row": json.loads(staticrow.to_json(orient="records"))[0],
            "other_rows": json.loads(otherrows.to_json(orient="records")),
            "constraints": constraints,
            "results": results,
        }
    except Exception as e:
        response = {
            "status": "error",
            "message": e,
        }
        return jsonify(response), 500


## Helper Function
def cleandf(df):
    missing_values = [None, 'null', 'NULL', 'Null', 'Nan', 'nan', 'NaN', ' ', '', 'None; None', np.nan, '0; None', 'nan; nan', '0; 0']
    df = df.replace(missing_values, '-')
    df = df.fillna('-')
    for col in df.columns:
        df[col] = df[col] if col in ['itf','sku', 'RB SKU'] else df[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)
    df = df.replace([0.00, 0.0, "0.00", "0.0"], 0)
    return df