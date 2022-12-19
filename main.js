var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var windows = {
    menu : true,
    game : false,
    score : false
}
var inmenu = {
    play : [false, 0, false, [0, 0]],
    setskin : false,
    rank : false,
    setting : false
}
var ingame = {
    type : 'tutorial',
    pausing : false,
    tutorial : 0,
    time : [0, 0, 0],
    exp : 0,
    exptimer : 0,
    wave : 0,
    waving : false,
    summoning : false,
    building : false,
    build : 0
}
var player = {
    move : [false, false],
    jumppress : false,
    jumping : false,
    jump : 0,
    invincibility : false,
    invincibletime : 0
}
var pausing = {
    setting : false,
    ranking : false,
    setskin : false,
    shop : false,
    reconfirm : false
}
var insetting = {
    controlls : 0
}
var controlls = {
    throwing : 'KeyZ',
    building : 'KeyX',
    loading : 'KeyC',
    retry : 'KeyR',
    goshop : 'KeyS',
    ranking : 'KeyL',
    skip : 'KeyK'
}

var ingametimer = {
    type : 'tutorial',
    tutorial : 0,
    time : [0, 0, 0],
    exp : 0,
    exptimer : 0,
    wave : 0,
    waving : false,
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

//[score, kill, max, last, time, ddt, ddb]
var ranking = [[], [], [], [], [], [], []]
for(let n = 1; n <= +localStorage.getItem("n"); n++){
    ranking[0].push([localStorage.getItem("scorename" + n) , + localStorage.getItem("score" + n)]);
    ranking[1].push([localStorage.getItem("killname" + n) , + localStorage.getItem("kill" + n)]);
    ranking[2].push([localStorage.getItem("maxname" + n) , + localStorage.getItem("max" + n)]);
    ranking[3].push([localStorage.getItem("lastname" + n) , + localStorage.getItem("last" + n)]);
    ranking[4].push([localStorage.getItem("timename" + n) , localStorage.getItem("timem" + n) + ":" + localStorage.getItem("times" + n) + "." + localStorage.getItem("timef" + n)]);
    ranking[5].push([localStorage.getItem("ddtname" + n) , + localStorage.getItem("ddt" + n)]);
    ranking[6].push([localStorage.getItem("ddbname" + n) , + localStorage.getItem("ddb" + n)]);
}

/**경험지 */
var exp = [0, 0, 0]//value, showingvalue

/**레벨 */
var level = 1

/**hp */
var heart = {
    /**현재 hp */
    value : 3,
    maxvalue : 3,
    previousvalue : 3
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

function resetshop(){
    catalog[0].item = Math.floor(Math.random() * 5) + 1;
    catalog[0].price = catalog[0].item * 5;
    catalog[0].description = '투척물 +' + catalog[0].item;
    catalog[1].item = Math.floor(Math.random() * 5) + 1;
    catalog[1].price = catalog[1].item * 10;
    catalog[1].description = '구조물 +' + catalog[1].item;
    catalog[2].number = [Math.floor(Math.random() * itemlist.length)];
    catalog[2].number.push(Math.floor(Math.random() * itemlist[catalog[2].number[0]].length));
    if(catalog[2].number[0] == 0){
        catalog[2].name = itemlist[0][catalog[2].number[1]][0] + ' 구매하기';
        catalog[2].description = itemlist[0][catalog[2].number[1]][1];
        catalog[2].price = itemlist[0][catalog[2].number[1]][2];
        catalog[2].src = weapons[itemlist[0][catalog[2].number[1]][3]][itemlist[0][catalog[2].number[1]][4]][3] + 'left.png';
        catalog[2].sheight = innerWidth / 4 - 180;
    }else if(catalog[2].number[0] == 1){
        catalog[2].name = itemlist[1][catalog[2].number[1]][0] + ' 구매하기';
        catalog[2].description = itemlist[1][catalog[2].number[1]][1];
        catalog[2].price = itemlist[1][catalog[2].number[1]][2];
        catalog[2].src = thrownweapons[itemlist[1][catalog[2].number[1]][3]][itemlist[1][catalog[2].number[1]][4]][3];
        catalog[2].sheight = innerWidth / 3 - 240;
    }else{
        //123456334567656787898909809
    }
}

function reset(){
    /*if(ingametimer.end){
        localStorage.setItem("time0" + localStorage.getItem("number"), ingametimer.time[0]);
        localStorage.setItem("time1" + localStorage.getItem("number"), ingametimer.time[1]);
        localStorage.setItem("time2" + localStorage.getItem("number"), ingametimer.time[2]);
        localStorage.setItem("number", parseInt(localStorage.getItem("number")) + 1);
        ingametimer.end = false;
    }*//*
    windows.menu = true;
    windows.game = false;
    if(ingametimer.type == 'tutorial'){
        ingametimer.tutorial = 0;
    }
    ingametimer.time = [0, 0, 0];
    ingametimer.exp = 0;
    ingametimer.exptimer = 0;
    ingametimer.wave = 0;
    ingametimer.waving = false;
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
    maincharacter.direction = 'right';*/
}