import firebase from "firebase/app";
import   "firebase/auth";
import   "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP_ZDMZ2QKZQCyRfqSaeiLApkQLl7kslA",
  authDomain: "fir-crud-ffe48.firebaseapp.com",
  projectId: "fir-crud-ffe48",
  storageBucket: "fir-crud-ffe48.appspot.com",
  messagingSenderId: "352110063750",
  appId: "1:352110063750:web:4c17878c3c820da31ee107"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const userAuth = firebaseApp.auth()
const db = firebaseApp.firestore()
export {userAuth,db}