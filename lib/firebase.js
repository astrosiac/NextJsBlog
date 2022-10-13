import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnHg8Y5MeMHsiTB-7UtsuNtKMRe_ySSX4",
  authDomain: "nextblog-9e6db.firebaseapp.com",
  projectId: "nextblog-9e6db",
  storageBucket: "nextblog-9e6db.appspot.com",
  messagingSenderId: "286708908496",
  appId: "1:286708908496:web:c9d993ec51e501d6c079d5",
  measurementId: "G-EK862L2R8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();