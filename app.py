from flask import Flask, render_template, session, redirect, request, url_for
from datetime import datetime
from flask_session import Session
from msal import ConfidentialClientApplication, SerializableTokenCache
import app_config

from werkzeug.middleware.proxy_fix import ProxyFix

# Create the Flask app
app = Flask(
    __name__, static_folder="frontend/build/static", template_folder="frontend/build"
)
app.config.from_object(app_config)
Session(app)

app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)


@app.route("/")
def index():
    if "user" in session:
        # launchTime = datetime(2023, 7, 30)
        # currentTime = datetime.now()
        # diff = launchTime - currentTime
        # numberOfDays = diff.days
        # uname = session["user"].get("name")
        # urole = session["user"].get("roles")[0]
        # return render_template(

        #     "countdown.html",
        #     time=numberOfDays,
        #     uname=uname,
        #     urole=urole,
        # )
        return render_template("index.html")  # , uname=uname, urole=urole)
    else:
        return redirect(url_for("login"))


@app.route("/login")
def login():
    # Technically we could use empty list [] as scopes to do just sign in,
    # here we choose to also collect end user consent upfront
    session["flow"] = _build_auth_code_flow(scopes=app_config.SCOPE)
    auth_url = session["flow"]["auth_uri"]
    return redirect(auth_url)


@app.route("/redirect")
def authorized():
    try:
        cache = _load_cache()
        result = _build_msal_app(cache=cache).acquire_token_by_auth_code_flow(
            session.get("flow", {}), request.args
        )
        if "error" in result:
            return render_template("auth_error.html", result=result)
        session["user"] = result.get("id_token_claims")
        print(f'\n\n{session["user"]}\n\n')
        _save_cache(cache)
    except ValueError:  # Usually caused by CSRF
        pass  # Simply ignore them
    return redirect(url_for("index"))


@app.route("/logout")
def logout():
    session.clear()  # Wipe out user and its token cache from session
    return redirect(  # Also logout from your tenant's web session
        app_config.AUTHORITY
        + "/oauth2/v2.0/logout"
        + "?post_logout_redirect_uri="
        + url_for("index", _external=True)
    )


def _load_cache():
    cache = SerializableTokenCache()
    if session.get("token_cache"):
        cache.deserialize(session["token_cache"])
    return cache


def _save_cache(cache):
    if cache.has_state_changed:
        session["token_cache"] = cache.serialize()


def _build_msal_app(cache=None, authority=None):
    return ConfidentialClientApplication(
        app_config.CLIENT_ID,
        authority=app_config.AUTHORITY,
        client_credential=app_config.CLIENT_SECRET,
        token_cache=cache,
    )


def _build_auth_code_flow(authority=None, scopes=None):
    return _build_msal_app(authority=authority).initiate_auth_code_flow(
        scopes or [], redirect_uri=url_for("authorized", _external=True)
    )


if __name__ == "__main__":
    # app.run(debug=False, host="localhost", port=5000)
    app.run()
