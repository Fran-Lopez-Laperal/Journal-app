import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyCX1PgR4hn7xko97V-ZU4jLWjCw25rpp0k",
    authDomain: "react-cursos-edfb6.firebaseapp.com",
    projectId: "react-cursos-edfb6",
    storageBucket: "react-cursos-edfb6.appspot.com",
    messagingSenderId: "862616166951",
    appId: "1:862616166951:web:08b1de6c5d0ad71b8c6402"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);