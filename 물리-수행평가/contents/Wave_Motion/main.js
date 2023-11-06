var ctx = canvas.getContext('2d');

let time = 0;

function repeat(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    if(timer) time += speed / fps;

    // document.getElementById('x-coordinate').value = marble.x;
    // document.getElementById('y-coordinate').value = marble.y;
    // if(maximum < marble.y){
    //     maximum = marble.y;
    //     document.getElementById('maximum-height').value = maximum;
    // }
    // document.getElementById('velocity').value = marble.velocity;
    // document.getElementById('kinetic-energy').value = marble.mass * Math.pow(marble.velocity, 2) / 2;
    // document.getElementById('potential-energy').value = marble.mass * gravity * marble.y;
    // document.getElementById('dynamics-energy').value = marble.mass * (Math.pow(marble.velocity, 2) / 2 + gravity * marble.y);
    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    for(let i = 0; i <= canvas.width; i++){
        ctx.lineTo(i, canvas.height / 2 + waves.map(x => x.amplitude * Math.sin(2 * Math.PI * (i / x.wavelength - (time) / x.period * meter - position[0]) / meter)).reduce((a, b) => (a + b)) * meter);
    }
    ctx.stroke();
}
let repeater = setInterval(repeat, 1000 / fps);
//(fps)ms