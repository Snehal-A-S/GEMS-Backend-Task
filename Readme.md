# 🗂️ User And Task Management REST API

This is a Task Management backend application built using **Node.js**, **Express.js**, and **MongoDB**, developed as part of the **GEMS Internship Backend Task**.

It provides secure user authentication and a full set of CRUD operations for managing tasks.

---

## 🚀 Features

- 🔐 User Registration & Login
- ✅ JWT-based Authentication
- 🔎 Input Validation with express-validator
- 🧾 Full CRUD for Tasks
- 🧠 MongoDB + Mongoose ODM
- 🔒 Protected Routes using Middleware

---

## 🔐 Security Measures

- 🔑 **Passwords are securely hashed using `bcryptjs`** before storing in the database. Plain text passwords are never saved.
- 🔐 JWT-based authentication ensures protected access to API routes.
- 🚫 Sensitive configuration like database URIs and JWT secrets are stored in `.env` (ignored via `.gitignore`).
- ✅ Input validation is enforced using `express-validator`.

---

## 📁 Folder Structure

```
.
├── controllers/             # Functions to handle request logic
│   ├── userController.js    # User-related operations (register, login, etc.)
│   └── taskController.js    # Task-related operations (CRUD tasks)
│
├── models/                  # Mongoose schemas (MongoDB models)
│   ├── User.js              # User schema definition
│   └── Task.js              # Task schema definition
│
├── routes/                  # Express route definitions
│   ├── userRoutes.js        # Routes for user-related APIs
│   └── taskRoutes.js        # Routes for task-related APIs
│
├── validators/              # Input validation logic
│   ├── userValidator.js     # Validation for user inputs
│   └── taskValidator.js     # Validation for task inputs
│
├── middleware/              # Custom middleware
│   ├── auth.js              # Auth middleware for JWT verification
│   └── validate.js          # Middleware to handle validation errors
│
├── .env                     # Environment variables (not pushed to GitHub)
├── server.js                # Main entry point of the app
└── README.md                # Project documentation

```

---

## ⚙️ Installation & Setup

1. **Clone the Repository**
```bash
git clone https://github.com/Snehal-A-S/gems-task-api.git
cd gems-task-api
```

2. **Install Dependencies**
```bash
npm install
```

3. **Create `.env` File**
```env
PORT=5000
MONGO_URI=mongodb+srv://youruser:yourpass@cluster.mongodb.net/yourdb
JWT_SECRET=some_super_secret_key
```

4. **Run the Server**
```bash
node server.js
```

---

## 🔐 Authentication Format

All protected routes require a token in the headers:
```
Authorization: Bearer <your_jwt_token>
```

---

## 📘 API Documentation

---

### 👤 User Management

---

#### ➤ Register User

- **POST** `/users`
- **Body:**
```json
{
  "name": "Snehal",
  "email": "snehal@example.com",
  "password": "123456"
}
```
- **Response:**
```json
{
  "message": "User registered successfully"
}
```

---

#### ➤ Login User

- **POST** `/login`
- **Body:**
```json
{
  "email": "snehal@example.com",
  "password": "123456"
}
```
- **Response:**
```json
{
  "token": "<JWT_TOKEN>",
  "message": "Login successful"
}
```

---

#### ➤ Get All Users

- **GET** `/users`
- **Headers:**
```
Authorization: Bearer <token>
```
- **Response:**
```json
[
  {
    "_id": "userId1",
    "name": "Snehal",
    "email": "snehal@example.com"
  }
]
```

---

#### ➤ Get User by ID

- **GET** `/users/:id`
- **Headers:** JWT required
- **Response:**
```json
{
  "_id": "userId1",
  "name": "Snehal",
  "email": "snehal@example.com"
}
```

---

#### ➤ Update User

- **PUT** `/users/:id`
- **Headers:** JWT required
- **Body:**
```json
{
  "name": "Updated Name",
  "email": "updated@example.com"
}
```
- **Response:**
```json
{
  "_id": "userId1",
  "name": "Updated Name",
  "email": "updated@example.com"
}
```

---

### 📋 Task Management

---

#### ➤ Create Task

- **POST** `/tasks`
- **Headers:** JWT required
- **Body:**
```json
{
  "title": "Complete backend",
  "description": "Finish the GEMS API",
  "dueDate": "2025-08-10"
}
```
- **Response:**
```json
{
  "_id": "taskId1",
  "title": "Complete backend",
  "description": "Finish the GEMS API",
  "dueDate": "2025-08-10T00:00:00.000Z",
  "status": "pending",
  "assignedUser": "userId1",
  "createdAt": "2025-08-03T12:00:00.000Z"
}
```

---

#### ➤ Get All Tasks

- **GET** `/tasks`
- **Headers:** JWT required
- **Response:**
```json
[
  {
    "_id": "taskId1",
    "title": "Complete backend",
    "description": "Finish the GEMS API",
    "status": "pending",
    "dueDate": "2025-08-10T00:00:00.000Z",
    "assignedUser": {
      "_id": "userId1",
      "name": "Snehal",
      "email": "snehal@example.com"
    }
  }
]
```

---

#### ➤ Get Task by ID

- **GET** `/tasks/:id`
- **Headers:** JWT required
- **Response:**
```json
{
  "_id": "taskId1",
  "title": "Complete backend",
  "description": "Finish the GEMS API",
  "status": "pending",
  "dueDate": "2025-08-10T00:00:00.000Z",
  "assignedUser": {
    "_id": "userId1",
    "name": "Snehal",
    "email": "snehal@example.com"
  }
}
```

---

#### ➤ Update Task

- **PUT** `/tasks/:id`
- **Headers:** JWT required
- **Body:**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "in progress",
  "dueDate": "2025-08-12"
}
```
- **Response:**
```json
{
  "_id": "taskId1",
  "title": "Updated title",
  "description": "Updated description",
  "status": "in progress",
  "dueDate": "2025-08-12T00:00:00.000Z"
}
```

---

#### ➤ Delete Task

- **DELETE** `/tasks/:id`
- **Headers:** JWT required
- **Response:**
```json
{
  "message": "Task deleted successfully"
}
```

---

## 🧪 Input Validation Summary

### 🔹 User Validation

| Field    | Type     | Validation                         |
|----------|----------|-------------------------------------|
| name     | string   | required                            |
| email    | string   | must be a valid email               |
| password | string   | min 6 characters                    |

### 🔹 Task Validation

| Field      | Type     | Validation                                  |
|------------|----------|----------------------------------------------|
| title      | string   | required                                     |
| description| string   | optional                                     |
| dueDate    | date     | optional, must be ISO date                   |
| status     | string   | must be one of: `pending`, `in progress`, `completed`

---



## 📎 Project Info

- **Project:** GEMS Internship Backend Task
- **Developer:** Snehal Suryavanshi
- **GitHub Repo:** [https://github.com/Snehal-A-S/gems-task-api](https://github.com/Snehal-A-S/gems-task-api)

---

## 🤝 Contact

📧 snehalsuryavanshi@ieee.org

---


