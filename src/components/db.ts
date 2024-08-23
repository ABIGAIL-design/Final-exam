
import { config } from "dotenv";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
  apiKey: "AIzaSyDRtYb-f8ltASI9dR2QaGZxCgsWO7SqQIQ",
  authDomain: "final-project-b2818.firebaseapp.com",
  databaseURL: "https://final-project-b2818-default-rtdb.firebaseio.com",
  projectId: "final-project-b2818",
  storageBucket: "final-project-b2818.appspot.com",
  messagingSenderId: "671544554930",
  appId: "1:671544554930:web:8e52356456ad2af4d9a0ab",
  measurementId: "G-PNJQC6H7H6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { auth, db };
