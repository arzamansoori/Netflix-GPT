// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log("Initializing firebase ...");

const firebaseConfig = {
  apiKey: "AIzaSyD3Shgw2KEs52_T_348k5oj6ehLZ0mQUy4",
  authDomain: "video-streaming-7ed35.firebaseapp.com",
  projectId: "video-streaming-7ed35",
  storageBucket: "video-streaming-7ed35.appspot.com",
  messagingSenderId: "736484517128",
  appId: "1:736484517128:web:80661d98d0da30f3aab8bd",
  measurementId: "G-Z5W79130K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();