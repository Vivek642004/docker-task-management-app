# 🚀 TaskFlow – Cloud Native Task Management Application

![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)
![HTML](https://img.shields.io/badge/HTML5-Frontend-orange)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

---

## 📌 Project Overview

TaskFlow is a **Cloud Native Task Management Application** developed using **Node.js, Express.js, HTML, CSS, and JavaScript**. The application helps users efficiently manage daily tasks through a modern and responsive interface.

The project is **containerized using Docker**, enabling consistent deployment across different environments while following cloud-native development practices.

---

## 🎯 Project Objective

Design and Deploy a Cloud Native Application using Docker by:

- Designing a responsive task management application.
- Building a Node.js + Express backend.
- Containerizing the application with Docker.
- Running the application inside Docker containers.
- Demonstrating cloud-native deployment principles.

---

# ✨ Features

- ✅ Add Tasks
- ✅ Edit Tasks
- ✅ Delete Tasks
- ✅ Mark Tasks as Completed/Pending
- ✅ Live Dashboard Statistics
- ✅ Search Tasks
- ✅ Dark Mode
- ✅ Responsive Dashboard
- ✅ Docker Container Support

---

# 🏗️ Project Architecture

```
                User
                  │
                  ▼
        Web Browser (localhost:3001)
                  │
                  ▼
        Docker Container
                  │
                  ▼
        Node.js + Express Server
                  │
                  ▼
      HTML • CSS • JavaScript UI
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Frontend |
| CSS3 | Styling |
| JavaScript | Client-side Logic |
| Node.js | Runtime |
| Express.js | Backend Server |
| Docker | Containerization |

---

# 📂 Project Structure

```
docker-task-management-app/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
│
├── server.js
├── Dockerfile
├── .dockerignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 🐳 Docker Commands

## Build Docker Image

```bash
docker build -t taskflow-app .
```

## Run Docker Container

```bash
docker run -d -p 3001:3000 --name taskflow-container taskflow-app
```

Visit:

```
http://localhost:3001
```

---

# 💻 Run Locally

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Open:

```
http://localhost:3000
```

---

# 📚 Skills Demonstrated

- Cloud Native Application Development
- Docker Containerization
- Express.js Backend
- REST-style Web Server
- Responsive Frontend Design
- JavaScript DOM Manipulation
- Git & GitHub Version Control

---

# 🚀 Future Enhancements

- User Authentication
- Database Integration (MongoDB)
- Local Storage Support
- REST API
- Kubernetes Deployment
- CI/CD Pipeline
- Cloud Deployment (AWS/Azure)

---

# 👨‍💻 Developer

**Vivek Pandey**

B.Tech – Information Technology

Ajay Kumar Garg Engineering College

GitHub: https://github.com/Vivek642004

---

# 📜 License

This project is developed for educational and IBM Internship purposes.