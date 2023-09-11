from flask import (
    Blueprint,
    render_template,
    redirect,
    session,
    request,
    url_for,
    jsonify
)
import os
from flask_cors import cross_origin
from msal import ConfidentialClientApplication, SerializableTokenCache
import app_config
import json
from utils import AzureBlobReader, UserDataReaderBlobStorage
from dotenv import load_dotenv
load_dotenv()


global_variables = {}
global_userDetails = {}

# ******************************
# Create the app access objects
# ******************************
app_blueprint = Blueprint("app", __name__)


# *************************
# Application login routes
# *************************
@app_blueprint.route("/") # Homepage # Default route
@cross_origin()
def index():
    # if "user" in session:
    #     return render_template("index.html")
    # else:
    #     return redirect(url_for("app.login"))
    return render_template("index.html")

# Login page redirected from index (homepage)
@app_blueprint.route("/login")
def login():
    """
    The `login` function redirects the user to the authentication URL for logging in.
    :return: a redirect to the authentication URL.
    """
    session["flow"] = _build_auth_code_flow(scopes=app_config.SCOPE)
    auth_url = session["flow"]["auth_uri"]
    return redirect(auth_url)


# **********************
# Get User Data objects
# **********************
@cross_origin()
@app_blueprint.route("/getuserdata")
def getuserdata():
    filters = ['Business Unit', 'Customer', 'Location','Brand']
    uemail = os.getenv("USER_EMAIL")
    userDetails = UserDataReaderBlobStorage().getUserDetails(uemail)
    for filter_key in filters:
        if filter_key in userDetails.items():
            global_userDetails[filter_key] = userDetails[filter_key].value
    return userDetails
    # filters = ['Business Unit', 'Customer', 'Location','Brand']
    # if "user" in session:
    #     uemail = session["user"]["preferred_username"]
    #     userDetails = UserDataReaderBlobStorage().getUserDetails(uemail)
    #     for filter_key in filters:
    #         if filter_key in userDetails.items():
    #             global_userDetails[filter_key] = userDetails[filter_key].value
    #     return userDetails
    # else:
    #     return redirect(url_for("app.login"))
    


# **************************************************************
# Get filter parameters from homepage & filter Current status &
# alerts section to display only relevant data
# **************************************************************
@app_blueprint.route('/getfilterparams', methods=['POST'])
def getfilterparams():
    try:
        data = request.json
        for key, value in data.items():
            global_variables[key] = value
            print(global_variables)
            allalerts = getallalerts()
        return allalerts
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500

def getallalerts():
    oosalertsdata = AzureBlobReader().read_csvfile("ui_data/currentalertsoos.csv")
    irrpoalerts = AzureBlobReader().read_csvfile("ui_data/currentalertsirrpo.csv")
    filters = ['Business Unit', 'Customer', 'Location','Brand']

    for filter_key in filters:
        if filter_key in global_userDetails.keys():
            aoosalertsdata = oosalertsdata[oosalertsdata[filter_key].isin(global_userDetails[filter_key])]
            airrpoalertsdata = irrpoalerts[irrpoalerts[filter_key].isin(global_userDetails[filter_key])]

    aoosalertsdata.replace("", "-", inplace=True)
    airrpoalertsdata.replace("", "-", inplace=True)

    aa = aoosalertsdata.groupby(['Business Unit', 'Location', 'Brand']).apply(lambda x: x.sort_values(['Reckitt WOC'], ascending=True)).reset_index(drop=True)[['Location','Brand',"Description","Reckitt WOC","SL CW"]]
    aOOSALERTS=[]
    for name, group in aa.groupby(['Location', 'Brand']):
        obj = {}
        obj['Location'] = name[0]
        obj['Brand'] = name[1]
        obj['DATA'] = group[["Description","SL CW"]].head(3).to_dict('records')
        aOOSALERTS.append(obj)

    ab = airrpoalertsdata.groupby(['Business Unit', 'Location', 'Brand']).apply(lambda x: x.sort_values(['Reckitt WOC'], ascending=True)).reset_index(drop=True)[['Location','Brand',"Description","Reckitt WOC","SL CW"]]
    aIRPPOALERTS=[]
    for name, group in ab.groupby(['Location', 'Brand']):
        obj = {}
        obj['Location'] = name[0]
        obj['Brand'] = name[1]
        obj['DATA'] = group[["Description","SL CW"]].head(3).to_dict('records')
        aIRPPOALERTS.append(obj)
    allalerts = {"OOSRiskDetection": aOOSALERTS, "IRRPO": aIRPPOALERTS}
    return allalerts


# ************************************************
#      Reset filter parameters from homepage
# ************************************************
@app_blueprint.route('/resetfilterparams')
def resetfilterparams():
    try:
        global_variables.clear()
        return jsonify(status="success", message="Filter params cleared!"), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# ***********************************************
#     Filtered : Current Status / Alerts API
# ***********************************************
@app_blueprint.route('/getalertsdata', methods=['POST'])
def getalertsdata():
    oosalertsdata = AzureBlobReader().read_csvfile("ui_data/currentalertsoos.csv")
    irrpoalerts = AzureBlobReader().read_csvfile("ui_data/currentalertsirrpo.csv")
    filters = ['Business Unit', 'Customer', 'Location','Brand']

    for filter_key in filters:
        if filter_key in global_variables.keys():
            oosalertsdata = oosalertsdata[oosalertsdata[filter_key] == global_variables[filter_key]]
            irrpoalertsdata = irrpoalerts[irrpoalerts[filter_key] == global_variables[filter_key]]

    oosalertsdata.replace("", "-", inplace=True)
    irrpoalertsdata.replace("", "-", inplace=True)

    a = oosalertsdata.groupby(['Business Unit', 'Location', 'Brand']).apply(lambda x: x.sort_values(['Reckitt WOC'], ascending=True)).reset_index(drop=True)[['Location','Brand',"Description","Reckitt WOC","SL CW"]]
    OOSALERTS=[]
    for name, group in a.groupby(['Location', 'Brand']):
        obj = {}
        obj['Location'] = name[0]
        obj['Brand'] = name[1]
        obj['DATA'] = group[["Description","SL CW"]].head(3).to_dict('records')
        OOSALERTS.append(obj)

    b = irrpoalertsdata.groupby(['Business Unit', 'Location', 'Brand']).apply(lambda x: x.sort_values(['Reckitt WOC'], ascending=True)).reset_index(drop=True)[['Location','Brand',"Description","Reckitt WOC","SL CW"]]
    IRPPOALERTS=[]
    for name, group in b.groupby(['Location', 'Brand']):
        obj = {}
        obj['Location'] = name[0]
        obj['Brand'] = name[1]
        obj['DATA'] = group[["Description","SL CW"]].head(3).to_dict('records')
        IRPPOALERTS.append(obj)
    alerts = {"OOSRiskDetection": OOSALERTS, "IRRPO": IRPPOALERTS}
    return alerts


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

    if global_variables:
        for filter_key in filters:
            if filter_key in global_variables.keys():
                ohr = ohr[ohr[filter_key] == global_variables[filter_key]]
        ohr.replace("", "-", inplace=True)
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
        if filter_key in global_variables.keys():
            rbsupply = rbsupply[rbsupply[filter_key] == global_variables[filter_key]]
    rbsupply.replace("", "-", inplace=True)
    return json.loads(rbsupply.to_json(orient='records'))


# *****************************************************
#                   Reckitt Tab - Demand
# *****************************************************
@app_blueprint.route("/getdemand", methods=['POST'])
def getdemand():
    rbdemand = AzureBlobReader().read_csvfile("ui_data/reckittdemand.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            rbdemand = rbdemand[rbdemand[filter_key] == global_variables[filter_key]]
    rbdemand.replace("", "-", inplace=True)
    return json.loads(rbdemand.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected SOH at EOW
# *****************************************************
@app_blueprint.route("/getsohateow", methods=['POST'])
def getsohateow():
    rbexpsoheow = AzureBlobReader().read_csvfile("ui_data/reckittexpecsohateow.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            rbexpsoheow = rbexpsoheow[rbexpsoheow[filter_key] == global_variables[filter_key]]
    rbexpsoheow.replace("", "-", inplace=True)
    return json.loads(rbexpsoheow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - WOC at EOW
# *****************************************************
@app_blueprint.route("/getwocateow", methods=['POST'])
def getwocateow():
    rbwoceow = AzureBlobReader().read_csvfile("ui_data/wocateow.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            rbwoceow = rbwoceow[rbwoceow[filter_key] == global_variables[filter_key]]
    rbwoceow.replace("", "-", inplace=True)
    return json.loads(rbwoceow.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Case Shortages
# *****************************************************
@app_blueprint.route("/getcaseshortages", methods=['POST'])
def getcaseshortages():
    rbcaseshort = AzureBlobReader().read_csvfile("ui_data/caseshortages.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            rbcaseshort = rbcaseshort[rbcaseshort[filter_key] == global_variables[filter_key]]
    rbcaseshort.replace("", "-", inplace=True)
    return json.loads(rbcaseshort.to_json(orient='records'))


# *****************************************************
#          Reckitt Tab - Expected Service
# *****************************************************
@app_blueprint.route("/getexpectedservice", methods=['POST'])
def getexpectedservice():
    rbexpsl = AzureBlobReader().read_csvfile("ui_data/expectedservice.csv")
    filters = ['Business Unit', 'Location','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            rbexpsl = rbexpsl[rbexpsl[filter_key] == global_variables[filter_key]]
    rbexpsl.replace("", "-", inplace=True)
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
        if filter_key in global_variables.keys():
            stockpos = stockpos[stockpos[filter_key] == global_variables[filter_key]]
    stockpos.replace("", "-", inplace=True)
    return json.loads(stockpos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Historic ePOS
# *****************************************************
@app_blueprint.route("/getcustepos", methods=['POST'])
def getcustepos():
    custhepos = AzureBlobReader().read_csvfile("ui_data/customerhistoricepos.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            custhepos = custhepos[custhepos[filter_key] == global_variables[filter_key]]
    custhepos.replace("", "-", inplace=True)
    return json.loads(custhepos.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell Out
# *****************************************************
@app_blueprint.route("/getcustsellout", methods=['POST'])
def getcustsellout():
    custsellout = AzureBlobReader().read_csvfile("ui_data/customersellout.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            custsellout = custsellout[custsellout[filter_key] == global_variables[filter_key]]
    custsellout.replace("", "-", inplace=True)
    return json.loads(custsellout.to_json(orient='records'))


# *****************************************************
#          Customer Tab - Sell In
# *****************************************************
@app_blueprint.route("/getcustsellin", methods=['POST'])
def getcustsellin():
    custsellin = AzureBlobReader().read_csvfile("ui_data/customersellin.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            custsellin = custsellin[custsellin[filter_key] == global_variables[filter_key]]
    custsellin.replace("", "-", inplace=True)
    return json.loads(custsellin.to_json(orient='records'))


# *****************************************************
#          Customer Tab - OLA
# *****************************************************
@app_blueprint.route("/getcustola", methods=['POST'])
def getcustola():
    custola = AzureBlobReader().read_csvfile("ui_data/customerola.csv")
    filters = ['Business Unit', 'Location', 'Customer','Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            custola = custola[custola[filter_key] == global_variables[filter_key]]
    custola.replace("", "-", inplace=True)
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
        if filter_key in global_variables.keys():
            campaignsbysku = campaignsbysku[campaignsbysku[filter_key] == global_variables[filter_key]]
    campaignsbysku.replace("", "-", inplace=True)
    return json.loads(campaignsbysku.to_json(orient='records'))


# ******** CHOOSE MITIGATION SCENARIO ***********
#      #TODO: Integrate with Optimize Model
# ***********************************************



# ******** MITIGATION SCENARIO # 1 *********
#      PUSH ALTERNATIVE SKU API
# ******************************************
@app_blueprint.route("/getalternativeskus", methods=['POST'])
def getalternativeskus():
    data = request.json
    altskudata = AzureBlobReader().read_csvfile("ui_data/pushalternativeskus.csv")
    altskubysku = altskudata[altskudata['RB SKU'] == data['rbsku']]
    altskudata.replace("", "-", inplace=True)
    return json.loads(altskubysku.to_json(orient='records'))


# ************* MITIGATION SCENARIO # 2 *************
# Get Reallocation across Retailers data by SKU code
# ***************************************************
@app_blueprint.route("/rarbysku", methods=['POST'])
def getrarbysku():
    data = request.json
    # reallocationdata = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="retailerreallocation")
    reallocationdata = AzureBlobReader().read_csvfile("ui_data/retailerreallocation.csv")
    # reallocationdatabysku = reallocationdata[reallocationdata['RB SKU'] == data['rbsku']]
    samplereallocationdata = reallocationdata.sample(10)
    samplereallocationdata.replace("", "-", inplace=True)
    return json.loads(samplereallocationdata.to_json(orient='records'))

# ***************************************
#      ExportData - Overview # TODO
# ***************************************


# ***********************************************
#     Within Channel, Across Channel # TODO
# ***********************************************



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
#       INDIRECT API CALLS & REDIRECTION - BELOW
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


