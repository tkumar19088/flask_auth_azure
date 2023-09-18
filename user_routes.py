from flask import (
    Blueprint,
    render_template,
    redirect,
    session,
    request,
    url_for,
    jsonify
)
from flask_cors import cross_origin
from msal import ConfidentialClientApplication, SerializableTokenCache
import app_config
import json
from utils import AzureBlobReader, UserDataReaderBlobStorage
from dotenv import load_dotenv
load_dotenv()

import numpy as np

global_user = {}
global_filters = {}


app_blueprint = Blueprint("app", __name__)


@app_blueprint.route("/")
@cross_origin()
def index():
    if "user" in session:
        return render_template("index.html")
    else:
        return redirect(url_for("app.login"))

@app_blueprint.route("/login")
def login():
    """
    The `login` function redirects the user to the authentication URL for logging in.
    :return: a redirect to the authentication URL.
    """
    session["flow"] = _build_auth_code_flow(scopes=app_config.SCOPE)
    auth_url = session["flow"]["auth_uri"]
    return redirect(auth_url)


# ****************************
# Get User Data from XLS file
# ****************************
@cross_origin()
@app_blueprint.route("/getuserdata")
def getuserdata():
    global global_user
    filters = ['Business Unit', 'Customer', 'Location','Brand']
    if "user" in session:
        uemail = session["user"]["preferred_username"]
        userDetails = UserDataReaderBlobStorage().getUserDetails(uemail)
        for filter_key in filters:
            if filter_key in userDetails.keys():
                global_user[filter_key] = userDetails.get(filter_key)
        alertsdata = getalerts()
        return {"user":userDetails, "alerts":alertsdata}
    else:
        return redirect(url_for("app.login"))


# **************************************************************
# Get filter parameters from homepage & filter Current status &
# alerts section to display only relevant data
# **************************************************************
@app_blueprint.route('/getfilterparams', methods=['POST'])
def getfilterparams():
    global global_filters
    try:
        data = request.json
        print(f"\n\n{data}\n")
        for key, value in data.items():
            if value != "":
                global_filters[key] = value
        filtalerts = getalerts()
        # return global_filters
        return {"filters":global_filters, "alerts":filtalerts}
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500

def getalerts():
    oosalertsdata = AzureBlobReader().read_csvfile("ui_data/currentalertsoos.csv")
    irrpoalertsdata = AzureBlobReader().read_csvfile("ui_data/currentalertsirrpo.csv")
    filters = ['Business Unit', 'Customer', 'Location','Brand']

    if global_filters:
        print(global_filters)
        for filter_key in filters:
            print(filter_key)
            if filter_key != "" and filter_key in global_filters.keys() and global_filters[filter_key] in global_user[filter_key]:
                oosalertsdata = oosalertsdata[oosalertsdata[filter_key]==global_filters[filter_key]]
                irrpoalertsdata = irrpoalertsdata[irrpoalertsdata[filter_key]==global_filters[filter_key]]
            else:
                continue
    else:
        for filter_key in filters:
            if filter_key != "" and filter_key in global_filters.keys() and global_filters[filter_key] in global_user[filter_key]:
                oosalertsdata = oosalertsdata[oosalertsdata[filter_key].isin(global_user[filter_key])]
                irrpoalertsdata = irrpoalertsdata[irrpoalertsdata[filter_key].isin(global_user[filter_key])]
            else:
                continue

    oosalertsdata.replace(" ", "-", inplace=True)
    irrpoalertsdata.replace(" ", "-", inplace=True)

    aa = oosalertsdata.groupby(['Business Unit', 'Location', 'Brand']).apply(lambda x: x.sort_values(['Reckitt WOC'], ascending=True)).reset_index(drop=True)[['Location','Brand',"Description","Reckitt WOC","Service CW"]]
    ALERTS=[]
    for name, group in aa.groupby(['Location', 'Brand']):
        obj = {}
        obj['Title'] = f"OOS Risk Detected on {name[1]} {name[0]} SKUs"
        obj['DATA'] = group[["Description","Service CW"]].head(3).to_dict('records')
        ALERTS.append(obj)

    ab = irrpoalertsdata.groupby(['Business Unit', 'Location', 'Brand']).apply(lambda x: x.sort_values(['Num Irregular SKUs'], ascending=True)).reset_index(drop=True)[['Location','Brand',"PO Number","PO Date"]]
    for name, group in ab.groupby(['Location', 'Brand']):
        obj = {}
        obj['Title'] = f"Irregular PO Detected for {name[1]} {name[0]} SKUs"
        obj['DATA'] = group[["PO Number","PO Date"]].head(3).to_dict('records')
        ALERTS.append(obj)

    for i in range(len(ALERTS)):
        for d in ALERTS[i]["DATA"]:
            try:
                d["Name"] = d.pop("Description")
                d["Value"] = d.pop("Service CW")
            except:
                d["Name"] = d.pop("PO Number")
                d["Value"] = d.pop("PO Date")

    print(f"\n\n{ALERTS[:5]}\n\n")

    return ALERTS


# ************************************************
#      Reset filter parameters from homepage
# ************************************************
@app_blueprint.route('/resetfilterparams')
def resetfilterparams():
    global global_filters
    try:
        global_filters.clear()
        return jsonify(status="success", message="Filter params cleared!"), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# *****************************************************
#    Reckitt Tab Overview |||| Customer Tab Overview
# *****************************************************
@app_blueprint.route("/getoverview", methods=['POST'])
def getoverview():
    data = request.json

    if data['customer']:
        ohr = AzureBlobReader().read_csvfile("ui_data/customeroverviewdatarepo.csv")
        filters = ['Business Unit', 'Location', 'Customer', 'Brand']
    else:
        ohr = AzureBlobReader().read_csvfile("ui_data/reckittoverviewdatarepo.csv")
        filters = ['Business Unit', 'Location','Brand']

    if global_filters:
        for filter_key in filters:
            if filter_key in global_filters.keys():
                ohr = ohr[ohr[filter_key] == global_filters[filter_key]]
        ohr.replace(" ", "-", inplace=True)
        return json.loads(ohr.to_json(orient='records'))
    else:
        return jsonify(status="Error", message="Choose above filters to view data"), 500


# ****************************************************************************************************
#    Reckitt Tab Overview |||| Customer Tab Overview  --  EXPORT DATA: Get all RAG filters params
#    TODO : Should it export data of all tabs or only active tab? 
# ****************************************************************************************************
@app_blueprint.route("/exportoosriskdata")
def exportoosriskdata():
    return jsonify(status="success", message="Data Received!"), 200


# *****************************************************
#                  Reckitt Tab - Supply
# *****************************************************
@app_blueprint.route("/getsupply", methods=['POST'])
def getsupply():
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
@app_blueprint.route("/getdemand", methods=['POST'])
def getdemand():
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
@app_blueprint.route("/getsohateow", methods=['POST'])
def getsohateow():
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
@app_blueprint.route("/getwocateow", methods=['POST'])
def getwocateow():
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
@app_blueprint.route("/getcaseshortages", methods=['POST'])
def getcaseshortages():
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
@app_blueprint.route("/getexpectedservice", methods=['POST'])
def getexpectedservice():
    rbexpsl = AzureBlobReader().read_csvfile("ui_data/expectedservice.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            rbexpsl = rbexpsl[rbexpsl[filter_key] == global_filters[filter_key]]
    rbexpsl.replace(" ", "-", inplace=True)
    return json.loads(rbexpsl.to_json(orient='records'))


# *****************************************************
# Reckitt Tab - Stock Position |||| Customer Tab - Stock Position
# *****************************************************
@app_blueprint.route("/getstockposition", methods=['POST'])
def getstockposition():
    data = request.json
    if data['customer']:
        stockpos = AzureBlobReader().read_csvfile("ui_data/customerstockposition.csv")
        filters = ['Business Unit', 'Location', 'Customer', 'Brand']
    else:
        stockpos = AzureBlobReader().read_csvfile("ui_data/stockposition.csv")
        filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            stockpos = stockpos[stockpos[filter_key] == global_filters[filter_key]]
    stockpos.replace(" ", "-", inplace=True)
    return json.loads(stockpos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Historic ePOS
# *****************************************************
@app_blueprint.route("/getcustepos", methods=['POST'])
def getcustepos():
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
@app_blueprint.route("/getcustsellout", methods=['POST'])
def getcustsellout():
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
@app_blueprint.route("/getcustsellin", methods=['POST'])
def getcustsellin():
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
@app_blueprint.route("/getcustola", methods=['POST'])
def getcustola():
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
@app_blueprint.route("/getcampaigns", methods=['POST'])
def getcampaigns():
    data = request.json
    campaigns = AzureBlobReader().read_csvfile("ui_data/reckittcampaignsbysku.csv")
    campaignsbysku = campaigns[campaigns['RB SKU'] == data['rbsku']]
    filters = ['Business Unit', 'Location', 'Customer', 'Brand']
    for filter_key in filters:
        if filter_key in global_filters.keys():
            campaignsbysku = campaignsbysku[campaignsbysku[filter_key] == global_filters[filter_key]]
    campaignsbysku.replace(" ", "-", inplace=True)
    return json.loads(campaignsbysku.to_json(orient='records'))


# ****************** CHOOSE MITIGATION SCENARIO ******************
#          #TODO: CHOOSE MITIGATION SCENARIO
# ****************************************************************



# ************************** MITIGATION SCENARIO # 1 ***************************
#        PUSH ALTERNATIVE SKU API #TODO: API Done but Testing Incomplete
# ******************************************************************************
@app_blueprint.route("/getalternativeskus", methods=['POST'])
def getalternativeskus():
    data = request.json
    if not data:
        return jsonify(status="error", message="Missing required parameter: RB SKU!"), 500

    ret, sku_r = global_filters.get('Customer', None), data.get('rbsku', None)
    if not ret:
        return jsonify(status="error", message="No customer selected!"), 500

    try:
        df_price = AzureBlobReader().read_csvfile("ui_data/pushalternativeskus.csv")
        brand = df_price.loc[df_price['sku'] == sku_r, 'brand'].values[0]
        conds = (df_price['brand'] == brand) & (df_price['retailer'] == ret)
        tmp = df_price[conds].drop(columns = ['retailer', 'brand']).drop_duplicates()
        tmp = tmp.set_index('sku').T
        tmp_r = tmp[sku_r]
        tmp = tmp.drop(columns = sku_r)
        tmp.loc['score_1'] = 1 * (tmp.loc['segment'] == tmp_r['segment'])
        tmp.loc['score_3'] = (tmp.loc['reckitt_inv'] / tmp_r['reckitt_inv'])
        tmp.loc['score_4'] = (tmp.loc[['reckitt_inv', 'currentallocation']].min(axis = 1) / tmp_r['sif-reckitt'])
        tmp.loc['score_5'] = (tmp.loc[['Sell out', 'currentcustSOH', 'sif-reckitt']].apply(lambda x: score5(x[0], x[1], x[2]), axis = 0))
        tmp.loc['score_6'] = (tmp.loc[['custwoc-target', 'custwoc-current']].apply(lambda x: score6(x[0], x[1]), axis = 0))
        tmp.loc['score_7'] = 1 - abs(tmp.loc['price'] - tmp_r['price'] / tmp_r['price'])
        tmp.loc['score_final'] = tmp.loc[['score_1', 'score_3', 'score_4', 'score_5', 'score_6', 'score_7']].sum(axis = 0)
        tmp = tmp.loc[['score_final']].T
        tmp.replace(" ", "-", inplace=True)
        return json.loads(tmp.to_json(orient='records')) if not tmp.empty else jsonify(status="error", message="No alternative SKUs found!"), 500
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# ************* MITIGATION SCENARIO # 2 *************
# Get Reallocation across Retailers data by SKU code
# ***************************************************
@app_blueprint.route("/rarbysku", methods=['POST'])
def getrarbysku():
    data = request.json
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
@app_blueprint.route("/getoptmize", methods=['POST'])
def getoptmize():
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

# *******************************
#       Sell In Graph API #TODO: WHere is the raw data coming from?
# *******************************
@app_blueprint.route("/getsellingraph", methods=['POST'])
def getsellingraph():
    data = request.json
    filters = ['Business Unit','Location','Brand', 'Customer', 'RB SKU']
    if data['customer']:
        sellin = AzureBlobReader().read_csvfile("ui_data/customersellin.csv")
    else:
        sellin = AzureBlobReader().read_csvfile("ui_data/reckittsellin.csv")
    for filter_key in filters:
        sellin = sellin[sellin[filter_key] == data[filter_key]]
    return sellin


# *******************************
#       Sell Out Graph API #TODO: WHere is the raw data coming from?
# *******************************
@app_blueprint.route("/getselloutgraph", methods=['POST'])
def getselloutgraph():
    data = request.json
    filters = ['Business Unit','Location','Brand', 'Customer', 'RB SKU']
    if data['customer']:
        sellout = AzureBlobReader().read_csvfile("ui_data/customersellout.csv")
    else:
        sellout = AzureBlobReader().read_csvfile("ui_data/reckittsellout.csv")
    for filter_key in filters:
        sellout = sellout[sellout[filter_key] == data[filter_key]]
    return sellout


# *******************************
#          LOG OUT API
# *******************************
@app_blueprint.route("/logout")
def logout():
    """
    The `logout` function clears the user's session and redirects them to the logout page of the
    tenant's web session.

    :return: a redirect response.
    """
    session.clear()  # Wipe out user and its token cache from session
    return redirect(  # Also logout from your tenant's web session
        app_config.AUTHORITY
        + "/oauth2/v2.0/logout"
        + "?post_logout_redirect_uri="
        + url_for("app.index", _external=True)
    )

# *********************************************
#       HELPER FUNCTIONS INDIRECT API CALLS & REDIRECTION - BELOW
# *********************************************

@app_blueprint.route("/redirect")
def authorized():
    """
    The `authorized` function is used to handle the authorization process for a user, including
    acquiring a token and saving it in the session.

    :return: a redirect to the "app.index" route.
    """
    try:
        cache = _load_cache()
        result = _build_msal_app(cache=cache).acquire_token_by_auth_code_flow(
            session.get("flow", {}), request.args
        )
        if "error" in result:
            return render_template("auth_error.html", result=result)
        session["user"] = result.get("id_token_claims")
        _save_cache(cache)
    except ValueError:  # Usually caused by CSRF
        pass  # Simply ignore them
    return redirect(url_for("app.index"))

def _load_cache():
    """
    The function `_load_cache` loads a cache object from the session if it exists.

    :return: an instance of the `SerializableTokenCache` class.
    """
    cache = SerializableTokenCache()
    if session.get("token_cache"):
        cache.deserialize(session["token_cache"])
    return cache

def _save_cache(cache):
    """
    The function saves the cache state to the session if it has changed.

    :param cache: The "cache" parameter is an object that represents a cache. It likely has a property
    called "has_state_changed" which indicates whether the cache has been modified since it was last
    saved. The cache object also has a method called "serialize" which returns a serialized
    representation of the cache
    """
    if cache.has_state_changed:
        session["token_cache"] = cache.serialize()

def _build_msal_app(cache=None, authority=None):
    """
    The function `_build_msal_app` returns a `ConfidentialClientApplication` object with the specified
    parameters.

    :param cache: The `cache` parameter is used to specify the token cache to be used by the
    `ConfidentialClientApplication`. The token cache is responsible for storing and retrieving access
    tokens and refresh tokens. If no cache is provided, a default in-memory cache will be used

    :param authority: The authority parameter is the URL of the authority that will issue the
    authentication tokens. It specifies the identity provider that the application will use for
    authentication

    :return: an instance of the `ConfidentialClientApplication` class.
    """
    return ConfidentialClientApplication(
        app_config.CLIENT_ID,
        authority=app_config.AUTHORITY,
        client_credential=app_config.CLIENT_SECRET,
        token_cache=cache,
    )

def _build_auth_code_flow(authority=None, scopes=None):
    """
    The function initiates an authorization code flow using the Microsoft Authentication Library (MSAL)
    in python.

    :param authority: The authority parameter is the URL of the Azure Active Directory (AAD) authority
    that will be used for authentication. It specifies the AAD tenant or the Azure AD B2C endpoint that
    will be used for authentication

    :param scopes: The `scopes` parameter is a list of strings that represents the permissions or access
    levels that the application is requesting from the user. These scopes define what resources or
    actions the application can access on behalf of the user

    :return: the result of calling the `initiate_auth_code_flow` method on the `_build_msal_app`
    function.
    """
    return _build_msal_app(authority=authority).initiate_auth_code_flow(
        scopes or [], redirect_uri=url_for("app.authorized", _external=True), 
    )

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


