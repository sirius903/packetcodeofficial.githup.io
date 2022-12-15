var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var inmenutimer = {
    whether : true,
    play : false,
    play_n : 1,
    speicial_n : [0, 0],
    speicial_b : 0,
    specailmod : false,
    setskin : false,
    achievement : false,
    setting : false,
}

var ingametimer = {
    whether : false,
    type : 'tutorial',
    tutorial : 0,
    time : [0, 0, 0],
    exp : 0,
    exptimer : 0,
    wave : 0,
    dowave : false,
    summon : false,
    jump : false,
    jumppress : false,
    jumptimer : 0,
    right : false,
    left : false,
    firing : false,
    bullettimer : 0,
    throwing : false,
    throwingtimer : 0,
    buildpress : false,
    building : false,
    buildingtimer : 0,
    onbuilding : 0,
    chargingtimer : 0,
    invincibility : false,
    invincibilitytimer : 0,
    pause : false,
    setting : false,
    shop : false,
    reconfirm : false,
    score : false,
    end : false,
};

var insetting = {
    wheater : false,
    controlling : true,
    throwingkey : false,
    buildingkey : false,
    chargingkey : false
}

var ranking = []

/**경험지 */
var exp = {
    /**현재 경험치 */
    value : 0,
    showingvalue : 0,
    plus : 0,
    x : 0,
    y : 0,
    width : innerWidth,
    height : 15,
    show(){
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = '#4ad903';
        ctx.fillRect(this.x, this.y, this.showingvalue / limitexp[level.value] * this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.font = '20px Sam3KRFont';
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.fillText(Math.round(this.showingvalue) + "/" + limitexp[level.value], this.width / 2, this.y - 1);
    }
}

/**레벨 */
var level = {
    /**현재 레벨 */
    value : 1,
    x : 10,
    y : 15,
    width : 100,
    show(){
        ctx.fillStyle = '#009dff';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.value + "Lv", this.x, this.y, this.width);
    }
}

/**hp */
var heart = {
    /**현재 hp */
    value : 3,
    maxvalue : 3,
    previousvalue : 3,
    message : "",
    y : 17,
    width : 40,
    height : 50,
    show(){
        if(this.value > this.maxvalue){
            this.maxvalue = this.value;
        }
        ctx.fillStyle = 'red';
        ctx.textBaseline = "top";
        ctx.textAlign = "start";
        ctx.font = '48px Sam3KRFont';
        if(this.value <= 5){
            for(let n = this.value; n > 0; n--){
                this.message += "♥"
            }
        }else{
            this.message = "♥×" + this.value
        }
        ctx.fillText(this.message, level.width, this.y);
        this.message = ""
    }
}

/**돈 */
var money = {
    /**현재 돈 */
    value : 30,
    x : innerWidth - 10,
    y : 15,
    show(){
        ctx.fillStyle = 'orange';
        ctx.font = '48px Sam3KRFont';
        ctx.textBaseline = "top";
        ctx.textAlign = "end";
        ctx.fillText(this.value + "￦", this.x, this.y);
    }
}

/**회피력 */
var dodge = {
    /**현재 회피력 */
    value : 10,
    x : 10,
    y : 170,
    width : 30,
    height : 30,
    show(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font = '48px Sam3KRFont';
        ctx.textBaseline = "top";
        ctx.textAlign = "start";
        ctx.fillText(this.value, (this.x + this.width + 10), this.y);
    }
}

/**행동력 */
var agi = {
    /**현재 행동력 */
    value : 3,
    fullvalue : 3,
    x : 10,
    y : 210,
    width : 30,
    height : 30,
    show(){
        ctx.fillStyle = 'skyblue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font = '48px Sam3KRFont';
        ctx.textBaseline = "top";
        ctx.textAlign = "start";
        ctx.fillText(this.value, (this.x + this.width + 10), this.y);
    }
}

function setting(){
    if(insetting.wheater){
        if(inmenutimer.whether){
            screen.draw();
        }
        backbutton.draw();
        gamewindow.draw();
        if(insetting.controlling){

        }
    }
}

function shop(){
    backbutton.draw();
    gamewindow.draw();
    shoplist[0].draw();
    shoplist[1].draw();
    shoplist[2].draw();
}

function resetshop(){
    shoplist[0].item = Math.floor(Math.random() * 5) + 1;
    shoplist[1].item = Math.floor(Math.random() * 5) + 1;
    shoplist[2].number = [Math.floor(Math.random() * itemlist.length)];
    shoplist[2].number.push(Math.floor(Math.random() * itemlist[shoplist[2].number[0]].length));
}

function reset(){
    if(ingametimer.end){
        localStorage.setItem("time0" + localStorage.getItem("number"), ingametimer.time[0]);
        localStorage.setItem("time1" + localStorage.getItem("number"), ingametimer.time[1]);
        localStorage.setItem("time2" + localStorage.getItem("number"), ingametimer.time[2]);
        localStorage.setItem("number", parseInt(localStorage.getItem("number")) + 1);
        ingametimer.end = false;
    }
    inmenutimer.whether = true;
    ingametimer.whether = false;
    if(ingametimer.type == 'tutorial'){
        ingametimer.tutorial = 0;
    }
    ingametimer.time = [0, 0, 0];
    ingametimer.exp = 0;
    ingametimer.exptimer = 0;
    ingametimer.wave = 0;
    ingametimer.dowave = false;
    ingametimer.jump = false;
    ingametimer.jumppress = false;
    ingametimer.jumptimer = 0;
    ingametimer.right = false;
    ingametimer.left = false;
    ingametimer.building = false;
    ingametimer.buildpress = false;
    ingametimer.buildingtimer = 0;
    ingametimer.onbuilding = 0;
    ingametimer.invincibility = false;
    ingametimer.invincibilitytimer = 0;
    ingametimer.pause = false;
    ingametimer.reconfirm = false;
    ingametimer.score = false;
    gun[0].bullets = 0;
    enemies = [];
    money.value = 30;
    heart.value = 3;
    exp.value = 0;
    level.value = 1;
    buildings = [];
    maincharacter.x = 400;
    maincharacter.y = innerHeight - 300;
    maincharacter.direction = 'right';
}