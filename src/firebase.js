// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
/* import "firebase/analytics"; */

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB0aIQb65Kce-Azqu4QB9HW4vS6jS0EYQI",
    authDomain: "eventually-f9000.firebaseapp.com",
    projectId: "eventually-f9000",
    storageBucket: "eventually-f9000.appspot.com",
    messagingSenderId: "267527515602",
    appId: "1:267527515602:web:0520999346da33d6936c0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export {firebase}