from flask import (
    Blueprint,
    current_app,
    request,
    jsonify
)
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
@mitigation_blueprint.route("/choosescenario", methods=['POST'])
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
    global_filters = current_app.config.get('global_filters', {})
    resp_scen = {}
    try:
        # pushaltskus
        sku_manager = SKUManager(current_app.config, request.json)
        altskus = sku_manager.get_alternative_skus()
        resp_scen.update({"pushaltskus": str(len(altskus) > 0)})

        # rarbysku
        data = request.json or {}
        if not data:
            raise ValueError("Missing required parameter: RB SKU!")

        if not global_filters.get('Customer'):
            raise ValueError("No customer selected!")

        rardf = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
        rardf = rardf[rardf['sku'] == data['rbsku']]
        otherrows = rardf[rardf['customer'] != global_filters['Customer']]
        resp_scen.update({"rarbysku": str(len(otherrows) > 0)})
        return jsonify(resp_scen), 200

    except Exception as e:
        return jsonify(status="error", message=e), 500


# ************************** MITIGATION SCENARIO # 1 ***************************
#                             PUSH ALTERNATIVE SKU
# ******************************************************************************
@mitigation_blueprint.route("/getalternativeskus", methods=['POST'])
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
@mitigation_blueprint.route("/rarbysku", methods=['POST'])
def getrarbysku():
    global_filters = current_app.config.get('global_filters', {})

    try:
        data = request.json or {}

        if not data:
            raise ValueError("Missing required parameter: RB SKU!")

        if not global_filters.get('Customer'):
            raise ValueError("No customer selected!")

        reallocationdata = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
        minsl, wocmin, wocmax, status, rardf = optimise_supply(reallocationdata, data['rbsku'], 0.95, 3, 8)

        staticrow = rardf[rardf['Customer'] == global_filters['Customer']]
        otherrows = rardf[rardf['Customer'] != global_filters['Customer']]

        # Labels for Service Level and WOC
        # # 2 = Green = Completely Satisfied ; 1 = Yellow = Partially Satisfied ; 0 = Red = Not Satisfied

        sl, woc = 0, 0
        if len(otherrows) > 0:
            # Label for Service Level
            if otherrows['sif-atf'].all() >= minsl:
                sl = 2
            elif otherrows['sif-atf'].any() < minsl:
                sl = 0
            else:
                sl = 1

            # Label for WOC
            if (otherrows["custwoc-current"].all() >= wocmin) and (otherrows["custwoc-current"].all() <= wocmax):
                woc = 2
            elif (otherrows["custwoc-current"].any() < wocmin) or (otherrows["custwoc-current"].any() > wocmax):
                woc = 0
            else:
                woc = 1

        PCT_DEVIATION = (staticrow['newallocation'] - staticrow['currentallocation']) / staticrow['currentallocation']
        avgsl = rardf["Exp Service Level"].mean()

        constraints = [{
                            'Name': 'PCT DEVIATION FROM INIT ALLOC',
                            'Value': f'{PCT_DEVIATION}',
                            'Label': 0
                        }, {
                            'Name': 'MIN Expected Service Level',
                            'Value': f'{minsl}',
                            'Label': f'{sl}'
                        }, {
                            'Name': 'MIN Deviation from Target WOC',
                            'Value': f'{wocmin}'
                        }, {
                            'Name': 'MAX Deviation from Target WOC',
                            'Value': f'{wocmax}',
                            'Label': f'{woc}'
                        }]

        results = [{
                    "Name": "AVG EXP SERVICE LEVEL",
                    "Value": f'{avgsl}'
                    },
                    {
                    "Name": "EXP OLA",
                    "Value": "99%"
                    }]

        srow = staticrow if len(staticrow) > 0 else []
        orows = otherrows if len(otherrows) > 0 else []

        return {"static_row":srow, "other_rows":orows, "constraints":constraints, "results":results}

    except Exception as e:
        return jsonify(status="error", message=str(e)), 500
