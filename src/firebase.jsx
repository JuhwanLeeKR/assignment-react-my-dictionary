// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const FIREBASE_PROJECTID = import.meta.env.VITE_FB_PROJECTID;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API,
  authDomain: `${FIREBASE_PROJECTID}.firebaseapp.com`,
  projectId: 'assignment-my-dictionary',
  storageBucket: `${FIREBASE_PROJECTID}.appspot.com`,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FB_APPID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENTID,
};

initializeApp(firebaseConfig);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
