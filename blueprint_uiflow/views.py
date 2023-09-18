from flask import (
    Blueprint,
    current_app,
    request,
    jsonify
)
import json
from utils import AzureBlobReader, AlertsManager
from dotenv import load_dotenv
load_dotenv()


uiflow_blueprint = Blueprint("uiflow", __name__)


@uiflow_blueprint.route('/getfilterparams', methods=['POST'])
def get_filter_params():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    try:
        global_filters.update({k: v for k, v in data.items() if v})
        current_app.config['global_filters'] = global_filters
        alerts = AlertsManager().get_alerts(global_filters, global_user)
        return {"filters": global_filters, "alerts": alerts}
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500

@uiflow_blueprint.route('/resetfilterparams')
def reset_filter_params():
    try:
        global_filters = current_app.config['global_filters'] or {}
        global_filters.clear()
        current_app.config['global_filters'] = global_filters
        return jsonify(status="success", message="Global Filter parameters cleared!"), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# *****************************************************
#    Reckitt Tab Overview |||| Customer Tab Overview
# *****************************************************
@uiflow_blueprint.route('/getoverviewdata')
def get_overview():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    filename = "ui_data/customeroverviewdatarepo.csv" if data['customer'] else "ui_data/reckittoverviewdatarepo.csv"

    ohr = AzureBlobReader().read_csvfile(filename)
    filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']

    if global_filters:
        for filter_key in filters:
            if filter_key in global_filters:
                ohr = ohr[ohr[filter_key] == global_filters[filter_key]]
        ohr.replace(" ", "-", inplace=True)
        return json.loads(ohr.to_json(orient='records'))

    return jsonify(status="Error", message="Choose above filters to view data"), 500


# *****************************************************
#                  Reckitt Tab - Supply
# *****************************************************
@uiflow_blueprint.route("/getsupplydata", methods=['POST'])
def getsupply():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    rbsupply = AzureBlobReader().read_csvfile("ui_data/reckittsupply.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbsupply = rbsupply[rbsupply[filter_key] == global_filters[filter_key]]
    rbsupply.replace(" ", "-", inplace=True)
    return json.loads(rbsupply.to_json(orient='records'))


# *****************************************************
#                   Reckitt Tab - Demand
# *****************************************************
@uiflow_blueprint.route("/getdemand", methods=['POST'])
def getdemand():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}
    
    rbdemand = AzureBlobReader().read_csvfile("ui_data/reckittdemand.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbdemand = rbdemand[rbdemand[filter_key] == global_filters[filter_key]]
    rbdemand.replace(" ", "-", inplace=True)
    return json.loads(rbdemand.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected SOH at EOW
# *****************************************************
@uiflow_blueprint.route("/getsohateow", methods=['POST'])
def getsohateow():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    rbexpsoheow = AzureBlobReader().read_csvfile("ui_data/reckittexpecsohateow.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbexpsoheow = rbexpsoheow[rbexpsoheow[filter_key] == global_filters[filter_key]]
    rbexpsoheow.replace(" ", "-", inplace=True)
    return json.loads(rbexpsoheow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - WOC at EOW
# *****************************************************
@uiflow_blueprint.route("/getwocateow", methods=['POST'])
def getwocateow():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    rbwoceow = AzureBlobReader().read_csvfile("ui_data/wocateow.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbwoceow = rbwoceow[rbwoceow[filter_key] == global_filters[filter_key]]
    rbwoceow.replace(" ", "-", inplace=True)
    return json.loads(rbwoceow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Case Shortages
# *****************************************************
@uiflow_blueprint.route("/getcaseshortages", methods=['POST'])
def getcaseshortages():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    rbcaseshort = AzureBlobReader().read_csvfile("ui_data/caseshortages.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbcaseshort = rbcaseshort[rbcaseshort[filter_key] == global_filters[filter_key]]
    rbcaseshort.replace(" ", "-", inplace=True)
    return json.loads(rbcaseshort.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected Service
# *****************************************************
@uiflow_blueprint.route("/getexpectedservice", methods=['POST'])
def getexpectedservice():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    rbexpsl = AzureBlobReader().read_csvfile("ui_data/expectedservice.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbexpsl = rbexpsl[rbexpsl[filter_key] == global_filters[filter_key]]
    rbexpsl.replace(" ", "-", inplace=True)
    return json.loads(rbexpsl.to_json(orient='records'))


# *******************************************************************
# Reckitt Tab - Stock Position |||| Customer Tab - Stock Position
# *******************************************************************
@uiflow_blueprint.route("/getstockposition", methods=['POST'])
def get_stock_position():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    file_path = "ui_data/customerstockposition.csv" if data['customer'] else "ui_data/stockposition.csv"
    stock_pos = AzureBlobReader().read_csvfile(file_path)
    filters = ['Business Unit', 'Location', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']

    for filter_key in filters:
        if filter_key in global_filters:
            stock_pos = stock_pos[stock_pos[filter_key] == global_filters[filter_key]]

    stock_pos.replace(" ", "-", inplace=True)
    return json.loads(stock_pos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Historic ePOS
# *****************************************************
@uiflow_blueprint.route("/getcustepos", methods=['POST'])
def getcustepos():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    custhepos = AzureBlobReader().read_csvfile("ui_data/customerhistoricepos.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            custhepos = custhepos[custhepos[filter_key] == global_filters[filter_key]]
    custhepos.replace(" ", "-", inplace=True)
    return json.loads(custhepos.to_json(orient='records'))

# *****************************************************
#          Customer Tab - Sell Out
# *****************************************************
@uiflow_blueprint.route("/getcustsellout", methods=['POST'])
def getcustsellout():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    custsellout = AzureBlobReader().read_csvfile("ui_data/customersellout.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            custsellout = custsellout[custsellout[filter_key] == global_filters[filter_key]]
    custsellout.replace(" ", "-", inplace=True)
    return json.loads(custsellout.to_json(orient='records'))

# *****************************************************
#          Customer Tab - Sell In
# *****************************************************
@uiflow_blueprint.route("/getcustsellin", methods=['POST'])
def getcustsellin():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    custsellin = AzureBlobReader().read_csvfile("ui_data/customersellin.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            custsellin = custsellin[custsellin[filter_key] == global_filters[filter_key]]
    custsellin.replace(" ", "-", inplace=True)
    return json.loads(custsellin.to_json(orient='records'))


# *****************************************************
#          Customer Tab - OLA
# *****************************************************
@uiflow_blueprint.route("/getcustola", methods=['POST'])
def getcustola():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    custola = AzureBlobReader().read_csvfile("ui_data/customerola.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            custola = custola[custola[filter_key] == global_filters[filter_key]]
    custola.replace(" ", "-", inplace=True)
    return json.loads(custola.to_json(orient='records'))


# ****************************************************************************
#      Recent / Upcoming Campaigns by SKU code ||| RECKITT Tab & CUSTOMER Tab
# ****************************************************************************
@uiflow_blueprint.route("/getcampaigns", methods=['POST'])
def get_campaigns():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    campaigns = AzureBlobReader().read_csvfile("ui_data/reckittcampaignsbysku.csv")
    campaignsbysku = campaigns[campaigns['RB SKU'] == data['rbsku']]
    filters = ['Business Unit', 'Location', 'Customer', 'Brand']

    for filter_key in filters:
        if filter_key in global_filters:
            campaignsbysku = campaignsbysku[campaignsbysku[filter_key] == global_filters[filter_key]]

    campaignsbysku.replace(" ", "-", inplace=True)
    return json.loads(campaignsbysku.to_json(orient='records'))

# *******************************
#       Sell In Graph API
# *******************************
@uiflow_blueprint.route("/getsellingraph", methods=['POST'])
def get_selling_graph():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    filters = ['Business Unit', 'Location', 'Brand', 'Customer', 'RB SKU']
    file_path = "ui_data/customersellin.csv" if data['customer'] else "ui_data/reckittsellin.csv"
    sellin = AzureBlobReader().read_csvfile(file_path)
    for filter_key in filters:
        sellin = sellin[sellin[filter_key] == data[filter_key]]
    return json.loads(sellin.to_json(orient='records'))

# *******************************
#       Sell Out Graph API #TODO: WHere is the raw data coming from?
# *******************************
@uiflow_blueprint.route("/getselloutgraph", methods=['POST'])
def get_sellout_graph():
    global_user = current_app.config['global_user'] or {}
    global_filters = current_app.config['global_filters'] or {}

    data = request.json or {}
    sellout_file = "ui_data/customersellout.csv" if data['customer'] else "ui_data/reckittsellout.csv"
    sellout = AzureBlobReader().read_csvfile(sellout_file)
    for filter_key in ['Business Unit','Location','Brand', 'Customer', 'RB SKU']:
        sellout = sellout[sellout[filter_key] == data[filter_key]]
    return json.loads(sellout.to_json(orient='records'))
