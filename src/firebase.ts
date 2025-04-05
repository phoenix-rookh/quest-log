// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyKzAImBIgNU3ro4zXjyWbdN4BepcaoeE",
  authDomain: "rookh-quest-log.firebaseapp.com",
  projectId: "rookh-quest-log",
  storageBucket: "rookh-quest-log.firebasestorage.app",
  messagingSenderId: "328701495934",
  appId: "1:328701495934:web:e805a0b557ea0abcaee62f",
  measurementId: "G-ZTCHMXHFK8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
