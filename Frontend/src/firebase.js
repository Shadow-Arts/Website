// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 👈 Add this line
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_A3OCtsHsqVVwbOrx2cDFKmwNsISaYvY",
  authDomain: "shadowarts.firebaseapp.com",
  projectId: "shadowarts",
  storageBucket: "shadowarts.firebasestorage.app",
  messagingSenderId: "733771472378",
  appId: "1:733771472378:web:36f418caae48b9eb1c9843",
  measurementId: "G-C5T9XQK4KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // 👈 Add this line
const analytics = getAnalytics(app);

// 👇 Export what you need
export { auth };
