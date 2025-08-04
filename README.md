
# 💼 JobHiring – Full-Stack Project

**JobHiring** is a full-stack job portal system where users can:
- 📝 Post jobs
- 📩 Send contact messages
- 👤 Apply for jobs

All data is handled by a Node.js + Express backend and stored in a MongoDB database. Admins can manage everything through a clean and responsive dashboard.

---

## 🚀 Features

- Job posting form (for employers)
- Contact form (for user messages)
- Application form (for candidates)
- Admin dashboard with:
  - 📁 Jobs Management
  - 📬 Contact Messages
  - 📄 Job Applications
  - 🗂️ Admin Data
- REST API integration with MongoDB
- Responsive UI built with HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | HTML5, CSS3, JavaScript |
| Backend   | Node.js, Express.js     |
| Database  | MongoDB (with Mongoose) |
| UI Icons  | Font Awesome            |

---

## ⚙️ Setup Guide

```bash
# 1. Clone the repository
git clone https://github.com/hafsa274/jobhiring.git
cd jobhiring

# 2. Install backend dependencies
npm install

# 3. Add your environment variables in a .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string

# 4. Run the backend server
npm start
```

---

## 📂 Folder Structure

```
jobhiring/
├── ONLINE PORTAL/             # Frontend HTML, CSS, JS
├── routes/                    # Express route handlers
├── server/                    # Backend logic
├── node_modules/              # npm dependencies
├── objects/                   # Mock/test data
├── screenshots/               # All project screenshots (images)
├── test-*.js                  # API/DB test scripts
├── server.js                  # Entry point
├── package.json               # Project metadata
├── .env                       # Environment config
└── README.md                  # Project documentation
```

---

## 📡 API Endpoints

| Method | Endpoint            | Purpose                  |
|--------|---------------------|--------------------------|
| GET    | `/api/jobs`         | Get all job posts        |
| POST   | `/api/jobs`         | Submit new job           |
| GET    | `/api/contacts`     | Get all contact messages |
| POST   | `/api/contacts`     | Submit contact form      |
| GET    | `/api/applications` | Get job applications     |
| POST   | `/api/applications` | Submit job application   |

---



## 📸 Screenshots

### 🏠 Home Page
![Home Page](screenshots/Screenshot%202025-08-04%20215937.png)
![Home Page 2](screenshots/Screenshot%202025-08-04%20221938.png)

---

### ℹ️ About Page
![About Page 1](screenshots/Screenshot%202025-08-04%20222011.png)
![About Page 2](screenshots/Screenshot%202025-08-04%20222017.png)

---

### 📩 Contact Page
![Contact Page 1](screenshots/Screenshot%202025-08-04%20222202.png)
![Contact Page 2](screenshots/Screenshot%202025-08-04%20222240.png)

---

### 💼 Post Job Page
![Post Job Page 1](screenshots/Screenshot%202025-08-04%20222335.png)
![Post Job Page 2](screenshots/Screenshot%202025-08-04%20222414.png)

---

### 🔐 Admin Page
![Admin Page](screenshots/Screenshot%202025-08-04%20222532.png)

---

### 📊 Dashboard View
![Dashboard](screenshots/Screenshot%202025-08-04%20222627.png)
![Dashboard 2](screenshots/Screenshot%202025-08-04%20222741.png)

---

## 🎯 Purpose

This project demonstrates the development of a full-stack job portal system with real-time form submission, backend processing, and database integration. It showcases how users interact with a frontend interface while administrators manage job data, applications, and messages through a dedicated admin dashboard powered by MongoDB.

---

## 📄 License

This project is open-source and intended for learning only.

---

# The app will run at http://localhost:5000
