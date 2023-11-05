var ctx = canvas.getContext('2d');

function repeat(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    let g = 0;
    if(timer){
        g = planet.mass * satellite.mass / (Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2)) * 0.000000000067;
        satellite.velocity[0] -= g / fps * Math.cos(Math.atan(satellite.y / satellite.x)) * speed * (satellite.x == 0 ? 0 : satellite.x > 0 ? 1 : -1);
        satellite.velocity[1] -= g / fps * Math.sin(Math.atan(satellite.y / satellite.x)) * speed * (satellite.x == 0 ? 0 : satellite.x > 0 ? 1 : -1);
        satellite.x += satellite.velocity[0] / fps * speed;
        satellite.y += satellite.velocity[1] / fps * speed;
        if(Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2) < Math.pow(planet.radius + satellite.radius, 2)){
            satellite.x = (planet.radius + satellite.radius) * Math.cos(Math.atan(satellite.y / satellite.x));
            satellite.y = (planet.radius + satellite.radius) * Math.sin(Math.atan(satellite.y / satellite.x));
            satellite.velocity = [0, 0]
        }
    }
    document.getElementById('x-coordinate').value = satellite.x;
    document.getElementById('y-coordinate').value = satellite.y;
    document.getElementById('distance').value = Math.sqrt(Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2)) - planet.radius - satellite.radius;
    if(maximum < Math.sqrt(Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2)) - planet.radius - satellite.radius){
        maximum = Math.sqrt(Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2)) - planet.radius - satellite.radius;
        document.getElementById('maximum-distance').value = maximum;
    }
    if(minimum > Math.sqrt(Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2)) - planet.radius - satellite.radius){
        minimum = Math.sqrt(Math.pow(satellite.x, 2) + Math.pow(satellite.y, 2)) - planet.radius - satellite.radius;
        document.getElementById('minimum-distance').value = minimum;
    }
    document.getElementById('satellite-hvr').value = satellite.velocity[0];
    document.getElementById('satellite-vvr').value = satellite.velocity[1];
    document.getElementById('satellite-tvr').value = Math.sqrt(Math.pow(satellite.velocity[0], 2) + Math.pow(satellite.velocity[1], 2));
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + position[0], canvas.height / 2 + position[1], planet.radius * meter, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + satellite.x * meter + position[0], canvas.height / 2 - satellite.y * meter + position[1], satellite.radius * meter, 0, Math.PI * 2, true);
    ctx.fill();
}
let repeater = setInterval(repeat, 1000 / fps);
//(fps)ms