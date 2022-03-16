import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let firebaseConfig = {
    apiKey: "AIzaSyAoZRT4INpROOFrHASenBAB6NYFkKN0yZY",
    authDomain: "sistema-chamados-beef3.firebaseapp.com",
    projectId: "sistema-chamados-beef3",
    storageBucket: "sistema-chamados-beef3.appspot.com",
    messagingSenderId: "397609083904",
    appId: "1:397609083904:web:45943606d64674b28624e5",
    measurementId: "G-G1691PXZ00"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;