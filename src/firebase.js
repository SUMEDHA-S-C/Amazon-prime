import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBbddNwh0Mi8wKkdZxT1dnOUg1YfO7iCc",
    authDomain: "prime-73675.firebaseapp.com",
    databaseURL: "https://prime-73675.firebaseio.com",
    projectId: "prime-73675",
    storageBucket: "prime-73675.appspot.com",
    messagingSenderId: "324059703557",
    appId: "1:324059703557:web:d516e48b94dc040d356f6c",
};

firebase.initializeApp(firebaseConfig); //firebase init---------mandatory
export default firebase;