var fps = 50;
document.getElementById('fps').addEventListener("change", function(){
    fps = this.value;
    clearInterval(repeater);
    repeater = setInterval(repeat, 1000 / fps);
});
var meter = 150;
document.getElementById('meter').addEventListener("change", function(){
    meter = parseInt(this.value);
});
document.getElementById('reset').addEventListener("click", function(){
    //
})
document.getElementById('play').addEventListener("click", function(){
    clearInterval(repeater);
    repeater = setInterval(repeat, 1000 / fps);
})
document.getElementById('stop').addEventListener("click", function(){
    clearInterval(repeater);
})
var speed = 1;
document.querySelectorAll('.speed').forEach((a, i) => {
    a.addEventListener("click", function(){
        switch (i){
            case 0:
                speed = 0.01;
                break;
            case 1:
                speed = 0.25;
                break;
            case 2:
                speed = 0.5;
                break;
            case 3:
                speed = 1;
                break;
            case 4:
                speed = 2;
                break;
            case 5:
                speed = 5;
                break;
        }
    })
})
// document.getElementById('stop').addEventListener("click", function(){
//     clearInterval(repeater); -----reset-----
// })
document.getElementById('back-btn').addEventListener("click", function(){
    window.location.href = "../../"
})

var gravity = 9.8;// m/s^2
var velocity = 10;// m/s

var spring = {
    x : 0,
    y : 1,
    width : 1,
    height : 1,
    energy : 50,
    color : 'white'
}
var tracks = {
    start : 3,
    type : 3,
    list(x){
        return [x, Math.pow(x, 2), Math.pow(x, 0.5), Math.sin(x) * 2 + x][this.type];
    },
    derivative(x){
        return [1, 2 * x, 0.5 / Math.pow(x, 0.5), Math.cos(x) * 2 + 1][this.type];
    }
}
var marble = {
    x : 1.25,
    y : 0.5,
    radius : 0.25,
    velocity : 0,
    color : 'white',
    mass : 1 //kg
}
var maximum = 0;