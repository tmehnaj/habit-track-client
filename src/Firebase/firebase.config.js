// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// src/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// firebase.config.js

// IMPORTANT: Ensure you are using the correct method to access environment variables
// for your specific framework (e.g., import.meta.env for Vite/modern tools, 
// process.env for Node/older React, or NEXT_PUBLIC_ for Next.js).

const firebaseConfig = {
  // Accessing the variables defined in .env.local
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};




const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 
 export default auth;


// Initialize Firebase
