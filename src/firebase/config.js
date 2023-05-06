// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEcCs1e9qEMvbX4JOSqW0lOYW4lyELdAc',
  authDomain: 'music-rental-56935.firebaseapp.com',
  projectId: 'music-rental-56935',
  storageBucket: 'music-rental-56935.appspot.com',
  messagingSenderId: '619209566451',
  appId: '1:619209566451:web:3f4740df4f6bd504de2f86'
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDatabase = getFirestore(FirebaseApp);
