import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, deleteDoc , onSnapshot, initializeFirestore, memoryLocalCache } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import { getDatabase, ref, child, set, get, onValue, onDisconnect, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyDdDEDKiB3BhkHulfzvA9KfFhAWHXRk89w",
  authDomain: "blackcyan-bffc2.firebaseapp.com",
  databaseURL: "https://blackcyan-bffc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blackcyan-bffc2",
  storageBucket: "blackcyan-bffc2.appspot.com",
  messagingSenderId: "352934571969",
  appId: "1:352934571969:web:b8f28e725aba689d394940"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

const login = function(email, password){
  signInWithEmailAndPassword(auth, email, password).then((user) => {
    const statusRef = ref(database, 'user/' + user.user.uid + '/status');
    set(statusRef, 'online');
    onValue(ref(database, '.info/connected'), (snapshot) => {
      if (snapshot.val() === true){
        onDisconnect(statusRef).set('offline');
        set(statusRef, 'online');
        onDisconnect(ref(database, 'user/' + user.user.uid + '/lastOnine')).set(serverTimestamp());
      }
    })
    connect();
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}

function randomStr(){
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  const rnum = Math.floor(Math.random() * chars.length);
  const randomstring = chars.substring(rnum, rnum + 1);
  return randomstring
}

const guest = function(){
  signInAnonymously(auth).then((user) => {
    let id = 'Guest-000000';
    getIds().then(ids => {
      while(true){
        id = 'Guest-';
        for(let i = 0; i < 6; i++){
          id += randomStr();
        }
        if(!ids.includes(id)) break;
      }
      updateProfile(auth.currentUser, {
        displayName : id
      }).then(() => {
        setDoc(doc(db, "Auths", user.user.uid), {
          id : id
        })
        set(ref(database, 'user/' + user.user.uid), {
          displayName : id,
          email : 'guest',
          status : 'online',
          level : 'guest'
        });
        onValue(ref(database, '.info/connected'), (snapshot) => {
          if (snapshot.val() === true){
            onDisconnect(statusRef).set('offline');
            set(statusRef, 'online');
            onDisconnect(ref(database, 'user/' + user.user.uid + '/lastOnine')).set(serverTimestamp());
          }
        });
        connect();
      }).catch((error) =>{
        console.log(error.code);
        console.log(error.message);
      })
    })
  }).catch((error) => {
    console.log(error.message);
  })
}

const signup = function(email, password, id){
  createUserWithEmailAndPassword(auth, email, password).then((user) => {
    updateProfile(auth.currentUser, {
      displayName : id
    }).then(() => {
      setDoc(doc(db, "Auths", user.user.uid), {
        id : id
      })
      set(ref(database, 'user/' + user.user.uid), {
        displayName : id,
        email : email,
        status : 'online',
        level : 1
      });
      onDisconnect(ref(database, 'user/' + user.user.uid + '/status')).set('offline');
      connect();
    }).catch((error) =>{
      console.log(error.code);
      console.log(error.message);
    })
  }).catch((error) => {
    console.log(error.code);
    console.log(error.message);
    document.getElementById('signup-error').innerText = error.code;
    document.getElementById('signup-error').className = 'entry-error error';
  })
}

async function getIds(){
  let id = [];
  const ids = await getDocs(collection(db, "Auths"));
  ids.forEach((doc)=>{
    id.push(doc.data().id);
  });
  return id;
}

function connect(){
  const user = getAuth().currentUser;
  document.getElementById('my-id').replaceChildren(user.displayName);
  onValue(ref(database, 'user/' + user.uid + '/level'), (level) => {
    document.getElementById('my-level').replaceChildren(level.val() == 'guest' ? 'Guest' : 'Lv. ' + level.val());
  })
  onValue(ref(database, 'user'), (snapshot) => {
      const data = snapshot.val();
      const players = Object.keys(data).map(i => data[i]).filter(x => x.status != 'offline');
      document.getElementById('players-list').replaceChildren('');
      players.forEach(a => {
          let player = document.createElement('div');
          player.className = 'player';//------레벨 파이어스토어 적용-------
          player.innerHTML = `<div class="player-level">${a.level == 'guest' ? 'Guest' : 'Lv. ' + a.level}</div>
          <div class="player-id">${a.displayName}</div>
          <div class="player-status ${a.status}" title="${a.status}">●</div>`;
          document.getElementById('players-list').append(player);
      })
      document.getElementById('players-number').innerText = `(${players.length} / 100)`;
  })
  document.addEventListener("visibilitychange", () => {
      if(document.hidden){
          set(ref(database, 'user/' + user.uid + '/status'), 'away');
      }else{
          set(ref(database, 'user/' + user.uid + '/status'), 'online');
      }
  });
  document.querySelector('.main-menu').className = 'main-menu container hidden';
  document.querySelector('.list').className = 'list container';
  // onValue(ref(database, 'rooms'), (snapshot) => {
  //   let rooms = Object.keys(snapshot.val()).map(i => snapshot.val()[i]);
  //   document.getElementById('rooms').innerHTML = '';
  //   var add_item = document.createElement('div');
  //   add_item.className = 'rooms_item add_btn';
  //   add_item.innerHTML = '<div id="text">New Room</div>';
  //   add_item.addEventListener("click", ()=>{
  //     enter(false);
  //   })
  //   document.getElementById('rooms').append(add_item);
  //   rooms.forEach(a => {
  //     let item = document.createElement('div');
  //     item.className = 'rooms_item';
  //     item.innerHTML = `<div class="rooms-title">${a.name}</div><div class="rooms-limit">${'1 / ' + a.limit}</div>`;
  //     item.addEventListener("click", () => {enter(a.id);});
  //     document.getElementById('rooms').append(item);
  //   })
  //   for(let i = 3 - rooms.length % 3; i > 1; i--){
  //     let item = document.createElement('div');
  //     item.className = 'rooms_item';
  //     document.getElementById('rooms').append(item);
  //   }
  // });

  document.getElementById('full-chat-input').addEventListener("keydown", function(e){
    if(e.code === 'Enter'){
      setDoc(doc(db, "Chats", "Full-Chats"), {
        tag : auth.currentUser.displayName,
        message : document.getElementById('full-chat-input').value
      })
      document.getElementById('full-chat-input').value = '';
    }
  })
}

export { login, signup, getIds, guest };