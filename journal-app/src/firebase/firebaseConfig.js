import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAarEjX8vUpLRUuFVCEIAS93s5T9yIWg2I",
  authDomain: "journal-app-a7859.firebaseapp.com",
  projectId: "journal-app-a7859",
  storageBucket: "journal-app-a7859.appspot.com",
  messagingSenderId: "639034775218",
  appId: "1:639034775218:web:129c2dee6f1d1725901bab",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
