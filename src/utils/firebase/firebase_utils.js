import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAItzUSBwkDL7EDITV7EvbPuDwBYX6NYdU",
    authDomain: "shop-db-7f67b.firebaseapp.com",
    projectId: "shop-db-7f67b",
    storageBucket: "shop-db-7f67b.appspot.com",
    messagingSenderId: "347380108767",
    appId: "1:347380108767:web:6f55a329dd651537b6886a"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    promit: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
