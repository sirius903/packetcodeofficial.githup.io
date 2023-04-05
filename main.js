var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvaswidth = 500;
var gravity = 9.8;
var meter = 4;
var ground = {
    h : 0,
    color : 'rgb(128, 128, 128)'
}
var objects = [];
class Object {
    name = 'New Object';
    type = 'box';
    mass = 1;
    x = 100;
    y = 100;
    width = 100;
    height = 100;
    pvf = 0;
    mvf = 0;
    vv = 0;
    phf = 0;
    mhf = 0;
    hv = 0;
    color = 'white';
}
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
            if(gravity >= 0){
                a.mvf = a.pvf + gravity * a.mass;
            }
        }
        a.vv += ((a.pvf - a.mvf) / a.mass + gravity) / 50;
        //a.x += a.hv * meter;
        //a.hv += (a.phf - a.mhf) / a.mass / 20;
        ctx.fillStyle = a.color;
        ctx.fillRect(a.x, a.y, a.width, a.height);
    })
    ctx.fillStyle = ground.color;
    ctx.fillRect(0, canvas.height - ground.h, canvas.width, ground.h);
}, 20);
//0.02s

function setgravity(m){
    gravity = [9.8, document.getElementById('gravity').value - 0][!m * 1];
    objects.forEach(a => {
        if(a.y + a.height == innerHeight - ground.h){
            if(gravity < 0){
                a.mvf = 0;
            }else{
                a.mvf = a.pvf + gravity * a.mass;
            }
        }
    })
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
function setheight(m){
    objects.map(a => a.y += ground.h - (document.getElementById('height').value - 0) * meter);
    ground.h = (document.getElementById('height').value - 0) * !m * meter
}
function groundctn(){
    document.getElementById('groundr').value = hexToRgb(document.getElementById('groundrgb').value).r;
    document.getElementById('groundg').value = hexToRgb(document.getElementById('groundrgb').value).g;
    document.getElementById('groundb').value = hexToRgb(document.getElementById('groundrgb').value).b;
}
function groundntc(){
    document.getElementById('groundrgb').value = rgbToHex(document.getElementById('groundr').value - 0, document.getElementById('groundg').value - 0, document.getElementById('groundb').value - 0);
}
function setgroundcolor(){
    ground.color = 'rgb(' + document.getElementById('groundr').value + ', ' + document.getElementById('groundg').value + ', ' + document.getElementById('groundb').value + ')';
}
function add(){
    var object = new Object;
    objects.push(object);
    document.getElementById('objects').appendChild(document.importNode(document.getElementsByTagName('button')[document.getElementById('objects').childElementCount - 1], true));
    let button = document.createElement('button');
    button.appendChild(document.createElement('p')).append(object.name)
    document.getElementsByTagName('button')[document.getElementById('objects').childElementCount - 2].replaceWith(button);
}