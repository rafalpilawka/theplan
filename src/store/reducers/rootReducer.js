import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';
import { firestoreReducer} from 'redux-firestore'

const rootReducer= combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer
    //with this component - firestore is connecting state from rootreducer to firestore 
    // via firestoreReducer and config
});

export default rootReducer;
