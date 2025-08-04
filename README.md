
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
![Home Page](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/home-page-1.png)

![Home Page 2](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/home-page-2.png)

![Home Page 3](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/home-page-3.png)

![Home Page 4](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/home-page-4.png)

---

### ℹ️ About Page
![About Page 1](https://github.com/hafsa274/jobhiring/blob/a54356f4815370d77a8ca0d1061e0471ba219376/screenshots/about-pg-1.png)

![About Page 2](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/about-pg-2.png)

---

### 📩 Contact Page
![Contact Page 1](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/contact-pg-1.png)

![Contact Page 2](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/contact-pg-2.png)

---

### 💼 Post Job Page
![Post Job Page 1](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/postjob-pg-1.png)

![Post Job Page 2](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/postjob-pg-2.png)

---

### 🔐 Admin Page
![Admin Page](https://github.com/hafsa274/jobhiring/blob/ab6608f72ec83ae37319c495789a8400af050b99/screenshots/admin.png)

---

## 🎯 Purpose

This project demonstrates the development of a full-stack job portal system with real-time form submission, backend processing, and database integration. It showcases how users interact with a frontend interface while administrators manage job data, applications, and messages through a dedicated admin dashboard powered by MongoDB.

---

## 📄 License

This project is open-source and intended for learning only.

---
## 🌐 Run Locally

After setup, access the app at:
#  http://localhost:5000
