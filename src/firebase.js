// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsiz45ybZagYvGG0gkEDzocU12tIMuyzg",
  authDomain: "advancedjsexamsproject.firebaseapp.com",
  projectId: "advancedjsexamsproject",
  storageBucket: "advancedjsexamsproject.appspot.com",
  messagingSenderId: "707458761356",
  appId: "1:707458761356:web:b67698e3c2ede07878f1a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export { auth }
