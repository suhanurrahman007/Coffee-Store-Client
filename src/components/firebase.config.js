// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBbV_PfY-oXGvMx7TcnXWev8oGNfb7vFQ",
    authDomain: "coffee-store-30b65.firebaseapp.com",
    projectId: "coffee-store-30b65",
    storageBucket: "coffee-store-30b65.appspot.com",
    messagingSenderId: "119940123245",
    appId: "1:119940123245:web:540eabc1a14c92bdcc8d64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth