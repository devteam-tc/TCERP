// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6YAEk86R7wN1Uk0ZSbZv4DAdyh-6Z7M",
  authDomain: "tcerp-website.firebaseapp.com",
  projectId: "tcerp-website",
  storageBucket: "tcerp-website.appspot.com",
  messagingSenderId: "433831823225",
  appId: "1:433831823225:web:a59d86c35dd92b5152d1a8",
  measurementId: "G-ZN572YDXBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);