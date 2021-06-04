import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
  
  apiKey: "AIzaSyDbqQyHCePgPG7iPaJ97uIMWrRjtFJQ8Dc",
  authDomain: "dru-portfolio.firebaseapp.com",
  projectId: "dru-portfolio",
  storageBucket: "dru-portfolio.appspot.com",
  messagingSenderId: "963720425124",
  appId: "1:963720425124:web:f078ec63b1795d4144c031"
});

var db = firebaseApp.firestore();

export { db };
