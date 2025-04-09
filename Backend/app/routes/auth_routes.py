from flask import Blueprint, request, jsonify
from app.services.auth_service import authenticate

auth_bp = Blueprint('auth', __name__, url_prefix='/api')

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    token = authenticate(data.get('username'), data.get('password'))
    if token:
        return jsonify({'success': True, 'message': 'Login successful', 'data': {'token': token}})
    return jsonify({'success': False, 'message': 'Username or Password Incorrect', 'data': None}), 401
