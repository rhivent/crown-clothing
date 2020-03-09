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

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth) return;

  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot.id);
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(e){
      console.log('error creating user',e.message);
    }
  }

  return userRef;
} 

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;