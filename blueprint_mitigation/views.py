from flask import (
    Blueprint,
    current_app,
    request,
    jsonify
)

import json
import numpy as np
from utils import AzureBlobReader
from dotenv import load_dotenv
load_dotenv()

mitigation_blueprint = Blueprint("mitigation", __name__)


# ****************** CHOOSE MITIGATION SCENARIO ******************
#          #TODO: CHOOSE MITIGATION SCENARIO
# ****************************************************************
@mitigation_blueprint.route("/choosescenario", methods=['POST'])
def choosescenario():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}
    data = request.json or {}
    if not data:
        return jsonify(status="error", message="Missing required parameter: RB SKU!"), 500
    else:
        return jsonify(status="success", message="Mitigation scenario chosen successfully!"), 200


# ************************** MITIGATION SCENARIO # 1 ***************************
#        PUSH ALTERNATIVE SKU API #TODO: API Done but Testing Incomplete
# ******************************************************************************
@mitigation_blueprint.route("/getalternativeskus", methods=['POST'])
def getalternativeskus():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json
    if not data:
        return jsonify(status="error", message="Missing required parameter: RB SKU!"), 500

    ret, sku_r = global_filters.get('Customer', None), data.get('rbsku', None)
    if not ret:
        return jsonify(status="error", message="No customer selected!"), 500

    try:
        # df_price = AzureBlobReader().read_csvfile("ui_data/pushalternativeskus.csv")
        # brand = df_price.loc[df_price['sku'] == sku_r, 'brand'].values[0]
        # conds = (df_price['brand'] == brand) & (df_price['retailer'] == ret)
        # tmp = df_price[conds].drop(columns = ['retailer', 'brand']).drop_duplicates()
        # tmp = tmp.set_index('sku').T
        # tmp_r = tmp[sku_r]
        # tmp = tmp.drop(columns = sku_r)
        # tmp.loc['score_1'] = 1 * (tmp.loc['segment'] == tmp_r['segment'])
        # tmp.loc['score_3'] = (tmp.loc['reckitt_inv'] / tmp_r['reckitt_inv'])
        # tmp.loc['score_4'] = (tmp.loc[['reckitt_inv', 'currentallocation']].min(axis = 1) / tmp_r['sif-reckitt'])
        # tmp.loc['score_5'] = (tmp.loc[['Sell out', 'currentcustSOH', 'sif-reckitt']].apply(lambda x: score5(x[0], x[1], x[2]), axis = 0))
        # tmp.loc['score_6'] = (tmp.loc[['custwoc-target', 'custwoc-current']].apply(lambda x: score6(x[0], x[1]), axis = 0))
        # tmp.loc['score_7'] = 1 - abs(tmp.loc['price'] - tmp_r['price'] / tmp_r['price'])
        # tmp.loc['score_final'] = tmp.loc[['score_1', 'score_3', 'score_4', 'score_5', 'score_6', 'score_7']].sum(axis = 0)
        # tmp = tmp.loc[['score_final']].T
        # tmp.replace(" ", "-", inplace=True)
        # return json.loads(tmp.to_json(orient='records')) if not tmp.empty else jsonify(status="error", message="No alternative SKUs found!"), 500
        return jsonify(status="Success", message="5 alternative SKUs found!"), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# ************* MITIGATION SCENARIO # 2 *************
# Get Reallocation across Retailers data by SKU code
# ***************************************************
@mitigation_blueprint.route("/rarbysku", methods=['POST'])
def getrarbysku():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    reallocationdata = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
    reallocationdatabysku = reallocationdata[reallocationdata['RB SKU'] == data['rbsku']]
    try:
        if global_filters['Customer']:
            staticdf = reallocationdatabysku[reallocationdatabysku['Customer'] == global_filters['Customer']]
            other_customers_df = reallocationdatabysku[reallocationdatabysku['Customer'] != global_filters['Customer']]
            staticdf.replace(" ", "-", inplace=True)
            other_customers_df.replace(" ", "-", inplace=True)
            static_row = json.loads(staticdf.to_json(orient='records'))[0] if staticdf else {}
            other_rows = json.loads(other_customers_df.to_json(orient='records')) if other_customers_df else []
            return {"static_row":static_row, "other_rows":other_rows}
        else:
            return jsonify(status="error", message="No customer selected!"), 500
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# ***********************************************
#     Optimization Model Response # TODO # Optimization model execution
# ***********************************************
@mitigation_blueprint.route("/getoptmize", methods=['POST'])
def getoptmize():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}
    
    # Label: 2 for green, 1 for amber, 0 for red
    constraints = [{
                            'Name': 'PCT DEVIATION FROM INIT ALLOC',
                            'Value': '5%',
                            'Label': 0
                        }, {
                            'Name': 'MIN Expected Service Level',
                            'Value': '95%',
                            'Label': 1
                        }, {
                            'Name': 'MIN Deviation from Target WOC',
                            'Value': 4,
                            'Label': 0
                        }, {
                            'Name': 'MAZ Deviation from Target WOC',
                            'Value': 8,
                            'Label': 0
                        }]

    results = [{
                            'Name': 'AVG EXP SERVICE LEVEL',
                            'Value': '98%'
                        }, {
                            'Name': 'EXP OLA',
                            'Value': "99%"
                        }]

    data = {
            'otherrows':[],
            'staticrow':{},
            'constraints':constraints,
            'results':results}
    return data



# ***********************************************************************
#       HELPER FUNCTIONS INDIRECT API CALLS & REDIRECTION - BELOW
# ***********************************************************************

def score5(a, b, c):
    try:
        return (a / (b + c))
    except:
        return np.nan

def score6(a, b):
    try:
        return a / b
    except:
        return np.nan


def score7(a, b):
    try:
        return 1 - (abs(b - a) / a)
    except:
        return np.nan


