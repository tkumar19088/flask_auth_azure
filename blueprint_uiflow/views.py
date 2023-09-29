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
    # get request from UI
    data = request.json or {}

    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    filename = "ui_data/customeroverviewdatarepo.csv" if data['customer'] else "ui_data/reckittoverviewdatarepo.csv"

    ohr = AzureBlobReader().read_csvfile(filename)

    try:
        if data['search']:
            if isinstance(data['search'], int):
                ohr = ohr[ohr['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                ohr = ohr[ohr['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']
        if global_filters:
            for filter_key in filters:
                if filter_key in global_filters and global_filters[filter_key] != None:
                    ohr = ohr[ohr[filter_key].str.lower() == global_filters[filter_key]]
    try:
        # sort table by WOC
        if data['customer']:
            ohrsorted = ohr.sort_values(by='Cust WOC', ascending=True)
        else:
            ohrsorted = ohr.sort_values(by='Reckitt WOC', ascending=True)

        # replace missing values
        ohrsorted = replace_missing_values(ohrsorted)

        # replacing RAG values with 0/1/2
        columns_to_replace = ['RAG CW', 'RAG CW+1', 'RAG CW+2', 'RAG CW+3']
        replace_dict = {'R': 0, 'A': 1, 'G': 2}
        ohrsorted[columns_to_replace] = ohrsorted[columns_to_replace].replace(replace_dict)

        # limit float values to two decimals
        ohrsorted = ohrsorted.applymap(lambda x: round(x, 2) if isinstance(x, float) and x not in [0, 0.00] else x)
        return json.loads(ohrsorted.to_json(orient='records'))
    except:
        return jsonify(status="Error", message="Choose above filters to view data"), 500


# *****************************************************
#                  Reckitt Tab - Supply
# *****************************************************
@uiflow_blueprint.route("/getsupply", methods=['POST'])
def getsupply():
    # get request from UI
    data = request.json or {}

    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbsupply = AzureBlobReader().read_csvfile("ui_data/reckittsupply.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                rbsupply = rbsupply[rbsupply['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                rbsupply = rbsupply[rbsupply['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                rbsupply = rbsupply[rbsupply[filter_key].str.lower() == global_filters[filter_key]]

    rbsupply = rbsupply.sort_values(by='initialreckittsoh', ascending=True)
    rbsupply = replace_missing_values(rbsupply)
    return json.loads(rbsupply.to_json(orient='records'))


# *****************************************************
#                   Reckitt Tab - Demand
# *****************************************************
@uiflow_blueprint.route("/getdemand", methods=['POST'])
def getdemand():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbdemand = AzureBlobReader().read_csvfile("ui_data/reckittdemand.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                rbdemand = rbdemand[rbdemand['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                rbdemand = rbdemand[rbdemand['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                rbdemand = rbdemand[rbdemand[filter_key].str.lower() == global_filters[filter_key]]

    rbdemand = rbdemand.sort_values(by='initialreckittsoh', ascending=True)
    rbdemand = replace_missing_values(rbdemand)
    return json.loads(rbdemand.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected SOH at EOW
# *****************************************************
@uiflow_blueprint.route("/getsohateow", methods=['POST'])
def getsohateow():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbexpsoheow = AzureBlobReader().read_csvfile("ui_data/reckittexpecsohateow.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                rbexpsoheow = rbexpsoheow[rbexpsoheow['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                rbexpsoheow = rbexpsoheow[rbexpsoheow['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                rbexpsoheow = rbexpsoheow[rbexpsoheow[filter_key].str.lower() == global_filters[filter_key]]

    rbexpsoheow = rbexpsoheow.sort_values(by='initialreckittsoh', ascending=True)
    rbexpsoheow = replace_missing_values(rbexpsoheow)
    return json.loads(rbexpsoheow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - WOC at EOW
# *****************************************************
@uiflow_blueprint.route("/getwocateow", methods=['POST'])
def getwocateow():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbwoceow = AzureBlobReader().read_csvfile("ui_data/wocateow.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                rbwoceow = rbwoceow[rbwoceow['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                rbwoceow = rbwoceow[rbwoceow['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                rbwoceow = rbwoceow[rbwoceow[filter_key].str.lower() == global_filters[filter_key]]

    rbwoceow = rbwoceow.sort_values(by='initialreckittsoh', ascending=True)
    rbwoceow = replace_missing_values(rbwoceow)
    return json.loads(rbwoceow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Case Shortages
# *****************************************************
@uiflow_blueprint.route("/getcaseshortages", methods=['POST'])
def getcaseshortages():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbcaseshort = AzureBlobReader().read_csvfile("ui_data/caseshortages.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                rbcaseshort = rbcaseshort[rbcaseshort['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                rbcaseshort = rbcaseshort[rbcaseshort['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                rbcaseshort = rbcaseshort[rbcaseshort[filter_key].str.lower() == global_filters[filter_key]]

    rbcaseshort = rbcaseshort.sort_values(by='initialreckittsoh', ascending=True)
    rbcaseshort = replace_missing_values(rbcaseshort)
    return json.loads(rbcaseshort.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected Service
# *****************************************************
@uiflow_blueprint.route("/getexpectedservice", methods=['POST'])
def getexpectedservice():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    rbexpsl = AzureBlobReader().read_csvfile("ui_data/expectedservice.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                rbexpsl = rbexpsl[rbexpsl['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                rbexpsl = rbexpsl[rbexpsl['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                rbexpsl = rbexpsl[rbexpsl[filter_key].str.lower() == global_filters[filter_key]]

    rbexpsl = rbexpsl.sort_values(by='initialreckittsoh', ascending=True)
    rbexpsl = replace_missing_values(rbexpsl)
    return json.loads(rbexpsl.to_json(orient='records'))


# *******************************************************************
# Reckitt Tab - Stock Position |||| Customer Tab - Stock Position
# *******************************************************************
@uiflow_blueprint.route("/getstockposition", methods=['POST'])
def get_stock_position():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    file_path = "ui_data/customerstockposition.csv" if data['customer'] else "ui_data/stockposition.csv"
    stock_pos = AzureBlobReader().read_csvfile(file_path)

    try:
        if data['search']:
            if isinstance(data['search'], int):
                stock_pos = stock_pos[stock_pos['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                stock_pos = stock_pos[stock_pos['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location', 'Customer', 'Brand'] if data['customer'] else ['Business Unit', 'Location', 'Brand']
        for filter_key in filters:
            if filter_key in global_filters:
                stock_pos = stock_pos[stock_pos[filter_key].str.lower() == global_filters[filter_key]]

        if data['customer']:
            stock_pos = stock_pos.sort_values(by='InitialSOHWeek', ascending=True)
        else:
            stock_pos = stock_pos.sort_values(by='initialreckittsoh', ascending=True)

    stock_pos = replace_missing_values(stock_pos)
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
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custhepos = AzureBlobReader().read_csvfile("ui_data/customerhistoricepos.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                custhepos = custhepos[custhepos['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                custhepos = custhepos[custhepos['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location', 'Customer','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                custhepos = custhepos[custhepos[filter_key].str.lower() == global_filters[filter_key]]

    custhepos = custhepos.sort_values(by='InitialSOHWeek', ascending=True)
    custhepos = replace_missing_values(custhepos)
    return json.loads(custhepos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell Out
# *****************************************************
@uiflow_blueprint.route("/getcustsellout", methods=['POST'])
def getcustsellout():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custsellout = AzureBlobReader().read_csvfile("ui_data/customersellout.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                custsellout = custsellout[custsellout['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                custsellout = custsellout[custsellout['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location', 'Customer','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                custsellout = custsellout[custsellout[filter_key].str.lower() == global_filters[filter_key]]

    custsellout = custsellout.sort_values(by='InitialSOHWeek', ascending=True)
    custsellout = replace_missing_values(custsellout)
    return json.loads(custsellout.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell In
# *****************************************************
@uiflow_blueprint.route("/getcustsellin", methods=['POST'])
def getcustsellin():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custsellin = AzureBlobReader().read_csvfile("ui_data/customersellin.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                custsellin = custsellin[custsellin['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                custsellin = custsellin[custsellin['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location', 'Customer','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                custsellin = custsellin[custsellin[filter_key].str.lower() == global_filters[filter_key]]

    custsellin = custsellin.sort_values(by='InitialSOHWeek', ascending=True)
    custsellin = replace_missing_values(custsellin)
    return json.loads(custsellin.to_json(orient='records'))


# *****************************************************
#          Customer Tab - OLA
# *****************************************************
@uiflow_blueprint.route("/getcustola", methods=['POST'])
def getcustola():
    data = request.json or {}
    global_filters = current_app.config.get('global_filters', {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    custola = AzureBlobReader().read_csvfile("ui_data/customerola.csv")
    try:
        if data['search']:
            if isinstance(data['search'], int):
                custola = custola[custola['RB SKU'] == data['search']]
            elif isinstance(data['search'], str):
                custola = custola[custola['Description'].str.lower().contains(data['search'].lower())]
    except:
        filters = ['Business Unit', 'Location', 'Customer','Brand']
        for filter_key in filters:
            if filter_key in global_filters and global_filters[filter_key] != None:
                custola = custola[custola[filter_key].str.lower() == global_filters[filter_key]]

    custola = custola.sort_values(by='InitalSOH Week', ascending=True)
    custola = replace_missing_values(custola)
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
    campaigns['enddate'] = pd.to_datetime(campaigns['enddate'])
    today = dt.date.today().strftime('%Y-%m-%d')
    filtcamp = campaigns.loc[campaigns['enddate'] >= today]
    campaignsbysku = filtcamp[filtcamp['RB SKU'] == data['rbsku']]
    filters = ['Business Unit', 'Location', 'Customer', 'Brand']

    for filter_key in filters:
        if filter_key in global_filters:
            campaignsbysku = campaignsbysku[campaignsbysku[filter_key].str.lower() == global_filters[filter_key]]

    campaignsbysku = replace_missing_values(campaignsbysku)
    return json.loads(campaignsbysku.to_json(orient='records'))

# *******************************
#       Sell In Graph API
# *******************************
@uiflow_blueprint.route("/getsellingraph", methods=['POST'])
def get_selling_graph():
    data = request.json or {}
    file_path = "ui_data/customersellin.csv"
    sellin = AzureBlobReader().read_csvfile(file_path)
    for filter_key in ['Business Unit','Location','Brand', 'Customer']:
        if filter_key in data and filter_key != "":
            sellin = sellin[sellin[filter_key]==data[filter_key]]
    sellin = replace_missing_values(sellin)
    return json.loads(sellin.to_json(orient='records'))

# *******************************
#       Sell Out Graph API
# *******************************
@uiflow_blueprint.route("/getselloutgraph", methods=['POST'])
def get_sellout_graph():
    data = request.json or {}
    file_path = "ui_data/customersellout.csv"
    sellout = AzureBlobReader().read_csvfile(file_path)
    for filter_key in ['Business Unit','Location','Brand', 'Customer']:
        if filter_key in data and filter_key != "":
            sellout = sellout[sellout[filter_key]==data[filter_key]]
    sellout = replace_missing_values(sellout)
    return json.loads(sellout.to_json(orient='records'))
