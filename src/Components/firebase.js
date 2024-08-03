import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAm_UzF3tqSvopcdEV-lALJK0yBPBJ3_KI",
  authDomain: "final-project-69f49.firebaseapp.com",
  projectId: "final-project-69f49",
  storageBucket: "final-project-69f49.appspot.com",
  messagingSenderId: "44776992903",
  appId: "1:44776992903:web:8e589c986fb9a027900822",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth();
export default app;