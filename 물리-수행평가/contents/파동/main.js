var ctx = canvas.getContext('2d');
var gravity = 9.8;
var meter = 4;
var v = 9.8;
var spring = {
    x : 0,
    y : 120,
    width : 40,
    height : 40
}
var marble = {
    x : 50,
    y : 100,
    radius : 10,
    v : false
}

//
var timer = 0;
var e = 0;

setInterval(function(){

    canvasWidth = canvas.width;
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    e += 1;
    timer += (Math.sin(e / 50) + 1) / 3.5 + 0.1;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    for(let i = 0; i <= 100; i++){
        ctx.lineTo(canvas.width * i / 100, canvas.height / 2 + 100 * Math.sin(i * 50 + timer) + 10 * (50 - i));
    }
    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 + 100 * Math.sin(2500 + timer) - 50, 100, 100);
    // ctx.fillRect(0, 0, 100, 100);

    // ctx.beginPath();
    // ctx.moveTo(0, innerHeight - 100);
    // ctx.lineTo(200, innerHeight - 100);
    // ctx.lineTo(canvasWidth, innerHeight - canvasWidth + 100);
    // ctx.stroke();

    // ctx.fillRect(spring.x, innerHeight - spring.y, spring.width, spring.height);

    // ctx.beginPath();
    // ctx.arc(marble.x, innerHeight - marble.y, marble.radius, 0, Math.PI * 2, true);
    // ctx.fill();

    // if(marble.x > 200){
    //     marble.v -= gravity * Math.sqrt(2) / 200;
    //     marble.y += marble.v / Math.sqrt(2);
    //     marble.x = marble.y + 100;
    // }else{
    //     if(marble.x == 50 && marble.v == false){
    //         marble.v = parseInt(v);
    //     }
    //     if((marble.v > 0 && marble.v !== false) || marble.x > 50){
    //         marble.x += marble.v;
    //         marble.y = 100;
    //     }
    // }
}, 20);
//0.02s

