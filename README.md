<img width="1906" height="562" alt="11sr - Copy" src="https://github.com/user-attachments/assets/56c77971-9f35-46b0-b44a-ee012c255fcb" />

<img width="1918" height="861" alt="wdds" src="https://github.com/user-attachments/assets/0a631d0c-58c4-464f-b2c2-9e82789abf1f" />




# 📝 Task Management System (MERN Stack)

## 📌 Project Overview
This project is a **Task Management System** built using the MERN stack (MongoDB, Express, React, Node.js).  
It allows users to manage daily tasks efficiently with full CRUD functionality and a modern UI.

---

## 🚀 Features

### ✅ Core Features
- ➕ Create new tasks
- 📋 View all tasks in tabular format
- ✏️ Edit task (title & description)
- ✔️ Mark task as completed
- 🟢 Toggle active/inactive status
- 🗑 Delete tasks

### 🎨 UI Features
- 🌙 Dark / Light theme toggle
- ✨ Glassmorphism design
- 📊 Table-based UI for clarity
- 🎯 Interactive switches & buttons
- 🔄 Real-time UI updates (dynamic)

---

## 🧠 Tech Stack

### Frontend:
- React.js (Functional Components + Hooks)
- CSS (Glass UI + Dark Theme)

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB Atlas (Cloud Database)
- Mongoose (ODM)

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Update task |
| PUT | /api/tasks/active/:id | Toggle active |
| DELETE | /api/tasks/:id | Delete task |

---

## 📁 Project Structure
project-root/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── components/
│ ├── services/
│ ├── App.js
│ └── index.js
