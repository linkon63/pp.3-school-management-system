// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBw9oZvJybNOgyUUQCWXcaUkQnTx9WNsOg',
    authDomain: 'school-management-c8a4b.firebaseapp.com',
    projectId: 'school-management-c8a4b',
    storageBucket: 'school-management-c8a4b.appspot.com',
    messagingSenderId: '252612343102',
    appId: '1:252612343102:web:ab39aa6df4db674a5d286f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
