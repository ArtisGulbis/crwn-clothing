import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC85GmsDU3mAA9r0ke-h7KUWkNEtICHhcU",
    authDomain: "crwn-db-ddcf3.firebaseapp.com",
    databaseURL: "https://crwn-db-ddcf3.firebaseio.com",
    projectId: "crwn-db-ddcf3",
    storageBucket: "crwn-db-ddcf3.appspot.com",
    messagingSenderId: "1027172821978",
    appId: "1:1027172821978:web:118b83e7bc7e5254a8eee3",
    measurementId: "G-R24PD7DPZJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;