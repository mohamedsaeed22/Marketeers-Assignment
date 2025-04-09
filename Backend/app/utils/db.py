import sqlite3
from werkzeug.security import generate_password_hash

def get_db_connection():
    return sqlite3.connect('data.db')

def init_db():
    conn = get_db_connection()
    c = conn.cursor()

    c.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )''')

    c.execute('''CREATE TABLE IF NOT EXISTS stored_values (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        value REAL NOT NULL
    )''')

    c.execute("SELECT COUNT(*) FROM users")
    if c.fetchone()[0] == 0:
        c.execute("INSERT INTO users (username, password) VALUES (?, ?)",
                  ('admin', generate_password_hash('password123')))

    c.execute("SELECT COUNT(*) FROM stored_values")
    if c.fetchone()[0] == 0:
        c.executemany("INSERT INTO stored_values (name, value) VALUES (?, ?)", [
            ('Item 1', 100), ('Item 2', 200), ('Item 3', 300), ('Item 4', 400), ('Item 5', 500)
        ])

    conn.commit()
    conn.close()
