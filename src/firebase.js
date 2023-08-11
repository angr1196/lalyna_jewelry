// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB_6US9IoYsBDiwnK8gx_9-geHdDwrclMI",
  authDomain: "lalyna-jewelry-556ec.firebaseapp.com",
  projectId: "lalyna-jewelry-556ec",
  storageBucket: "lalyna-jewelry-556ec.appspot.com",
  messagingSenderId: "90395139642",
  appId: "1:90395139642:web:568a4e18f02d1d4ea51f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);