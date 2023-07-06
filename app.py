from flask import Flask
from flask import render_template
from datetime import datetime
from flask import Flask, session

app = Flask(__name__)


@app.route("/")
def countdown():
    # if "user" in session:
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


if __name__ == "__main__":
    app.run(debug=True)
