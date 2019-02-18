// import authReducer from './authReducer';
// import projectReducer from './projectReducer';
// import {combineReducers} from 'redux';
// import { firestoreReducer } from 'redux-firestore'
// import {firebaseReducer} from 'react-redux-firebase'


// const rootReducer= combineReducers({
//     auth: authReducer,
//     project: projectReducer,
//     firestore: firestoreReducer,
//     firebase: firebaseReducer
//     //with this component - firestore is connecting state from rootreducer to firestore 
//     // via firestoreReducer and config
// });

// export default rootReducer;

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
