var ctx = canvas.getContext('2d');

function repeat(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    if(timer){
        apples.forEach(a => {
            a.velocity[1] -= gravity / fps * speed;
            a.x += a.velocity[0] / fps * speed;
            a.y += a.velocity[1] / fps * speed;
            if(a.y - a.radius < ground.height){
                a.y = ground.height + a.radius;
                a.velocity[1] = 0;
            }
        })
    }
    apples.forEach((a, i) => {
        document.getElementById('apple-x-' + i).value = a.x;
        document.getElementById('apple-y-' + i).value = a.y;
        if(a.maximum < a.y){
            a.maximum = a.y;
            document.getElementById('apple-maximum-' + i).value = maximum;
        }
        document.getElementById('apple-hvr-' + i).value = a.velocity[0];
        document.getElementById('apple-vvr-' + i).value = a.velocity[1];
        document.getElementById('apple-ke-' + i).value = a.mass * (Math.pow(a.velocity[0], 2) + Math.pow(a.velocity[1], 2)) / 2;
        document.getElementById('apple-pe-' + i).value = a.mass * gravity * a.y;
        document.getElementById('apple-de-' + i).value = a.mass * ((Math.pow(a.velocity[0], 2) + Math.pow(a.velocity[1], 2)) / 2 + gravity * a.y);
    })
    ctx.fillRect(0, canvas.height - ground.height * meter + position[1], canvas.width, ground.height * meter - position[1]);
    apples.forEach((a, i) => {
        ctx.fillStyle = 'rgba(255, 255, 255,' + 1 / apples.length * (apples.length - i) + ')'
        ctx.beginPath();
        ctx.arc(a.x * meter + position[0], canvas.height - a.y * meter + position[1], a.radius * meter, 0, Math.PI * 2, true);
        ctx.fill();
    })
}
let repeater = setInterval(repeat, 1000 / fps);
//(fps)ms