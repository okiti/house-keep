import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB4F9lZryrLHpRq5Wosz-S78YSum2BMwxc",
  authDomain: "home-service-3e439.firebaseapp.com",
  databaseURL: "https://home-service-3e439.firebaseio.com",
  projectId: "home-service-3e439",
  storageBucket: "home-service-3e439.appspot.com",
  messagingSenderId: "672324693667",
  appId: "1:672324693667:web:9d137267f1f1dd22da1916",
  measurementId: "G-9YX2E5XMDS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
