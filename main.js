document.getElementById("app-text").value = `[코드 가입 신청]
`;
let hidden = 0;
document.getElementById('hidden-btn').addEventListener("click", function(){
    hidden++;
    if(hidden == 1){
        alert('날 찾았구나!');
    }else if(hidden == 10){
        alert('그만 좀 눌러줄래?');
    }else if(hidden == 20){
        alert('이거 생각보다 아프거든?');
    }else if(hidden == 30){
        alert('그만 하라니깐?');
    }else if(hidden == 31){
        alert('죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.죽여버릴꺼야.');
    }else if(hidden == 32){
        window.location.href = 'https://m.site.naver.com/1k2Dh';
    }
})
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