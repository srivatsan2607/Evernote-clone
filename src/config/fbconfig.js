import firebase from 'firebase/app';
import 'firebase/firestore';
import {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,SENDER_ID,APP_ID} from './keys'
console.log(API_KEY)
var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket:STORAGE_BUCKET,
    messagingSenderId:SENDER_ID,
    appId: APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;