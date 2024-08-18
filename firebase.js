// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVHeilwEJr3FvFVxl8mOERukehTi8j9jk",
  authDomain: "word-search-e687b.firebaseapp.com",
  projectId: "word-search-e687b",
  storageBucket: "word-search-e687b.appspot.com",
  messagingSenderId: "807748068407",
  appId: "1:807748068407:web:d13f52fcabdf218fc4cbb2",
  measurementId: "G-54350CKVV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
