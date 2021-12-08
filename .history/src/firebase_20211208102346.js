import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcJArQjZ-hFxpTD7_m6rrhw_v-HrmQyk8",
  authDomain: "clone-de64b.firebaseapp.com",
  projectId: "clone-de64b",
  storageBucket: "clone-de64b.appspot.com",
  messagingSenderId: "1072854293266",
  appId: "1:1072854293266:web:cccbc28f907f662b30b1cb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
