import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyA8f0WHQNd2VWZRIMKAy5CoKmeJ7Xb1ssk",
    authDomain: "recruitment-bank.firebaseapp.com",
    projectId: "recruitment-bank",
    storageBucket: "recruitment-bank.appspot.com",
    messagingSenderId: "518448483484",
    appId: "1:518448483484:web:06195e173963388ebe7159",
    measurementId: "G-J963WQKHF9"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

var Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase