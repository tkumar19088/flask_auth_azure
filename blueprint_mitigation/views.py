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
            return altskus
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
        # else:
        #     print(f"\n1. data : {data}\n")

        if not global_filters.get("Customer"):
            raise ValueError("No customer selected!")
        # else:
        #     print(f"\n2. global_filters : {global_filters}\n")

        reallocationdata = AzureBlobReader().read_csvfile(
            "ui_data/retailerreallocation.csv"
        )
        minsl, wocmin, wocmax, status, rardf, optimalvalue = optimise_supply(
            reallocationdata, data["rbsku"], 0.95, 10, 3, 8
        )

        # print(
        #     f"\n3. skuid - {data['rbsku']} ; status - {status} ; Optimal value of X_0 : {optimalvalue}"
        # )
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
            if (otherrows["Updated_Customer_WoC"] >= avg_wocmin).all() and (
                otherrows["Updated_Customer_WoC"] <= avg_wocmax
            ).all():
                woc = 2
            elif (otherrows["Updated_Customer_WoC"] < avg_wocmin).any() or (
                otherrows["Updated_Customer_WoC"] > avg_wocmax
            ).any():
                woc = 0
            else:
                woc = 1

            # Label for Pct Deviation #TODO: How do we calculate this?
            if (otherrows["Updated_Customer_WoC"] >= avg_wocmin).all() and (
                otherrows["Updated_Customer_WoC"] <= avg_wocmax
            ).all():
                woc = 2
            elif (otherrows["Updated_Customer_WoC"] < avg_wocmin).any() or (
                otherrows["Updated_Customer_WoC"] > avg_wocmax
            ).any():
                woc = 0
            else:
                woc = 1

        PCT_DEVIATION = (
            max(staticrow.iloc[0]["SOH_safe_to_reallocate"], 0)
            / staticrow.iloc[0]["currentallocation"]
        )

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

        # print(
        #     f"\n'static_row': {staticrow},\n'other_rows': {otherrows},\n'constraints': {constraints},\n'results': {results}"
        # )

        return {
            "static_row": json.loads(staticrow.to_json(orient="records")),
            "other_rows": json.loads(otherrows.to_json(orient="records")),
            "constraints": constraints,
            "results": results,
        }
    except Exception as e:
        return jsonify(status="error", message=e), 500
