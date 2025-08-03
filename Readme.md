# 🗂️User And Task Management REST API

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

## 🧪 API Endpoints

### 🔐 Auth & User Management

| Method | Endpoint         | Description               | Access |
|--------|------------------|---------------------------|--------|
| POST   | `/users`     | Register a new user       | Public |
| POST   | `/login`     | Login and get JWT token   | Public |
| GET    | `/users`     | Get all users             | Private |
| GET    | `/users/:id` | Get user by ID            | Private |
| PUT    | `/users/:id` | Update user's name/email  | Private |

### 🗂️ Task Management

| Method | Endpoint           | Description                    | Access |
|--------|--------------------|--------------------------------|--------|
| POST   | `/tasks`       | Create a new task              | Private |
| GET    | `/tasks`       | List all tasks                 | Private |
| GET    | `/tasks/:id`   | Get task by ID                 | Private |
| PUT    | `/tasks/:id`   | Update task                    | Private |
| DELETE | `/tasks/:id`   | Delete task by ID              | Private |

---





