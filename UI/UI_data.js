//---------------------------------inmenu----------------------------------
var background = {
    x : 0,
    y : 0,
    width : innerWidth,
    height : innerHeight,
    inmenusrc : 'images/menu/background.png',
    ingamesrc : 'images/game/background.png',
    adjust(){
        this.width = innerWidth;
        this.height = innerHeight;
    },
    draw(){
        let image = new Image();
        if(inmenutimer.whether){
            image.src = this.inmenusrc;
            if(innerHeight * 2 > innerWidth){
                ctx.drawImage(image, (innerWidth - 2 * innerHeight) / 2, 0, innerHeight * 2, innerHeight);
            }else{
                ctx.drawImage(image, 0, innerHeight - innerWidth / 2, innerWidth, innerWidth / 2);
            }
        }else if(ingametimer.whether){
            image.src = this.ingamesrc;
            if(innerHeight - 250 > innerWidth / 3){
                ctx.drawImage(image, (innerWidth - 3 * innerHeight + 750) / 2, 0, (innerHeight - 250) * 3, innerHeight - 250);
            }else{
                ctx.drawImage(image, 0, innerHeight - 250 - innerWidth / 3, innerWidth, innerWidth / 3);
            }
        }
    }
}

var playbutton = {
    x : 110,
    y : innerHeight - 170,
    width : (innerWidth - 200) / 4 - 20,
    height : 100,
    color : 'gray',
    text : "플레이하기",
    adjust(){
        this.y = innerHeight - 170;
        this.width = (innerWidth - 200) / 4 - 20;
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

var setskinbutton = {
    x : (innerWidth - 200) / 4 + 110,
    y : innerHeight - 170,
    width : (innerWidth - 200) / 4 - 20,
    height : 100,
    color : 'gray',
    text : "커스터마이징",
    adjust(){
        this.x = (innerWidth - 200) / 4 + 110;
        this.y = innerHeight - 170;
        this.width = (innerWidth - 200) / 4 - 20;
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

var achievementbutton = {
    x : (innerWidth - 200) / 2 + 110,
    y : innerHeight - 170,
    width : (innerWidth - 200) / 4 - 20,
    height : 100,
    color : 'gray',
    text : "업적",
    adjust(){
        this.x = (innerWidth - 200) / 2 + 110;
        this.y = innerHeight - 170;
        this.width = (innerWidth - 200) / 4 - 20;
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

var menusettingbutton = {
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

var playtitle = {
    x : 10,
    y : 10,
    width : innerWidth / 2,
    text : "게임목록",
    adjust(){
        this.width = innerWidth / 2;
    },
    draw(){
        ctx.fillStyle = 'black';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        ctx.font = '100px Sam3KRFont';
        ctx.fillText(this.text, this.x, this.y, this.width);
    }
}

var playbackground = {
    x : 10,
    y : 150,
    width : innerWidth / 2,
    height : innerHeight - 170,
    src : ["", "images/menu/tutorial.png", "images/menu/nomalgame.png", "images/menu/specialmod.png", "images/menu/speedrun.png"],
    adjust(){
        this.width = innerWidth / 2;
        this.height = innerHeight - 170;
    },
    draw(){
        let image = new Image();
        image.src = this.src[inmenutimer.play_n];
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
}

var tutorialbutton = {
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
    },
    draw(){
        if(inmenutimer.play_n == 1){
            ctx.fillStyle = 'blue';
        }else{
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
}

var nomalgamebutton = {
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
    },
    draw(){
        if(inmenutimer.play_n == 2){
            ctx.fillStyle = 'blue';
        }else{
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
}

var specialmodbutton = {
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
    },
    draw(){
        if(inmenutimer.play_n == 3){
            ctx.fillStyle = 'blue';
        }else{
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
}

var speedrunbutton = {
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
    },
    draw(){
        if(inmenutimer.play_n == 4){
            ctx.fillStyle = 'blue';
        }else{
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }
}

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
            },
            draw(){
                if(ingametimer.type == this.type){
                    ctx.fillStyle = 'blue';
                }else{
                    ctx.fillStyle = 'black';
                }
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '50px Sam3KRFont';
                ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
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
            },
            draw(){
                if(ingametimer.type == this.type){
                    ctx.fillStyle = 'blue';
                }else{
                    ctx.fillStyle = 'black';
                }
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '50px Sam3KRFont';
                ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
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
            },
            draw(){
                if(ingametimer.type == this.type){
                    ctx.fillStyle = 'blue';
                }else{
                    ctx.fillStyle = 'black';
                }
                ctx.fillRect(this.x, this.y, this.width, this.height);
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '50px Sam3KRFont';
                ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2, this.width);
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
            },
            draw(){
                if(ingametimer.type == this.type){
                    ctx.fillStyle = 'blue';
                }else{
                    ctx.fillStyle = 'black';
                }
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
    ],
    [],
    []
]


var startui = {
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
        if(inmenutimer.play_n != 3 || inmenutimer.specailmod){
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
        "설명설명설명설명설명설명설명설명설명",
        "튜토리얼",
        "일반게임",
        "특별모드",
        "스피드런"
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
        if(inmenutimer.specailmod){
            if(ingametimer.type == 'sworder'){
                ctx.fillText('용사의 모험', this.x, this.y, this.width);
                ctx.font = '30px Sam3KRFont';
                ctx.fillText('용사의 검만 사용 가능',this.sx, this.sy);
            }
        }else{
            if(inmenutimer.play_n == 1){
                ctx.fillText(tutorialbutton.text, this.x, this.y, this.width);
            }else if(inmenutimer.play_n == 2){
                ctx.fillText(nomalgamebutton.text, this.x, this.y, this.width);
            }else if(inmenutimer.play_n == 3){
                ctx.fillText(specialmodbutton.text, this.x, this.y, this.width);
            }else if(inmenutimer.play_n == 4){
                ctx.fillText(speedrunbutton.text, this.x, this.y, this.width);
            }
            ctx.font = '30px Sam3KRFont';
            ctx.fillText(this.text[inmenutimer.play_n],this.sx, this.sy);
        }
    }
}






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
        if(ingametimer.shop){
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

var shoplist = [
    {
        name : '투척물 보충하기',
        x : 170,
        y : 200,
        width : innerWidth / 3 - 140,
        height : innerHeight - 300,
        color : '#7bcdffb0',
        item : 3,
        adjust(){
            this.width = innerWidth / 3 - 140;
            this.height = innerHeight - 300;
        },
        draw(){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gray';
            ctx.textBaseline = "top";
            ctx.textAlign = "center";
            ctx.font = '30px Sam3KRFont';
            ctx.fillText(this.name, this.x + this.width / 2, this.y + 15);
            ctx.fillText("투척물 +" + this.item, this.x + this.width / 2, this.y + this.height - 80);
            ctx.fillText(this.item * 5 + "￦", this.x + this.width / 2, this.y + this.height - 40);
            let image = new Image();
            image.src = thrownweapon.present[3]
            ctx.drawImage(image, this.x + 50, this.y + 55, this.width - 100, this.width - 100);
        }
    },{
        name : '구조물 보충하기',
        x : innerWidth / 3 + 70,
        y : 200,
        width : innerWidth / 3 - 140,
        height : innerHeight - 300,
        color : '#7bcdffb0',
        item : 3,
        adjust(){
            this.x = innerWidth / 3 + 70;
            this.width = innerWidth / 3 - 140;
            this.height = innerHeight - 300;
        },
        draw(){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gray';
            ctx.textBaseline = "top";
            ctx.textAlign = "center";
            ctx.font = '30px Sam3KRFont';
            ctx.fillText(this.name, this.x + this.width / 2, this.y + 15);
            ctx.fillText("구조물 +" + this.item, this.x + this.width / 2, this.y + this.height - 80);
            ctx.fillText(this.item * 10 + "￦", this.x + this.width / 2, this.y + this.height - 40);
            let image = new Image();
            image.src = 'images/game/building.png'
            ctx.drawImage(image, this.x + 75, this.y + 105, this.width - 150, this.width - 150);
        }
    },{
        name : ' 구매하기',
        x : innerWidth / 3 * 2 - 30,
        y : 200,
        width : innerWidth / 3 - 140,
        height : innerHeight - 300,
        number : [0, 1],
        color : '#7bcdffb0',
        adjust(){
            this.x = innerWidth / 3 * 2 - 30;
            this.width = innerWidth / 3 - 140;
            this.height = innerHeight - 300;
        },
        draw(){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = 'gray';
            ctx.textBaseline = "top";
            ctx.textAlign = "center";
            ctx.font = '30px Sam3KRFont';
            let image = new Image();
            if(ingametimer.type == 'sworder' && this.number[0] == 0){
                ctx.fillText(sworder[sworder[0]].title, this.x + this.width / 2, this.y + 15);
                ctx.fillText(sworder[sworder[0]].text, this.x + this.width / 2, this.y + this.height - 80, this.width);
                ctx.fillText(sworder[sworder[0]].value + "￦", this.x + this.width / 2, this.y + this.height - 40);
                image.src = gun[sworder[sworder[0]].n].src;
                ctx.drawImage(image, this.x + 50, this.y + 70, this.width - 100, this.width / 5 * 4 - 80);
            }else{
                ctx.fillText(itemlist[this.number[0]][this.number[1]][0] + this.name, this.x + this.width / 2, this.y + 15);
                ctx.fillText(itemlist[this.number[0]][this.number[1]][2], this.x + this.width / 2, this.y + this.height - 80, this.width);
                ctx.fillText(itemlist[this.number[0]][this.number[1]][1] + "￦", this.x + this.width / 2, this.y + this.height - 40);
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
            }
        }
    },
]

//---------------------ingame---------------------------


var time = {
    x : innerWidth / 2,
    y : 50,
    m : 00,
    s : 00,
    adjust(){
        this.x = innerWidth / 2;
    },
    draw(){
        this.m = ingametimer.time[0];
        this.s = ingametimer.time[1];
        if(ingametimer.time[0] < 10){
            this.m = '0' + ingametimer.time[0];
        }
        if(ingametimer.time[1] < 10){
            this.s = '0' + ingametimer.time[1];
        }
        ctx.fillStyle = 'white';
        ctx.textBaseline = "top";
        ctx.textAlign = "center";
        ctx.font = '40px Sam3KRFont';
        ctx.fillText(this.m + ":" + this.s, this.x, this.y);
    }
}

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

var ground = {
    x : 0,
    y : innerHeight - 250,
    width : innerWidth,
    height : 250,
    adjust(){
        this.y = innerHeight - 250;
        this.width = innerWidth;
    },
    draw(){
        ctx.fillStyle = '#5b5b5b';
        ctx.fillRect(this.x, this.y, this.width, this.height);
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
        ctx.fillText('Z', this.x + 10, this.y + 5);
        
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
        if(ingametimer.buildpress == true){
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
        ctx.fillText('X', this.x + 10, this.y + 5);
        ctx.textAlign = 'end';
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'bottom';
        ctx.fillText(structure[0], this.x + this.width - 5, innerHeight - 10);
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
            if(ingametimer.type == 'sworder'){
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
        ctx.fillText('C', this.x + 10, this.y + 5);
        if(weapon.load > 0 && maincharacter.weapontype != 'sword' && maincharacter.weapontype != 'shield'){
            ctx.fillStyle = 'white';
            ctx.textAlign = 'end';
            ctx.textBaseline = 'bottom';
            ctx.fillText(Math.ceil((1 - weapon.load / 50) * 10) / 10, this.x + this.width - 5, innerHeight - 10);
        }
    }
}

var structure = [
    3,
    {
        name : '지지대'
    },{

    }
]

class Building {
    constructor(){
        this.x = maincharacter.x + maincharacter.width / 2 - 50;
        this.y = innerHeight - 350;
        this.width = 100;
        this.height = 100;
        this.color = 'black';
        this.timer = 0;
        this.able = false;
        this.src = 'images/game/building.png'
    }
    draw(){
        let image = new Image();
        image.src = this.src;
        ctx.drawImage(image, this.x, this.y);
    }
}

var buildings = [];

function build(){
    if(ingametimer.building == true){
        if(structure[0] > 0){
            if(ingametimer.buildingtimer == 0){
                structure[0] -= 1;
                var building = new Building;
                buildings.unshift(building);
            }
            if(ingametimer.buildingtimer >= 50){
                ingametimer.building = false;
                ingametimer.buildingtimer = 0;
            }else{
                buildings[0].color = 'rgba(0, 0, 0, ' + ingametimer.buildingtimer / 50 + ')';
                ingametimer.buildingtimer += 1;
            }
        }else{
            ingametimer.building = false;
        }
    }
}

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
}

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

var gobackbutton = {
    x : 250,
    y : innerHeight / 2 - 245,
    width : innerWidth - 500,
    height : 100,
    color : 'gray',
    text : "게임으로 돌아가기",
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

var gamesettingbutton = {
    x : 250,
    y : innerHeight / 2 - 115,
    width : innerWidth / 2 - 265,
    height : 100,
    color : 'gray',
    text : "설정",
    adjust(){
        this.y = innerHeight / 2 - 115;
        this.width = innerWidth / 2 - 265;
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

var achievebutton = {
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
var skinbutton = {
    x : 250,
    y : innerHeight / 2 + 15,
    width : innerWidth / 2 - 265,
    height : 100,
    color : 'gray',
    text : "스킨",
    adjust(){
        this.y = innerHeight / 2 + 15;
        this.width = innerWidth / 2 - 265;
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
var shopbutton = {
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

var menubutton = {
    x : 250,
    y : innerHeight / 2 + 145,
    width : innerWidth - 500,
    height : 100,
    color : 'gray',
    text : "메뉴로 가기",
    adjust(){
        this.y = innerHeight / 2 + 145;
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

var reconfirmbutton = {
    x : 250,
    y : innerHeight / 2 + 25,
    width : innerWidth - 500,
    height : 100,
    color : 'gray',
    text : "메뉴로 가기",
    adjust(){
        this.y = innerHeight / 2 + 25;
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

var cancelbutton = {
    x : 250,
    y : innerHeight / 2 + 145,
    width : innerWidth - 500,
    height : 100,
    color : 'gray',
    text : "취소",
    adjust(){
        this.y = innerHeight / 2 + 145;
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
    score : [['Max Heart', 'Last Heart', 'Time', 'Kills', 'Damage Done To', 'Damage Done By', 'Score'], [3, 3, '0:0.0', 0, 0, 0, 0]],
    show(){
        ctx.fillStyle = 'white';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        this.score.forEach((e, i)=>{
            if(i){
                ctx.textAlign = 'end';
            }
            e.forEach((b, n)=>{
                ctx.fillText(b, 450 * i + 20, 50 * n + 20);
            })
        })
    }
}
