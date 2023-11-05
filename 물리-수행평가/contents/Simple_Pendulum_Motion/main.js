var ctx = canvas.getContext('2d');

function repeat(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    if(timer){
        pendulum.velocity -= gravity * Math.sin(pendulum.angle) * pendulum.mass / fps * speed;
        pendulum.angle += pendulum.velocity / fps * speed;
    }

    document.getElementById('x-coordinate').value = pivot.x + pivot.radius * Math.sin(pendulum.angle);
    document.getElementById('y-coordinate').value = pivot.y - pivot.radius * Math.cos(pendulum.angle);
    document.getElementById('result-angle').value = pendulum.angle / Math.PI * 180;
    document.getElementById('result-velocity').value = pendulum.velocity;
    if(maximum < Math.abs(pendulum.velocity)){
        maximum = Math.abs(pendulum.velocity);
        document.getElementById('maximum-velocity').value = maximum;
    }
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + pivot.x * meter + position[0], canvas.height - pivot.y * meter + position[1]);
    ctx.lineTo(canvas.width / 2 + (pivot.x + pivot.radius * Math.sin(pendulum.angle)) * meter + position[0], canvas.height - (pivot.y - pivot.radius * Math.cos(pendulum.angle)) * meter + position[1]);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + (pivot.x + pivot.radius * Math.sin(pendulum.angle)) * meter + position[0], canvas.height - (pivot.y - pivot.radius * Math.cos(pendulum.angle)) * meter + position[1], pendulum.radius * meter, 0, Math.PI * 2, true);
    ctx.fill();
}
let repeater = setInterval(repeat, 1000 / fps);
//(fps)ms