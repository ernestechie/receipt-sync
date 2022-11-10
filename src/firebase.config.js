import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAC4chadekAcuBt7QmBDiKzK9j7QVKmplI',
  authDomain: 'receipt-sync.firebaseapp.com',
  projectId: 'receipt-sync',
  storageBucket: 'receipt-sync.appspot.com',
  messagingSenderId: '637852341839',
  appId: '1:637852341839:web:22d480bb5c8ebf1bcffc3a',
  measurementId: 'G-ESN5SQWNTT',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
