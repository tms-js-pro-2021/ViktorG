
import firebase from "firebase";    


var firebaseConfig = {
    apiKey: "AIzaSyCOlPyKC8409Lbe4YVzcTuCJW7JaZywfeI",
    authDomain: "login-98707.firebaseapp.com",
    projectId: "login-98707",
    storageBucket: "login-98707.appspot.com",
    messagingSenderId: "973493853065",
    appId: "1:973493853065:web:8b3e7d86545b74757a5f58"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  