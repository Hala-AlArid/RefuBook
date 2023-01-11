// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const fbConfig = {
  // @TODO: Insert your firebase config
  apiKey: "AIzaSyArc6wsEeJI0T5P2MpAhiQ5qZeE0iIF4xU",
  authDomain: "refubook-db049.firebaseapp.com",
  projectId: "refubook-db049",
  storageBucket: "refubook-db049.appspot.com",
  messagingSenderId: "16153516262",
  appId: "1:16153516262:web:698aba13cbc4a9f14d0327",
  measurementId: "G-Z3L56E79F4"
};

// Initialize Firebase
const app = initializeApp(fbConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export default app;

