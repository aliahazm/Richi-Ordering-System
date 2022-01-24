//Author: Muhammad Aidil Fahmiey Bin Osman (1819369)

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxN0yblvUIlr535iFBGh7klxA98_LgqZ0",
  authDomain: "richieordering.firebaseapp.com",
  projectId: "richieordering",
  storageBucket: "richieordering.appspot.com",
  messagingSenderId: "1033374529735",
  appId: "1:1033374529735:web:bfeadeb4212c8f72d466e2",
  measurementId: "G-Z6WWQLLLBD",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
