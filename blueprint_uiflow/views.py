from flask import Blueprint, current_app, request, jsonify
import json
import pandas as pd
import numpy as np
from utils import AzureBlobReader, AlertsManager, replace_missing_values, get_data
from dotenv import load_dotenv
import datetime as dt
import random

load_dotenv()


uiflow_blueprint = Blueprint("uiflow", __name__)


@uiflow_blueprint.route("/getfilterparams", methods=["POST"])
def get_filter_params():
    """
    Updates the global filters based on the request data and returns the updated filters and alerts.

    Returns:
        dict: A dictionary containing the updated filters and alerts.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    global_user = current_app.config.get("global_user", {})
    global_filters = current_app.config.get("global_filters", {})
    global_filters = dict((k, v.lower()) for k, v in global_filters.items())

    data = request.json or {}
    try:
        global_filters.clear()
        global_filters.update({k: v for k, v in data.items() if v})
        current_app.config["global_filters"] = global_filters
        alerts = AlertsManager(global_filters, global_user).get_alerts() or []
        return {"filters": global_filters, "alerts": alerts}
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


@uiflow_blueprint.route("/resetfilterparams")
def reset_filter_params():
    """
    Resets the global filter parameters to an empty dictionary.

    Returns:
        flask.Response: A JSON response indicating the status of the operation.

    Raises:
        Exception: If any error occurs.
    """
    try:
        global_filters = current_app.config["global_filters"]
        global_filters.clear()
        current_app.config["global_filters"] = global_filters
        return (
            jsonify(status="success", message="Global Filter parameters cleared!"),
            200,
        )
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# *****************************************************
#    Reckitt Tab Overview |||| Customer Tab Overview
# *****************************************************
@uiflow_blueprint.route("/getoverview", methods=["POST"])
def get_overview():
    """
    Handles the 'getoverview' POST request and returns the overview data based on the request data.

    Returns:
        list: A list of dictionaries containing the overview data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        # get request from UI
        data = request.json or {}
        config = current_app.config

        sort_column = (
            "Cust WOC" if data["customer"] else ["Reckitt WOC", "Exp NR CW", "RB SKU"]
        )
        sort_order = True if data["customer"] else [True, False, True]

        filters = (
            ["Business Unit", "Location", "Customer", "Brand"]
            if data["customer"]
            else ["Business Unit", "Location", "Brand"]
        )
        filename = (
            "ui_data/customeroverviewdatarepo.csv"
            if data["customer"]
            else "ui_data/reckittoverviewdatarepo.csv"
        )

        ohrsorted = get_data(data, config, filename, filters, sort_column, sort_order)

        if not data["customer"]:
            ohrsorted["Comment RootCause"] = ohrsorted["Comment RootCause"].str.replace(
                "; None", ""
            )

        # replacing RAG values with 0/1/2
        columns_to_replace = ["RAG CW", "RAG CW+1", "RAG CW+2", "RAG CW+3"]
        replace_dict = {"R": 0, "A": 1, "G": 2}
        ohrsorted[columns_to_replace] = ohrsorted[columns_to_replace].replace(
            replace_dict
        )

        # limit float values to two decimals
        ohrsorted = ohrsorted.applymap(
            lambda x: round(x, 2) if isinstance(x, float) and x not in [0, 0.00] else x
        )
        return json.loads(ohrsorted.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#                  Reckitt Tab - Supply
# *****************************************************
@uiflow_blueprint.route("/getsupply", methods=["POST"])
def getsupply():
    """
    Handles the 'getsupply' POST request and returns the supply data based on the request data.

    Returns:
        list: A list of dictionaries containing the supply data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        # get request from UI
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Brand"]
        filename = "ui_data/reckittsupply.csv"

        rbsupply = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(rbsupply.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#                   Reckitt Tab - Demand
# *****************************************************
@uiflow_blueprint.route("/getdemand", methods=["POST"])
def getdemand():
    """
    Handles the 'getdemand' POST request and returns the demand data based on the request data.

    Returns:
        list: A list of dictionaries containing the demand data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Brand"]
        filename = "ui_data/reckittdemand.csv"

        rbdemand = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(rbdemand.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Reckitt Tab - Expected SOH at EOW
# *****************************************************
@uiflow_blueprint.route("/getsohateow", methods=["POST"])
def getsohateow():
    """
    Handles the 'getsohateow' POST request and returns the SOH at EOW data based on the request data.

    Returns:
        list: A list of dictionaries containing the SOH at EOW data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Brand"]
        filename = "ui_data/reckittexpecsohateow.csv"

        rbexpsoheow = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(rbexpsoheow.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Reckitt Tab - WOC at EOW
# *****************************************************
@uiflow_blueprint.route("/getwocateow", methods=["POST"])
def getwocateow():
    """
    Handles the 'getwocateow' POST request and returns the WOC at EOW data based on the request data.

    Returns:
        list: A list of dictionaries containing the WOC at EOW data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Brand"]
        filename = "ui_data/wocateow.csv"

        rbwoceow = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(rbwoceow.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Reckitt Tab - Case Shortages
# *****************************************************
@uiflow_blueprint.route("/getcaseshortages", methods=["POST"])
def getcaseshortages():
    """
    Handles the 'getcaseshortages' POST request and returns the case shortages data based on the request data.

    Returns:
        list: A list of dictionaries containing the case shortages data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Brand"]
        filename = "ui_data/caseshortages.csv"

        rbcaseshort = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(rbcaseshort.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Reckitt Tab - Expected Service
# *****************************************************
@uiflow_blueprint.route("/getexpectedservice", methods=["POST"])
def getexpectedservice():
    """
    Handles the 'getexpectedservice' POST request and returns the expected service level data based on the request data.

    Returns:
        list: A list of dictionaries containing the expected service level data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Brand"]
        filename = "ui_data/expectedservice.csv"

        rbexpsl = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(rbexpsl.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *******************************************************************
# Reckitt Tab - Stock Position |||| Customer Tab - Stock Position
# *******************************************************************
@uiflow_blueprint.route("/getstockposition", methods=["POST"])
def get_stock_position():
    """
    Handles the 'getstockposition' POST request and returns the stock position data based on the request data.

    Returns:
        list: A list of dictionaries containing the stock position data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        # get request from UI
        data = request.json or {}
        config = current_app.config

        sort_column = (
            ["InitialSOHWeek", "RB SKU"]
            if data["customer"]
            else ["initialreckittsoh", "RB SKU"]
        )
        sort_order = [True, True]

        sort_column = None if data.get("search") or data.get("skulist") else sort_column
        sort_order = None if data.get("search") or data.get("skulist") else sort_order

        filters = (
            ["Business Unit", "Location", "Customer", "Brand"]
            if data["customer"]
            else ["Business Unit", "Location", "Brand"]
        )
        filename = (
            "ui_data/customerstockposition.csv"
            if data["customer"]
            else "ui_data/stockposition.csv"
        )

        stock_pos = get_data(data, config, filename, filters, sort_column, sort_order)

        for col in stock_pos.columns:
            if "CW" in col:
                stock_pos[col] = stock_pos[col].apply(
                    lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x
                )

        return json.loads(stock_pos.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Customer Tab - Historic ePOS
# *****************************************************
@uiflow_blueprint.route("/getcustepos", methods=["POST"])
def getcustepos():
    """
    Handles the 'getcustepos' POST request and returns the customer historical EPOS data based on the request data.

    Returns:
        list: A list of dictionaries containing the customer historical EPOS data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["InitialSOHWeek", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Customer", "Brand"]
        filename = "ui_data/customerhistoricepos.csv"

        custhepos = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(custhepos.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Customer Tab - Sell Out
# *****************************************************
@uiflow_blueprint.route("/getcustsellout", methods=["POST"])
def getcustsellout():
    """
    Handles the 'getcustsellout' POST request and returns the customer sellout data based on the request data.

    Returns:
        list: A list of dictionaries containing the customer sellout data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["InitialSOHWeek", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Customer", "Brand"]
        filename = "ui_data/customersellout.csv"

        custsellout = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(custsellout.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *****************************************************
#          Customer Tab - Sell In
# *****************************************************
@uiflow_blueprint.route("/getcustsellin", methods=["POST"])
def getcustsellin():
    """
    Handles the 'getcustsellin' POST request and returns the customer sell-in data based on the request data.

    Returns:
        list: A list of dictionaries containing the customer sell-in data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        sort_column = (
            None
            if data.get("search") or data.get("skulist")
            else ["InitialSOHWeek", "RB SKU"]
        )
        sort_order = None if data.get("search") or data.get("skulist") else [True, True]

        filters = ["Business Unit", "Location", "Customer", "Brand"]
        filename = "ui_data/customersellin.csv"

        custsellin = get_data(data, config, filename, filters, sort_column, sort_order)
        return json.loads(custsellin.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# ****************************************************************************
#      Recent / Upcoming Campaigns by SKU code ||| RECKITT Tab & CUSTOMER Tab
# ****************************************************************************
@uiflow_blueprint.route("/getcampaigns", methods=["POST"])
def get_campaigns():
    """
    Handles the 'getcampaigns' POST request and returns the campaigns by SKU data based on the request data.

    Returns:
        list: A list of dictionaries containing the campaigns by SKU data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        config = current_app.config

        filters = ["Business Unit", "Location", "Customer", "Brand"]
        filename = "ui_data/reckittcampaignsbysku.csv"

        campaignsbysku = get_data(data, config, filename, filters)
        return json.loads(campaignsbysku.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *******************************
#       Sell In Graph API
# *******************************
@uiflow_blueprint.route("/getsellingraph", methods=["POST"])
def get_selling_graph():
    """
    Handles the 'getsellingraph' POST request and returns the selling graph data based on the request data.

    Returns:
        list: A list of dictionaries containing the selling graph data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        filename = "ui_data/customersellin.csv"
        sellin = AzureBlobReader().read_csvfile(filename)
        for filter_key in ["Business Unit", "Location", "Brand", "Customer"]:
            if filter_key in data and filter_key != "":
                sellin = sellin[sellin[filter_key] == data[filter_key]]
        sellin = replace_missing_values(sellin)
        return json.loads(sellin.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *******************************
#       Sell Out Graph API
# *******************************
@uiflow_blueprint.route("/getselloutgraph", methods=["POST"])
def get_sellout_graph():
    """
    Handles the 'getselloutgraph' POST request and returns the sellout graph data based on the request data.

    Returns:
        list: A list of dictionaries containing the sellout graph data.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        data = request.json or {}
        filename = "ui_data/customersellout.csv"
        sellout = AzureBlobReader().read_csvfile(filename)
        for filter_key in ["Business Unit", "Location", "Brand", "Customer"]:
            if filter_key in data and filter_key != "":
                sellout = sellout[sellout[filter_key] == data[filter_key]]
        sellout = replace_missing_values(sellout)
        return json.loads(sellout.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *******************************
#       Export Data API
# *******************************
@uiflow_blueprint.route("/exportdata", methods=["POST"])
def exportdata():
    """
    Handles the 'exportdata' POST request and returns the data for the specified tab based on the request data.

    Returns:
        list: A list of dictionaries containing the data for the specified tab.

    Raises:
        ValueError: If the request data is missing or invalid.
        Exception: If any other error occurs.
    """
    try:
        df = pd.DataFrame()
        data = request.json or {}
        config = current_app.config
        customer = data["customer"]
        tabname = data["tabname"]
        filters = (
            ["Business Unit", "Location", "Customer", "Brand"]
            if customer
            else ["Business Unit", "Location", "Brand"]
        )
        if not data:
            return jsonify(status="error", message="Missing required parameters"), 500
        else:
            if tabname == "overview":
                filename = (
                    "ui_data/customeroverviewdatarepo.csv"
                    if customer
                    else "ui_data/reckittoverviewdatarepo.csv"
                )
                sortedcols = (
                    [
                        "Business Unit",
                        "Location",
                        "Customer",
                        "RB SKU",
                        "PPG",
                        "Description",
                        "Brand",
                        "Cust SOH",
                        "Cust WOC",
                        "Promo",
                        "RAG CW",
                        "RAG CW+1",
                        "RAG CW+2",
                        "RAG CW+3",
                    ]
                    if customer
                    else [
                        "Business Unit",
                        "Location",
                        "Customer",
                        "Segment",
                        "RB SKU",
                        "PPG",
                        "Description",
                        "Brand",
                        "Reckitt SoH",
                        "Reckitt WOC",
                        "Sell In Forecast",
                        "Active Promo",
                        "ExpSL CW",
                        "ExpSL CW+1",
                        "ExpSL CW+2",
                        "ExpSL CW+3",
                        "Exp NR CW",
                        "Exp NR CW+1",
                        "Exp NR CW+2",
                        "Exp NR CW+3",
                        "RAG CW",
                        "RAG CW+1",
                        "RAG CW+2",
                        "RAG CW+3",
                        "Reason Code",
                        "Comment RootCause",
                    ]
                )

            elif tabname == "supply":
                filename = "ui_data/reckittsupply.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "initialreckittsoh",
                    "Supply CW",
                    "Supply CW+1",
                    "Supply CW+2",
                    "Supply CW+3",
                    "Supply CW+4",
                    "Supply CW+5",
                    "Supply CW+6",
                    "Supply CW+7",
                    "Supply CW+8",
                    "Supply CW+9",
                ]

            elif tabname == "demand":
                filename = "ui_data/reckittdemand.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "initialreckittsoh",
                    "Demand CW",
                    "Demand CW+1",
                    "Demand CW+2",
                    "Demand CW+3",
                    "Demand CW+4",
                    "Demand CW+5",
                    "Demand CW+6",
                    "Demand CW+7",
                    "Demand CW+8",
                    "Demand CW+9",
                ]

            elif tabname == "sohateow":
                filename = "ui_data/reckittexpecsohateow.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "initialreckittsoh",
                    "EXPSOHATEOW CW",
                    "EXPSOHATEOW CW+1",
                    "EXPSOHATEOW CW+2",
                    "EXPSOHATEOW CW+3",
                ]

            elif tabname == "wocateow":
                filename = "ui_data/wocateow.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "initialreckittsoh",
                    "WOC CW",
                    "WOC CW+1",
                    "WOC CW+2",
                    "WOC CW+3",
                    "WOC CW+4",
                    "WOC CW+5",
                    "WOC CW+6",
                    "WOC CW+7",
                    "WOC CW+8",
                    "WOC CW+9",
                ]

            elif tabname == "caseshortages":
                filename = "ui_data/caseshortages.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "initialreckittsoh",
                    "CaseShort CW",
                    "CaseShort CW+1",
                    "CaseShort CW+2",
                    "CaseShort CW+3",
                    "CaseShort CW+4",
                    "CaseShort CW+5",
                    "CaseShort CW+6",
                    "CaseShort CW+7",
                    "CaseShort CW+8",
                    "CaseShort CW+9",
                ]

            elif tabname == "expectedservice":
                filename = "ui_data/expectedservice.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "initialreckittsoh",
                    "ExpSL CW",
                    "ExpSL CW+1",
                    "ExpSL CW+2",
                    "ExpSL CW+3",
                    "ExpSL CW+4",
                    "ExpSL CW+5",
                    "ExpSL CW+6",
                    "ExpSL CW+7",
                    "ExpSL CW+8",
                    "ExpSL CW+9",
                ]

            elif tabname == "stockposition":
                filename = (
                    "ui_data/customerstockposition.csv"
                    if customer
                    else "ui_data/stockposition.csv"
                )
                sortedcols = (
                    [
                        "Business Unit",
                        "Location",
                        "Customer",
                        "RB SKU",
                        "PPG",
                        "Description",
                        "Brand",
                        "InitialSOHWeek",
                        "CW",
                        "CW+1",
                        "CW+2",
                        "CW+3",
                        "CW+4",
                        "CW+5",
                        "CW+6",
                        "CW+7",
                        "CW+8",
                        "CW+9",
                    ]
                    if customer
                    else [
                        "Business Unit",
                        "Location",
                        "Customer",
                        "RB SKU",
                        "PPG",
                        "Description",
                        "Brand",
                        "initialreckittsoh",
                        "StkPos CW",
                        "StkPos CW+1",
                        "StkPos CW+2",
                        "StkPos CW+3",
                    ]
                )

            elif tabname == "historicepos":
                filename = "ui_data/customerhistoricepos.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "InitialSOHWeek",
                    "CW-9",
                    "CW-8",
                    "CW-7",
                    "CW-6",
                    "CW-5",
                    "CW-4",
                    "CW-3",
                    "CW-2",
                    "CW-1",
                    "CW",
                ]

            elif tabname == "sellout":
                filename = "ui_data/customersellout.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "InitialSOHWeek",
                    "sola CW",
                    "sola CW+1",
                    "sola CW+2",
                    "sola CW+3",
                    "sola CW+4",
                    "sola CW+5",
                    "sola CW+6",
                    "sola CW+7",
                    "sola CW+8",
                    "sola CW+9",
                ]

            elif tabname == "sellin":
                filename = "ui_data/customersellin.csv"
                sortedcols = [
                    "Business Unit",
                    "Location",
                    "Customer",
                    "RB SKU",
                    "PPG",
                    "Description",
                    "Brand",
                    "InitialSOHWeek",
                    "kinaxis CW+1",
                    "kinaxis CW+4",
                    "kinaxis CW+8",
                    "kinaxis CW+12",
                    "sola CW",
                    "sola CW+1",
                    "sola CW+2",
                    "sola CW+3",
                    "sola CW+4",
                    "sola CW+5",
                    "sola CW+6",
                    "sola CW+7",
                    "sola CW+8",
                    "sola CW+9",
                ]

            else:
                return jsonify(status="error", message="Invalid tabname"), 500

        df = get_data(data, config, filename, filters)
        # df = df[sortedcols] # type: ignore

        # split_result = df.to_dict(orient='split')
        # json_result = json.dumps({"index": split_result["index"], "columns": split_result["columns"], "data": split_result["data"]})

        # return json_result
        return json.loads(df.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# ***********************
#      IRREGULAR PO
# ***********************
@uiflow_blueprint.route("/getirrpodata", methods=['POST'])
def get_irrpodata():
    try:
        config = current_app.config
        global_user = config.get('global_user', {})
        global_filters = config.get('global_filters', {})
        global_filters = dict((k.lower(), v.lower()) for k, v in global_filters.items())
        filters = ['Business Unit', 'Location', 'Customer','Brand']
        filename = "ui_data/irrpomainscreen.csv"
        df = AzureBlobReader().read_csvfile(filename)
        for filter_key in filters:
            if filter_key.lower() in global_user and global_user[filter_key.lower()] != None:
                df = df[df[filter_key] in global_user[filter_key]]
        for filter_key in filters:
            if filter_key.lower() in global_filters and global_filters[filter_key.lower()] != None:
                df = df[df[filter_key].str.lower() == global_filters[filter_key.lower()]]
        df = df.sort_values(by=['poReceiptDate', 'noSKUsIrregular', 'noSKUsinPO', 'irregularPO'], ascending=[False, False, False, False])
        return json.loads(df.to_json(orient='records'))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# ***********************
#      PO DETAILS
# ***********************
@uiflow_blueprint.route("/getirrpodetails", methods=["POST"])
def get_irrpodetails():
    try:
        data = request.json or {}
        filename = "ui_data/po_irrsku_details.csv"
        poid = data.get("po_id")
        df = AzureBlobReader().read_csvfile(filename)
        df = df[df["poNumber"] == poid]
        df = cleandf(df)
        return json.loads(df.to_json(orient="records"))
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500


# *********************************************
#      IRRSKU INVESTIGATION DETAILS
# *********************************************
@uiflow_blueprint.route("/getirrposku", methods=["POST"])
def get_irrposku():
    try:
        config = current_app.config
        data = request.json or {}
        filename = "ui_data/po_irrsku_details.csv"
        podetails = AzureBlobReader().read_csvfile(filename)
        global_user = config.get('global_user', {})
        cust = random.choice(global_user['Customer'])
        poid, rbsku = data.get("po_id"), data.get("rbsku")

        podetails = podetails[podetails["poNumber"] == poid]
        podetails = podetails[podetails["rbsku"] == rbsku]
        skudata = podetails[podetails["Customer"] == cust]

        # get WoC data
        wocdata = podetails[podetails["Customer"] == cust][["Cust WoC CW", "Cust WoC CW+1", "Cust WoC CW+2", "Cust WoC CW+3"]].sample(1)
        wocdata = replace_missing_values(wocdata)

        # get histepos data
        custhistepos = AzureBlobReader().read_csvfile(
            "ui_data/customerhistoricepos.csv"
        )
        custhistepos = custhistepos[custhistepos["RB SKU"] == rbsku]
        custhistepos = custhistepos[custhistepos["Customer"] == cust]
        custhistepos = replace_missing_values(custhistepos)

        # Cust Sell in Data
        filters = ["Business Unit", "Location", "Customer", "Brand"]
        filename = "ui_data/customer_sellin_act_fcst.csv"
        custsellin = AzureBlobReader().read_csvfile(filename)
        custsellin['Brand'] = custsellin['Description'].apply(lambda x: 'Airwick' if 'AWICK' in x else 'Gaviscon')
        custsellin = custsellin[custsellin["RB SKU"] == rbsku]
        custsellin = custsellin[custsellin["Customer"] == cust]
        custsellin = replace_missing_values(custsellin)

        # campaigns data
        filters = ["Business Unit", "Location", "Customer", "Brand"]
        filename = "ui_data/reckittcampaignsbysku.csv"
        campdf = get_data(data, config, filename, filters)
        campdf['enddate'] = pd.to_datetime(campdf['enddate'])
        today = dt.date.today().strftime('%Y-%m-%d')
        campdf = campdf.loc[campdf['enddate'] >= today]
        campdf = campdf[campdf['RB SKU'] == data['rbsku']]
        campdf['enddate'] = pd.to_datetime(campdf['enddate'], unit='ms')
        campdf['enddate'] = campdf['enddate'].dt.strftime('%Y-%m-%d')
        campdf = campdf.loc[campdf['Customer'].str.contains(cust, case=False, na=False)]

        campaignsbysku = cleandf(campdf)
        skudata = cleandf(skudata)
        wocdata = cleandf(wocdata)
        custhistepos = cleandf(custhistepos)
        custsellin = cleandf(custsellin)

        return {
                    "skudata": json.loads(skudata.to_json(orient="records"))[0],
                    "wocgraphdata": json.loads(wocdata.to_json(orient="records"))[0],
                    "histepos": json.loads(custhistepos.to_json(orient="records"))[0],
                    "sellin": json.loads(custsellin.to_json(orient="records"))[0],
                    "campaigns": json.loads(campaignsbysku.to_json(orient="records")),
                }
    except Exception as e:
        return jsonify(status="error", message=f"{str(e)}"), 500

## Helper Function
def cleandf(df):
    missing_values = [None, 'null', 'NULL', 'Null', 'Nan', 'nan', 'NaN', ' ', '', 'None; None', np.nan, '0; None', 'nan; nan', '0; 0']
    df = df.replace(missing_values, '-')
    df = df.fillna('-')
    for col in df.columns:
        df[col] = df[col] if col in ['rbsku','po_id','poNumber','ppg'] else df[col].apply(lambda x: f"{x:,.2f}" if isinstance(x, (int, float)) else x)
    df = df.replace([0.00, 0.0, "0.00", "0.0"], 0)
    return df

# *********************************************
#               Data Recency API # TODO: Not integrated with the frontend api response
# *********************************************
@uiflow_blueprint.route("/getdatarecency")
def get_datarecency():
    try:
        filename = "ui_data/extractiondates.xlsx"
        # df = AzureBlobReader().read_xls(filename, sheet="Sheet1")
        df = AzureBlobReader().read_csvfile(filename)
        df.fillna("-", inplace=True)
        df.replace('Does not exist', '-', inplace=True)
        df['Pull date'] = pd.to_datetime(df['Pull date'], format='%d/%m/%Y', errors='coerce')
        df.replace(pd.NaT, '-')
        df['Pull date'] = df['Pull date'].dt.strftime('%Y-%m-%d')
        df.fillna("-", inplace=True)
        list_of_objects = []

        # Iterate through the rows of the DataFrame
        for _, row in df.iterrows():
            row_dict = row.to_dict()
            list_of_objects.append(row_dict)

        return list_of_objects
    except Exception as e:
        response = {
            "status": "error",
            "message": str(e),
        }
        return jsonify(response)