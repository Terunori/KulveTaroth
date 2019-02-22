import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCOfcIRx7xDaY4Np6Gg9noUCcff61G3tCw',
    authDomain: 'kulve-taroth.firebaseapp.com',
    databaseURL: 'https://kulve-taroth.firebaseio.com',
    projectId: 'kulve-taroth',
    storageBucket: 'kulve-taroth.appspot.com',
    messagingSenderId: '829074062276'
  })
}

export default firebase
