function operater(x){
    console.log(x);
    alert("옳바르지 않은 비밀번호입니다.");
}

let banners = new Array(document.querySelectorAll('.banner').length).fill().map((x, i) => i);

function banner(x){
    document.querySelectorAll('.banner').forEach(a => {
        a.style.transition = '';
    })
    if(x == 1){
        banners.unshift(banners.pop());
        document.querySelectorAll('.banner')[banners[0]].style.transition = '0s all';
    }else if(x == -1){
        document.querySelectorAll('.banner')[banners[0]].style.transition = '0s all';
        banners.push(banners.shift());
    }
    banners.forEach((a, i) => {
        document.querySelectorAll('.banner')[a].style.translate = `${100 * (i - a - 1)}% 0`;
    })
}
banner(1);