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

    # pushaltskus
    sku_manager = SKUManager(current_app.config, request.json)
    altskus = sku_manager.get_alternative_skus()
    resp_scen.update({"pushaltskus": str(len(altskus) > 0)})

    # rarbysku
    try:
        data = request.json or {}
        if not data:
            raise ValueError("Missing required parameter: RB SKU!")

        if not global_filters.get('Customer'):
            raise ValueError("No customer selected!")

        reallocation_data = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
        reallocation_data_by_sku = reallocation_data[reallocation_data['RB SKU'] == data['rbsku']]
        _, _, reallocatedf = optimise_supply(reallocation_data_by_sku)
        count = (reallocatedf['stocksafetoreallocate'] > 0).sum()
        resp_scen.update({"rarbysku": str(count > 0)})
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

        reallocation_data = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
        reallocation_data_by_sku = reallocation_data[reallocation_data['RB SKU'] == data['rbsku']]
        static_row = json.loads(reallocation_data_by_sku[reallocation_data_by_sku['Customer'] == global_filters['Customer']].to_json(orient='records'))[0]
        other_rows = json.loads(reallocation_data_by_sku[reallocation_data_by_sku['Customer'] != global_filters['Customer']].to_json(orient='records'))

        _, _, reallocatedf = optimise_supply(reallocation_data_by_sku)
        reallocatedf = replace_missing_values(reallocatedf)

        return {"static_row":static_row, "other_rows":other_rows}
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500
