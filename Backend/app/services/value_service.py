from app.utils.db import get_db_connection

def fetch_all_values():
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT id, name, value FROM stored_values")
    data = [{'id': row[0], 'name': row[1], 'value': row[2]} for row in c.fetchall()]
    conn.close()
    return data

def get_value_from_db(value_id):
    conn = get_db_connection()
    c = conn.cursor()
    c.execute("SELECT value FROM stored_values WHERE id=?", (value_id,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else None
