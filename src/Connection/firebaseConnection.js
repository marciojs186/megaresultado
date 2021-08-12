import firebase from 'firebase/app'
import 'firebase/database'


let firebaseConfig = {
    apiKey: "AIzaSyDSqJoLAkljfYVhibadf48Mn0BUCjqVW7U",
    authDomain: "megaresultado-5408b.firebaseapp.com",
    projectId: "megaresultado-5408b",
    storageBucket: "megaresultado-5408b.appspot.com",
    messagingSenderId: "370104118841",
    appId: "1:370104118841:web:77017b78a21af7633ce7e8",
    measurementId: "G-F5Y1PTVPDN"
  };
  
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;