import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*
import dotenv from 'dotenv';
import env from "react-dotenv";
var firebaseConfig = {
    apiKey: dotenv.env.API_KEY,
    authDomain: dotenv.env.AUTH_DOMAIN,
    databaseURL: dotenv.env.DATABASE_URL,
    projectId: dotenv.env.PROJECT_ID,
    storageBucket: dotenv.env.STORAGE_BUCKET,
    messagingSenderId: dotenv.env.MESSAGING_SENDER_ID,
    appId: dotenv.env.APP_ID,
    measurementId: dotenv.env.MEASUREMENT_ID
};
*/

var firebaseConfig = {
    apiKey: "AIzaSyAfQRm2lZK0GuU03ozXD66ajX-IMeWWJHU",
    authDomain: "movienest-aed57.firebaseapp.com",
    databaseURL: "https://movienest-aed57.firebaseio.com",
    projectId: "movienest-aed57",
    storageBucket: "movienest-aed57.appspot.com",
    messagingSenderId: "216306749242",
    appId: "1:216306749242:web:ae01f22dcb0cd503dcca03",
    measurementId: "G-0J4BH800WQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;