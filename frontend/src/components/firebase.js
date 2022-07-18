// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDpi1L7YZzx-64E36silFISaeaFn0UMwl8",

  authDomain: "facultyportal-122a0.firebaseapp.com",

  projectId: "facultyportal-122a0",

  storageBucket: "facultyportal-122a0.appspot.com",

  messagingSenderId: "712062376139",

  appId: "1:712062376139:web:33e9a0733db66a5656e34e",

  measurementId: "G-XMZ455803Y"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);