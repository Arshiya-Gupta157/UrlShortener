# 🔗 URL Shortener

A URL Shortener web application that allows users to generate short URLs for long links and track their usage analytics.

The application follows the **MVC (Model-View-Controller)** architecture, uses **MongoDB (local)** as the database, implements **stateful authentication using cookies**, and renders the frontend using **EJS templates**.

---

## 🚀 Features

- Generate short URLs from long URLs  
- Redirect to the original URL using the short link  
- User authentication (Signup/Login)  
- Stateful authentication using cookies  
- Click tracking & visit history analytics  
- MVC structured backend architecture  
- Local MongoDB database integration  

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS (Server-side rendering)  
- **Database:** MongoDB (Local)  
- **Authentication:** Stateful authentication using cookies  
- **Architecture:** MVC  

---

## 📌 Routes

### 🔐 Authentication Routes

- `GET /login` → Opens the login page  
- `GET /signup` → Opens the signup page  

### 🔗 URL Routes

- `POST /url` → Creates a new short URL  
- `GET /url/:shortUrl` → Redirects to the original URL  
- `GET /url/analytics/:shortUrl` → Displays analytics (number of clicks & visit history)  

---

## 📊 Analytics

Each shortened URL maintains:

- Total number of clicks  
- Visit history for tracking user interactions  

---

## 🛠️ Project Structure

The project follows the **MVC pattern**:

- **Models** → Database schemas  
- **Views** → EJS templates  
- **Controllers** → Business logic  
- **Routes** → API endpoints  
