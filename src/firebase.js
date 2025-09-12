// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Database
import { getAuth } from "firebase/auth"; // Authentication (if needed)

const firebaseConfig = {
    apiKey: "AIzaSyA5s1YqbT-EM6sqxZJ02U5NBR3fcLJnxJU",
    authDomain: "emails-messages.firebaseapp.com",
    projectId: "emails-messages",
    storageBucket: "emails-messages.appspot.com",
    messagingSenderId: "1035680271374",
    appId: "1:1035680271374:web:8798cd9d5a590051c005f",
    measurementId: "G-VK7SDXQ65G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
