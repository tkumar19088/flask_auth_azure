import math
from flask import Blueprint, current_app, jsonify, session, redirect, url_for
from flask_cors import cross_origin
from utils import AlertsManager, UserDataReaderBlobStorage
from dotenv import load_dotenv

load_dotenv()


userdata_blueprint = Blueprint("userdata", __name__)


@cross_origin()
@userdata_blueprint.route("/getuserdata")
def getuserdata():
    try:
        global_user = current_app.config["global_user"]
        global_filters = current_app.config["global_filters"]

        if "user" not in session:
            return redirect(url_for("app.login"))

        uemail = session["user"]["preferred_username"]
        userdata = UserDataReaderBlobStorage().getUserDetails(uemail) or {}
        userdata["data"]["Brand"] = [
            brand.replace(" ", "").title() for brand in userdata["data"]["Brand"]
        ]

        userDetails = userdata["data"]

        filters = [
            "Business Unit",
            "Customer",
            "Location",
            "Brand",
            "PersonType",
            "OOS Landing Screen",
            "High Risk - Reckitt",
            "High Risk - Customer",
            "Push Alternative",
            "Reallocate",
            "Irregular PO",
            "Sell in/ Sell out",
        ]

        if userDetails:
            global_user.update({f: userDetails[f] for f in filters if f in userDetails})  # type: ignore
            current_app.config["global_user"] = global_user
            resp = AlertsManager(global_filters, global_user).get_alerts()
            alertsdata = resp.get("data", [])

            for alert in alertsdata:
                for item in alert['DATA']:
                    if 'Value' in item and isinstance(item['Value'], float) and math.isnan(item['Value']):
                        item['Value'] = 0.0

            data = {"user": userDetails, "alerts": alertsdata}

            response = {
                "status": "success",
                "status_code": 200,
                "message": "User data retrieved successfully",
                "data": data,
            }
        else:
            response = {
                "status": "error",
                "status_code": 404,
                "message": "User not found!",
                "data": "",
            }
    except Exception as e:
        response = {
            "status": "error",
            "status_code": e.__dict__.get("status_code", 500),
            "message": e.__dict__.get("reason", "Internal Server Error"),
            "data": "",
        }
    # return jsonify(response)
    return response

