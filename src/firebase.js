// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyUh2xRUtQEKbTYiQJcPRHdw5TepE6An4",
  authDomain: "todo-23df7.firebaseapp.com",
  databaseURL: "https://todo-23df7-default-rtdb.firebaseio.com",
  projectId: "todo-23df7",
  storageBucket: "todo-23df7.appspot.com",
  messagingSenderId: "461790619998",
  appId: "1:461790619998:web:b3734fd62c127506c887cf",
  measurementId: "G-Q7P6QNNS40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();





// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCyUh2xRUtQEKbTYiQJcPRHdw5TepE6An4",
//   authDomain: "todo-23df7.firebaseapp.com",
//   databaseURL: "https://todo-23df7-default-rtdb.firebaseio.com",
//   projectId: "todo-23df7",
//   storageBucket: "todo-23df7.appspot.com",
//   messagingSenderId: "461790619998",
//   appId: "1:461790619998:web:b3734fd62c127506c887cf",
//   measurementId: "G-Q7P6QNNS40"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);