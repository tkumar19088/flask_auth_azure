from flask import (
    Blueprint,
    current_app,
    request,
    jsonify
)
import json
import numpy as np
import pandas as pd
from utils import AzureBlobReader, AlertsManager, replace_missing_values
from dotenv import load_dotenv
load_dotenv()


uiflow_blueprint = Blueprint("uiflow", __name__)


@uiflow_blueprint.route('/getfilterparams', methods=['POST'])
def get_filter_params():
    global_user = current_app.config.get('global_user', {})
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    try:
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
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    filename = "ui_data/customeroverviewdatarepo.csv" if data['customer'] else "ui_data/reckittoverviewdatarepo.csv"

    ohr = AzureBlobReader().read_csvfile(filename)
    filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']

    if global_filters:
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                ohr = ohr[ohr[filter_key].str.lower() == global_filters[filter_key]]

        # replace missing values
        ohr = replace_missing_values(ohr)

        # sort table by WOC
        if data['customer']:
            ohrsorted = ohr.sort_values(by='Cust WOC', ascending=True)
        else:
            ohrsorted = ohr.sort_values(by='Reckitt WOC', ascending=True)

        # replacing RAG values with 0/1/2
        columns_to_replace = ['RAG CW', 'RAG CW+1', 'RAG CW+2', 'RAG CW+3']
        replace_dict = {'R': 0, 'A': 1, 'G': 2}
        ohrsorted[columns_to_replace] = ohrsorted[columns_to_replace].replace(replace_dict)

        # limit float values to two decimals
        ohrsorted = ohrsorted.applymap(lambda x: round(x, 2) if isinstance(x, float) and x not in [0, 0.00] else x)
        ohrsorted = ohrsorted.replace(np.nan, '-', regex=True, inplace=False)
        return json.loads(ohrsorted.to_json(orient='records'))

    return jsonify(status="Error", message="Choose above filters to view data"), 500


# *****************************************************
#                  Reckitt Tab - Supply
# *****************************************************
@uiflow_blueprint.route("/getsupply", methods=['POST'])
def getsupply():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbsupply = AzureBlobReader().read_csvfile("ui_data/reckittsupply.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            rbsupply = rbsupply[rbsupply[filter_key].str.lower() == global_filters[filter_key]]
    rbsupply = rbsupply.sort_values(by='initialreckittsoh', ascending=True)
    rbsupply = replace_missing_values(rbsupply)
    rbsupply = rbsupply.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(rbsupply.to_json(orient='records'))


# *****************************************************
#                   Reckitt Tab - Demand
# *****************************************************
@uiflow_blueprint.route("/getdemand", methods=['POST'])
def getdemand():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbdemand = AzureBlobReader().read_csvfile("ui_data/reckittdemand.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            rbdemand = rbdemand[rbdemand[filter_key].str.lower() == global_filters[filter_key]]
    rbdemand = rbdemand.sort_values(by='initialreckittsoh', ascending=True)
    rbdemand = replace_missing_values(rbdemand)
    rbdemand = rbdemand.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(rbdemand.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected SOH at EOW
# *****************************************************
@uiflow_blueprint.route("/getsohateow", methods=['POST'])
def getsohateow():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbexpsoheow = AzureBlobReader().read_csvfile("ui_data/reckittexpecsohateow.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            rbexpsoheow = rbexpsoheow[rbexpsoheow[filter_key].str.lower() == global_filters[filter_key]]
    rbexpsoheow = replace_missing_values(rbexpsoheow)
    rbexpsoheow = rbexpsoheow.sort_values(by='initialreckittsoh', ascending=True)
    rbexpsoheow = rbexpsoheow.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(rbexpsoheow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - WOC at EOW
# *****************************************************
@uiflow_blueprint.route("/getwocateow", methods=['POST'])
def getwocateow():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbwoceow = AzureBlobReader().read_csvfile("ui_data/wocateow.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            rbwoceow = rbwoceow[rbwoceow[filter_key].str.lower() == global_filters[filter_key]]
    rbwoceow = replace_missing_values(rbwoceow)
    rbwoceow = rbwoceow.sort_values(by='initialreckittsoh', ascending=True)
    rbwoceow = rbwoceow.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(rbwoceow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Case Shortages
# *****************************************************
@uiflow_blueprint.route("/getcaseshortages", methods=['POST'])
def getcaseshortages():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbcaseshort = AzureBlobReader().read_csvfile("ui_data/caseshortages.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            rbcaseshort = rbcaseshort[rbcaseshort[filter_key].str.lower() == global_filters[filter_key]]
    rbcaseshort = replace_missing_values(rbcaseshort)
    rbcaseshort = rbcaseshort.sort_values(by='initialreckittsoh', ascending=True)
    rbcaseshort = rbcaseshort.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(rbcaseshort.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected Service
# *****************************************************
@uiflow_blueprint.route("/getexpectedservice", methods=['POST'])
def getexpectedservice():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbexpsl = AzureBlobReader().read_csvfile("ui_data/expectedservice.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            rbexpsl = rbexpsl[rbexpsl[filter_key].str.lower() == global_filters[filter_key]]
    rbexpsl = replace_missing_values(rbexpsl)
    rbexpsl = rbexpsl.sort_values(by='initialreckittsoh', ascending=True)
    rbexpsl = rbexpsl.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(rbexpsl.to_json(orient='records'))


# *******************************************************************
# Reckitt Tab - Stock Position |||| Customer Tab - Stock Position
# *******************************************************************
@uiflow_blueprint.route("/getstockposition", methods=['POST'])
def get_stock_position():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    file_path = "ui_data/customerstockposition.csv" if data['customer'] else "ui_data/stockposition.csv"
    stock_pos = AzureBlobReader().read_csvfile(file_path)
    filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']

    for filter_key in filters:
        if filter_key in global_filters:
            stock_pos = stock_pos[stock_pos[filter_key].str.lower() == global_filters[filter_key]]
    
    if data['customer']:
        stock_pos = stock_pos.sort_values(by='InitialSOHWeek', ascending=True)
    else:
        stock_pos = stock_pos.sort_values(by='initialreckittsoh', ascending=True)

    stock_pos = replace_missing_values(stock_pos)
    stock_pos = stock_pos.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(stock_pos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Historic ePOS
# *****************************************************
@uiflow_blueprint.route("/getcustepos", methods=['POST'])
def getcustepos():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custhepos = AzureBlobReader().read_csvfile("ui_data/customerhistoricepos.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            custhepos = custhepos[custhepos[filter_key].str.lower() == global_filters[filter_key]]
    custhepos = replace_missing_values(custhepos)
    custhepos = custhepos.sort_values(by='InitialSOHWeek', ascending=True)
    custhepos = custhepos.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(custhepos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell Out
# *****************************************************
@uiflow_blueprint.route("/getcustsellout", methods=['POST'])
def getcustsellout():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custsellout = AzureBlobReader().read_csvfile("ui_data/customersellout.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            custsellout = custsellout[custsellout[filter_key].str.lower() == global_filters[filter_key]]
    custsellout = replace_missing_values(custsellout)
    custsellout = custsellout.sort_values(by='InitialSOHWeek', ascending=True)
    custsellout = custsellout.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(custsellout.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell In
# *****************************************************
@uiflow_blueprint.route("/getcustsellin", methods=['POST'])
def getcustsellin():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custsellin = AzureBlobReader().read_csvfile("ui_data/customersellin.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            custsellin = custsellin[custsellin[filter_key].str.lower() == global_filters[filter_key]]
    custsellin = replace_missing_values(custsellin)
    custsellin = custsellin.sort_values(by='InitialSOHWeek', ascending=True)
    custsellin = custsellin.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(custsellin.to_json(orient='records'))


# *****************************************************
#          Customer Tab - OLA
# *****************************************************
@uiflow_blueprint.route("/getcustola", methods=['POST'])
def getcustola():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custola = AzureBlobReader().read_csvfile("ui_data/customerola.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_filters and global_filters[filter_key] != None:
            custola = custola[custola[filter_key].str.lower() == global_filters[filter_key]]
    custola = replace_missing_values(custola)
    custola = custola.sort_values(by='InitalSOH Week', ascending=True)
    custola = custola.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(custola.to_json(orient='records'))


# ****************************************************************************
#      Recent / Upcoming Campaigns by SKU code ||| RECKITT Tab & CUSTOMER Tab
# ****************************************************************************
@uiflow_blueprint.route("/getcampaigns", methods=['POST'])
def get_campaigns():
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    campaigns = AzureBlobReader().read_csvfile("ui_data/reckittcampaignsbysku.csv")
    campaignsbysku = campaigns[campaigns['RB SKU'] == data['rbsku']]
    filters = ['Business Unit', 'Location', 'Customer', 'Brand']

    for filter_key in filters:
        if filter_key in global_filters:
            campaignsbysku = campaignsbysku[campaignsbysku[filter_key].str.lower() == global_filters[filter_key]]

    campaignsbysku = replace_missing_values(campaignsbysku)
    campaignsbysku = campaignsbysku.replace(np.nan, '-', regex=True, inplace=False)
    return json.loads(campaignsbysku.to_json(orient='records'))

# *******************************
#       Sell In Graph API # TODO: WHere is the raw data coming from?
# *******************************
@uiflow_blueprint.route("/getsellingraph", methods=['POST'])
def get_selling_graph():
    global_user = current_app.config.get('global_user', {})
    global_filters = current_app.config.get('global_filters', {})

    data = request.json or {}
    file_path = "ui_data/forecastbuildersellin.csv"
    sellin = AzureBlobReader().read_csvfile(file_path)
    for filter_key in ['Business Unit','Location','Brand', 'Customer', 'RB SKU']:
        if filter_key in global_user:
            sellin = sellin[sellin[filter_key].isin(global_user[filter_key])]
    sellin = replace_missing_values(sellin)
    return json.loads(sellin.to_json(orient='records'))

# *******************************
#       Sell Out Graph API # TODO: WHere is the raw data coming from?
# *******************************
@uiflow_blueprint.route("/getselloutgraph", methods=['POST'])
def get_sellout_graph():
    global_user = current_app.config.get('global_user', {})
    global_filters = current_app.config.get('global_filters', {})

    data = request.json or {}
    file_path = "ui_data/reckittsellout.csv"
    sellout = AzureBlobReader().read_csvfile(file_path)
    for filter_key in ['Business Unit','Location','Brand', 'Customer', 'RB SKU']:
        if filter_key in global_user:
            sellout = sellout[sellout[filter_key].isin(global_user[filter_key])]
    sellout = replace_missing_values(sellout)
    return json.loads(sellout.to_json(orient='records'))
