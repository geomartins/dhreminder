
import firebase from 'firebase/app'
// import "firebase/analytics";

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyAY4hlakXstWYpjr3c4GulgcRJRpADb4gk',
  authDomain: 'agropark-76f03.firebaseapp.com',
  databaseURL: 'https://agropark-76f03.firebaseio.com',
  projectId: 'agropark-76f03',
  storageBucket: 'agropark-76f03.appspot.com',
  messagingSenderId: '568815498090',
  appId: '1:568815498090:web:be25a793f6fe9111016b13',
  measurementId: 'G-RJXBN284JM'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebaseApp.auth()
const fs = firebaseApp.firestore()
const domainCollections = fs.collection('domains')
const timestamp = firebase.firestore.FieldValue.serverTimestamp()
// firebase.analytics();

export { firebaseAuth, fs, domainCollections, timestamp }
