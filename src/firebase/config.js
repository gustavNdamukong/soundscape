import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCEwWrPX_I2Y4ts4iU6MfRcRC8o91dLBSI",
    authDomain: "soundscape-a536a.firebaseapp.com",
    projectId: "soundscape-a536a",
    storageBucket: "soundscape-a536a.appspot.com",
    messagingSenderId: "284794383700",
    appId: "1:284794383700:web:c63f269cde7e4de1fbacc1"
  };


  // ---------------------------------
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

// GET SERVICES THROUGH FIREBASE
// init auth
const projectAuth = firebaseApp.auth()
// init Firestore
const db = firebaseApp.firestore()
// init Firsbase Storage
const projectStorage = firebaseApp.storage()
// init timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, db, projectStorage, timestamp }