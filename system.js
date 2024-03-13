import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, query, collection, doc, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPOzJfWCcP3dnM0MImNGv5bWM_QBdNOrc",
  authDomain: "beomeo-2024-code.firebaseapp.com",
  projectId: "beomeo-2024-code",
  storageBucket: "beomeo-2024-code.appspot.com",
  messagingSenderId: "960631603446",
  appId: "1:960631603446:web:ae52b96d338d275b84ecd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


onSnapshot(collection(db, "FAQ"), (qas) => {
    let list = [];
    qas.forEach((doc) => {
        if(doc.data().a != ''){
            list.push([doc.data().q, doc.data().a]);
        }
    })
    document.querySelector(".faq-container").innerHTML = '';
    list.forEach(a => {
        document.querySelector(".faq-container").innerHTML += `
        <div class="faq">
          <h3 class="faq-title">${a[0]}</h3>
          <p class="faq-text">${a[1]}</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        </div>`;
    })
    const toggles = document.querySelectorAll(".faq-toggle");
    
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            toggle.parentNode.classList.toggle("active");
        });
    });
})

document.getElementById("faq-submit").addEventListener("click", async function(){
    const input = document.getElementById("faq-input");
    console.log(input.value);
    await addDoc(collection(db, "FAQ"), {
        q : input.value,
        a : ''
    })
    input.value = '';
})