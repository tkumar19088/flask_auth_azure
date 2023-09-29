from flask import (
    Blueprint,
    current_app,
    request,
    jsonify
)

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
        rardf = rardf[rardf['RB SKU'] == data['rbsku']]
        staticrow = rardf[rardf['Customer'] == global_filters['Customer']]
        otherrows = rardf[rardf['Customer'] != global_filters['Customer']]
        resp_scen.update({"rarbysku": str(len(otherrows) > 0)})
        return jsonify(resp_scen), 200

    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# ************************** MITIGATION SCENARIO # 1 ***************************
#                             PUSH ALTERNATIVE SKU
# ******************************************************************************
@mitigation_blueprint.route("/getalternativeskus", methods=['POST'])
def getalternativeskus():
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
        rardf = rardf[rardf['RB SKU'] == data['rbsku']]
        staticrow = rardf[rardf['Customer'] == global_filters['Customer']]
        otherrows = rardf[rardf['Customer'] != global_filters['Customer']]

        print(f"\n1. otherrows:\n{otherrows}\n")

        MINIMUM_SERVICE_LEVEL = 0.95
        WOC_MIN = 3
        WOC_MAX = 8

        constraints = [{
                            'Name': 'PCT DEVIATION FROM INIT ALLOC',
                            'Value': '5%',
                            'Label': 0
                        }, {
                            'Name': 'MIN Expected Service Level',
                            'Value': f'{MINIMUM_SERVICE_LEVEL}',
                            'Label': 1
                        }, {
                            'Name': 'MIN Deviation from Target WOC',
                            'Value': f'{WOC_MIN}'
                        }, {
                            'Name': 'MAX Deviation from Target WOC',
                            'Value': f'{WOC_MAX}',
                            'Label': 0
                        }]

        results = [{
                    "Name": "AVG EXP SERVICE LEVEL",
                    "Value": "100%"
                    },
                    {
                    "Name": "EXP OLA",
                    "Value": "99%"
                    }]
        return {"static_row":staticrow, "other_rows":otherrows, "constraints":constraints, "results":results}

    except Exception as e:
        return jsonify(status="error", message=str(e)), 500
