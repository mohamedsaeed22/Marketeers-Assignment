from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO
from dotenv import load_dotenv
import os
from .utils.db import init_db
from .routes.auth_routes import auth_bp
from .routes.value_routes import value_bp
from .socket_handlers import register_socket_events

# Load environment variables from .env file
load_dotenv()

socketio = SocketIO(cors_allowed_origins=os.getenv('FRONTEND_URL'))

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True)
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

    init_db()

    # Register Blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(value_bp)

    # Register Socket Events
    register_socket_events(socketio)

    socketio.init_app(app)
    return app
