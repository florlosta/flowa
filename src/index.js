// src/index.js
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({ /* config */ });
const db = getFirestore(firebaseApp);
