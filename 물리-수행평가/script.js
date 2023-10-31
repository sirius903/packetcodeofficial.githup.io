for(let i = 12 - document.querySelectorAll('.content').length % 12; i > 0; i--){
    document.getElementById('contents').innerHTML += `<div class="content none"><div class="content-title">개발중</div></div>`;
}