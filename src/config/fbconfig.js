// Initialize Firebase
import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'

var config = {
    apiKey: "AIzaSyA6P-HRs9YiqhptaeA5M-c8FiQ2NSf1Af0",
    authDomain: "theplan-b9155.firebaseapp.com",
    databaseURL: "https://theplan-b9155.firebaseio.com",
    projectId: "theplan-b9155",
    storageBucket: "theplan-b9155.appspot.com",
    messagingSenderId: "203339244536"
  };
  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;