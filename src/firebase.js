// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_DnRUd8534BpLqvb2tNSFWiO30v1pxs4",
  authDomain: "lalyna-project.firebaseapp.com",
  databaseURL: "https://lalyna-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lalyna-project",
  storageBucket: "lalyna-project.appspot.com",
  messagingSenderId: "691002543831",
  appId: "1:691002543831:web:381e26d005942554092a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);