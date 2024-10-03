// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.FIREBASE,
  apiKey: "AIzaSyBE6Tq30-ji3h7RF3nKocP3miFz3k-27A8",
  authDomain: "nextjsblogapp-63c04.firebaseapp.com",
  projectId: "nextjsblogapp-63c04",
  storageBucket: "nextjsblogapp-63c04.appspot.com",
  messagingSenderId: "908049648851",
  appId: "1:908049648851:web:8103091a7a63ed1cb45826",
  measurementId: "G-YQHBJC67D4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
