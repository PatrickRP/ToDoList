// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2x9DipVtiBECfDMI17IN4UkM8BkFsnqg",
  authDomain: "to-do-list-a4856.firebaseapp.com",
  projectId: "to-do-list-a4856",
  storageBucket: "to-do-list-a4856.appspot.com",
  messagingSenderId: "180664116057",
  appId: "1:180664116057:web:eee940811943c1fc88a248",
  measurementId: "G-YW0WY5EL24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };