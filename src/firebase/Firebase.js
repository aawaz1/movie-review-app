
import { initializeApp } from "firebase/app";
import {getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCVK8GXKgbGdBp41nuQafURAestA9zteLw",
  authDomain: "filmmzone.firebaseapp.com",
  projectId: "filmmzone",
  storageBucket: "filmmzone.appspot.com",
  messagingSenderId: "138600109545",
  appId: "1:138600109545:web:3bd1d307f3b1edaf97e778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const moviesRef = collection(db , "movies");
export const reviewsRef = collection(db , "reviews");
export const usersRef = collection(db, "users");



export default app;