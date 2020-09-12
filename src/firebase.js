import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgsVqYpd0UJBVq1AZOM6uj8yfqrjPSWYA",
    authDomain: "facebook-clone-c7eb6.firebaseapp.com",
    databaseURL: "https://facebook-clone-c7eb6.firebaseio.com",
    projectId: "facebook-clone-c7eb6",
    storageBucket: "facebook-clone-c7eb6.appspot.com",
    messagingSenderId: "830300485421",
    appId: "1:830300485421:web:ee7e32df1f1f83ce38c5a4",
    measurementId: "G-18JRCGNQ7Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
