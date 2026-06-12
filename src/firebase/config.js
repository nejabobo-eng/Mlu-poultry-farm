import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2VSQald6vEv0GnfoDWgOrUEKyzoldZNA",
  authDomain: "mlu-poultry-farm.firebaseapp.com",
  projectId: "mlu-poultry-farm",
  storageBucket: "mlu-poultry-farm.firebasestorage.app",
  messagingSenderId: "561065124673",
  appId: "1:561065124673:web:2afbbacdfef0b06b1b37c0",
  measurementId: "G-GR9GMNNE4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
