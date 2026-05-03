# 🌿 Smart To-Do App (Mood-Based Task Manager)

A full-stack Smart To-Do application that suggests tasks based on your current mood to improve productivity and mental balance.

---

## 🌍 Live Demo

🔗 Frontend: https://frolicking-cuchufli-3bab01.netlify.app
🔗 Backend: https://smart-todo-backend-euwc.onrender.com

---

## 🚀 Features

* ✅ Add, delete, and mark tasks as completed
* 🎯 Smart task suggestion based on mood
* 😊 Mood selection (Happy, Stressed, Tired)
* 🔴 Priority levels (Low, Medium, High)
* 🔐 User Authentication (Login & Signup)
* 🌐 Fully deployed (Frontend + Backend)

---

## 🧠 Smart Logic

The app recommends tasks based on your mood:

* 😴 **Tired** → Shows Low priority tasks
* 😣 **Stressed** → Shows Low + Medium tasks
* 😊 **Happy** → Shows High priority tasks first

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

---

## 📁 Project Structure

```
smart-todo-app/
│
├── frontend/
│   ├── index.html
│   ├── auth.html
│   ├── style.css
│   ├── script.js
│   ├── auth.css
│   └── auth.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
│
└── README.md
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/Hemalakshmim-gif/Smart-todo-app.git
```

### 2. Backend setup

```
cd backend
npm install
node server.js
```

### 3. Frontend

* Open `frontend/index.html` in your browser

---

## ⚠️ Note

* This project currently uses **in-memory storage**
* Data will reset when the server restarts
* Can be upgraded using **MongoDB** for persistence

---

## 🚀 Future Improvements

* 🗄️ Add MongoDB database
* 🔐 Implement JWT authentication
* 📱 Improve UI/UX design
* 🌙 Add Dark Mode
* 📊 Task analytics dashboard

---

## 👩‍💻 Author

* Hema (Computer Science Engineering Student)

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
