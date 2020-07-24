import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTKgfP9dRr3eQhougmkUXfHIt3v0TMf8k",
    authDomain: "messenger-clone-db82b.firebaseapp.com",
    databaseURL: "https://messenger-clone-db82b.firebaseio.com",
    projectId: "messenger-clone-db82b",
    storageBucket: "messenger-clone-db82b.appspot.com",
    messagingSenderId: "344070670677",
    appId: "1:344070670677:web:99e3b5255aae5c573207dc"
});

const db = firebaseApp.firestore();
export default db;