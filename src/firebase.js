import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxUfgk5aQzLRGVgPBPwSSakbU2dPEWqcM",
    authDomain: "clone-bb809.firebaseapp.com",
    projectId: "clone-bb809",
    storageBucket: "clone-bb809.appspot.com",
    messagingSenderId: "414764701787",
    appId: "1:414764701787:web:a4e34abaf2ccf6531a477e",
    measurementId: "G-Z0GN5DPTMP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };