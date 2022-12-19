function change(n, m){
    if(n >= 0 && n <= 3){
        maincharacter.weapontype = 'gun';
    }else if(n == 4){
        maincharacter.weapontype = 'sword';
    }else if(n == 5){
        maincharacter.weapontype = 'shield';
    }
    weapon.present = [];
    weapons[n][m].forEach(e=>{
        weapon.present.push(e);
    })
    weapon.bullets = 0;
    weapon.loading = false;
    weapon.load = 0;
    weapon.firing = false;
    weapon.fire = 0;
}

var weapon = {
    present : ["k5", 10, 5, 'images/game/weapons/k5', 0, 12, 50, 20, 10],
    bullets : 0,
    loading : false,
    load : 0,
    firing : false,
    fire : 0,
    draw(){
        ctx.font = '48px Sam3KRFont';
        ctx.textAlign = "end";
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'top';
        ctx.fillText(weapon.present[0], innerWidth - 10, innerHeight - 250, 300);
        let image = new Image();
        if(maincharacter.weapontype == 'shield'){
            image.src = weapon.present[3] + '.png';
        }else{
            image.src = weapon.present[3] + 'left.png';
        }
        ctx.drawImage(image, innerWidth - 200, innerHeight - 200);
        ctx.textBaseline = "bottom";
        if(weapon.loading && maincharacter.weapontype != 'sword' && maincharacter.weapontype != 'shield'){
            ctx.fillStyle = 'yellow';
            ctx.fillText("장전중 " + weapon.bullets + "/" + weapon.present[5], innerWidth - 10, innerHeight);
        }else{
            ctx.fillText(weapon.bullets + "/" + weapon.present[5], innerWidth - 10, innerHeight);
        }
        image = new Image();
        image.src = weapon.present[3] + maincharacter.direction + '.png';
        if(maincharacter.weapontype == 'gun'){
            if(maincharacter.direction == 'left'){
                ctx.drawImage(image, maincharacter.x + 3, maincharacter.y + 25, 25, 20);
            }else{
                ctx.drawImage(image, maincharacter.x + 22, maincharacter.y + 25, 25, 20);
            }
        }else{
            ctx.drawImage(image, weapon.present[6], maincharacter.y + weapon.present[7], weapon.present[8], weapon.present[9]);
        }
    }
}

const weapons = [
    [//pistol[0]
    //[name, damge, knockback, src, level, loadable, loadingspeed, ammunitionspeed, firerapidity]
        ["k5", 10, 5, 'images/game/weapons/k5', 0, 12, 50, 20, 10],
        ["STRV9", 8, 10, 'images/game/weapons/STRV9', 0, 6, 30, 20, 7]
    ],[//SMG[1]
        []        
    ],[//shotgun[2]
        []
    ],[//rifle[3]
        []
    ],[//sword[4]
    //[name, damge, knockback, src, level, loadable, x, y, w, h]
        ["용사의 검", 15, 5, 'images/game/weapons/sword', 0, 0, -100, 25, 35, 28]
    ],[//shield[5]
        ["용사의 방패", 5, 15, 'images/game/weapons/shield', 0, 0, -100, 10, 20, 40]
    ]
]

var gun = [
    {
        bullets : 0
    },{
        name : "k5",
        damage : 10,
        //9*19
        chargingnumber : 12,
        bullets : 12,
        bulletspeed : 20,
        //360~407
        firespeed : 10,
        chargingspeed : 50,
        knockback : 5,
        src : 'images/game/weapons/k5left.png',
        rightsrc : 'images/game/weapons/k5right.png'
    },{
        name : "STRV9",
        damage : 8,
        //9*19
        chargingnumber : 6,
        bullets : 6,
        bulletspeed : 20,
        firespeed : 7,
        chargingspeed : 30,
        knockback : 10,
        src : 'images/game/weapons/STRV9.png'
    },{
        name : "K7",
        damage : 3,
        //9*19
        chargingnumber : 30,
        bullets : 30,
        bulletspeed : 15,
        //295
        firespeed : 4,
        //700~1120
        chargingspeed : 50,
        knockback : 4,
        src : 'images/game/K7.png'
    },{
        name : "XK9",
        damage : 4,
        //9*19
        chargingnumber : 30,
        bullets : 30,
        bulletspeed : 20,
        //380
        firespeed : 3,
        //960~1000
        chargingspeed : 50,
        knockback : 4,
        src : 'images/game/XK9.png'
    },{
        //산탄
        name : "USAS-12",
        damage : -1,
        //12게이지
        chargingnumber : 20,
        bullets : 20,
        bulletspeed : 20,
        //400
        firespeed : 5,
        //360
        chargingspeed : 50,
        knockback : -20,
        src : 'images/game/USAS-12.png'
    },{
        name : "K14",
        damage : 30,
        chargingnumber : 10,
        bullets : 10,
        bulletspeed : 30,
        firespeed : 20,
        chargingspeed : 70,
        knockback : 20,
        src : 'images/game/K14.png'
    }
]

class Bullet {
    constructor(){
        this.x = maincharacter.x + maincharacter.width / 2 - 5;
        this.y = maincharacter.y + 25;
        this.width = 5 * 2;
        this.height = 10;
        this.speed = 20;
        this.timer = 0;
    }
    draw(){
        ctx.fillStyle = 'orange';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var bullets = [[], []]

var thrownweapon = {
    present : ['피묻은 벽돌', 30, 5, 'images/game/weapons/brick.png', 10, '#b1432f'],
    objects : 10,
    throwing : false,
    throw : 0,
    draw(){
        ctx.font = '30px Sam3KRFont';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'end';
        ctx.textBaseline = 'bottom';
        ctx.fillText(this.objects, 90 - 5, innerHeight - 10);
    }
}

var thrownweapons = [
    //[name, damage, knockback, src, speed, color]
    [//
        ['피묻은 벽돌', 30, 10, 'images/game/weapons/brick.png', 10, '#b1432f'],
    ],
    []
]

class Object{
    constructor(){
        this.x = maincharacter.x + maincharacter.width / 2 - 10;
        this.y = maincharacter.y + 10 * 2;
        this.width = 10 * 2;
        this.height = this.width;
        this.speed = 20;
        this.timer = 0;
        this.color = 'darkred';
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var objects = [[], []];