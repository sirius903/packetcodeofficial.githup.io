var ctx = canvas.getContext('2d');

function repeat(){
    // console.log(line.start * meter + position[0])
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    ctx.beginPath();
    if(tracks.start * meter + position[0] < 0){
        for(let i = 0; i <= canvas.width; i++){
            if(canvas.height - spring.y * meter / 2 - tracks.list(-(tracks.start * meter + position[0] - i) / meter) * meter + position[1] >= 0){
                ctx.lineTo(i, canvas.height - spring.y * meter / 2 - tracks.list(-(tracks.start * meter + position[0] - i) / meter) * meter + position[1]);
            }
        }
    }else{
        if(spring.x < 0){
            ctx.moveTo(0, canvas.height - spring.y * meter / 2 + position[1]);
        }else{
            ctx.moveTo(spring.x * meter + position[0], canvas.height - spring.y * meter / 2 + position[1]);
        }
        ctx.lineTo(tracks.start * meter + position[0], canvas.height - spring.y * meter / 2 + position[1]);
        for(let i = tracks.start * meter + position[0]; i <= canvas.width; i++){
            if(canvas.height - spring.y * meter / 2 - tracks.list(-(tracks.start * meter + position[0] - i) / meter) * meter + position[1] >= 0){
                ctx.lineTo(i, canvas.height - spring.y * meter / 2 - tracks.list(-(tracks.start * meter + position[0] - i) / meter) * meter + position[1]);
            }
        }
    }
    ctx.stroke();

    ctx.fillRect(spring.x * meter + position[0], canvas.height - spring.y * meter + position[1], spring.width * meter, spring.height * meter);

    if(marble.x < tracks.start){
        if(marble.x - marble.radius <= spring.x + spring.width){
            marble.velocity = Math.pow(spring.energy * 2 / marble.mass, 1/2);
            marble.x = marble.radius + spring.x + spring.width
        }
        marble.x += marble.velocity / fps * speed;
        if(marble.x > tracks.start){
            marble.velocity -= gravity / fps * Math.sin(Math.atan(tracks.derivative(marble.x - tracks.start))) * speed;
            marble.x += Math.cos(Math.atan(tracks.derivative(marble.x - tracks.start))) * marble.velocity / fps * speed;
            marble.y = tracks.list(marble.x - tracks.start) + spring.height / 2;
        }
    }else{//속도를 50만큼 나눠야함
        //-g * t * sin(θ)
        marble.velocity -= gravity / fps * Math.sin(Math.atan(tracks.derivative(marble.x - tracks.start))) * speed;
        marble.x += Math.cos(Math.atan(tracks.derivative(marble.x - tracks.start))) * marble.velocity / fps * speed;
        marble.y = tracks.list(marble.x - tracks.start) + spring.height / 2;
        if(marble.x < tracks.start){
            tracks.start - marble.x
            marble.y = spring.y - spring.height / 2;
            if(marble.x - marble.radius <= spring.x + spring.width){
                // marble.velocity = velocity;
                marble.x = marble.radius + spring.x + spring.width
            }
        }
    }
    if(maximum < marble.y){
        maximum = marble.y;
        console.log(maximum);
    }
    ctx.beginPath();
    ctx.arc(marble.x * meter + position[0], canvas.height - marble.y * meter + position[1], marble.radius * meter, 0, Math.PI * 2, true);
    ctx.fill();
}
let repeater = setInterval(repeat, 1000 / fps);
//(fps)ms