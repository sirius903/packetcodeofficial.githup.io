// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
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
async function getCities(name) {
  const citiesCol = collection(db, name);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(citiesCol)
  console.log(citySnapshot)
  console.log(cityList)
  return cityList;
}
/*
const querySnapshot = await getDocs(collection(db, "chat"));
querySnapshot.forEach((doc) => {
  console.log(doc.data());
    let 뭐요 = document.createElement('p');
    뭐요.append(doc.data().text)
    document.getElementById('box').append(뭐요);
});*/
/*
await setDoc(doc(db, "chat", document.querySelectorAll('p').length + 1 + ''), {
    text: "ㅅㅂ"
});*/


