import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyDj-s0sADFqqBbElTFS6iDN6HlumYe4-NE",
    authDomain: "uploadurl.firebaseapp.com",
    databaseURL: "https://uploadurl.firebaseio.com",
    projectId: "uploadurl",
    storageBucket: "uploadurl.appspot.com",
    messagingSenderId: "971715339745",
    appId: "1:971715339745:web:3de48455271ab154a4dea0",
    measurementId: "G-QZ2P9YJDG3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;