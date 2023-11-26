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

/**로그인 함수
 * @param {String} email 이메일
 * @param {string} password 비밀번호
 */
const login = function(email, password){
  signInWithEmailAndPassword(auth, email, password).then((user) => {
    const uid = user.user.uid;
    const statusRef = ref(database, 'Users/' + uid + '/status');
    set(statusRef, 'online');
    onValue(ref(database, '.info/connected'), (snapshot) => {
      if (snapshot.val() === true){
        onDisconnect(statusRef).set('offline');
        set(statusRef, 'online');
        onDisconnect(ref(database, 'Users/' + uid + '/lastOnine')).set(serverTimestamp());
      }
    })
    load(uid);
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
        set(ref(database, 'Users/' + user.user.uid), {
          displayName : id,
          email : 'guest',
          status : 'online',
          level : 'guest'
        });
        onValue(ref(database, '.info/connected'), (snapshot) => {
          if (snapshot.val() === true){
            onDisconnect(statusRef).set('offline');
            set(statusRef, 'online');
            onDisconnect(ref(database, 'Users/' + user.user.uid + '/lastOnine')).set(serverTimestamp());
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
    let uid = user.user.uid;
    updateProfile(auth.currentUser, {
      displayName : id
    }).then(() => {
      setDoc(doc(db, "Users", uid), {
        email : email,
        password : password,
        id : id
      })
      set(ref(database, 'Users/' + uid), {
        id : id,
        status : 'online',
        exp : 0
      });
      onDisconnect(ref(database, 'Users/' + uid + '/status')).set('offline');
      connect(uid);
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

/**
 * @param {String} uid 유저의 uid
 */
function load(uid){
  onValue(ref(database, 'Users/' + uid), (snapshot) => {
    const data = snapshot.val();
    document.getElementById('my-id').replaceChildren(data.id);
    document.getElementById('my-level').replaceChildren(data.exp == 'guest' ? 'Guest' : 'Lv. ' + data.exp);
  });
  onValue(ref(database, 'Users'), (snapshot) => {
    const data = snapshot.val();
    const players = Object.keys(data).map(i => data[i]).filter(x => x.status != 'offline');
    document.getElementById('players-list').replaceChildren('');
    players.forEach(a => {
      let player = document.createElement('div');
      player.className = 'player';
      player.innerHTML = `<div class="player-level">${a.exp == 'guest' ? 'Guest' : 'Lv. ' + a.exp}</div>
      <div class="player-id">${a.id}</div>
      <div class="player-status ${a.status}" title="${a.status}">●</div>`;
      document.getElementById('players-list').append(player);
    })
    document.getElementById('players-number').innerText = `(${players.length} / 100)`;
  })
  document.addEventListener("visibilitychange", () => {
    if(document.hidden){
      set(ref(database, 'Users/' + uid + '/status'), 'away');
    }else{
      set(ref(database, 'Users/' + uid + '/status'), 'online');
    }
  });
  document.querySelector('.main-menu').className = 'main-menu container hidden';
  document.querySelector('.list').className = 'list container';
  onValue(ref(database, 'Rooms/Public'), (snapshot) => {
    let rooms = Object.keys(snapshot.val()).map(i => snapshot.val()[i]);
    document.getElementById('rooms').innerHTML = '';
    var add_item = document.createElement('div');
    add_item.className = 'rooms_item add_btn';
    add_item.innerHTML = '<div id="text">New Room</div>';
    add_item.addEventListener("click", ()=>{
      create(uid);
    })
    document.getElementById('rooms').append(add_item);
    rooms.forEach(a => {
      let item = document.createElement('div');
      item.className = 'rooms_item';
      item.innerHTML = `<div class="rooms-title">${a.title}</div><div class="rooms-limit">${a.players + ' / ' + a.limit}</div>`;
      item.addEventListener("click", () => {enter(uid, a.id);});
      document.getElementById('rooms').append(item);
    })
  })

  document.getElementById('full-chat-input').addEventListener("keypress", function(e){
    if(e.code === 'Enter'){
      set(ref(database, "Chats/Main"), {
        id : auth.currentUser.displayName,
        message : document.getElementById('full-chat-input').value
      })
      //firestore에 메시지 저장
      document.getElementById('full-chat-input').value = '';
    }
  })

  onValue(ref(database, "Chats/Main"), (snapshot) => {
    let chat = snapshot.val();
    if(chat.message != ''){
      let full_chat = document.getElementById('full-chat');
      let scroll = true;
      if(full_chat.scrollTop + full_chat.clientHeight + 5 < full_chat.scrollHeight) scroll = false;
      let div = document.createElement('div');
      let h1 = document.createElement('h1');
      let p = document.createElement('p');
      h1.innerText = chat.id;
      p.innerText = chat.message;
      div.className = 'chat-message';
      h1.className = 'chat-tag';
      div.append(h1);
      div.append(p);
      full_chat.append(div);
      if(scroll) full_chat.scrollTop = full_chat.scrollHeight;
      set(ref(database, "Chats/Main/message"), '');
    }
  })
}

const create = function(uid){
  document.getElementById('room-title').innerText = auth.currentUser.displayName + "'s Room";
  document.getElementById('room-name').value = auth.currentUser.displayName + "'s Room";
  document.querySelector('.rooms-list').className = 'rooms-list hidden';
  document.querySelector('.room').className = 'room';
  document.getElementById('create-button').addEventListener("click", async function(){
    get(child(ref(database), 'Rooms/Public')).then((snapshot) => {
      let ids = Object.keys(snapshot.val()).map(i => snapshot.val()[i].id);
      var id = '';
      const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYNZ"
      while(true){
        id = alph[Math.floor(Math.random() * alph.length)] + alph[Math.floor(Math.random() * alph.length)] + alph[Math.floor(Math.random() * alph.length)] + alph[Math.floor(Math.random() * alph.length)]
        if(!ids.includes(id)) break;
      }
      set(ref(database, 'Rooms/Public/' + sha224(id)), {
        id : id,
        limit : parseInt(document.getElementById('room-limit').value),
        title : document.getElementById('room-name').value,
        manager : false,
        player1 : false,
        player2 : false,
        player3 : false,
        player4 : false,
        players : 0
      })
      enter(uid, id);
      onDisconnect(ref(database, 'Rooms/Public/' + sha224(id))).remove();
    })
  })
}

const enter = function(uid, id){
  get(child(ref(database), 'Rooms/Public/' + sha224(id))).then((snapshot)=>{
    const data = snapshot.val();
    if(data.limit > data.players){
      function change(n){
        set(ref(database, 'Rooms/Public/' + sha224(id) + '/player' + n), uid);
        if(!data.manager){
          set(ref(database, 'Rooms/Public/' + sha224(id) + '/manager'), uid);
        }
      }
      if(!data.player1){
        change(1);
      }else if(!data.player2){
        change(2);
      }else if(!data.player3){
        change(3);
      }else if(!data.player4){
        change(4);
      }
      set(ref(database, 'Rooms/Public/' + sha224(id) + '/players'), data.players + 1);
      console.log(data);
      alert(uid+ ' ' + id)
      document.getElementById('room-title').innerText = data.title;
      document.getElementById('room-name').value = data.title;
      document.querySelector('.rooms-list').className = 'rooms-list hidden';
      document.querySelector('.room').className = 'room';
      // onDisconnect(ref(database, 'Rooms/Public/' + sha224(id))).remove();
    }else{
      alert('방 꽉 참');
    }
  })
  // set(ref(database, 'Rooms/Public/' + sha224(id) + '/players'))
}

// function enter(id){
//   if(id === false){
//   }else{
//     get(child(ref(database), 'rooms/' + id)).then((snapshot)=>{
//       let room = snapshot.val();
//       document.getElementById('room-title').innerText = room.name;
//       document.getElementById('room-name').value = room.name;
//     });

//   }
//   document.querySelector('.rooms-list').className = 'rooms-list hidden';
//   document.querySelector('.room').className = 'room';
//   document.getElementById('create-button').addEventListener("click", async function(){
//     var ids = [];
//     var id = '';
//     const rooms = await getDocs(collection(db, "Rooms"));
//     rooms.forEach(a => {
//         ids.push(a.data().id);
//     })
//     const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYNZ"
//     while(true){
//       id = alph[Math.floor(Math.random() * alph.length)] + alph[Math.floor(Math.random() * alph.length)] + alph[Math.floor(Math.random() * alph.length)] + alph[Math.floor(Math.random() * alph.length)]
//       if(!ids.includes(id)){
//           break;
//       }
//     }
//     set(ref(database, 'user/' + auth.currentUser.uid + '/role'), 'owner')
//     set(ref(database, 'rooms/' + id), {
//       name : document.getElementById('room-name').value,
//       limit : document.getElementById('room-limit').value,
//       id : id,
//       owner : auth.currentUser.uid
//     })
//     onDisconnect(ref(database, 'rooms/' + id)).remove();
//   })
// }

export { login, signup, getIds, guest };