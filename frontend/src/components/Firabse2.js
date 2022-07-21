// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIWB0w7ejg4hyxKwVK-4tp3iQunzzEkwo",
  authDomain: "profilepic-e6f68.firebaseapp.com",
  projectId: "profilepic-e6f68",
  storageBucket: "profilepic-e6f68.appspot.com",
  messagingSenderId: "383818514295",
  appId: "1:383818514295:web:e829d5cfe3934735312b72",
  measurementId: "G-GK26LNE6CN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
