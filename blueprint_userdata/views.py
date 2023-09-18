from flask import (
    Blueprint,
    redirect,
    session,
    current_app,
    url_for,
    jsonify
)
from flask_cors import cross_origin
from utils import UserDataReaderBlobStorage, AlertsManager
from dotenv import load_dotenv
load_dotenv()


userdata_blueprint = Blueprint("userdata", __name__)


@cross_origin()
@userdata_blueprint.route("/getuserdata")
def getuserdata():
    global_user = current_app.config['global_user']
    global_filters = current_app.config['global_filters']

    if "user" not in session:
        return redirect(url_for("app.login"))

    uemail = session["user"]["preferred_username"]
    userDetails = UserDataReaderBlobStorage().getUserDetails(uemail) or {}
    if userDetails:
        filters = ['Business Unit', 'Customer', 'Location', 'Brand']
        global_user.update({f: userDetails[f] for f in filters if f in userDetails})
        current_app.config['global_user'] = global_user
        alertsdata = AlertsManager(global_filters, global_user).get_alerts()
        return {"user":userDetails, "alerts":alertsdata}
    else:
        return jsonify(status="Error", message="User not found!"), 500
