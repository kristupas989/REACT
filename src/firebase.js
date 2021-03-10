import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHY0vZtgS442PfRJhY9_mGK-UOZhTdCRY",
    authDomain: "react-d2de8.firebaseapp.com",
    projectId: "react-d2de8",
    storageBucket: "react-d2de8.appspot.com",
    messagingSenderId: "757254413361",
    appId: "1:757254413361:web:d1c410ee40edd393a80910"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;