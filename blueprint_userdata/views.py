from flask import Blueprint, current_app, jsonify
from flask_cors import cross_origin
from utils import AlertsManager
from dotenv import load_dotenv

load_dotenv()


userdata_blueprint = Blueprint("userdata", __name__)


@cross_origin()
@userdata_blueprint.route("/getuserdata")
# def getuserdata():
#     try:
#         global_user = current_app.config['global_user']
#         global_filters = current_app.config['global_filters']
#         if "user" not in session:
#             return redirect(url_for("app.login"))

#         uemail = session["user"]["preferred_username"]
#         userDetails = UserDataReaderBlobStorage().getUserDetails(uemail) or {}
#         if userDetails:
#             filters = ['Business Unit', 'Customer', 'Location', 'Brand']
#             global_user.update({f: userDetails[f] for f in filters if f in userDetails}) # type: ignore
#             current_app.config['global_user'] = global_user
#             alertsdata = AlertsManager(global_filters, global_user).get_alerts()
#             data = {"user": userDetails, "alerts": alertsdata.get("data", [])}
#             response = {
#                             "status": "success",
#                             "status_code": 200,
#                             "message": "User data retrieved successfully",
#                             "data": data,
#                         }
#         else:
#             response = {
#                         "status": "error",
#                         "status_code": 404,
#                         "message": "User not found!",
#                         "data": "",
#                     }
#     except Exception as e:
#         response = {
#                         "status": "error",
#                         "status_code": e.__dict__.get("status_code", 500),
#                         "message": e.__dict__.get("reason", "Internal Server Error"),
#                     }
#     return jsonify(response)
#     return response


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
        global_user = current_app.config["global_user"]
        global_filters = current_app.config["global_filters"]
        # {'Name': 'Pavan Kumar',  'Email': 'pavan.kumar@artefact.com',  'Business Unit': '["Hygiene", "Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick", "Gaviscon"]',  'PersonType': 'SteerCo',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Edit',  'Irregular PO': 'View',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Kumar  Pavan (Contractor)',  'Email': 'Pavan.Kumar1@reckitt.com',  'Business Unit': '["Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Gaviscon"]',  'PersonType': 'Commercial Health',  'OOS Landing Screen': 'Customer',  'High Risk - Reckitt': 'Restricted',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Edit',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Moka  Keerthi',  'Email': 'keerthi.moka@artefact.com',  'Business Unit': '["Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Gaviscon"]',  'PersonType': 'Supply Health',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'View',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Pavankumar Tunduri',  'Email': 'ptunduri@hotmail.com',  'Business Unit': '["Health"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Gaviscon"]',  'PersonType': 'Planning Health',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Angela Assaf',  'Email': 'angela.assaf@artefact.com',  'Business Unit': '["Hygiene"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick"]',  'PersonType': 'Commerical Hygiene',  'OOS Landing Screen': 'Customer',  'High Risk - Reckitt': 'Restricted',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Edit',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Keerthi Moka',  'Email': 'keerthi.moka@reckitt.com',  'Business Unit': '["Hygiene"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick"]',  'PersonType': 'Supply Hygiene',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'View',  'Sell in/ Sell out': 'View'}
        # {'Name': 'Angela Assaf (Contractor)',  'Email': 'angela.assaf@reckitt.com',  'Business Unit': '["Hygiene"]',  'Location': '["United Kingdom"]',  'Customer': '["Asda", "Amazon"]',  'Brand': '["Airwick"]',  'PersonType': 'Planning Supply',  'OOS Landing Screen': 'Reckitt',  'High Risk - Reckitt': 'View',  'High Risk - Customer': 'View',  'Push Alternative': 'View',  'Reallocate': 'Restricted',  'Irregular PO': 'Restricted',  'Sell in/ Sell out': 'View'}

        userDetails = {
            "Name": "Pavan Kumar",
            "Email": "pavan.kumar@artefact.com",
            "Business Unit": ["Hygiene", "Health"],
            "Location": ["United Kingdom"],
            "Customer": ["Asda", "Amazon"],
            "Brand": ["Airwick", "Gaviscon"],
            "PersonType": "SteerCo",
            "OOS Landing Screen": "Reckitt",
            "High Risk - Reckitt": "View",
            "High Risk - Customer": "View",
            "Push Alternative": "View",
            "Reallocate": "Edit",
            "Irregular PO": "View",
            "Sell in/ Sell out": "View",
        }

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
                        "data": ""
                    }
    # return jsonify(response)
    return response

