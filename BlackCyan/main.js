import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, onSnapshot, initializeFirestore, memoryLocalCache } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import { getDatabase, ref, child, set, get, onValue, onDisconnect, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyDdDEDKiB3BhkHulfzvA9KfFhAWHXRk89w",
  authDomain: "blackcyan-bffc2.firebaseapp.com",
  projectId: "blackcyan-bffc2",
  storageBucket: "blackcyan-bffc2.appspot.com",
  messagingSenderId: "352934571969",
  appId: "1:352934571969:web:b8f28e725aba689d394940"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);