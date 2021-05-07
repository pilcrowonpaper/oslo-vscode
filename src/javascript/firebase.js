import firebase from 'firebase/app';
import 'firebase/firebase-analytics'
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyBQArrBik9NfwSEviOIZNgjlCEf8Z1TNJ0",
    authDomain: "pilcrow-33a91.firebaseapp.com",
    projectId: "pilcrow-33a91",
    storageBucket: "pilcrow-33a91.appspot.com",
    messagingSenderId: "263671386767",
    appId: "1:263671386767:web:d4eb5517022449f83296fa",
    measurementId: "G-HVH9LVRCTW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
export const db = firebase.firestore()
