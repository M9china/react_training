import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  // your firebase config object
  apiKey: "AIzaSyBXQFye-zBgjbqCquuUK6IRPOZh6tL-Sps",
  authDomain: "mywebapp-c9c07.firebaseapp.com",
  projectId: "mywebapp-c9c07",
  storageBucket: "mywebapp-c9c07.appspot.com",
  messagingSenderId: "524371572296",
  appId: "1:524371572296:web:5b787a6ee3dea976eb0a7d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

