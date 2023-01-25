// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const fbConfig = {
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
export const provider = new GoogleAuthProvider();
export const FBprovider = new FacebookAuthProvider();
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default app;

