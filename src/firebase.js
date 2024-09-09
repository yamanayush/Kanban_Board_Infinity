// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { APIKEY, APPID } from '../keys'; // Adjust the path as needed

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: APIKEY,
  apikey:"AIzaSyB-Fg65OiUgUiZeMlpQ1hgLSxjnXW6vJYs",
  authDomain: "board-infinit-todo.firebaseapp.com",
  projectId: "board-infinit-todo",
  storageBucket: "board-infinit-todo.appspot.com",
  messagingSenderId: "560550811396",
  // appId: APPID,
  appId:"1:560550811396:web:7c84848198298cfa40e251",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};