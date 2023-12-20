import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyByUn1BtNNLFpUG3uR5BwOrIA1sb_zZaRs",
    authDomain: "community-aa8dc.firebaseapp.com",
    databaseURL: "https://community-aa8dc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "community-aa8dc",
    storageBucket: "community-aa8dc.appspot.com",
    messagingSenderId: "839722555403",
    appId: "1:839722555403:web:383ded2b73b7df09decf0e",
    measurementId: "G-B442XEF91B"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;