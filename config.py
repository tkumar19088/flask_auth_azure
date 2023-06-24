from os import environ, path
from dotenv import load_dotenv

# Load environment variables from .env file
basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, ".env"))


class Config:
    """Configuration from environment variables."""

    SECRET_KEY = environ.get("SECRET_KEY")
    FLASK_ENV = environ.get("FLASK_DEBUG")
    FLASK_APP = "wsgi.py"

    # Flask-Assets
    LESS_BIN = environ.get("LESS_BIN")
    ASSETS_DEBUG = True
    LESS_RUN_IN_DEBUG = True

    # Static Assets
    STATIC_FOLDER = "static"
    TEMPLATES_FOLDER = "templates"
    COMPRESSOR_DEBUG = True

    # Datadog
    DD_SERVICE = environ.get("DD_SERVICE")

    # API
    BEST_BUY_API_KEY = environ.get("BEST_BUY_API_KEY")

    # class Config:
    #     """Set Flask configuration vars from .env file."""

    #     # General Config
    #     ENVIRONMENT = environ.get("ENVIRONMENT")
    #     FLASK_APP = environ.get("FLASK_APP")
    #     FLASK_DEBUG = environ.get("FLASK_DEBUG")
    #     SECRET_KEY = environ.get("SECRET_KEY")
    #     STATIC_FOLDER = "static"
    #     TEMPLATES_FOLDER = "templates"

    #     # Database
    #     SQLALCHEMY_DATABASE_URI = environ.get("SQLALCHEMY_DATABASE_URI")
    #     SQLALCHEMY_TRACK_MODIFICATIONS = False

    #     # AWS Secrets
    #     AWS_SECRET_KEY = environ.get("AWS_SECRET_KEY")
    #     AWS_KEY_ID = environ.get("AWS_KEY_ID")

    # class Config:
    #     """Base config."""

    #     SECRET_KEY = environ.get("SECRET_KEY")
    #     SESSION_COOKIE_NAME = environ.get("SESSION_COOKIE_NAME")
    #     STATIC_FOLDER = "static"
    #     TEMPLATES_FOLDER = "templates"

    # class ProdConfig(Config):
    #     """Production config."""

    #     FLASK_ENV = "production"
    #     FLASK_DEBUG = False
    #     DATABASE_URI = environ.get("PROD_DATABASE_URI")

    # class DevConfig(Config):
    """Development config."""

    FLASK_ENV = "development"
    FLASK_DEBUG = True
    DATABASE_URI = environ.get("DEV_DATABASE_URI")
