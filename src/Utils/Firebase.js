// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs_nPCoEC-TwhLxYeMFlC6XWaLFRHVCYs",
  authDomain: "netflixgpt-dba1f.firebaseapp.com",
  projectId: "netflixgpt-dba1f",
  storageBucket: "netflixgpt-dba1f.firebasestorage.app",
  messagingSenderId: "629813158611",
  appId: "1:629813158611:web:f2f64432a4ff450b00aa26",
  measurementId: "G-7YC1EL02XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  export const auth = getAuth();