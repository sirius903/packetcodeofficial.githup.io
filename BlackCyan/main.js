import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, deleteDoc , onSnapshot, initializeFirestore, memoryLocalCache } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js';
import { getDatabase, ref, child, set, get, onValue, onDisconnect, serverTimestamp, off } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js';

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
let chat_type = ['Main', '', ''];

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
  document.querySelector('.list').className = 'list container scroller';
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

  chat_change(0);
}

const chat_change = function(type, id){
  document.getElementById('full-chat-input').addEventListener("keypress", function(e){
    console.log(1)
    if(e.code === 'Enter'){
      console.log(2)
      let chatRef;
      if(type == 0){
        chatRef = 'Chats/Main';
      }else{
        chatRef = 'Chats/Public/' + sha224(id);
      }
      // let chatRef = 'Chats/' + (type == 0 ? 'Main' : ('Public/' + sha224(id)));
      console.log(chatRef);
      set(ref(database, chatRef), {
        id : auth.currentUser.displayName,
        message : document.getElementById('full-chat-input').value
      })
      //firestore에 메시지 저장
      document.getElementById('full-chat-input').value = '';
    }
  })
  // console.log(1)
  // function chat_enter(e){
  //   if(e.code === 'Enter'){
  //   }
  // }
  // document.getElementById('full-chat-input').removeEventListener("keypress", chat_enter);
  // document.getElementById('full-chat-input').addEventListener("keypress", chat_enter);
  //메인 + 룸 (방 참가시)1
  //메인만 (기본)0
  //룸(설정 시)2
  off(ref(database, 'Chats/Main'));
  // if(id) off(ref(database));
  switch (type) {
    case 1:
      onValue(ref(database, 'Chats/Public/' + sha224(id)), (snapshot) => {
        let chat = snapshot.val();
        if(chat.message != ''){
          let full_chat = document.getElementById('full-chat');
          let scroll = true;
          if(full_chat.scrollTop + full_chat.clientHeight + 5 < full_chat.scrollHeight) scroll = false;
          let div = document.createElement('div');
          let h1 = document.createElement('h1');
          let p = document.createElement('p');
          h1.innerText = 'In-Room' + chat.id;
          p.innerText = chat.message;
          div.className = 'chat-message';
          h1.className = 'chat-tag';
          div.append(h1);
          div.append(p);
          full_chat.append(div);
          if(scroll) full_chat.scrollTop = full_chat.scrollHeight;
          set(ref(database, 'Chats/Public /message'), '');
        }
      })
    case 0:
      onValue(ref(database, 'Chats/Main'), (snapshot) => {
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
          set(ref(database, 'Chats/Main/message'), '');
        };
      });
      break;
    default:
      //뭐요
      break;
  }
}

const create = function(uid){
  document.getElementById('room_title').innerText = auth.currentUser.displayName + "'s Room";
  document.getElementById('room-title').value = auth.currentUser.displayName + "'s Room";
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
        title : document.getElementById('room-title').value,
        manager : false,
        player1 : false,
        player2 : false,
        player3 : false,
        player4 : false,
        players : 0
      })
      enter(uid, id);
      // onDisconnect(ref(database, 'Rooms/Public/' + sha224(id))).remove();
    })
  })
}

const enter = function(uid, id){
  get(child(ref(database), 'Rooms/Public/' + sha224(id))).then((snapshot)=>{
    const data = snapshot.val();
    function roomRef(text){return ref(database, 'Rooms/Public/' + sha224(id) + text);};
    if(data.limit > data.players){
      let number;
      function change(n){
        set(roomRef('/player' + n), uid);
        number = n;
        if(!data.manager){
          set(roomRef('/manager'), uid);
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
      set(ref(database, 'Users/' + uid + '/room'), sha224(id));
      set(roomRef('/players'), data.players + 1);
      // console.log(data);
      // alert(id + ', ' + uid);
      document.getElementById('room-players-title').className = '';
      document.getElementById('room_title').innerText = data.title;
      document.getElementById('room-title').value = data.title;
      document.getElementById('create-button').className = 'room-btn hidden';
      document.querySelector('.rooms-list').className = 'rooms-list hidden';
      document.querySelector('.room').className = 'room';
      onDisconnect(ref(database, 'Users/' + uid + '/room')).set('');
      // chat_change(1, id);
      document.getElementById('room-chat-box').className = 'settings';
      document.getElementById('room-chat-input').addEventListener("keypress", function(e){
        if(e.code === 'Enter'){
          set(ref(database, 'Chats/Public/' + sha224(id)), {
            id : auth.currentUser.displayName,
            message : document.getElementById('room-chat-input').value
          })
          //firestore에 메시지 저장
          document.getElementById('room-chat-input').value = '';
        }
      })
      onValue(ref(database, 'Chats/Public/' + sha224(id)), (snapshot) => {
        let chat = snapshot.val();
        if(chat.message != ''){
          let room_chat = document.getElementById('room-chat');
          let scroll = true;
          if(room_chat.scrollTop + room_chat.clientHeight + 5 < room_chat.scrollHeight) scroll = false;
          let div = document.createElement('div');
          let h1 = document.createElement('h1');
          let p = document.createElement('p');
          h1.innerText = chat.id;
          p.innerText = chat.message;
          div.className = 'chat-message';
          h1.className = 'chat-tag';
          div.append(h1);
          div.append(p);
          room_chat.append(div);
          if(scroll) room_chat.scrollTop = room_chat.scrollHeight;
          set(ref(database, 'Chats/Public/' + sha224(id)) + '/message', '');
        }
      })
      onValue(roomRef(''), (snapshot) => {
        const room = snapshot.val();
        onDisconnect(roomRef('')).cancel();
        document.getElementById('room-players').replaceChildren('');
        [room.player1, room.player2, room.player3, room.player4].forEach(a => {
          if(a){
            get(child(ref(database), 'Users/' + a)).then((b) => {
              let user = b.val()
              let player = document.createElement('div');
              player.className = 'room-player';
              player.innerHTML = `<img class="room-player-avatar" src="https://fastly.picsum.photos/id/251/250/250.jpg?hmac=_NUJeiKDfHVqhYGCW_85ojnjvg9ZWfHfMGppohybKyE">
              <div class="room-player-text">
                <div class="room-player-id">${user.id}</div>
                <div class="room-player-data">
                  <div class="room-player-level">Lv. ${user.exp}</div>
                  ${a == room.manager ? '<div class="room-player-host">Host</div>' : ''}
                </div>
              </div>`;
              document.getElementById('room-players').append(player);
            })
          }
        })
        document.getElementById('room-players-number').innerText = `(${room.players} / ${room.limit})`;
        document.getElementById('room_title').innerText = room.title;
        if(uid == room.manager){
          document.getElementById('room-configs').className = 'after';
          document.getElementById('change-button').className = 'room-btn';
          document.getElementById('start-button').className = 'room-btn' + (room.players > 1 ? ' active' : '');
          document.querySelectorAll('.config_item').forEach(a => {
            a.addEventListener("change", function(){
              document.getElementById('change-button').className = 'room-btn active';
            })
          })
          document.getElementById('change-button').addEventListener("click", function(){
            ['title', 'limit'].forEach(a => {
              set(roomRef('/' + a), document.getElementById('room-' + a).value);
            })
          })
        }
        onDisconnect(roomRef('/players')).set(room.players - 1);
        onDisconnect(roomRef('/player' + number)).set(false);
        if(uid == room.manager){
          if(room.players > 1){
            if(room.player1 && room.player1 != room.manager){
              onDisconnect(roomRef('/manager')).set(room.player1);
            }else if(room.player2 && room.player2 != room.manager){
              onDisconnect(roomRef('/manager')).set(room.player2);
            }else if(room.player3 && room.player3 != room.manager){
              onDisconnect(roomRef('/manager')).set(room.player3);
            }else if(room.player4 && room.player4 != room.manager){
              onDisconnect(roomRef('/manager')).set(room.player4);
            }
          }else{
            onDisconnect(roomRef('')).remove();
          }
        }
        // alert(room.manager + ', ' + room.players);
      });
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