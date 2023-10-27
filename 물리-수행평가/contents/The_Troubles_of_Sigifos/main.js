var ctx = canvas.getContext('2d');

setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    ctx.beginPath();
    ctx.moveTo(spring.x * meter + position[0], canvas.height - spring.y * meter / 2 + position[1]);
    ctx.lineTo((spring.x + line.start) * meter + position[0], canvas.height - spring.y * meter / 2 + position[1]);
    if((spring.x + line.start) * meter + position[0] >= 0){
        for(let i = 0; i <= 100; i++){
            if(line.start * meter + (canvas.width - line.start * meter + position[0]) * i / 100 > (spring.x + line.start) * meter + position[0]){
                ctx.lineTo(line.start * meter + (canvas.width + position[0]) * i / 100,                 canvas.height - spring.y * meter / 2 + position[1] - line.list((canvas.width - line.start * meter) * (i + position[1] / canvas.width) / 100 / meter) * meter);
            }
        }
    }
    ctx.stroke();

    ctx.fillRect(spring.x * meter + position[0], canvas.height - spring.y * meter + position[1], spring.width * meter, spring.height * meter);

    ctx.beginPath();
    ctx.arc(marble.x * meter + position[0], canvas.height - marble.y * meter + position[1], marble.radius * meter, 0, Math.PI * 2, true);
    ctx.fill();

    if(marble.x < line.start){
        if(marble.x - marble.radius <= spring.x + spring.width){
            marble.velocity = velocity;
        }
        marble.x += marble.velocity * 0.02;
        if(marble.x > line.start){
            marble.velocity -= gravity * 0.02 * Math.cos(Math.atan(line.derivative(marble.x - line.start)));
            marble.x += Math.cos(Math.atan(line.derivative(marble.x - line.start))) * marble.velocity * 0.02;
            marble.y = line.list(marble.x - line.start) + spring.height / 2;
        }
    }else{//속도를 50만큼 나눠야함
        //-g * t * sin(θ)
        marble.velocity -= gravity * 0.02 * Math.cos(Math.atan(line.derivative(marble.x - line.start)));
        marble.x += Math.cos(Math.atan(line.derivative(marble.x - line.start))) * marble.velocity * 0.02;
        marble.y = line.list(marble.x - line.start) + spring.height / 2;
    }
}, 20);
//0.02s

