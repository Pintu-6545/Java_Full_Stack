// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQfWr-6aoVzUc88BdZu5P_V4w3wD3NQrI",
  authDomain: "students-93a4a.firebaseapp.com",
  projectId: "students-93a4a",
  storageBucket: "students-93a4a.firebasestorage.app",
  messagingSenderId: "114357204014",
  appId: "1:114357204014:web:6941ab726f66feede99bbf",
  measurementId: "G-WYSSKMDERR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firestore
export const studentDB = getFirestore(app);
