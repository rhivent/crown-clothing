import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB62IeVMlpGcwzEHVGEyxUOsa8MUM6bHvI",
  authDomain: "crown-db-7423a.firebaseapp.com",
  databaseURL: "https://crown-db-7423a.firebaseio.com",
  projectId: "crown-db-7423a",
  storageBucket: "crown-db-7423a.appspot.com",
  messagingSenderId: "344357820829",
  appId: "1:344357820829:web:25375a084ac97c614f3774"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;