from flask import Flask
from flask import render_template
from datetime import datetime

app = Flask(__name__)


@app.route("/")
def countdown():
    launchTime = datetime(2023, 6, 1)
    currentTime = datetime.now()
    diff = launchTime - currentTime
    numberOfDays = diff.days

    return render_template("countdown.html", time=numberOfDays)
