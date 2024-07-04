import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, query, collection, doc, onSnapshot, addDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjD6Ibas2Gu3pkNz1DQL1yYJg0xGj53kQ",
    authDomain: "code-repository-56a0f.firebaseapp.com",
    projectId: "code-repository-56a0f",
    storageBucket: "code-repository-56a0f.appspot.com",
    messagingSenderId: "1011659196301",
    appId: "1:1011659196301:web:9960a6ff54cee8f955dfc4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let sort = 'old';
let list = [];

document.getElementById("sort").addEventListener("change", function(){
    sort = this.value;
    console.log(sort)
    changeCodes();
})

onSnapshot(collection(db, "CODE"), (qas) => {
    list = [];
    qas.forEach((doc) => {
        if(doc.data().a != ''){
            list.push([doc.data().name, doc.data().code, doc.data().date.toDate()]);
        }
    })
    changeCodes();
})

function changeCodes(){
    list.sort(function(a, b){
        if(sort == 'old'){
            return a[2] - b[2];
        }else if(sort == 'new'){
            return b[2] - a[2];
        }else if(sort == 'atoz'){
            return a[0].localeCompare(b[0]);
        }else if(sort == 'ztoa'){
            return b[0].localeCompare(a[0]);
        }
    })
    document.querySelector("#codes").innerHTML = '';
    list.forEach(a => {
        document.querySelector("#codes").innerHTML += `
        <div class="code">
          <h3 class="code-title">${a[0] + '(' + a[2].getFullYear() + '.' + String(a[2].getMonth()).padStart(2, "0") + '.' + String(a[2].getDate()).padStart(2, "0") + ')'}</h3>
          <textarea class="code-text" onclick="this.select();document.execCommand('copy');alert('클립보드에 복사 되었습니다.');return false;" autocapitalize="off" autocomplete="off">${decodeURIComponent(atob(a[1]))}</textarea>
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
}

document.getElementById("save").addEventListener("click", async function(){
    const name = document.getElementById("name");
    const code = document.getElementById("code");
    await addDoc(collection(db, "CODE"), {
        name : name.value,
        code : window.btoa(encodeURIComponent(code.value)),
        date : new Date
    })
    name.value = '';
    code.value = '';
    alert("저장 완료");
})