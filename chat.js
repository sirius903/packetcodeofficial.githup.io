var chats = [];
var n = parseInt(localStorage.getItem("n"));
var wait = [];
var time = [true, 0, 0]

document.querySelector('button').addEventListener('click',
function(){
    if(time[0]){
        var input = document.querySelectorAll('.input');
        if(parseInt(localStorage.getItem("n")) == n){
            localStorage.setItem("n", parseInt(localStorage.getItem("n")) + 1);
            localStorage.setItem("chat", input[0].value + " : " + input[1].value);
        }else{
            wait.push(input[0].value + " : " + input[1].value);
        }
        time[0] = false;
    }
})

var animation
animation = setInterval(function () {
    if(parseInt(localStorage.getItem("n")) != n){
        if(time[2] > 20){
            chats.push(localStorage.getItem("chat"));
            document.getElementsByClassName("chatting")[0].innerHTML = '';
            chats.forEach(e => {
                document.getElementsByClassName("chatting")[0].innerHTML += ('<div>' + e + '</div>');
            });
            time[2] = 0;
            n = parseInt(localStorage.getItem("n"));
        }else{
            time[2] += 1;
        }
    }else{
        if(wait.length > 0){
            localStorage.setItem("n", parseInt(localStorage.getItem("n")) + 1);
            localStorage.setItem("chat", wait.shift());
        }
    }
    if(!time[0]){
        time[1] += 1;
        if(time[1] >= 100){
            time[0] = true;
            time[1] = 0;
        }
    }
}, 10);