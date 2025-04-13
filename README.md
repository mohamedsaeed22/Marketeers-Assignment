# MarketeersResearch Full-Stack Assignment

## Project Demo

<video width="100%" controls>
  <source src="https://drive.google.com/uc?export=download&id=1xqbX4blgpCewG9MQceizfWGKtzz3R7Iz" type="video/mp4">
  Your browser does not support the video tag.  
  **If the video doesn't load, [watch it here](https://drive.google.com/file/d/1xqbX4blgpCewG9MQceizfWGKtzz3R7Iz/view).**
</video>

## 1- Flask App with JWT Authentication, SQLite, and Socket.IO

## Description

This is a simple web application built with **Flask**, **JWT Authentication**, **SQLite** as the database, and **Socket.IO** for real-time communication. The application provides authentication and real-time updates, and can be easily integrated with a React frontend.

### Key Features:

- **JWT Authentication**: Secure login using JWT tokens.
- **SQLite Database**: Stores users and values.
- **Real-Time Communication**: Socket.IO for real-time updates on value changes.
- **CORS Support**: Handles cross-origin requests with Flask-CORS.

---

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Setup and Usage](#setup-and-usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohamedsaeed22/Marketeers-Assignment.git
   cd Backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up your environment variables by creating a `.env` file (see below).

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```ini
SECRET_KEY=your-secret-key
FRONTEND_URL=http://localhost:5173
DATABASE_URL=sqlite:///data.db
```

- **SECRET_KEY**: Used to sign the JWT tokens.
- **FRONTEND_URL**: The URL of your frontend (React app).
- **DATABASE_URL**: Path to your SQLite database file (default is `data.db`).

---

## Setup and Usage

1. **Initialize the Database**: The application will automatically create the database and tables if they don't already exist when it starts up.

2. **Run the Application**:

   ```bash
   python run.py
   ```

   This will start the Flask app on `http://localhost:5000` and WebSocket server for real-time communication.

3. **Frontend Integration**: The frontend (React app) should be configured to connect to the Flask backend at `http://localhost:5000`. Socket.IO connections will be made to the same server.

---

## Project Structure

```
Backend/
├── app/
│   ├── routes/
│   │   ├── auth_routes.py
│   │   └── value_routes.py
│   ├── services/
│   │   ├── auth_service.py
│   │   └── value_service.py
│   ├── utils/
│   │   ├── db.py
│   │   └── decorators.py
│   ├── __init__.py
│   └── socket_handlers.py
├── .gitignore
├── Frontend_README.md
├── data.db
├── requirements.txt
└── run.py

```

---

## Technologies Used

- **Flask**: Web framework for Python.
- **Flask-SocketIO**: Real-time communication via WebSockets.
- **Flask-CORS**: Handles Cross-Origin Resource Sharing (CORS).
- **SQLite**: Lightweight SQL database.
- **JWT (JSON Web Tokens)**: Secure authentication for API routes.
- **python-dotenv**: Loads environment variables from `.env` file.

---

## Notes

- Be sure to set the correct `SECRET_KEY` and `FRONTEND_URL` for your environment.
- The database (`data.db`) is automatically created and populated with sample data on the first run.
- Make sure to **ignore** your `.env` file in version control by adding it to `.gitignore`.

---

## 2- Frontend ReactJs

This is the frontend for **Marketeers Research Assignment** built using **React**, **TypeScript**, **Chakra UI**, **Redux**, and other modern libraries. It connects to a Flask backend for authentication and real-time updates.

### Key Features:

- **Chakra UI**: A modern component library for React that enables fast and accessible development.
- **Redux Toolkit**: State management with a modern approach.
- **React Hook Form**: Easy-to-use form handling in React.
- **Socket.IO Client**: Real-time communication with the Flask backend.
- **Axios**: HTTP client for making requests to the backend API.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohamedsaeed22/Marketeers-Assignment.git
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application in development mode:

   ```bash
   npm run dev
   ```

4. Build the application for production:

   ```bash
   npm run build
   ```

---

## Project Structure

```
Frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── axiosInstance.ts
│   ├── assets/
│   │   └── Marketeers-Logo-Blue.png
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── NotFound.tsx
│   ├── routes/
│   │   └── index.tsx
│   ├── services/
│   │   └── CookieService.ts
│   ├── store/
│   │   ├── auth/
│   │   │   └── actLogin.ts
│   │   ├── authSlice.ts
│   │   ├── data/
│   │   │   └── actGetData.ts
│   │   ├── dataSlice.ts
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── guards.ts
│   │   ├── index.ts
│   │   └── shared.ts
│   ├── utils/
│   │   └── axiosErrorHandler.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

## Dependencies

### Core Dependencies:

- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A component library for React that provides ready-to-use UI components.
- **Redux Toolkit**: Simplified Redux state management.
- **React Router DOM**: Routing library for React.
- **Socket.IO Client**: Enables real-time communication with the backend.
- **Axios**: Promise-based HTTP client for making requests to APIs.
- **React Hook Form**: Library for handling forms with minimal re-rendering.
- **Next-Themes**: A lightweight library for managing themes (e.g., light/dark modes).

### Development Dependencies:

- **Vite**: A fast and modern build tool for React.
- **TypeScript**: Superset of JavaScript that adds type safety.
- **ESLint**: Linter for JavaScript/TypeScript to enforce coding standards.
- **Prettier**: Code formatter for maintaining consistent code style.

---

## Environment Variables

Create a `.env` file in the root directory for the following variables:

```ini
VITE_API_URL=http://localhost:5000
```

- **VITE_API_URL**: URL for the Flask backend API.

---

## Running the App

1. To run the app locally:

   ```bash
   npm run dev
   ```

2. The app will be available at `http://localhost:3000` by default.

---
