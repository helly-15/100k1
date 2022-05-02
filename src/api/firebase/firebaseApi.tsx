// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWb2c9hq9S0KLsf3i00zzuRchbrs3nOrM",
    authDomain: "games-for-friends-add3c.firebaseapp.com",
    projectId: "games-for-friends-add3c",
    storageBucket: "games-for-friends-add3c.appspot.com",
    messagingSenderId: "619551800393",
    appId: "1:619551800393:web:f855daae386bf89aa75398",
    measurementId: "G-53DKSLV27B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);