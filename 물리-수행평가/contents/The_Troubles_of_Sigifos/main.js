var ctx = canvas.getContext('2d');

setInterval(function(){
    // console.log(line.start * meter + position[0])
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    ctx.beginPath();
    if(line.start * meter + position[0] < 0){
        for(let i = 0; i <= canvas.width; i++){
            if(canvas.height - spring.y * meter / 2 - line.list(-(line.start * meter + position[0] - i) / meter) * meter + position[1] >= 0){
                ctx.lineTo(i, canvas.height - spring.y * meter / 2 - line.list(-(line.start * meter + position[0] - i) / meter) * meter + position[1]);
            }
        }
    }else{
        if(spring.x < 0){
            ctx.moveTo(0, canvas.height - spring.y * meter / 2 + position[1]);
        }else{
            ctx.moveTo(spring.x * meter + position[0], canvas.height - spring.y * meter / 2 + position[1]);
        }
        ctx.lineTo(line.start * meter + position[0], canvas.height - spring.y * meter / 2 + position[1]);
        for(let i = line.start * meter + position[0]; i <= canvas.width; i++){
            if(canvas.height - spring.y * meter / 2 - line.list(-(line.start * meter + position[0] - i) / meter) * meter + position[1] >= 0){
                ctx.lineTo(i, canvas.height - spring.y * meter / 2 - line.list(-(line.start * meter + position[0] - i) / meter) * meter + position[1]);
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
        marble.x += marble.velocity / fps;
        if(marble.x > line.start){
            marble.velocity -= gravity / fps * Math.sin(Math.atan(line.derivative(marble.x - line.start)));
            marble.x += Math.cos(Math.atan(line.derivative(marble.x - line.start))) * marble.velocity / fps;
            marble.y = line.list(marble.x - line.start) + spring.height / 2;
        }
    }else{//속도를 50만큼 나눠야함
        //-g * t * sin(θ)
        marble.velocity -= gravity / fps * Math.sin(Math.atan(line.derivative(marble.x - line.start)));
        marble.x += Math.cos(Math.atan(line.derivative(marble.x - line.start))) * marble.velocity / fps;
        marble.y = line.list(marble.x - line.start) + spring.height / 2;
        if(marble.x < line.start && marble.y != spring.y - spring.height / 2){
            marble.y = spring.y - spring.height / 2;
        }
    }
    if(maximum < marble.y){
        maximum = marble.y;
        console.log(maximum);
    }
}, 1000 / fps);
//(fps)ms