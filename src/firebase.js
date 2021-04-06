import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBdKUSGe77y0bP-848Jf-56YkOT50WvXEg',
  authDomain: 'wayhi-app.firebaseapp.com',
  projectId: 'wayhi-app',
  storageBucket: 'wayhi-app.appspot.com',
  messagingSenderId: '303883341840',
  appId: '1:303883341840:web:e40ed143893a2861ccba95',
  measurementId: 'G-RZ6YTVPF4Q',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
