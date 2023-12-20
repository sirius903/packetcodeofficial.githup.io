import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, doc, deleteDoc , onSnapshot, initializeFirestore, memoryLocalCache } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import { getDatabase, ref, child, set, get, onValue, onDisconnect, serverTimestamp, off } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyC8KWzgj6ZFloLDc5AMrbIWvZjAdXaWQTo",
    authDomain: "beomeo-festival-2023.firebaseapp.com",
    databaseURL: "https://beomeo-festival-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "beomeo-festival-2023",
    storageBucket: "beomeo-festival-2023.appspot.com",
    messagingSenderId: "592620541818",
    appId: "1:592620541818:web:98424edb6e12503bd7a8c3"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

async function getNums(){
    const numbers = await getDocs(collection(db, "Users"));
    return numbers.docs.map(x => x.id);
}
const login = function(classnumber, password, href){
    getNums().then(async function(nums){
        if(nums.includes(classnumber)){
            const data = await getDoc(doc(db, "Users", classnumber));
            if(data.data().password == sha256(password)){
                updateAuth(classnumber);
                window.location.href = href;
            }else{
                //
            }
        }
    })
}
// login('20621', '123456')
const signup = async function(classnumber, id, password, href){
    // console.log(array)
    getNums().then(nums => {
        if(!nums.includes(classnumber)){
            setDoc(doc(db, "Users", classnumber), {
                id : id,
                password : sha256(password)
            }).then(() => {
                set(ref(database, 'Users/' + classnumber), {
                    id : id,
                    CODE : 0,
                    Key_Down : 0,
                    point : 0
                }).then(() => {
                    updateAuth(classnumber);
                    window.location.href = href;

                })
            })
            // console.log('signup')
        }
    })
}
// signup('205', 'zㅣ존 미누스', '123456')
const updateAuth = function(classnumber){
    signInAnonymously(auth).then((user) => {
        // console.log(user.user)
        updateProfile(user.user, {
            displayName : classnumber
        })
        load();
    })
}
const load = function(){
    signInAnonymously(auth).then(async function(user){
        const name = auth.currentUser.displayName;
        console.log(name)
        if(name != 0){
            get(child(ref(database), 'Users/' + name)).then((snapshot) => {
                const data = snapshot.val();
                document.getElementById('name').innerText = data.id;
                document.getElementById('point').innerText = data.point + ' pt';
                function rank_load(array){
                    document.getElementById('rank').innerText = array.sort((a, b) => b.point - a.point).findIndex(x => x.id == data.id) + 1 + '위';
                }
                rank(rank_load)
                
                // console.log(data);
            });
            document.getElementById('entry').className = 'hidden';
            document.getElementById('profile').className = '';
        }else{
            document.getElementById('entry').className = '';
            document.getElementById('profile').className = 'hidden';
        }
    })
}
const logout = function(){
    updateProfile(auth.currentUser, {
        displayName : 0
    })
    window.location.href = window.origin + '/' + window.location.pathname.split('/')[1];
}
document.getElementById('log-out').addEventListener("click", logout);
const rank = function(A){
    onValue(ref(database, 'Users'), (snapshot) => {
        const data = snapshot.val();
        A(Object.values(data).map((x, i) => {x.numbers = Object.keys(data)[i]; return x}));
    })
}
window.addEventListener("load", load);

export { login, signup, logout, load, rank }