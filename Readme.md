# 🗂️ Task Management REST API

This is a simple Task Management backend system built with **Node.js**, **Express.js**, and **MongoDB**, designed as part of the **GEMS Internship Backend Task**.

It supports secure user authentication and provides CRUD operations for managing tasks.

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 JWT-based Authentication
- 🔎 Input Validation with `express-validator`
- 🧾 CRUD for Tasks
- 🔄 Auto-assign tasks to the logged-in user
- 🧠 MongoDB & Mongoose ODM
- 🧼 Clean and modular code

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- express-validator
- dotenv

---

## 📁 Folder Structure
.
├── controllers/
│ ├── userController.js
│ └── taskController.js
├── models/
│ ├── User.js
│ └── Task.js
├── routes/
│ ├── userRoutes.js
│ └── taskRoutes.js
├── middleware/
│ ├── auth.js
│ └── validate.js
├── validators/
│ ├── userValidator.js
│ └── taskValidator.js
├── .env
├── server.js
└── README.md


---

## 🧪 API Endpoints

### 🔐 Auth & User Management

| Method | Endpoint         | Description               | Access |
|--------|------------------|---------------------------|--------|
| POST   | `/api/users`     | Register a new user       | Public |
| POST   | `/api/login`     | Login and get JWT token   | Public |
| GET    | `/api/users`     | Get all users             | Private |
| GET    | `/api/users/:id` | Get user by ID            | Private |
| PUT    | `/api/users/:id` | Update user's name/email  | Private |

### 🗂️ Task Management

| Method | Endpoint           | Description                    | Access |
|--------|--------------------|--------------------------------|--------|
| POST   | `/api/tasks`       | Create a new task              | Private |
| GET    | `/api/tasks`       | List all tasks                 | Private |
| GET    | `/api/tasks/:id`   | Get task by ID                 | Private |
| PUT    | `/api/tasks/:id`   | Update task                    | Private |
| DELETE | `/api/tasks/:id`   | Delete task by ID              | Private |

---

  



