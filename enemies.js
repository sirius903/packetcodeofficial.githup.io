var ens = [
    {
        name : "허수아비",
        hp : 30,
        speed : 0,
        width : 100,
        height : 100,
        minexp : 333,
        maxexp : 333,
        src : 'images/tlqkf.png'
    }, {
        name : "공수권",
        hp : 30,
        speed : 5,
        width : 50,
        height : 50,
        minexp : 10,
        maxexp : 100,
        src : 'images/kong.png'
    }, {
        name : "김지호",
        hp : 70,
        speed : 3,
        width : 46,
        height : 70,
        minexp : 10,
        maxexp : 1000,
        src : 'images/game/characters/kim.png'
    },{
        name : "",
        hp : 100,
        speed : 7,
        width : 100,
        height : 100,
        minexp : 1000,
        maxexp : 2000,
        src : "images/su.png"
    },{
        name : "탱크지호",
        hp : 500,
        speed : 3,
        width : 100,
        height : 100,
        minexp : 1000,
        maxexp : 2000,
        src : "images/game/characters/tankkim.png"
    },{
        name : "각성한 공수권",
        hp : 100,
        speed : 7,
        width : 100,
        height : 100,
        minexp : 1000,
        maxexp : 2000,
        src : "images/su.png"
    },{
        name : "각성한 공수권",
        hp : 100,
        speed : 7,
        width : 100,
        height : 100,
        minexp : 1000,
        maxexp : 2000,
        src : "images/su.png"
    }
]

function summon(n){
    var enemy = new Enemy();
    if(ingametimer.tutorial == 0){
        if(Math.floor(Math.random() * 2) == 0){
            enemy.x -= (innerWidth / 2 + Math.floor(Math.random() * 500));
        }else{
            enemy.x += (innerWidth / 2 + Math.floor(Math.random() * 500));
        }
    }else{
        enemy.x = innerWidth - 400;
    }
    enemy.n = n;
    enemy.fullhp = ens[enemy.n].hp;
    enemy.hp = ens[enemy.n].hp;
    enemy.width = ens[enemy.n].width;
    enemy.height = ens[enemy.n].height;
    enemy.speed = ens[enemy.n].speed;
    enemies.push(enemy);
}

enemies = []