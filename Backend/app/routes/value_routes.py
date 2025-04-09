from flask import Blueprint, jsonify
from app.utils.decorators import token_required
from app.services.value_service import fetch_all_values

value_bp = Blueprint('value', __name__, url_prefix='/api')

@value_bp.route('/values', methods=['GET'])
@token_required
def get_values(current_user):
    return jsonify(fetch_all_values())
