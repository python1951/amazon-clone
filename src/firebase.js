import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyC-YprbfRmdYP65HQLS_Gj1ZotYpJ903r4",
  authDomain: "clone-50060.firebaseapp.com",
  projectId: "clone-50060",
  storageBucket: "clone-50060.appspot.com",
  messagingSenderId: "37261855517",
  appId: "1:37261855517:web:561e9f31710875f582aff4",
  measurementId: "G-Q5KLXRCNX9"

});
//const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage()

export {  auth,storage };
