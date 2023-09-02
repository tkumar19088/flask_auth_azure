from flask import Flask
from flask_session import Session
import app_config
from user_routes import app_blueprint
from werkzeug.middleware.proxy_fix import ProxyFix
from flask_cors import CORS,cross_origin



# Create the Flask app
app = Flask(
    __name__, static_folder="frontend/build/static", template_folder="frontend/build"
)
CORS(app, origins="*")


# app = Flask(__name__)
# CORS(app, resources={r"*": {"origins": "*"}})


# Load configuration settings
app.config.from_object(app_config)
app.register_blueprint(app_blueprint)

Session(app)

app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)


if __name__ == "__main__":
    # app.run(debug=False, host="localhost", port=5000)
    app.run()