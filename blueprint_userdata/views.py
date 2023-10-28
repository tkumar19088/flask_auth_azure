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
# def getuserdata():
#     global_user = current_app.config['global_user']
#     global_filters = current_app.config['global_filters']
#     if "user" not in session:
#         return redirect(url_for("app.login"))

#     uemail = session["user"]["preferred_username"]
#     userDetails = UserDataReaderBlobStorage().getUserDetails(uemail) or {}
#     if userDetails:
#         filters = ['Business Unit', 'Customer', 'Location', 'Brand']
#         global_user.update({f: userDetails[f] for f in filters if f in userDetails}) # type: ignore
#         current_app.config['global_user'] = global_user
#         alertsdata = AlertsManager(global_filters, global_user).get_alerts()
#         return {"user":userDetails, "alerts":alertsdata}
#     else:
#         return jsonify(status="error", message="User not found!"), 500

def getuserdata():
    """
    Retrieves user data and alerts based on the user's details and filters.

    Returns:
        dict: A dictionary with two keys: "user" and "alerts". The value of the "user" key is the userDetails dictionary, 
        and the value of the "alerts" key is the result of calling the `get_alerts()` method of the `AlertsManager` class 
        with the `global_filters` and `global_user` variables as arguments.

    Raises:
        Exception: If any error occurs.
    """
    try:
        global_user = current_app.config['global_user']
        global_filters = current_app.config['global_filters']
        # {'Name': 'Pavan Kumar',  'Email': 'pavan.kumar@artefact.com',  'Business Unit': '["Hygiene", "Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick", "Gaviscon"]',  'PersonType': 'SteerCo',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Edit',  'Irregular PO': 'View',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Kumar  Pavan (Contractor)',  'Email': 'Pavan.Kumar1@reckitt.com',  'Business Unit': '["Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Gaviscon"]',  'PersonType': 'Commercial Health',  'OOS Landing Screen': 'Customer',  'High Risk - Reckitt': 'Restricted',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Edit',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Moka  Keerthi',  'Email': 'keerthi.moka@artefact.com',  'Business Unit': '["Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Gaviscon"]',  'PersonType': 'Supply Health',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'View',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Pavankumar Tunduri',  'Email': 'ptunduri@hotmail.com',  'Business Unit': '["Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Gaviscon"]',  'PersonType': 'Planning Health',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Angela Assaf',  'Email': 'angela.assaf@artefact.com',  'Business Unit': '["Hygiene"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick"]',  'PersonType': 'Commerical Hygiene',  'OOS Landing Screen': 'Customer',  'High Risk - Reckitt': 'Restricted',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Edit',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Keerthi Moka',  'Email': 'keerthi.moka@reckitt.com',  'Business Unit': '["Hygiene"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick"]',  'PersonType': 'Supply Hygiene',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'View',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Angela Assaf (Contractor)',  'Email': 'angela.assaf@reckitt.com',  'Business Unit': '["Hygiene"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick"]',  'PersonType': 'Planning Supply',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}

        userDetails = {'Name': 'Pavan Kumar',
                       'Email': 'pavan.kumar@artefact.com',
                       'Business Unit': ["Hygiene", "Health"],
                       'Location': ["United Kingdom"],
                       'Customer': ["Asda", "Amazon"],
                       'Brand': ["Airwick", "Gaviscon"],
                       'PersonType': 'SteerCo',
                       'OOS Landing Screen': 'Reckitt',
                       'High Risk - Reckitt': 'View',
                       'High Risk - Customer': 'View',
                       'Push Alternative': 'View',
                       'Reallocate': 'Edit',
                       'Irregular PO': 'View',
                       'Sell in/ Sell out': 'View'}
        if userDetails:
            filters = ['Business Unit', 'Customer', 'Location', 'Brand','PersonType','OOS Landing Screen','High Risk - Reckitt','High Risk - Customer','Push Alternative','Reallocate','Irregular PO','Sell in/ Sell out']
            global_user.update({f: userDetails[f] for f in filters if f in userDetails}) # type: ignore
            current_app.config['global_user'] = global_user
            alertsdata = AlertsManager(global_filters, global_user).get_alerts()
            return {"user":userDetails, "alerts":alertsdata}
        else:
            return jsonify(status="error", message="User not found!"), 500
    except Exception as e:
        return jsonify(status="error", message=str(e)), 500
