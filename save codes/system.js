import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, query, collection, doc, onSnapshot, addDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCsAeQy6pJFEmLlzW5LKdKuXUr46_3ITY8",
    authDomain: "save-encoded-code.firebaseapp.com",
    projectId: "save-encoded-code",
    storageBucket: "save-encoded-code.appspot.com",
    messagingSenderId: "804151785573",
    appId: "1:804151785573:web:f85a45ed98f684645fee8c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


onSnapshot(collection(db, "CODE"), (qas) => {
    let list = [];
    qas.forEach((doc) => {
        if(doc.data().a != ''){
            list.push([doc.data().name, doc.data().code]);
        }
    })
    document.querySelector(".code-container").innerHTML = '';
    list.forEach(a => {
        document.querySelector(".code-container").innerHTML += `
        <div class="code">
          <h3 class="code-title">${a[0]}</h3>
          <textarea class="code-text" onclick="this.select();document.execCommand('copy');alert('클립보드에 복사 되었습니다.');return false;" autocapitalize="off" autocomplete="off">${a[1]}</textarea>
          <button class="code-toggle">
            <i class="fas code-chevron-down"></i>
            <i class="fas code-times"></i>
          </button>
        </div>`;
    })
    const toggles = document.querySelectorAll(".code-toggle");
    
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            toggle.parentNode.classList.toggle("active");
        });
    });
})

document.getElementById("code-submit").addEventListener("click", async function(){
    const input = document.getElementById("name-input");
    const input1 = document.getElementById("code-input");
    await addDoc(collection(db, "CODE"), {
        name : input.value,
        code : input1.value
    })
    input.value = '';
    input1.value = '';
    alert("저장 완료");
})