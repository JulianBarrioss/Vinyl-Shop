import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDh_tgdJ-aZINm1xBNkmTROkKybozGWHIk",
    authDomain: "vinylshop-ab700.firebaseapp.com",
    projectId: "vinylshop-ab700",
    storageBucket: "vinylshop-ab700.appspot.com",
    messagingSenderId: "14674845376",
    appId: "1:14674845376:web:59bcb50c45310dde8c9725",
    measurementId: "G-76MS12DH5L"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };