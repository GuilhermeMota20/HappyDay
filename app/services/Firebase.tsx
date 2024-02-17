import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyBtg0YcyOLsdXXKOOChtADtL5Z_XgN_3_4",
  authDomain: "teste-to-do.firebaseapp.com",
  projectId: "teste-to-do",
  storageBucket: "teste-to-do.appspot.com",
  messagingSenderId: "515048038665",
  appId: "1:515048038665:web:8b7fcf8bc06f16a51173d8",
  measurementId: "G-YY4EDQQDNV"
});

const db = getFirestore(firebase);

export { db };
