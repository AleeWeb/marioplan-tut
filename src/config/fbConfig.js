import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA9Y9U9C3ym885BW0Kntf3HPGwuca9INEo", //Key only for ID. Secure with FireBase rules later
  authDomain: "marioplan-c07b1.firebaseapp.com",
  databaseURL: "https://marioplan-c07b1.firebaseio.com",
  projectId: "marioplan-c07b1",
  storageBucket: "marioplan-c07b1.appspot.com",
  messagingSenderId: "982759357200",
  appId: "1:982759357200:web:8ac60989c4187ee2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;