import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDRqh8GRGGx05A-1piA6zyVH3Oba3kbclg",
    authDomain: "music-vibe-a9276.firebaseapp.com",
    projectId: "music-vibe-a9276",
    storageBucket: "music-vibe-a9276.appspot.com",
    messagingSenderId: "1091332559748",
    appId: "1:1091332559748:web:508f26d003771ce6c643d1"
  };

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp } 