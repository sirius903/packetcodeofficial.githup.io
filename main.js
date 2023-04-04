var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvaswidth = 500;
var gravity = 9.8;
var meter = 10;
var ground = {
    h : 0,
    color : 'white'
}
var objects = [];
class Object {
    name = 'a';
    type = 'box';
    mass = 1;
    x = 100;
    y = 100;
    width = 100;
    height = 100;
    pvf = 0;
    mvf = 0;
    vv = 0;
}
    //objects.push({})
setInterval(function(){
    canvas.width = canvaswidth;
    canvas.height = window.innerHeight;
    input.width = window.innerWidth - canvaswidth;
    input.height = window.innerHeight;
    objects.forEach(a => {
        a.y += a.vv * meter;
        if(a.y + a.height > innerHeight - ground.h){
            a.y = innerHeight - a.height - ground.h;
            a.vv = 0;
            a.mvf = a.pvf + gravity * a.mass;
        }
        ctx.fillStyle = 'white';
        ctx.fillRect(a.x, a.y, a.width, a.height);
        a.vv += ((a.pvf - a.mvf) / a.mass + gravity) / 20;
    })
}, 50);
//0.05s

function add(){
    var object = new Object;
    objects.push(object);
}