// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDpyu8u1HSqQU3jUOQODbYoeU6X2TTUbZY",
  authDomain: "olx-clone-14370.firebaseapp.com",
  projectId: "olx-clone-14370",
  storageBucket: "olx-clone-14370.appspot.com",
  messagingSenderId: "624509101335",
  appId: "1:624509101335:web:9ecf307594ffd98b76c352",
  measurementId: "G-KW47VB2KLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app); // Initialize and export Firestore
