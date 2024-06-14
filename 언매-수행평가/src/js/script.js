function message(message, my){
    if(message != ''){
        let date = new Date();
        document.getElementById('content').innerHTML += `
        <div class="chat ${my ? 'my' : ''}">
            <div class="chat-text">${message}</div>
            <div class="chat-time">${zero(date.getHours(), 2)}:${zero(date.getMinutes(), 2)}</div>
        </div>`;
    }
}

function zero(str, n){
    return String(str).padStart(n, "0")
}

document.getElementById('submit').addEventListener("click", function(){
    let text = document.getElementById('message');
    message(text.value, true);
    text.value = '';
})

document.getElementById('message').addEventListener("keypress", function(e){
    if(e.code === 'Enter'){
        message(this.value, true);
        this.value = '';
    }
})

document.querySelectorAll('.image').forEach((x, y, z) => {
    x.addEventListener("click", function(){
        this.classList.toggle("active");
        let submit = document.getElementById('img-submit');
        if(document.querySelectorAll('.image.active').length){
            submit.classList.add("active");
        }else{
            submit.classList.remove("active");
        }
    })
})

window.onload = function(){
    message('안녕하세요');
}