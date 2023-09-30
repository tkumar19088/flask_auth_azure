from flask import (
    Blueprint,
    current_app,
    request,
    jsonify
)
import json
import numpy as np
import pandas as pd
from utils import AzureBlobReader, AlertsManager, replace_missing_values, get_data
from dotenv import load_dotenv
load_dotenv()

import datetime as dt

uiflow_blueprint = Blueprint("uiflow", __name__)


@uiflow_blueprint.route('/getfilterparams', methods=['POST'])
def get_filter_params():
    global_user = current_app.config.get('global_user', {})
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    try:
        global_filters.clear()
        global_filters.update({k: v for k, v in data.items() if v})
        current_app.config['global_filters'] = global_filters
        alerts = AlertsManager(global_filters, global_user).get_alerts() or []
        return {"filters": global_filters, "alerts": alerts}
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500

@uiflow_blueprint.route('/resetfilterparams')
def reset_filter_params():
    try:
        global_filters = current_app.config['global_filters']
        global_filters.clear()
        current_app.config['global_filters'] = global_filters
        return jsonify(status="success", message="Global Filter parameters cleared!"), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# *****************************************************
#    Reckitt Tab Overview |||| Customer Tab Overview
# *****************************************************
@uiflow_blueprint.route('/getoverview', methods=['POST'])
def get_overview():
    try:
        # get request from UI
        data = request.json or {}
        config = current_app.config

        sort_column = 'Cust WOC' if data['customer'] else 'Reckitt WOC'
        sort_order = True

        filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']
        filename = "ui_data/customeroverviewdatarepo.csv" if data['customer'] else "ui_data/reckittoverviewdatarepo.csv"

        ohrsorted = get_data(data, config, filename, filters, sort_column, sort_order)

        # replacing RAG values with 0/1/2
        columns_to_replace = ['RAG CW', 'RAG CW+1', 'RAG CW+2', 'RAG CW+3']
        replace_dict = {'R': 0, 'A': 1, 'G': 2}
        ohrsorted[columns_to_replace] = ohrsorted[columns_to_replace].replace(replace_dict)

        # limit float values to two decimals
        ohrsorted = ohrsorted.applymap(lambda x: round(x, 2) if isinstance(x, float) and x not in [0, 0.00] else x)
        return json.loads(ohrsorted.to_json(orient='records'))
    except Exception as e:
        return jsonify(status="Error", message=f"{str(e)}"), 500


# *****************************************************
#                  Reckitt Tab - Supply
# *****************************************************
@uiflow_blueprint.route("/getsupply", methods=['POST'])
def getsupply():
    # get request from UI
    data = request.json or {}
    config = current_app.config

    sort_column = 'initialreckittsoh'
    sort_order = True

    filters = ['Business Unit', 'Location','Brand']
    filename = "ui_data/reckittsupply.csv"

    rbsupply = get_data(data, config, filename, filters, sort_column, sort_order)

    return json.loads(rbsupply.to_json(orient='records'))


# *****************************************************
#                   Reckitt Tab - Demand
# *****************************************************
@uiflow_blueprint.route("/getdemand", methods=['POST'])
def getdemand():
    data = request.json or {}
    config = current_app.config

    sort_column = 'initialreckittsoh'
    sort_order = True

    filters = ['Business Unit', 'Location','Brand']
    filename = "ui_data/reckittdemand.csv"

    rbdemand = get_data(data, config, filename, filters, sort_column, sort_order)
    return json.loads(rbdemand.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected SOH at EOW
# *****************************************************
@uiflow_blueprint.route("/getsohateow", methods=['POST'])
def getsohateow():
    data = request.json or {}
    config = current_app.config

    sort_column = 'initialreckittsoh'
    sort_order = True
    filters = ['Business Unit', 'Location','Brand']
    filename = "ui_data/reckittexpecsohateow.csv"

    rbexpsoheow = get_data(data, config, filename, filters, sort_column, sort_order)
    return json.loads(rbexpsoheow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - WOC at EOW
# *****************************************************
@uiflow_blueprint.route("/getwocateow", methods=['POST'])
def getwocateow():
    data = request.json or {}
    config = current_app.config

    sort_column = 'initialreckittsoh'
    sort_order = True
    filters = ['Business Unit', 'Location','Brand']
    filename = "ui_data/wocateow.csv"

    rbwoceow = get_data(data, config, filename, filters, sort_column, sort_order)
    return json.loads(rbwoceow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Case Shortages
# *****************************************************
@uiflow_blueprint.route("/getcaseshortages", methods=['POST'])
def getcaseshortages():
    data = request.json or {}
    config = current_app.config

    sort_column = 'initialreckittsoh'
    sort_order = True
    filters = ['Business Unit', 'Location','Brand']
    filename = "ui_data/caseshortages.csv"

    rbcaseshort = get_data(data, config, filename, filters, sort_column, sort_order)
    return json.loads(rbcaseshort.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected Service
# *****************************************************
@uiflow_blueprint.route("/getexpectedservice", methods=['POST'])
def getexpectedservice():
    data = request.json or {}
    config = current_app.config

    sort_column = 'initialreckittsoh'
    sort_order = True
    filters = ['Business Unit', 'Location','Brand']
    filename = "ui_data/expectedservice.csv"

    rbexpsl = get_data(data, config, filename, filters, sort_column, sort_order)
    return json.loads(rbexpsl.to_json(orient='records'))


# *******************************************************************
# Reckitt Tab - Stock Position |||| Customer Tab - Stock Position
# *******************************************************************
@uiflow_blueprint.route("/getstockposition", methods=['POST'])
def get_stock_position():

    # get request from UI
    data = request.json or {}
    config = current_app.config

    sort_column = 'InitialSOHWeek' if data['customer'] else 'initialreckittsoh'
    sort_order = True

    filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']
    filename = "ui_data/customerstockposition.csv" if data['customer'] else "ui_data/stockposition.csv"

    stock_pos = get_data(data, config, filename, filters, sort_column, sort_order)

    for col in stock_pos.columns:
        if "CW" in col:
            stock_pos[col] = stock_pos[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)

    return json.loads(stock_pos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Historic ePOS
# *****************************************************
@uiflow_blueprint.route("/getcustepos", methods=['POST'])
def getcustepos():
    data = request.json or {}
    config = current_app.config

    sort_column = 'InitialSOHWeek'
    sort_order = True
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    filename = "ui_data/customerhistoricepos.csv"

    custhepos = get_data(data, config, filename, filters, sort_column, sort_order)

    return json.loads(custhepos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell Out
# *****************************************************
@uiflow_blueprint.route("/getcustsellout", methods=['POST'])
def getcustsellout():
    data = request.json or {}
    config = current_app.config

    sort_column = 'InitialSOHWeek'
    sort_order = True

    filters = ['Business Unit', 'Location', 'Customer','Brand']
    filename = "ui_data/customersellout.csv"

    custsellout = get_data(data, config, filename, filters, sort_column, sort_order)

    return json.loads(custsellout.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell In
# *****************************************************
@uiflow_blueprint.route("/getcustsellin", methods=['POST'])
def getcustsellin():
    data = request.json or {}
    config = current_app.config

    sort_column = 'InitialSOHWeek'
    sort_order = True

    filters = ['Business Unit', 'Location', 'Customer','Brand']
    filename = "ui_data/customersellin.csv"

    custsellin = get_data(data, config, filename, filters, sort_column, sort_order)

    return json.loads(custsellin.to_json(orient='records'))


# *****************************************************
#          Customer Tab - OLA
# *****************************************************
@uiflow_blueprint.route("/getcustola", methods=['POST'])
def getcustola():
    data = request.json or {}
    config = current_app.config

    sort_column = 'InitialSOHWeek'
    sort_order = True

    filters = ['Business Unit', 'Location', 'Customer','Brand']
    filename = "ui_data/customerola.csv"

    custola = get_data(data, config, filename, filters, sort_column, sort_order)

    return json.loads(custola.to_json(orient='records'))


# ****************************************************************************
#      Recent / Upcoming Campaigns by SKU code ||| RECKITT Tab & CUSTOMER Tab
# ****************************************************************************
@uiflow_blueprint.route("/getcampaigns", methods=['POST'])
def get_campaigns():
    data = request.json or {}
    config = current_app.config

    filters = ['Business Unit', 'Location', 'Customer','Brand']
    filename = "ui_data/reckittcampaignsbysku.csv"

    campaignsbysku = get_data(data, config, filename, filters)

    return json.loads(campaignsbysku.to_json(orient='records'))

# *******************************
#       Sell In Graph API
# *******************************
@uiflow_blueprint.route("/getsellingraph", methods=['POST'])
def get_selling_graph():
    data = request.json or {}
    filename = "ui_data/customersellin.csv"
    sellin = AzureBlobReader().read_csvfile(filename)
    for filter_key in ['Business Unit','Location','Brand', 'Customer']:
        if filter_key in data and filter_key != "":
            sellin = sellin[sellin[filter_key].lower()==data[filter_key].lower()]
    sellin = replace_missing_values(sellin)
    return json.loads(sellin.to_json(orient='records'))

# *******************************
#       Sell Out Graph API
# *******************************
@uiflow_blueprint.route("/getselloutgraph", methods=['POST'])
def get_sellout_graph():
    data = request.json or {}
    filename = "ui_data/customersellout.csv"
    sellout = AzureBlobReader().read_csvfile(filename)
    for filter_key in ['Business Unit','Location','Brand', 'Customer']:
        if filter_key in data and filter_key != "":
            sellout = sellout[sellout[filter_key].lower()==data[filter_key].lower()]
    sellout = replace_missing_values(sellout)
    return json.loads(sellout.to_json(orient='records'))

# *******************************
#       Export Data API
# *******************************
@uiflow_blueprint.route("/exportdata", methods=['POST'])
def exportdata():
    df = pd.DataFrame()
    data = request.json or {}
    config = current_app.config
    customer = data['customer']
    tabname = data['tabname']
    filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if customer else ['Business Unit', 'Location', 'Brand']
    if not data:
        return jsonify(status="error", message="Missing required parameters"), 500
    else:
        if tabname == "overview":
            filename = "ui_data/customeroverviewdatarepo.csv" if customer else "ui_data/reckittoverviewdatarepo.csv"
        elif tabname == "supply":
            filename = "ui_data/reckittsupply.csv"
        elif tabname == "demand":
            filename = "ui_data/reckittdemand.csv"
        elif tabname == "sohateow":
            filename = "ui_data/reckittexpecsohateow.csv"
        elif tabname == "wocateow":
            filename = "ui_data/wocateow.csv"
        elif tabname == "caseshortages":
            filename = "ui_data/caseshortages.csv"
        elif tabname == "expectedservice":
            filename = "ui_data/expectedservice.csv"
        elif tabname == "stockposition":
            filename = "ui_data/customerstockposition.csv" if customer else "ui_data/stockposition.csv"
        elif tabname == "historicepos":
            filename = "ui_data/customerhistoricepos.csv"
        elif tabname == "sellout":
            filename = "ui_data/customersellout.csv"
        elif tabname == "sellin":
            filename = "ui_data/customersellin.csv"
        elif tabname == "ola":
            filename = "ui_data/customerola.csv"
        else:
            return jsonify(status="error", message="Invalid tabname"), 500

    df = get_data(data, config, filename, filters)
    return json.loads(df.to_json(orient='records'))
