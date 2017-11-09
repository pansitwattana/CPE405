import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAuRPtv4idwAndUSJia8dIJYyampnrlgMc",
    authDomain: "bookmarkervue.firebaseapp.com",
    databaseURL: "https://bookmarkervue.firebaseio.com",
    projectId: "bookmarkervue",
    storageBucket: "bookmarkervue.appspot.com",
    messagingSenderId: "513062758147"
  };

let firebaseApp = firebase.initializeApp(config);
let db = firebaseApp.database()

export { firebaseApp, db }
