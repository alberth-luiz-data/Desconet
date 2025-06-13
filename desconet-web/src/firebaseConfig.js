import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFpUPteuanLDIynW7jQNL21HzqA3Jv8ew",
  authDomain: "desconet-8d482.firebaseapp.com",
  databaseURL: "https://desconet-8d482-default-rtdb.firebaseio.com",
  projectId: "desconet-8d482",
  storageBucket: "desconet-8d482.firebasestorage.app",
  messagingSenderId: "799067158158",
  appId: "1:799067158158:web:28a01dea5e9ead8c56bbdf",
  measurementId: "G-1VXJ7CVBMY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
