🌐 Govind Sharma – Portfolio Website
A modern, responsive, personal portfolio website built with React, TailwindCSS, and shadcn/ui. This project is designed to showcase my work, skills, and projects in a sleek and professional manner. The site also features a Contact Form integrated with Firebase Firestore, allowing visitors to send messages directly.

✨ Features
📱 Responsive Design: Adapts to all screen sizes, from mobile to desktop.

🚀 High Performance: Built with React and TailwindCSS for a fast and efficient user experience.

🎨 Modern UI: Uses shadcn/ui for a consistent, professional, and accessible component library.

✨ Clean Visuals: Incorporates Lucide Icons for a crisp and lightweight icon set.

✉️ Integrated Contact Form: Seamlessly connects to Firebase Firestore to store and manage messages.

🔗 Social Links: Provides easy access to my professional social media platforms for networking.

🛠️ Tech Stack

### Frontend
* ⚛️ *React*
* 🌬️ *TailwindCSS*
* 💅 *shadcn/ui*
* ✨ *Lucide Icons*

### Backend/Database
* 🔥 *Firebase Firestore*

### Deployment
* ☁️ *Vercel*

---

## 📂 Project Structure

```bash
.
├── src
│   ├── components
│   │   └── ContactSection.jsx   # Contact form & contact info
│   ├── firebase.js              # Firebase configuration & Firestore setup
│   ├── App.jsx                  # Main application component
│   └── ...
├── public
│   └── index.html
├── package.json
└── README.md
````

-----

## ⚡ Getting Started

Follow these simple steps to get the project up and running locally.

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/your-username/portfolio.git](https://github.com/your-username/portfolio.git)
cd portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Firebase

You'll need a **Firebase** project to enable the contact form functionality.

  * Go to the [Firebase Console](https://console.firebase.google.com/).
  * Create a new project and register a Web App.
  * Copy your Firebase configuration object and replace the placeholder code in `src/firebase.js`.

**Example `src/firebase.js`:**

```javascript
// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

-----

## 📬 Contact

  * 👤 **Govind Sharma**
  * 📧 **Email**: Gs2015030@gmail.com
  * 💼 **LinkedIn**: [linkedin.com/in/govind-sharma-58119822b](https://www.google.com/search?q=https://www.linkedin.com/in/govind-sharma-58119822b)
  * 🐦 **Twitter**: [x.com/Govindgenie](https://www.google.com/search?q=https://x.com/Govindgenie)
  * 📷 **Instagram**: [instagram.com/goviii\_sharma](https://www.google.com/search?q=https://instagram.com/goviii_sharma)

-----

## ⭐ Support

If you found this project helpful or inspiring, please consider giving it a star ⭐ on GitHub\!

```
```