const password = '95582e1021cd7ebc39cc552519680686084b3bfea5dbfa15c05503150004d9cd';

function operater(x){
    if(sha256(x) == password){
        alert("관리자 전환 완료.");
    }else{
        alert("옳바르지 않은 비밀번호입니다.");
    }
}

// let banners = new Array(document.querySelectorAll('.banner').length).fill().map((x, i) => i);

// function banner(x){
//     document.querySelectorAll('.banner').forEach(a => {
//         a.style.transition = '';
//     })
//     if(x == 1){
//         banners.unshift(banners.pop());
//         document.querySelectorAll('.banner')[banners[0]].style.transition = '0s all';
//     }else if(x == -1){
//         document.querySelectorAll('.banner')[banners[0]].style.transition = '0s all';
//         banners.push(banners.shift());
//     }
//     banners.forEach((a, i) => {
//         document.querySelectorAll('.banner')[a].style.translate = `${100 * (i - a - 1)}% 0`;
//     })
// }
// banner(1);

// function bannerTo(){
//     if(banners[1] == 0){
//         window.location.href = "#app";
//     }
// }

document.getElementById("add-faq-btn").addEventListener("click", function(){
    this.style.display = 'none';
    document.getElementById("add-faq").style.display = 'flex';
})
document.getElementById("faq-cancel").addEventListener("click", function(){
    document.getElementById("add-faq-btn").style.display = '';
    document.getElementById("add-faq").style.display = '';
})
function to_qna(){
    document.getElementById("add-faq-btn").style.display = 'none';
    document.getElementById("add-faq").style.display = 'flex';
    document.getElementById("faq-input").focus();
}