import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAn_9tcVgGGnIh-oOuUFP6iwYTfiRSalN8",
  authDomain: "hunja-rrf.firebaseapp.com",
  projectId: "hunja-rrf",
  storageBucket: "hunja-rrf.appspot.com",
  messagingSenderId: "110173282540",
  appId: "1:110173282540:web:6209cd7abff5f6aa5705c9",
};

firebase.initializeApp(firebaseConfig);

firebaseConfig.firestore();

export default firebase;
