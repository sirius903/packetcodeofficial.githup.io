document.getElementById("app-text").value = `[코드 가입 신청]
`;
// function bannerTo(){
//     ban = true;
//     if(banners[1] == 0){
//         window.location.href = "#app";
        
//         window.scrollBy({
//             top: -150,
//             behavior: "smooth",
//         });
//     }
// }

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
function to_app(){
    document.getElementById("app-class").focus();
}

window.onload = function(){
    if(window.location.hash == ''){
    }else{
        if(window.location.hash == '#faq'){
            to_qna();
        }else if(window.location.hash == '#application'){
            to_app();
        }
    }
}