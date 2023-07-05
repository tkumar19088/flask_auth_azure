from flask import Flask
from flask import render_template, redirect, url_for
from datetime import datetime
from flask_dance.contrib.azure import make_azure_blueprint, azure
from flask import Flask, session

app = Flask(__name__)

# azure_bp = make_azure_blueprint()
# app.register_blueprint(azure_bp, url_prefix="/login")


# @app.route("/")
# def index():
#     if not azure.authorized:
#         return redirect(url_for("azure.login"))
#     return "Welcome to the Flask app!"


@app.route("/")
def countdown():
    if "user" in session:
        user = session["user"]
        # Read the user's role from the session
        user_role = user.get("role")
        launchTime = datetime(2023, 7, 30)
        currentTime = datetime.now()
        diff = launchTime - currentTime
        numberOfDays = diff.days
        return render_template(
            "countdown.html",
            time=numberOfDays,
            username=user["name"],
            userrole=user_role,
        )
    else:
        return render_template(
            "countdown.html",
            time="#0#0",
            username="UNAUTHORISED",
            userrole="UNAUTHORISED",
        )


if __name__ == "__main__":
    app.run(debug=True)
