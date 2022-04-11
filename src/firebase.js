import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5xuHs1q6PGUwpk_xXJQvmnn-PmWokY_s",
  authDomain: "adpr-strike.firebaseapp.com",
  databaseURL: "https://adpr-strike-default-rtdb.firebaseio.com",
  projectId: "adpr-strike",
  storageBucket: "adpr-strike.appspot.com",
  messagingSenderId: "273900141146",
  appId: "1:273900141146:web:d87e9249d32ed7b9c0f663",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
