import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAuRPtv4idwAndUSJia8dIJYyampnrlgMc",
    authDomain: "bookmarkervue.firebaseapp.com",
    databaseURL: "https://bookmarkervue.firebaseio.com",
    projectId: "bookmarkervue",
    storageBucket: "",
    messagingSenderId: "513062758147"
  }

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

export { firebaseApp, db };