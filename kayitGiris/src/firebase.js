import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyA89zyzWYHY18IvC96-_bOLVzUsFSa2cnk",
    authDomain: "kayit-bc147.firebaseapp.com",
    projectId: "kayit-bc147",
    storageBucket: "kayit-bc147.appspot.com",
    messagingSenderId: "629418655024",
    appId: "1:629418655024:web:10b3461fb98dec2afcdcf5",
    measurementId: "G-31VM4NGQSP"
  };

  const firebaseApp= initializeApp(firebaseConfig);
  
const db=firebaseApp.firestore();

const auth=firebase.auth();

const provider=new firebase.auth.GoogleAuthProvider();

export default db;

export {auth, provider};

