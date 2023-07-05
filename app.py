from flask import Flask
from flask import render_template, redirect, url_for
from datetime import datetime
from flask_dance.contrib.azure import make_azure_blueprint, azure

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
    userrole = azure.token["roles"]
    launchTime = datetime(2023, 7, 30)
    currentTime = datetime.now()
    diff = launchTime - currentTime
    numberOfDays = diff.days

    return render_template("countdown.html", time=numberOfDays, role=userrole)


if __name__ == "__main__":
    app.run(debug=True)
