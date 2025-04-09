import jwt, datetime
from flask import current_app
from werkzeug.security import check_password_hash
from app.utils.db import get_db_connection

def authenticate(username, password):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT password FROM users WHERE username=?", (username,))
    result = c.fetchone()
    conn.close()

    if result and check_password_hash(result[0], password):
        token = jwt.encode({
            'username': username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, current_app.config['SECRET_KEY'], algorithm='HS256')
        return token
    return None
