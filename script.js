// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH19uFh4bPcFHJJxLNEnd6syxell55Sqw",
  authDomain: "new-project-6f342.firebaseapp.com",
  projectId: "new-project-6f342",
  storageBucket: "new-project-6f342.appspot.com",
  messagingSenderId: "117809923508",
  appId: "1:117809923508:web:f5b688225998923ecc9ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}