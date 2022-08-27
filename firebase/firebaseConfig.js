// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0X3JWoUVIxGIjrh-C7QfPIrqHnUbCICw",
  authDomain: "to-do-chriscaracach.firebaseapp.com",
  projectId: "to-do-chriscaracach",
  storageBucket: "to-do-chriscaracach.appspot.com",
  messagingSenderId: "1059776468953",
  appId: "1:1059776468953:web:c98d46e5065ef46460ebc8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
