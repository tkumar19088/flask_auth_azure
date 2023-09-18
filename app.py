from flask import Flask, current_app
from flask_session import Session
import app_config
from blueprint_app.views import app_blueprint
from blueprint_userdata.views import userdata_blueprint
from blueprint_uiflow.views import uiflow_blueprint
from blueprint_mitigation.views import mitigation_blueprint
from werkzeug.middleware.proxy_fix import ProxyFix
from flask_cors import CORS,cross_origin

import logging
logging.getLogger('flask_cors').level = logging.DEBUG

global_user = {}
global_filters = {}

# Create the Flask app
app = Flask(__name__,
            static_folder="frontend/build/static",
            template_folder="frontend/build"
            )
cors = CORS(app)

app.config.from_object(app_config)
app.config['global_filters'] = {}
app.config['global_user'] = {}

app.register_blueprint(app_blueprint)
app.register_blueprint(userdata_blueprint)
app.register_blueprint(uiflow_blueprint)
app.register_blueprint(mitigation_blueprint)

Session(app)

app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)


if __name__ == "__main__":
    # app.run(debug=False, host="localhost", port=5000)
    app.run()