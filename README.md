# 🎓🛒 Campus-Kart

Welcome to **Campus-Kart** — your one-stop online marketplace made just for campus communities! Easily buy, sell, and discover what students are offering, all in a seamless, secure environment. 🚀

---

## ✨ Features

- 👥 **User Registration & Login:** Safe and secure onboarding.
- 📦 **Product Listings:** List your items or browse what's up for grabs!
- 🖼️ **Image Upload:** Share photos of your products (see details below).
- 🔗 **REST API:** Modern backend with Node.js, Express & MongoDB.
- ⚡ **Fast Frontend:** Built with React, Vite, and Tailwind CSS.
- 💬 **Contact Sellers:** Directly connect with buyers and sellers.
- 🎨 **Beautiful UI:** Clean, modern, and responsive design.

---


ScreenShots:   

<img width="1914" height="1025" alt="image" src="https://github.com/user-attachments/assets/b1fc5eb1-3755-4c56-aaca-5a06a0a04b2c" /> <img width="1913" height="1024" alt="image" src="https://github.com/user-attachments/assets/dcd6d3b8-41a7-4d61-b295-9df8f35f42b2" /> <img width="1915" height="1028" alt="image" src="https://github.com/user-attachments/assets/6a6ec7a7-d855-4f28-8efe-e5d30c2de5a5" />




## 🗂️ Project Structure

```
Campus-Kart/
│
├── backend/
│   ├── index.js
│   └── models/
│       ├── user.js
│       └── listing.js
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   └── pages/
│   └── tailwind.config.js
│
└── README.md
```

---


---

## 🖥️ Frontend (React + Tailwind)

- **Located in:** `frontend/`
- **Key Files:**  
  - `App.jsx` — App router & layout  
  - `pages/` — Home, Login, Register, Listing, Profile, etc.  
  - `components/` — Product card, navbar, forms, etc.
- **Styling:** Tailwind CSS for a sleek, modern look 🎨

**Run locally:**
```bash
cd frontend
npm install
npm run dev
```

---

## 🛠️ Backend (Node.js + Express + MongoDB)

- **Located in:** `backend/`
- **Key Files:**  
  - `index.js` — Server entrypoint, API routes  
  - `models/` — Mongoose schemas for users & listings
- **API:** Secure REST endpoints for CRUD operations

**Run locally:**
```bash
cd backend
npm install
node index.js
```
_Set your MongoDB URI in `index.js`_

---

## 📝 Quick Summary

- **Backend:** Express server connects to MongoDB, manages authentication, user, and listing CRUD via REST.
- **Frontend:** React app with page routing, forms, and dynamic product gallery. Tailwind CSS for responsive design.
- **Key models:**  
  - `user` (username, password, contact)  
  - `listing` (title, description, price, image)
- **Image Upload:** Listings support image uploads and display them in the product gallery.

---

## 🌈 Get Started

1. **Clone the repo:**  
   `git clone https://github.com/rupampaul123/Campus-Kart.git`
2. **Install dependencies** in both `frontend/` and `backend/`
3. **Start the backend & frontend**
4. **List your first product and start selling!**

---

## 🤝 Contributing

Open to improvements! Feel free to fork, submit issues, or open PRs.  
Let's build the best campus marketplace together! 💡

---

## 📜 License

MIT

---

**Campus-Kart — where your campus buys & sells! 🛍️**
