from flask import (
    Blueprint,
    jsonify,
    render_template,
    redirect,
    session,
    request,
    url_for,
)
import os
from msal import ConfidentialClientApplication, SerializableTokenCache
import app_config

from utils import UserDataReader, AzureBlobReader

from dotenv import load_dotenv
load_dotenv()
excel_blob_name = os.getenv("excel_blob_name")
parquet_blob_name = os.getenv("parquet_blob_name")

# *******************************
# Create the app access objects
# *******************************
app_blueprint = Blueprint("app", __name__)



# *******************************
# Application login routes
# *******************************
@app_blueprint.route("/")
def index():
    """
    The function checks if a user is logged in, retrieves their details, and renders the index.html
    template with the user's details if they are logged in, otherwise it redirects to the login page.

    :return: either the rendered template "index.html" with the user details if the "user" key is
    present in the session, or it is redirecting to the "login" route if the "user" key is not present
    in the session.
    """
    ### #UnComment below lines if bypassing user authentication

    # if "user" in session:
    #     uname = session["user"]["name"]
    #     # userDetails = UserDataReader.get_user_details(uname) # type: ignore
    #     # print(f"\n\n{userDetails}\n\n")
    #     # overviewdata = AzureBlobReader.read_excel(excel_blob_name) # type: ignore
    #     return render_template("index.html", user=uname)
    # else:
    #     return redirect(url_for("app.login"))

    ### #Comment below line if uncommenting above lines
    data = {'user': 'Moka, keerthi (Contractor)'}
    return jsonify(data)
    # return render_template("index.html")

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
        scopes or [], redirect_uri=url_for("app.authorized", _external=True)
    )


