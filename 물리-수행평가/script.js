for(let i = 3 - document.querySelectorAll('.content').length % 3; i > 0; i--){
    document.getElementById('contents').innerHTML += `<div class="content none"><div class="content-title">개발중</div></div>`;
}