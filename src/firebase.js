// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8ZaNjbI7W_4ht-alfjbKge4qXRUlxRPc",
  authDomain: "tcerp-website-ff312.firebaseapp.com",
  projectId: "tcerp-website-ff312",
  storageBucket: "tcerp-website-ff312.appspot.com",
  messagingSenderId: "833123331558",
  appId: "1:833123331558:web:e4beec2bb0b49084c83a27",
  measurementId: "G-D5W9SYHYY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);