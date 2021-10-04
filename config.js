import firebase from "firebase";
import { initializeApp } from "firebase/app";
require("@firebase/firestore");
// import "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCBp3UPJcrZzhYKbA1NVUK2e_6DpWfEl2Y",
  authDomain: "e-library-8b1bc.firebaseapp.com",
  databaseURL: "https://e-library-8b1bc.firebaseio.com",
  projectId: "e-library-8b1bc",
  storageBucket: "e-library-8b1bc.appspot.com",
  messagingSenderId: "461104508642",
  appId: "1:461104508642:web:4e4b88ae00300a81e478bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app.firestore();
