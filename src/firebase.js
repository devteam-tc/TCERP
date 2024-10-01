// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzIUUg7HdhClIQBHEyT9DTNGy8lzUUfZY",
  authDomain: "tcerpproject-73578.firebaseapp.com",
  projectId: "tcerpproject-73578",
  storageBucket: "tcerpproject-73578.appspot.com",
  messagingSenderId: "1082569327843",
  appId: "1:1082569327843:web:e9d1b30f3cd0cf10baf1d6",
  measurementId: "G-N6E8KFETSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);