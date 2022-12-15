/**주인공 */
var maincharacter = {
    name : "최원준",
    recentexp : 0,
    direction : "right",
    weapontype : 'gun',
    guntype : 0,
    throwawaytype : 1,
    x : 400,
    y : innerHeight - 300,
    width : 50,
    height : 52.6,
    color : 'lime',
    speed : 10,
    src : 'images/game/characters/maincharacter_right.png',
    draw(){
        let image = new Image();
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
}

class Enemy {
    constructor(){
        this.n = 1;
        this.fullhp = 999999;
        this.hp = 999999;
        this.speed = 3;
        this.y = innerHeight - 300;
        this.width = 50;
        this.x = (innerWidth - this.width) / 2;
        this.height = 50;
        this.falling = 0;
        this.knockback = 0;
        this.rightknockback = 0;
        this.leftknockback = 0;
        this.sword = true;
        this.shield = 0;
        this.combo = 0;
    }
    draw(){
        let image = new Image();
        image.src = ens[this.n].src;
        ctx.drawImage(image, this.x, this.y);
        if(this.shield > 0){
            ctx.fillStyle = '#ff000040'
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    exp(){
        exp.value += Math.floor(Math.random() * (ens[this.n].maxexp - ens[this.n].minexp)) + 1 + ens[this.n].minexp;
        ingametimer.exp += 1;
    }
}

/*var enemy = [{
    able : false,
    typenumber : 0,
    fullhp : 999999,
    hp : 999999,
    nextskills : [],
    x : 690,
    y : 230,
    width : 80,
    height : 100,
    draw(){
        if (this.able == true){
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x, this.y + 110, this.width, 10);
            ctx.fillStyle = 'lime';
            ctx.fillRect(this.x, this.y + 110, this.width / this.fullhp * this.hp, 10);
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            if (this.nextskills.length >= 1){
                ctx.fillStyle = this.nextskills[0].color;
                ctx.fillRect(this.x + this.width + 5, this.y + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
            if (this.nextskills.length >= 2){
                ctx.fillStyle = this.nextskills[1].color;
                ctx.fillRect(this.x + this.width + 5, this.y + this.height / 3 + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
            if (this.nextskills.length == 3){
                ctx.fillStyle = this.nextskills[2].color;
                ctx.fillRect(this.x + this.width + 5, this.y + this.height / 3 * 2 + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
        }    
    }
}, {
    able : false,
    typenumber : 0,
    fullhp : 999999,
    hp : 999999,
    nextskills : [],
    x : 830,
    y : 230,
    width : 80,
    height : 100,
    draw(){
        if (this.able == true){
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x, this.y + 110, this.width, 10);
            ctx.fillStyle = 'lime';
            ctx.fillRect(this.x, this.y + 110, this.width / this.fullhp * this.hp, 10);
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            if (this.nextskills.length >= 1){
                ctx.fillStyle = this.nextskills[0].color;
                ctx.fillRect(this.x + this.width + 5, this.y + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
            if (this.nextskills.length >= 2){
                ctx.fillStyle = this.nextskills[1].color;
                ctx.fillRect(this.x + this.width + 5, this.y + this.height / 3 + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
            if (this.nextskills.length == 3){
                ctx.fillStyle = this.nextskills[2].color;
                ctx.fillRect(this.x + this.width + 5, this.y + this.height / 3 * 2 + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
        }
    }
}, {
    able : false,
    typenumber : 0,
    fullhp : 999999,
    hp : 999999,
    nextskills : [],
    x : 970,
    y : 230,
    width : 80,
    height : 100,
    draw(){
        if (this.able == true){
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x, this.y + 110, this.width, 10);
            ctx.fillStyle = 'lime';
            ctx.fillRect(this.x, this.y + 110, this.width / this.fullhp * this.hp, 10);
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            if (this.nextskills.length >= 1){
                ctx.fillStyle = this.nextskills[0].color;
                ctx.fillRect(this.x + this.width + 5, this.y + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
            if (this.nextskills.length >= 2){
                ctx.fillStyle = this.nextskills[1].color;
                ctx.fillRect(this.x + this.width + 5, this.y + this.height / 3 + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
            if (this.nextskills.length == 3){
                ctx.fillStyle = this.nextskills[2].color;
                ctx.fillRect(this.x + this.width + 5, this.y + this.height / 3 * 2 + 5, this.height / 3 - 10, this.height / 3 - 10)
            }
        }
    }
}]
*/