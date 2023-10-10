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

        rardf = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")

        # reallocationdata = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
        # ovalldata = AzureBlobReader().read_csvfile("ui_data/reckittoverviewdatarepo.csv")
        # rardf = pd.merge(ovalldata, reallocationdata, on=['RB SKU', 'Customer'], how='inner')

        # constraints_values, reallocstatus, realloc_df = optimise_supply(rardf, data['rbsku'])

        rardf = rardf[rardf['RB SKU'] == data['rbsku']]
        staticrow = rardf[rardf['Customer'] == global_filters['Customer']]
        otherrows = rardf[rardf['Customer'] != global_filters['Customer']]

        MINIMUM_SERVICE_LEVEL = 0.95
        WOC_MIN = 3
        WOC_MAX = 8

        # Labels for Service Level and WOC
        # # 2 = Green - Completely Satisfied
        # # 1 = Yellow - Partially Satisfied
        # # 0 = Red - Not Satisfied
        sl, woc = 0, 0
        if len(otherrows) > 0:
            # Label for Service Level
            if otherrows['sif-atf'].all() >= MINIMUM_SERVICE_LEVEL:
                sl = 2
            elif otherrows['sif-atf'].any() < MINIMUM_SERVICE_LEVEL:
                sl = 0
            else:
                sl = 1

            # Label for WOC
            if (otherrows["custwoc-current"].all() >= WOC_MIN) and (otherrows["custwoc-current"].all() <= WOC_MAX):
                woc = 2
            elif (otherrows["custwoc-current"].any() < WOC_MIN) or (otherrows["custwoc-current"].any() > WOC_MAX):
                woc = 0
            else:
                woc = 1
        else:
            otherrows = []

        constraints = [{
                            'Name': 'PCT DEVIATION FROM INIT ALLOC',
                            'Value': '5%',
                            'Label': 0
                        }, {
                            'Name': 'MIN Expected Service Level',
                            'Value': f'{MINIMUM_SERVICE_LEVEL}',
                            'Label': f'{sl}'
                        }, {
                            'Name': 'MIN Deviation from Target WOC',
                            'Value': f'{WOC_MIN}'
                        }, {
                            'Name': 'MAX Deviation from Target WOC',
                            'Value': f'{WOC_MAX}',
                            'Label': f'{woc}'
                        }]

        results = [{
                    "Name": "AVG EXP SERVICE LEVEL",
                    "Value": "100%"
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
