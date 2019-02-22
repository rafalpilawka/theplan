// Initialize Firebase
import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'

var config = {
  apiKey: "AIzaSyBQwZDBcH0d8MCTGfQM9VKAw_nf7EwbVeM",
    authDomain: "workplan-001.firebaseapp.com",
    databaseURL: "https://workplan-001.firebaseio.com",
    projectId: "workplan-001",
    storageBucket: "workplan-001.appspot.com",
    messagingSenderId: "636404057779"
  };
  firebase.initializeApp(config);
  //firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;



  