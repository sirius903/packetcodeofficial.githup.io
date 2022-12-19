var background = {
    type : 0,
    x : 0,
    y : 0,
    width : innerWidth,
    height : innerHeight,
    inmenusrc : 'images/menu/background.png',
    ingamesrc : ['images/game/background.png'],
    adjust(){
        this.width = innerWidth;
        this.height = innerHeight;
    },
    draw(){
        let image = new Image();
        if(windows.menu){
            image.src = this.inmenusrc;
            if(innerHeight * 1280 > innerWidth * 960){
                ctx.drawImage(image, (innerWidth - 1280 / 960 * innerHeight) / 2, 0, innerHeight / 960 * 1280, innerHeight);
            }else{
                ctx.drawImage(image, 0, innerHeight - innerWidth  * 960 / 1280, innerWidth, innerWidth * 960 / 1280);
            }
        }else if(windows.game){
            image.src = this.ingamesrc[this.type];
            if(innerHeight - 250 > innerWidth / 3){
                ctx.drawImage(image, (innerWidth - 3 * innerHeight + 750) / 2, 0, (innerHeight - 250) * 3, innerHeight - 250);
            }else{
                ctx.drawImage(image, 0, innerHeight - 250 - innerWidth / 3, innerWidth, innerWidth / 3);
            }
        }
    }
}

var inmenubutton = [
    {
        x : 110,
        y : innerHeight - 170,
        width : (innerWidth - 200) / 4 - 20,
        height : 100,
        color : 'gray',
        text : "플레이",
        adjust(){
            this.y = innerHeight - 170;
            this.width = (innerWidth - 200) / 4 - 20;
        }
    },{
        x : (innerWidth - 200) / 4 + 110,
        y : innerHeight - 170,
        width : (innerWidth - 200) / 4 - 20,
        height : 100,
        color : 'gray',
        text : "스킨",
        adjust(){
            this.x = (innerWidth - 200) / 4 + 110;
            this.y = innerHeight - 170;
            this.width = (innerWidth - 200) / 4 - 20;
        }
    },{
        x : (innerWidth - 200) / 2 + 110,
        y : innerHeight - 170,
        width : (innerWidth - 200) / 4 - 20,
        height : 100,
        color : 'gray',
        text : "랭킹",
        adjust(){
            this.x = (innerWidth - 200) / 2 + 110;
            this.y = innerHeight - 170;
            this.width = (innerWidth - 200) / 4 - 20;
        }
    },{
        x : innerWidth - (innerWidth - 200) / 4 - 90,
        y : innerHeight - 170,
        width : (innerWidth - 200) / 4 - 20,
        height : 100,
        color : 'gray',
        text : "설정",
        adjust(){
            this.x = innerWidth - (innerWidth - 200) / 4 - 90;
            this.y = innerHeight - 170;
            this.width = (innerWidth - 200) / 4 - 20;
        }
    }
]

var backbutton = {
    x : innerWidth - (innerWidth - 200) / 4 + 60,
    y : 10,
    width : (innerWidth - 200) / 4 - 80,
    height : 80,
    color : 'gray',
    text : "뒤로가기",
    adjust(){
        this.x = innerWidth - (innerWidth - 200) / 4 + 60;
        this.width = (innerWidth - 200) / 4 - 80;
    },
    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
    }
}

var title = {
    x : 10,
    y : 10,
    width : innerWidth / 2,
    text : ["게임목록", '스킨목록', '랭킹', '설정'],
    n : 0,
    adjust(){
        this.width = innerWidth / 2;
    },
    draw(){
        ctx.fillStyle = 'black';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        ctx.font = '100px Sam3KRFont';
        ctx.fillText(this.text[this.n], this.x, this.y, this.width);
    }
}

var playbackground = {
    x : 10,
    y : 150,
    width : innerWidth / 2,
    height : innerHeight - 170,
    src : ["images/menu/tutorial.png", "images/menu/nomalgame.png", "images/menu/specialmod.png", "images/menu/speedrun.png"],
    adjust(){
        this.width = innerWidth / 2;
        this.height = innerHeight - 170;
    },
    draw(){
        let image = new Image();
        image.src = this.src[inmenu.play[1]];
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
}

var playbutton = [
    {
        x : innerWidth / 2 + 80,
        y : 160,
        width : innerWidth / 6,
        height : (innerHeight - 200) / 4 - 20,
        color : 'gray',
        text : "튜토리얼",
        adjust(){
            this.x = innerWidth / 2 + 80;
            this.width = innerWidth / 6;
            this.height = (innerHeight - 200) / 4 - 20;
        }
    },{
        x : innerWidth / 2 + 80,
        y : (innerHeight - 200) / 4 + 160,
        width : innerWidth / 6,
        height : (innerHeight - 200) / 4 - 20,
        color : 'gray',
        text : "일반게임",
        adjust(){
            this.x = innerWidth / 2 + 80;
            this.y = (innerHeight - 200) / 4 + 160;
            this.width = innerWidth / 6;
            this.height = (innerHeight - 200) / 4 - 20;
        }
    },{
        x : innerWidth / 2 + 80,
        y : (innerHeight - 200) / 2 + 160,
        width : innerWidth / 6,
        height : (innerHeight - 200) / 4 - 20,
        color : 'gray',
        text : "특별모드",
        adjust(){
            this.x = innerWidth / 2 + 80;
            this.y = (innerHeight - 200) / 2 + 160;
            this.width = innerWidth / 6;
            this.height = (innerHeight - 200) / 4 - 20;
        }
    },{
        x : innerWidth / 2 + 80,
        y : innerHeight - (innerHeight - 200) / 4 - 40,
        width : innerWidth / 6,
        height : (innerHeight - 200) / 4 - 20,
        color : 'gray',
        text : "스피드런",
        adjust(){
            this.x = innerWidth / 2 + 80;
            this.y = innerHeight - (innerHeight - 200) / 4 - 40;
            this.width = innerWidth / 6;
            this.height = (innerHeight - 200) / 4 - 20;
        }
    }
]


var specialmods = [
    [
        {
            x : 110,
            y : 160,
            width : innerWidth / 6 - 30,
            height : 100,
            color : 'gray',
            text : "용사의 모험",
            type : 'sworder',
            adjust(){
                this.width = innerWidth / 6 - 30;
            }
        },{
            x : innerWidth / 6 + 100,
            y : 160,
            width : innerWidth / 6 - 30,
            height : 100,
            color : 'gray',
            text : "아직 안 만듦",
            type : '',
            adjust(){
                this.x = innerWidth / 6 + 100;
                this.width = innerWidth / 6 - 30;
            }
        },{
            x : innerWidth / 3 + 90,
            y : 160,
            width : innerWidth / 6 - 30,
            height : 100,
            color : 'gray',
            text : "아직 안 만듦",
            type : '',
            adjust(){
                this.x = innerWidth / 3 + 90;
                this.width = innerWidth / 6 - 30;
            }
        },{
            x : innerWidth / 2 + 80,
            y : 160,
            width : innerWidth / 6 - 30,
            height : 100,
            color : 'gray',
            text : "아직 안 만듦",
            type : '',
            adjust(){
                this.x = innerWidth / 2 + 80;
                this.width = innerWidth / 6 - 30;
            }
        }
    ],
    [],
    []
]


var startbutton = {
    x : innerWidth / 3 * 2 + 100,
    y : innerHeight - 120,
    width : innerWidth / 3 - 120,
    height : 100,
    sy : 110,
    sheight : innerHeight - 130,
    color : 'gray',
    text : "게임시작",
    adjust(){
        this.x = innerWidth / 3 * 2 + 100;
        this.y = innerHeight - 120;
        this.width = innerWidth / 3 - 120;
        this.sheight = innerHeight - 130;
    },
    draw(){
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x, this.sy, this.width, this.sheight);
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        if(inmenu.play[1] != 2 || inmenu.play[2]){
            ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
        }else{
            ctx.fillText("특별모드둘러보기", this.x + this.width / 2, this.y + this.height / 2, this.width);
        }
    }
}

var gameex = {
    x : innerWidth / 3 * 2 + 110,
    y : 120,
    width : innerWidth / 3 - 140,
    sx : innerWidth / 3 * 2 + 120,
    sy : 180,
    text : [
        [
           "튜토리얼",
            "일반게임",
            "특별모드",
            "스피드런"
        ],[
            [
                ['용사의 검만 사용 가능'],
                ['아직 안 만듦1'],
                ['아직 안 만듦2'],
                ['아직 안 만듦3']
            ]
        ]
    ],
    adjust(){
        this.x = innerWidth / 3 * 2 + 110,
        this.width = innerWidth / 3 - 140;
        this.sx = innerWidth / 3 * 2 + 120;
    },
    draw(){
        ctx.fillStyle = 'black';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        ctx.font = '50px Sam3KRFont';
        if(inmenu.play[2]){
            ctx.fillText(specialmods[inmenu.play[3][0]][inmenu.play[3][1]].text, this.x, this.y, this.width);
            ctx.font = '30px Sam3KRFont';
            ctx.fillText(this.text[1][inmenu.play[3][0]][inmenu.play[3][1]] ,this.sx, this.sy);
        }else{
            ctx.fillText(playbutton[inmenu.play[1]].text, this.x, this.y, this.width)
            ctx.font = '30px Sam3KRFont';
            ctx.fillText(this.text[0][inmenu.play[1]],this.sx, this.sy);
        }
    }
}

var ingamebutton = [
    {
        x : innerWidth - 60,
        y : 60,
        width : 50,
        height : 50,
        color : '#00000000',
        draw(){
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    },{
        x : innerWidth - 60,
        y : 120,
        width : 50,
        height : 50,
        color : '#00000000',
        draw(){
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    },{
        x : innerWidth - 60,
        y : 180,
        width : 50,
        height : 50,
        color : '#00000000',
        draw(){
            ctx.fillStyle = 'gray';
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
]

var screen = {
    x : 0,
    y : 0,
    width : innerWidth,
    height : innerHeight,
    color : 'rgba(0, 0, 0, 0.7)',
    adjust(){
        this.width = innerWidth;
        this.height = innerHeight;
    },
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var gamewindow = {
    x : 150,
    y : 100,
    width : innerWidth - 300,
    height : innerHeight - 150,
    adjust(){
        this.width = innerWidth - 300;
        this.height = innerHeight - 150;
    },
    draw(){
        ctx.fillStyle = '#20aaffb0';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if(pausing.shop){
            ctx.fillStyle = 'white';
            ctx.textBaseline = "top";
            ctx.textAlign = "center";
            ctx.font = '50px Sam3KRFont';
            ctx.fillText('상점', innerWidth / 2, this.y + 10);
            ctx.textAlign = 'end';
            ctx.font = '35px Sam3KRFont';
            ctx.fillText(money.value + "￦", innerWidth - 170, 115);
        }
    }
}

var controll = [
    {
        text : '던지기',
        x : 500,
        y : 150,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.throwing
    },{
        text : '건설하기',
        x : 500,
        y : 230,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.building
    },{
        text : '장전하기',
        x : 500,
        y : 310,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.loading
    },{
        text : '스킵하기',
        x : 500,
        y : 390,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.skip
    },{
        text : '상점열기',
        x : 500,
        y : 470,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.goshop
    },{
        text : '랭킹보기',
        x : 500,
        y : 550,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.ranking
    },{
        text : '재시작하기',
        x : 500,
        y : 630,
        width : 100,
        height : 50,
        color : 'black',
        key : controlls.retry
    },
]

var catalog = [
    {
        name : '투척물 보충하기',
        x : 170,
        y : 200,
        width : innerWidth / 3 - 140,
        height : innerHeight - 300,
        color : '#7bcdffb0',
        src : 'images/game/weapons/brick.png',
        sheight : innerWidth / 3 - 240,
        item : 3,
        description : '투척물 +3',
        price : 15,
        adjust(){
            this.width = innerWidth / 3 - 140;
            this.height = innerHeight - 300;
        },
        use(){
            var alert = new Alert;
            if(this.price <= money.value){
                alert.text = '성공적으로 구매했습니다.';
                thrownweapon.objects += this.item;
                money.value -= this.price;
            }else{
                alert.color = 'red';
                alert.text = '소지하신 금액이 부족합니다.';
            }
            alerts[1].unshift(alert);
        }
    },{
        name : '구조물 보충하기',
        x : innerWidth / 3 + 70,
        y : 200,
        width : innerWidth / 3 - 140,
        height : innerHeight - 300,
        color : '#7bcdffb0',
        src : 'images/game/building.png',
        sheight : innerWidth / 3 - 240,
        item : 3,
        description : '구조물 +3',
        price : 30,
        adjust(){
            this.x = innerWidth / 3 + 70;
            this.width = innerWidth / 3 - 140;
            this.height = innerHeight - 300;
        },
        use(){
            var alert = new Alert;
            alert.color = 'red';
            alert.text = '사지마';
            alerts[1].unshift(alert);
        }
    },{
        name : 'STRV9 구매하기',
        x : innerWidth / 3 * 2 - 30,
        y : 200,
        width : innerWidth / 3 - 140,
        height : innerHeight - 300,
        color : '#7bcdffb0',
        src : 'images/game/weapons/STRV9left.png',
        sheight : innerWidth / 4 - 180,
        number : [0, 1],
        description : '무기를 STRV9으로 교체',
        price : 10,
        adjust(){
            this.x = innerWidth / 3 * 2 - 30;
            this.width = innerWidth / 3 - 140;
            this.height = innerHeight - 300;
        },
        draw(){/*
            let image = new Image();
            if(ingametimer.type == 'sworder' && this.number[0] == 0){
                ctx.fillText(sworder[sworder[0]].title, this.x + this.width / 2, this.y + 15);
                ctx.fillText(sworder[sworder[0]].text, this.x + this.width / 2, this.y + this.height - 80, this.width);
                ctx.fillText(sworder[sworder[0]].value + "￦", this.x + this.width / 2, this.y + this.height - 40);
                image.src = gun[sworder[sworder[0]].n].src;
                ctx.drawImage(image, this.x + 50, this.y + 70, this.width - 100, this.width / 5 * 4 - 80);
            }else{
                if(this.number[0] == 0){
                    image.src = gun[itemlist[this.number[0]][this.number[1]][3]].src;
                    ctx.drawImage(image, this.x + 50, this.y + 70, this.width - 100, this.width / 5 * 4 - 80);
                }else if(this.number[0] == 1){
                    image.src = thrownweapon.present[3];
                    ctx.drawImage(image, this.x + 50, this.y + 55, this.width - 100, this.width - 100);
                }else if(this.number[0] == 2){
                    image.src = itemlist[this.number[0]][this.number[1]][3];
                    ctx.drawImage(image, this.x + 50, this.y + 55, this.width - 100, this.width - 100);
                }
            }*/
        },
        use(){
            var alert = new Alert;
            if(this.price <= money.value){
                if(this.number[0] == 0){
                    if(weapon.present[0] == itemlist[0][this.number[1]][0]){
                        alert.color = 'red';
                        alert.text = '이미 보유 중인 무기입니다.';
                    }else{
                        change(itemlist[0][this.number[1]][3], itemlist[0][this.number[1]][4]);
                        money.value -= this.price;
                        alert.text = '성공적으로 구매했습니다.';
                    }
                }else if(this.number[0] == 1){
                    if(weapon.present[0] == itemlist[1][this.number[1]][0]){
                        alert.color = 'red';
                        alert.text = '이미 장착 중인 투척물입니다.';
                    }else{
                        itemlist[1][this.number[1]][3], itemlist[1][this.number[1]][4];//투척물 변경
                        money.value -= this.price;
                        alert.text = '성공적으로 구매했습니다.';
                    }
                }else if(this.number[0] == 2){
                }
            }else{
                alert.color = 'red';
                alert.text = '소지하신 금액이 부족합니다.';
            }
            alerts[1].unshift(alert);
/*
            if(ingametimer.type == 'sworder'){
                if(sworder[sworder[0]].value <= money.value){
                    alert.text = '성공적으로 구매했습니다.';
                    if(shoplist[2].number[0] == 0){
                        gun[sworder[sworder[0]].n].level += 1;
                        money.value -= sworder[sworder[0]].value;
                        sworder[sworder[0]].use();
                        sworder[0] += 1;
                    }else if(shoplist[2].number[0] == 1){
                        maincharacter.throwawaytype = itemlist[shoplist[2].number[0]][shoplist[2].number[1]][3];
                        money.value -= itemlist[shoplist[2].number[0]][shoplist[2].number[1]][1];
                    }else if(shoplist[2].number[0] == 2){
                        if(shoplist[2].number[1] == 0){
                            heart.value += 1;
                        }
                        money.value -= itemlist[shoplist[2].number[0]][shoplist[2].number[1]][1];
                    }
                }else{
                    alert.color = 'red';
                    alert.text = '구매에 실패했습니다.';
                }
            }else{
                
                alert.text = '성공적으로 구매했습니다.';
                if(shoplist[2].number[0] == 2){
                    if(shoplist[2].number[1] == 0){
                        heart.value += 1;
                    }
                }
            }*/
        }
    },
]

//---------------------ingame---------------------------
var waveshower = {
    x : innerWidth / 2,
    y : 10,
    adjust(){
        this.x = innerWidth / 2;
    },
    draw(){/*
        ctx.fillStyle = 'white';
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(ingametimer.wave + '-Wave', this.x, this.y);
        if(ingametimer.wave == 0){
            if(ingametimer.tutorial == 0){
                ctx.fillText((10 - ingametimer.time[1]) + "초 후에 다음 웨이브", this.x, this.y + 100);
            }
        }else{
            if(ingametimer.dowave <= 500 && ingametimer.dowave > 0){
                ctx.fillText(10 - Math.floor(ingametimer.dowave / 50) + "초 후에 다음 웨이브", this.x, this.y + 100);
            }
        }*/
    }
}

var throwingbutton = {
    x : 10,
    y : innerHeight - 90,
    width : 80,
    height : 80,
    color : '#00000000',
    key : 'KeyZ',
    adjust(){
        this.y = innerHeight - 90;
    },
    draw(){
        if(thrownweapon.throwing == true){
            this.color = '#00000050';
        }else{
            this.color = '#00000000';
        }
        let image = new Image();
        image.src = 'images/game/buttons/throw.png';
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.font = '35px Sam3KRFont';
        ctx.textAlign = 'start';
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'top';
        ctx.fillText(controlls.throwing.substring(3), this.x + 10, this.y + 5);
        
    }
}

var buildingbutton = {
    x : 100,
    y : innerHeight - 90,
    width : 80,
    height : 80,
    color : '#00000000',
    adjust(){
        this.y = innerHeight - 90;
    },
    draw(){
        if(structure.building == true){
            this.color = '#00000050';
        }else{
            this.color = '#00000000';
        }
        let image = new Image();
        image.src = 'images/game/buttons/build.png';
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font = '35px Sam3KRFont';
        ctx.textAlign = 'start';
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'top';
        ctx.fillText(controlls.building.substring(3), this.x + 10, this.y + 5);
        ctx.textAlign = 'end';
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'bottom';
        ctx.fillText(structure.buildings, this.x + this.width - 5, innerHeight - 10);
    }
}

var loadingbutton = {
    x : 190,
    y : innerHeight - 90,
    width : 80,
    height : 80,
    color : '#00000000',
    adjust(){
        this.y = innerHeight - 90;
    },
    draw(){
        if(weapon.loading){
            this.color = '#00000050';
        }else{
            this.color = '#00000000';
        }
        let image = new Image();
        if(maincharacter.weapontype == 'sword' || maincharacter.weapontype == 'shield'){
            if(ingame.type == 'sworder'){
                image.src = 'images/game/change.png';
            }else{
                image.src = 'images/game/none.png';
            }
        }else{
            image.src = 'images/game/buttons/charge.png';
        }
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font = '35px Sam3KRFont';
        ctx.textAlign = 'start';
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'top';
        ctx.fillText(controlls.loading.substring(3), this.x + 10, this.y + 5);
        if(weapon.load > 0 && maincharacter.weapontype != 'sword' && maincharacter.weapontype != 'shield'){
            ctx.fillStyle = 'white';
            ctx.textAlign = 'end';
            ctx.textBaseline = 'bottom';
            ctx.fillText(Math.ceil((1 - weapon.load / 50) * 10) / 10, this.x + this.width - 5, innerHeight - 10);
        }
    }
}

var keys = [
    {
        name : 'SpaceBar',
        x : 330,
        y : innerHeight - 80,
        width : 480,
        height : 70,
        color : 'gray'
    },{
        name : '←',
        x : 830,
        y : innerHeight - 80,
        width : 70,
        height : 70,
        color : 'gray'
    },{
        name : '↓',
        x : 910,
        y : innerHeight - 80,
        width : 70,
        height : 70,
        color : 'gray'
    },{
        name : '→',
        x : 990,
        y : innerHeight - 80,
        width : 70,
        height : 70,
        color : 'gray'
    },{
        name : '↑',
        x : 910,
        y : innerHeight - 160,
        width : 70,
        height : 70,
        color : 'gray'
    }
]

var structure = {
    present : 0,
    buildings : 3,
    building : false,
    build : 0,
}

var structures = [
    {
        name : '지지대'
    },{
        name : '점프대'
    }
]

class Building {
    constructor(){
        this.x = maincharacter.x + maincharacter.width / 2 - 50;
        this.y = innerHeight - 350;
        this.width = 100;
        this.height = 100;
        this.timer = 0;
        this.type = structure.present;
        this.able = false;
        this.walking = true;
        this.hp = 100;
        this.src = 'images/game/building.png'
    }
    draw(){
        let image = new Image();
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y);
    }
}

var buildings = [];

var tutorialscreen = {
    x : 250,
    y : 250,
    width : 250,
    height : 250,
    adjust(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    },
    draw(){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, this.x, innerHeight);
        ctx.fillRect(this.x, 0, this.width, this.y);
        ctx.fillRect(this.x, this.y + this.height, this.width, innerHeight - this.y - this.height);
        ctx.fillRect(this.x + this.width, 0, innerWidth - this.x - this.width, innerHeight);

    }
}
/*
var tutorialexplainer = {
    x : 500,
    y : 250,
    text : [
        ["안녕하세요!", "튜토리얼에 오신여러분!", "", ""],
        ["이곳은 여러분들에게", "게임의 조작법에 대해", "가르쳐드리는 곳입니다!", ""],
        ["튜토리얼을 하실 준비가 되셨나요?", "", "                            네", ""],
        ["그러면 튜토리얼을 시작하겠습니다!", "", "", ""],
        ["우선 ←키와 →키를 이용해서", "좌우로 이동할 수 있습니다!", "", ""],
        ["다음은 ↑키를 사용해서", "점프를 할 수 있습니다!", "", ""],
        ["이곳은 여러분의 무기를", "표시해주는 곳 입니다!", "    →", ""],
        ["이런!", "장전이 되어있지 않네요!", "", ""],
        ["C키를 눌러서", "장전을 해줍시다!", "", ""],
        ["Space키를 눌러서", "공격을 할 수 있습니다!", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["다음은 적을 공격해봅시다!", "", "", ""],
        ["", "", "", ""],
        ["이곳에 있는", "적을 죽여보세요!", "", ""],
        ["위에 있는 ♥는", "여러분의 체력을 나타냅니다!", "", ""],
        ["여러분의 체력이 닳게 되면", "♥가 줄어들어요!", "", ""],
        ["위에 있는 경험치바는", "여러분의 현재 경험치를 보여줍니다!", "", ""],
        ["만약 적을 죽이게 되면", "이렇게 경험치가 증가합니다!", "", ""],
        ["이 위에 있는 것은", "레벨입니다!", "", ""],
        ["경험치가 일정량 이상 차게 되면,", "레벨업을 하게되죠!", "", ""],
        ["이렇게 적을 처치하면", "경험치바에서 경험치가 증가합니다!", "", ""],
        ["여기 위에 있는 ♥는", "여러분의 체력을 나타냅니다!", "", ""],
        ["이렇게 여러분의 체력이 닳게 되면", "♥가 줄어들어요!", "", ""],
        ["이 위에 있는 것은", "레벨입니다!", "", ""],
        ["경헙치가 일정량 이상 차게 되면", "레벨업을 하게되죠!", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
    ],
    draw(x, y){
        this.x = x;
        this.y = y;
        ctx.font = '50px Sam3KRFont';
        ctx.textAlign = 'start';
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'top';
        ctx.fillText(this.text[ingametimer.tutorial - 1][0], this.x, this.y);
        ctx.fillText(this.text[ingametimer.tutorial - 1][1], this.x, this.y + 50);
        ctx.fillText(this.text[ingametimer.tutorial - 1][2], this.x, this.y + 100);
        ctx.fillText(this.text[ingametimer.tutorial - 1][3], this.x, this.y + 150);
        ctx.strokeText(this.text[ingametimer.tutorial - 1][0], this.x, this.y);
        ctx.strokeText(this.text[ingametimer.tutorial - 1][1], this.x, this.y + 50);
        ctx.strokeText(this.text[ingametimer.tutorial - 1][2], this.x, this.y + 100);
        ctx.strokeText(this.text[ingametimer.tutorial - 1][3], this.x, this.y + 150);
    }
}*/

class Alert{
    constructor(){
        this.x = innerWidth / 2 - 200;
        this.y = 20;
        this.width = 400;
        this.height = 80;
        this.color = 'lime';
        this.text = '오류';
        this.timer = 50;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x + 2, this.y + 2, this.width - 4, this.height - 4);
        ctx.fillStyle = 'darkgray';
        ctx.fillRect(this.x + 2, this.y + this.height - 12, (this.width - 4) * this.timer / 50, 10);
        ctx.font = '30px Sam3KRFont';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'top';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + 25);
    }
}

var alerts = [[], []];



//-----------------------------

var onpausebutton = [
    {
        x : 250,
        y : innerHeight / 2 - 245,
        width : innerWidth - 500,
        height : 100,
        color : 'gray',
        text : "게임으로 돌아가기",
        adjust(){
            this.y = innerHeight / 2 - 245;
            this.width = innerWidth - 500;
        }
    },{
        x : 250,
        y : innerHeight / 2 - 115,
        width : innerWidth / 2 - 265,
        height : 100,
        color : 'gray',
        text : "설정",
        adjust(){
            this.y = innerHeight / 2 - 115;
            this.width = innerWidth / 2 - 265;
        }
    },{
        x : innerWidth / 2 + 15,
        y : innerHeight / 2 - 115,
        width : innerWidth / 2 - 265,
        height : 100,
        color : 'gray',
        text : "업적",
        adjust(){
            this.x = innerWidth / 2 + 15;
            this.y = innerHeight / 2 - 115;
            this.width = innerWidth / 2 - 265;
        }
    },{
        x : 250,
        y : innerHeight / 2 + 15,
        width : innerWidth / 2 - 265,
        height : 100,
        color : 'gray',
        text : "스킨",
        adjust(){
            this.y = innerHeight / 2 + 15;
            this.width = innerWidth / 2 - 265;
        }
    },{
        x : innerWidth / 2 + 15,
        y : innerHeight / 2 + 15,
        width : innerWidth / 2 - 265,
        height : 100,
        color : 'gray',
        text : "상점",
        adjust(){
            this.x = innerWidth / 2 + 15;
            this.y = innerHeight / 2 + 15;
            this.width = innerWidth / 2 - 265;
        }
    },{
        x : 250,
        y : innerHeight / 2 + 145,
        width : innerWidth - 500,
        height : 100,
        color : 'gray',
        text : "메뉴로 가기",
        adjust(){
            this.y = innerHeight / 2 + 145;
            this.width = innerWidth - 500;
        }
    }
]

var reconfirmbutton = [
    {
        x : 250,
        y : innerHeight / 2 + 25,
        width : innerWidth - 500,
        height : 100,
        color : 'gray',
        text : "메뉴로 가기",
        adjust(){
            this.y = innerHeight / 2 + 25;
            this.width = innerWidth - 500;
        }
    },{
        x : 250,
        y : innerHeight / 2 + 145,
        width : innerWidth - 500,
        height : 100,
        color : 'gray',
        text : "취소",
        adjust(){
            this.y = innerHeight / 2 + 145;
            this.width = innerWidth - 500;
        }
    }
]


var throwingkeybutton = {
    x : 250,
    y : innerHeight / 2 - 245,
    width : innerWidth - 500,
    height : 100,
    color : 'gray',
    text : "투척 키 설정",
    adjust(){
        this.y = innerHeight / 2 - 245;
        this.width = innerWidth - 500;
    },
    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
    }
}

var 배경이요 = {
    x : 0,
    y : 0,
    width : innerWidth,
    height : innerHeight,
    draw(){
        ctx.fillStyle = 'gray';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

var scorebackbutton = {
    x : innerWidth - (innerWidth - 200) / 4 + 60,
    y : innerHeight - 90,
    width : (innerWidth - 200) / 4 - 80,
    height : 80,
    color : 'gray',
    text : "뒤로가기",
    adjust(){
        this.x = innerWidth - (innerWidth - 200) / 4 + 60;
        this.y = innerHeight - 90;
        this.width = (innerWidth - 200) / 4 - 80;
    },
    draw(){
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
    }
}

var score = {
    score : [['Max Heart', 'Last Heart', 'Time', 'Kills', 'Damage Done To', 'Damage Done By', 'Score'], [3, 3, '0:0.0', 0, 0, 0, 0], ['+0', '+0', '+0', '+0', '+0', '-0']],
    color : ['#aed2ff','#ffaeae','#c4c4c4','#4b4b4b','#208fff','#ff4328','#ffcd20'],
    survived : false,
    show(){
        ctx.fillStyle = 'white';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        this.score.forEach((e, i)=>{
            if(i == 1){
                ctx.textAlign = 'end';
            }else if(i == 2){
                ctx.textAlign = 'start';
            }
            e.forEach((b, n)=>{
                if(i == 1){
                    ctx.fillStyle = this.color[n]
                }else if(i == 2){
                    if(+b > 0){
                        ctx.fillStyle = 'blue';
                    }else if(+b < 0){
                        ctx.fillStyle = 'red';
                    }else{
                        ctx.fillStyle = 'white';
                    }
                }
                ctx.fillText(b, 450 * i - Math.floor(i / 2) * 400 + 20, 50 * n + 20);
            })
        })
        ctx.textAlign = 'end';
        ctx.textBaseline = 'middle';
        ctx.font = '100px Sam3KRFont';
        if(this.survived){
            ctx.fillStyle = 'green';
            ctx.fillText('생존 ', innerWidth - 270, 145);
        }else{
            ctx.fillStyle = 'red';
            ctx.fillText('실패 ', innerWidth - 270, 145);
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(innerWidth - 270, 20, 250, 250);
        var image = new Image;
        image.src = 'images/game/characters/maincharacter_0left.png';
        ctx.drawImage(image, innerWidth - 270, 20, 250, 250);
        var image = new Image;
        image.src = weapon.present[3] + 'left.png';
        ctx.drawImage(image, innerWidth - 250, 300);
    }
}

var rank = {
    type : 0,
    page : 0,
    draw(){
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'top';
        ctx.font = '50px Sam3KRFont';
        ranking[this.type].forEach((e, i)=>{
            if(i >= 0 + 10 * this.page && i < 10 + 10 * this.page){
                ctx.textAlign = 'end';
                ctx.fillText((i + 1) + "위", 140 + Math.floor(i / 5) * innerWidth / 2, i % 5 * 100 + 150);
                e.forEach((a, j)=>{
                    if(j){
                        ctx.textAlign = 'end';
                    }else{
                        ctx.textAlign = 'start';
                    }
                    ctx.fillText(a, j * 450 + Math.floor(i / 5) * innerWidth / 2 + 150, i % 5 * 100 + 150, 200)
                })
            }
        })
    },
    set(){
        for(let a = 0; a < 7; a++){
            let n = true;
            ranking[a].forEach((e, i, o)=>{
                if(e[1] <= score.score[1][[2, 3, 4, 1, 5, 6, 0].indexOf(a)] && n){
                    o.splice(i, 0, [maincharacter.name, score.score[1][[2, 3, 4, 1, 5, 6, 0].indexOf(a)]])
                    n = false;
                }
            })
            ranking[a].forEach((e, i)=>{
                localStorage.setItem(['score', 'kill', 'max', 'last', 'time', 'ddt', 'ddb'][a] + "name" + (i + 1), e[0]);
                if(a == 4){
                    localStorage.setItem('timem' + (i + 1), ingame.time[0]);
                    localStorage.setItem('times' + (i + 1), ingame.time[1]);
                    localStorage.setItem('timef' + (i + 1), ingame.time[2]);
                }else{
                    localStorage.setItem(['score', 'kill', 'max', 'last', 'time', 'ddt', 'ddb'][a] + (i + 1), e[1]);
                }
                localStorage.setItem("n", i + 1)
            })
        }
    }
}