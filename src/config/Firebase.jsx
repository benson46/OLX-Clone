import { initializeApp } from "firebase/app"; // initialize Firebase app
import { getAuth } from "firebase/auth"; // Authentication
import { getStorage } from "firebase/storage"; // Storage for file uploads
import { getFirestore } from "firebase/firestore"; // Firestore for database operations

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

export const auth = getAuth(app); // Exports Firebase Authentication 
export const storage = getStorage(app); // Exports Firebase Storage 
export const db = getFirestore(app);
