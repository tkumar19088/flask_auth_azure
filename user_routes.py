from flask import (
    Blueprint,
    render_template,
    redirect,
    session,
    request,
    url_for,
    jsonify
)
from flask_cors import CORS, cross_origin
from msal import ConfidentialClientApplication, SerializableTokenCache
import app_config
import json
from utils import AzureBlobReader, UserDataReaderBlobStorage
from dotenv import load_dotenv
load_dotenv()

global_variables = {}


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
    if "user" in session:
        return render_template("index.html")
    else:
        return redirect(url_for("app.login"))


# **********************
# Get User Data objects
# **********************
@cross_origin()
@app_blueprint.route("/getuserdata")
def getuserdata():
    if "user" in session:
        uemail = session["user"]["preferred_username"]
        userDetails = UserDataReaderBlobStorage().getUserDetails(uemail)
        return userDetails
    else:
        return redirect(url_for("app.login"))


# ************************************
# Get filter parameters from homepage
# ************************************
@app_blueprint.route('/getfilterparams', methods=['POST'])
def getfilterparams():
    try:
        data = request.json
        for key, value in data.items():
            global_variables[key] = value
            print(global_variables)
        return jsonify(status="success", message="Data Received!"), 200
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500


# # ************************************
# # Get ALL overview highrisk data
# # ************************************
# @app_blueprint.route("/getoverviewhighriskdata")
# def getoverviewhighriskdata():
#     overviewdata = AzureBlobReader().read_xls("overviewhighrisksku.xlsx")
#     sampleohrdata = overviewdata.sample(20)
#     return json.loads(sampleohrdata.to_json(orient='records'))


# # ************************************
# # Get ALL campaigns by SKU data
# # ************************************
# @app_blueprint.route("/getcampaignsdata")
# def getcampaignsdata():
#     # excel_blob_name = os.getenv("excel_blob_name")
#     campaignsdata = AzureBlobReader().read_xls("campaignsbysku.xlsx")
#     samplecampaignsdata = campaignsdata.sample(20)
#     return json.loads(samplecampaignsdata.to_json(orient='records'))


# *****************************************************
# Get FILTERED overview highrisk data by filter params
# *****************************************************
@app_blueprint.route("/getfilteredoverview", methods=['POST'])
def getfilteredoverview():
    data = request.json
    print(data)
    if data['customer']:
        ohr = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="customeroverviewdatarepo")
    else:
        ohr = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="reckittoverviewdatarepo")

    if global_variables:
        filters = ['Business Unit', 'Location', 'Customer', 'Brand']
        for filter_key in filters:
            if filter_key in global_variables.keys():
                ohr = ohr[ohr[filter_key] == global_variables[filter_key]]
        return json.loads(ohr.to_json(orient='records'))
    else:
        return jsonify(status="Error", message="Choose above filters to view data"), 500



# *********************************************
# Get FILTERED campaigns data by filter params
# *********************************************
@app_blueprint.route("/getfilteredcampaigns", methods=['POST'])
def getfilteredcampaigns():
    data = request.json
    if data['customer']:
        campaigns = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="customercampaignsbysku")
    else:
        campaigns = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="reckittcampaignsbysku")
    campaignsbysku = campaigns[campaigns['RB SKU'] == data['rbsku']]
    filters = ['Business Unit', 'Location', 'Customer', 'Brand']
    for filter_key in filters:
        if filter_key in global_variables.keys():
            campaignsbysku = campaignsbysku[campaignsbysku[filter_key] == global_variables[filter_key]]
    return json.loads(campaignsbysku.to_json(orient='records'))


# ******** MITIGATION SCENARIO # 1 *********
# Get Push alternative SKU data by SKU code
# ******************************************
@app_blueprint.route("/getalternativeskus", methods=['POST'])
def getalternativeskus():
    data = request.json
    altskudata = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="pushalternativeskus")
    altskubysku = altskudata[altskudata['RB SKU'] == data['rbsku']]
    return json.loads(altskubysku.to_json(orient='records'))


# ************* MITIGATION SCENARIO # 2 *************
# Get Reallocation across Retailers data by SKU code
# ***************************************************
@app_blueprint.route("/rarbysku", methods=['POST'])
def getrarbysku():
    data = request.json
    reallocationdata = AzureBlobReader().read_xls("smartola_data.xlsx", sheet="retailerreallocation")
    # reallocationdatabysku = reallocationdata[reallocationdata['RB SKU'] == data['rbsku']]
    samplereallocationdata = reallocationdata.sample(10)
    return json.loads(samplereallocationdata.to_json(orient='records'))


@app_blueprint.route("/login")
def login():
    """
    The `login` function redirects the user to the authentication URL for logging in.
    :return: a redirect to the authentication URL.
    """
    session["flow"] = _build_auth_code_flow(scopes=app_config.SCOPE)
    auth_url = session["flow"]["auth_uri"]
    return redirect(auth_url)

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


