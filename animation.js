//애니메이션
var animation;

animation = setInterval(function () {

    //캔버스 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(canvas.width != window.innerWidth || canvas.height != window.innerHeight){
        //캔버스 크기 조정
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        //UI 크기 조정
        background.adjust();
        inmenubutton.forEach((e)=>{
            e.adjust();
        })
        backbutton.adjust();
        title.adjust();
        playbackground.adjust();
        playbutton.forEach((e)=>{
            e.adjust();
        })
        specialmods.forEach((e)=>{
            e.forEach((a)=>{
                a.adjust();
            })
        })
        startbutton.adjust();
        gameex.adjust();

        screen.adjust();
        gamewindow.adjust();
        catalog[0].adjust();
        catalog[1].adjust();
        catalog[2].adjust();

        waveshower.adjust();
        throwingbutton.adjust();
        buildingbutton.adjust();
        loadingbutton.adjust();
        
    }

    if(windows.menu){
        if(inmenu.play[0] || inmenu.setskin || inmenu.rank || inmenu.setting){
            if(inmenu.play[0]){
                if(inmenu.play[2]){
                    specialmods.forEach((e, i)=>{
                        e.forEach((a, j)=>{
                            if(inmenu.play[3][0] == i && inmenu.play[3][1] == j){
                                ctx.fillStyle = 'blue';
                            }else{
                                ctx.fillStyle = 'black';
                            }
                            ctx.fillRect(a.x, a.y, a.width, a.height);
                            ctx.fillStyle = a.color;
                            ctx.fillRect(a.x + 5, a.y + 5, a.width - 10, a.height - 10);
                            ctx.fillStyle = 'black';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            ctx.font = '50px Sam3KRFont';
                            ctx.fillText(a.text, a.x + a.width / 2, a.y + a.height / 2, a.width);
                        })
                    })
                }else{
                    playbackground.draw();
                    playbutton.forEach((e, i)=>{
                        if(inmenu.play[1] == i){
                            ctx.fillStyle = 'blue';
                        }else{
                            ctx.fillStyle = 'black';
                        }
                        ctx.fillRect(e.x, e.y, e.width, e.height);
                        ctx.fillStyle = e.color;
                        ctx.fillRect(e.x + 5, e.y + 5, e.width - 10, e.height - 10);
                        ctx.fillStyle = 'black';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.font = '50px Sam3KRFont';
                        ctx.fillText(e.text, e.x + e.width / 2, e.y + e.height / 2);
                    })
                }
                startbutton.draw();
                gameex.draw();
            }else if(inmenu.setskin){
            }else if(inmenu.rank){
                rank.draw();
            }else if(inmenu.setting){
                gamewindow.draw();
                controll.forEach((e, i)=>{
                    ctx.fillStyle = 'black';
                    ctx.textAlign = 'start';
                    ctx.textBaseline = 'top';
                    ctx.font = '50px Sam3KRFont';
                    ctx.fillText(e.text, 200, e.y);
                    if(i == insetting.controlls - 1){
                        ctx.fillStyle = 'yellow';
                    }else{
                        ctx.fillStyle = e.color;
                    }
                    ctx.fillText(e.key, e.x, e.y);
                })
            }
            title.draw();
            backbutton.draw();
        }else{
            background.draw();
            inmenubutton.forEach((e)=>{
                ctx.fillStyle = 'black';
                ctx.fillRect(e.x, e.y, e.width, e.height);
                ctx.fillStyle = e.color;
                ctx.fillRect(e.x + 5, e.y + 5, e.width - 10, e.height - 10);
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = '50px Sam3KRFont';
                ctx.fillText(e.text, e.x + e.width / 2, e.y + e.height / 2, e.width);
            })
        }
    }else if(windows.game){
        //exp
        if(ingame.exp == 1){
            if(ingame.exptimer < 10){
                if(ingame.exptimer == 0){
                    exp[2] = exp[0] - exp[1];
                }
                exp[1] += exp[2] / 10;
                ingame.exptimer += 1;
            }else if(ingame.exptimer >= 10){
                exp[1] = exp[0];
                ingame.exptimer = 0;
                ingame.exp = 0;
                exp[0] = Math.round(exp[0]);
            }
        }else if(ingame.exp >= 2){
            ingame.exp = 1;
            ingame.exptimer = 0;
        }
        //레벨
        if(exp[0] >= limitexp[level]){
            exp[0] -= limitexp[level];
            exp[1] -= limitexp[level];
            level += 1;
            heart += 1;
        }
        background.draw();
        //ground
        ctx.fillStyle = '#5b5b5b';
        ctx.fillRect(0, innerHeight - 250, innerWidth, 250);
        //time
        ctx.fillStyle = 'white';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'center';
        ctx.font = '40px Sam3KRFont';
        ctx.fillText(["0" + ingame.time[0], ingame.time[0]][[ingame.time[0]].filter(e=>e >= 10).length] + ":" + ["0" + ingame.time[1], ingame.time[1]][[ingame.time[1]].filter(e=>e >= 10).length], innerWidth / 2, 50);
        //exp
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, innerWidth, 15);
        ctx.fillStyle = '#4ad903';
        ctx.fillRect(0, 0, exp[1] / limitexp[level] * innerWidth, 15);
        ctx.fillStyle = 'black';
        ctx.font = '20px Sam3KRFont';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'center';
        ctx.fillText(Math.round(exp[1]) + "/" + limitexp[level], innerWidth / 2, - 1);
        //level
        ctx.fillStyle = '#009dff';
        ctx.textAlign = 'start';
        ctx.textBaseline = 'top';
        ctx.font = '50px Sam3KRFont';
        ctx.fillText(level + "Lv", 10, 15, 100);
        //heart
        if(this.value > this.maxvalue){
            this.maxvalue = this.value;
        }
        ctx.fillStyle = 'red';
        ctx.textBaseline = 'top';
        ctx.textAlign = 'start';
        ctx.font = '48px Sam3KRFont';
        ctx.fillText(["♥x" + heart.value, "♥", "♥♥", "♥♥♥", "♥♥♥♥", "♥♥♥♥♥"][[0, heart.value][[5].filter(e=>e >= heart.value).length]], 100, 17);
        //buildings
        buildings.filter((e=>e.able)).forEach((e)=>{
            e.draw();
        })
        //enemies
        enemies.forEach((e, i , a)=>{
            if(e.hp <= 0){
                e.exp();
                a.splice(i, 1);
            }
            if(e.y + e.height > innerHeight - 250){
                e.y = innerHeight - 250 - e.height;
                e.falling = 0; 
            }else if(e.y + e.height < innerHeight - 250){
                e.falling += 1;
                e.y += e.falling * e.falling - (e.falling - 1) * (e.falling - 1);
            }
            bullets.forEach((b1, n1)=>{
                b1.forEach((b2, n)=>{
                    if(e.x <= b2.x + b2.width && e.x + e.width >= b2.x && e.y <= b2.y + b2.height && e.y + e.height >= b2.y){
                        e.hp -= weapon.present[1];
                        e.knockback = weapon.present[2] * ((n1 * 2) - 1);
                        b1.splice(n, 1);
                    }
                })
            })
            objects.forEach((o1, n1)=>{
                o1.forEach((o2, n)=>{
                    if(e.x <= o2.x + o2.width && e.x + e.width >= o2.x && e.y <= o2.y + o2.height && e.y + e.height >= o2.y){
                        e.hp -= thrownweapon.present[1];
                        e.knockback = thrownweapon.present[2] * ((n1 * 2) - 1);
                        o1.splice(n, 1);
                    }
                })
            })
            buildings.filter(e=>e.able).forEach((b=>{
                if(e.x <= b.x + b.width && e.x + e.width >= b.x && e.y <= b.y + b.height && e.y + e.height >= b.y){
                    b.hp -= 1;
                }
            }))
            if(maincharacter.weapontype == 'sword' || maincharacter.weapontype == 'shield'){
                if(weapon.fire > 0 && weapon.fire < 15){
                    if(e.x <= weapon.present[6] + weapon.present[8] && e.x + e.width >= weapon.present[6] && e.y <= maincharacter.y + weapon.present[7] + weapon.present[9] && e.y + e.height >= maincharacter.y + weapon.present[7] && e.sword){
                        if(e.shield > 0){
                            e.hp -= weapon.present[1] * 3 * e.combo;
                            e.combo += 1;
                            e.shield += 20
                        }else{
                            e.hp -= weapon.present[1];
                        }
                        if(maincharacter.direction == 'left'){
                            e.knockback = - weapon.present[2];
                        }else{
                            e.knockback = weapon.present[2];
                        }
                        e.sword = false;
                        if(maincharacter.weapontype == 'shield'){
                            e.shield = weapon.present[2] + 5;
                        }
                    }
                }else{
                    e.sword = true;
                    e.shield -= 1;
                    if(e.shield <= 0){
                        e.combo = 0;
                    }
                }
            }
            if(!ingame.pausing){
                if(e.x > maincharacter.x + maincharacter.width){
                    e.x -= e.speed;
                }else if(e.x + e.width < maincharacter.x){
                    e.x += e.speed;
                }else if(e.x + e.width >= maincharacter.x && e.x <= maincharacter.x + maincharacter.width && e.y <= maincharacter.y + maincharacter.height && e.y + e.height >= maincharacter.y){
                    if(!player.invincibility){
                        if(e.shield <= 0){
                            heart.value -=1
                            player.invincibility = true;
                        }
                    }
                }
                e.x += e.knockback * 2;
                if(e.knockback > 0){
                    e.knockback -= 1;
                }else if(e.knockback < 0){
                    e.knockback += 1;
                }
            }
            e.draw();
        })
        maincharacter.draw();
        weapon.draw();
        loadingbutton.draw();
        money.show();
        throwingbutton.draw();
        buildingbutton.draw();
        thrownweapon.draw();
        keys.forEach((e)=>{
            ctx.fillStyle = 'black';
            ctx.fillRect(e.x, e.y, e.width, e.height);
            ctx.fillStyle = e.color;
            ctx.fillRect(e.x + 5, e.y + 5, e.width - 10, e.height - 10);
            ctx.fillStyle = 'black';
            ctx.textBaseline = 'middle';
            ctx.textAlign = 'center';
            ctx.font = '48px Sam3KRFont';
            ctx.fillText(e.name, e.x + e.width / 2, e.y + e.height / 2);
        })
        waveshower.draw();
        ingamebutton.forEach((e)=>{
            e.draw();
        })
        if(ingame.pausing){
            screen.draw();
            if(pausing.setting || pausing.ranking || pausing.setskin || pausing.shop){
                if(pausing.setting){
                    gamewindow.draw();
                    controll.forEach((e, i)=>{
                        ctx.fillStyle = 'black';
                        ctx.textAlign = 'start';
                        ctx.textBaseline = 'top';
                        ctx.font = '50px Sam3KRFont';
                        ctx.fillText(e.text, 200, e.y);
                        if(i == insetting.controlls - 1){
                            ctx.fillStyle = 'yellow';
                        }else{
                            ctx.fillStyle = e.color;
                        }
                        ctx.fillText(e.key, e.x, e.y);
                    })
                }else if(pausing.ranking){
                    rank.draw();
                }else if(pausing.setskin){
                }else if(pausing.shop){
                    gamewindow.draw();
                    catalog.forEach((e)=>{
                        ctx.fillStyle = e.color;
                        ctx.fillRect(e.x, e.y, e.width, e.height);
                        ctx.fillStyle = '#519cc9';
                        ctx.fillRect(e.x + 50, e.y + 80, e.width - 100, e.width - 100);
                        ctx.fillStyle = 'gray';
                        ctx.textBaseline = "top";
                        ctx.textAlign = "center";
                        ctx.font = '30px Sam3KRFont';
                        ctx.fillText(e.name, e.x + e.width / 2, e.y + 15);
                        ctx.fillText(e.description, e.x + e.width / 2, e.y + e.height - 80);
                        ctx.fillText(e.price + "￦", e.x + e.width / 2, e.y + e.height - 40);
                        let image = new Image();
                        image.src = e.src;
                        ctx.drawImage(image, e.x + 50, e.y + 30 + (e.width - e.sheight) / 2, e.width - 100, e.sheight);
                    })
                    alerts[1].forEach((e, i, a)=>{
                        e.draw();
                        a[i].y = 20 + 100 * i
                        e.timer -= 1;
                        if(e.timer <= 0){
                            a.splice(i, 1)
                        }
                    })
                }
                backbutton.draw();
            }else if(pausing.reconfirm){
                reconfirmbutton.forEach((e)=>{
                    ctx.fillStyle = 'black';
                    ctx.fillRect(e.x, e.y, e.width, e.height);
                    ctx.fillStyle = e.color;
                    ctx.fillRect(e.x + 5, e.y + 5, e.width - 10, e.height - 10);
                    ctx.fillStyle = 'black';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.font = '50px Sam3KRFont';
                    ctx.fillText(e.text, e.x + e.width / 2, e.y + e.height / 2, e.width);
                })
            }else{
                onpausebutton.forEach((e)=>{
                    ctx.fillStyle = 'black';
                    ctx.fillRect(e.x, e.y, e.width, e.height);
                    ctx.fillStyle = e.color;
                    ctx.fillRect(e.x + 5, e.y + 5, e.width - 10, e.height - 10);
                    ctx.fillStyle = 'black';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.font = '50px Sam3KRFont';
                    ctx.fillText(e.text, e.x + e.width / 2, e.y + e.height / 2, e.width);
                })
            }
        }else{
            //time
            ingame.time[2] += 1;
            if(ingame.time[2] >= 50){
                ingame.time[1] += 1;
                ingame.time[2] = 0;
            }
            if(ingame.time[1] >= 60){
                ingame.time[0] += 1;
                ingame.time[1] = 0;
            }
            //move
            if(player.move.filter(e=>e == true).length == 1){
                if(player.move[0]){
                    if(maincharacter.x > 0){
                        maincharacter.x -= maincharacter.speed;
                    }
                }else if(maincharacter.x < innerWidth - maincharacter.width){
                    maincharacter.x += maincharacter.speed;
                }
            }
            //jump
            if(player.jumppress && (maincharacter.y + maincharacter.height == innerHeight - 250 || buildings.filter(e=>e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.y <= maincharacter.y + maincharacter.height && e.able && e.walking).length)){
                player.jumping = true;
            }
            if(player.jumping){
                player.jump += 1;
                maincharacter.y += (player.jump - maincharacter.jump) * 2;
                if(maincharacter.y + maincharacter.height >= innerHeight - 250){
                    if(buildings.filter(e=>e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.able).length){
                        maincharacter.y = innerHeight - 350 - maincharacter.height;
                    }else{
                        maincharacter.y = innerHeight - 250 - maincharacter.height;
                    }
                }
            }else if(maincharacter.y + maincharacter.height < innerHeight - 250){
                if(buildings.filter(e=>e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.y <= maincharacter.y + maincharacter.height && e.y + 20 > maincharacter.y + maincharacter.height && e.able && e.walking).length == 0){
                    player.jump += 1;
                    maincharacter.y += player.jump * 2
                }
            }
            //건물과 충돌
            if(buildings.filter(e=>e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.y <= maincharacter.y + maincharacter.height && e.y + 20 > maincharacter.y + maincharacter.height && e.able && e.walking).length && ((player.jumping && player.jump >= maincharacter.jump) || (!player.jumping))){
                player.jump = 0;
                maincharacter.y = innerHeight - maincharacter.height - 350;
                if(!player.jumppress && player.jumping){
                    player.jumping = false;
                }
            }
            //땅과 충돌
            if(maincharacter.y + maincharacter.height >= innerHeight - 250){
                player.jump = 0;
                maincharacter.y = innerHeight - 250 - maincharacter.height;
                if(!player.jumppress && player.jumping){
                    player.jumping = false;
                }
            }
            //invincibility
            if(player.invincibility){
                if(player.invincibletime >= 250){
                    heart.previousvalue = heart.value
                    player.invincibletime = 0;
                    maincharacter.src = 'images/game/characters/maincharacter_0';
                    player.invincibility = false;
                }else{
                    if(heart.previousvalue != heart.value + 1){
                        heart.value = heart.previousvalue - 1;
                    }
                    maincharacter.src = 'images/game/characters/maincharacter_' + [Math.ceil((player.invincibletime % 50) / 5), 12 - Math.ceil((player.invincibletime % 50) / 5)][Math.floor((player.invincibletime % 50) / 30)];
                    player.invincibletime += 1;
                }
            }
            //loading and firing
            if(maincharacter.weapontype == 'gun'){
                if(weapon.loading){
                    if(weapon.load >= weapon.present[6]){
                        weapon.bullets = weapon.present[5];
                        weapon.loading = false;
                    }
                    weapon.load += 1;
                }else{
                    weapon.load = 0;
                    if(weapon.bullets > 0){
                        if(weapon.firing){
                            if(weapon.fire % weapon.present[8] == 0){
                                var bullet = new Bullet()
                                bullets[['right'].filter(e=>e==maincharacter.direction).length].push(bullet);
                                weapon.bullets -= 1;
                            }
                            weapon.fire += 1;
                        }else{
                            weapon.fire = 0;
                        }
                    }
                }
            }else if(maincharacter.weapontype == 'sword' || maincharacter.weapontype == 'shield'){
                if(weapon.firing){
                    weapon.fire += 1;
                    if(weapon.fire >= 10){
                        weapon.fire = 0;
                    }
                }else if(weapon.fire == 0 || weapon.fire >= 10){
                    weapon.fire = 0;
                }else{
                    weapon.fire += 1;
                }
                if(maincharacter.weapontype == 'sword'){
                    if(maincharacter.direction == 'left'){
                        weapon.present[6] = maincharacter.x + (weapon.fire - 10) * weapon.fire * 2 + 3;
                    }else{
                        weapon.present[6] = maincharacter.x - (weapon.fire - 10) * weapon.fire * 2 + 22;
                    }
                }else{
                    if(maincharacter.direction == 'left'){
                        weapon.present[6] = maincharacter.x + (weapon.fire - 10) * weapon.fire * 2;
                    }else{
                        weapon.present[6] = maincharacter.x - (weapon.fire - 10) * weapon.fire * 2 + 30;
                    }
                }
            }
            //bullets
            bullets.forEach((b, n)=>{
                b.forEach((e, i)=>{
                    if(e.x < - 500 || e.x + e.width > innerWidth + 500){
                        b.splice(i, 1);
                    }
                    e.x += weapon.present[7] * ((n * 2) - 1);
                    e.timer += 1;
                    e.draw();
                })
            })
            //throw
            if(thrownweapon.throwing){
                if(thrownweapon.objects > 0){
                    if(thrownweapon.throw % 30 == 0){
                        var object = new Object();
                        objects[['right'].filter(e=>e==maincharacter.direction).length].push(object);
                        thrownweapon.objects -= 1;
                    }
                    thrownweapon.throw += 1;
                }
            }else{
                thrownweapon.throw = 0;
            }
            //objects
            objects.forEach((o, n)=>{
                o.forEach((e, i)=>{
                    if(e.x < - 500 || e.x + e.width > innerWidth + 500 || e.y + e.width > innerHeight - 250){
                        o.splice(i, 1);
                    }
                    e.timer += 1;
                    e.x += thrownweapon.present[4] * ((n * 2) - 1)
                    e.y += (e.timer * (e.timer - 30) - (e.timer - 1) * (e.timer - 31)) / 2;
                    e.draw();
                })
            })
            //build
            if(structure.building){
                if(structure.buildings > 0){
                    if(structure.build % 50 == 0){
                        structure.buildings -= 1;
                        var building = new Building;
                        buildings.unshift(building);
                    }
                    structure.build += 1;
                }
            }else{
                structure.build = 0;
            }
            buildings.forEach((e, i, o)=>{
                if(e.able){
                    if(e.hp <= 0){
                        o.splice(i, 1)
                    }
                }else{
                    if(e.timer < 150){
                        e.timer += 1;
                    }else{
                        e.able = true;
                    }
                }
            })
            buildings.filter(e=>!e.walking && !(e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.y <= maincharacter.y + maincharacter.height && e.y + 20 > maincharacter.y + maincharacter.height)).forEach((e)=>{
                e.walking = true;
            })
            //waves
            if(ingame.wave == 0){
                if(ingame.time[1] >= 3){
                    ingame.wave = 1;
                    ingame.summoning = true;
                }
            }else{
                if(ingame.summoning){
                    nomalwaves[ingame.wave].forEach((e)=>{
                        summon(e);
                    })
                   ingame.summoning = false;
                }
                if(enemies.length == 0){
                    if(nomalwaves.length == ingame.wave + 1){
                        //게임종료
                        windows.game = false;
                        windows.score = true;
                    }
                   if(ingame.waving === false){
                    money.value += 10;
                    resetshop();
                    ingame.waving = 0;
                   }else{
                    if(ingame.waving < 150){
                        ingame.waving += 1;
                    }else{
                        ingame.wave += 1;
                        ingame.waving = false;
                        ingame.summoning = true;
                    }
                   }
                }
            }
            /*
            if(ingametimer.tutorial >= 14){
                if(tutorialwaves[ingametimer.wave].length > 0){
                    summon(tutorialwaves[ingametimer.wave][0]);
                    tutorialwaves[ingametimer.wave].shift();
                    if(ingametimer.wave == 0){
                        ingametimer.tutorial = 15;
                    }
                }
                if(enemies.length == 0){
                    if(ingametimer.tutorial == 21){
                        ingametimer.wave = 1;
                    }else if(ingametimer.tutorial == 26){
                        ingametimer.wave = 1;
                    }
                    /*if(ingametimer.tutorial >= 20){
                        if(ingametimer.dowave === false){
                            ingametimer.dowave = 0;
                        }else{
                            if(ingametimer.dowave < 500){
                                ingametimer.dowave += 1;
                            }else if(ingametimer.dowave >= 500){
                                ingametimer.wave += 1;
                                ingametimer.dowave = false;
                            }
                        }}}
                    */
            //gameover
            if(heart.value <= 0){
                windows.game =  false;
                windows.score = true;
            }
        }
    }else if(windows.score){
        /*
        if(ingametimer.score){
            if(score.score[1][0] != "♥x" + heart.maxvalue){
                score.score[1][0] = "♥x" + heart.maxvalue;
            }
            if(score.score[1][1] != "♥x" + heart.value){
                score.score[1][1] = "♥x" + heart.value;
            }
            if(score.score[1][2] != ingametimer.time[0] + ":" + ingametimer.time[1] + "." + ingametimer.time[2]){
                score.score[1][2] = ingametimer.time[0] + ":" + ingametimer.time[1] + "." + ingametimer.time[2];
            }

            if(score.score[2][3] != '+' + score.score[1][3] * 100){
                score.score[2][3] = '+' + score.score[1][3] * 100;
            }
            if(score.score[2][4] != '+' + score.score[1][4] * 120){
                score.score[2][4] = '+' + score.score[1][4] * 120;
            }
            if(score.score[2][5] != '-' + score.score[1][5] * 100){
                score.score[2][5] = '-' + score.score[1][5] * 100;
            }

            if(score.score[1][6] != +score.score[2][0] + +score.score[2][1] + +score.score[2][2] + +score.score[2][3] + +score.score[2][4] + +score.score[2][5]){
                score.score[1][6] = +score.score[2][0] + +score.score[2][1] + +score.score[2][2] + +score.score[2][3] + +score.score[2][4] + +score.score[2][5];
            }
        */
        배경이요.draw();
        score.show();
        scorebackbutton.draw();
    }
    /*
            //튜토리얼
            if(ingametimer.type == 'tutorial'){
                tutorialscreen.draw();
                if(ingametimer.tutorial >= 1 && ingametimer.tutorial <= 4){
                    tutorialscreen.adjust(0, 0, 0, 0);
                    tutorialexplainer.draw(250, 250);
                }else if(ingametimer.tutorial == 5){
                    tutorialscreen.adjust(maincharacter.x - 50, maincharacter.y - 50, maincharacter.width + 100, maincharacter.height + 100);
                    tutorialexplainer.draw(maincharacter.x + maincharacter.width + 50, maincharacter.y);
                }else if(ingametimer.tutorial == 6){
                    tutorialscreen.adjust(maincharacter.x - 50, maincharacter.y - 50, maincharacter.width + 100, maincharacter.height + 100);
                    tutorialexplainer.draw(250, maincharacter.y + maincharacter.height + 10);
                }else if(ingametimer.tutorial == 7){
                    tutorialscreen.adjust(innerWidth - 400, innerHeight - 300, 400, 300);
                    tutorialexplainer.draw(innerWidth - 550, innerHeight - 400);
                }else if(ingametimer.tutorial == 8){
                    tutorialscreen.adjust(innerWidth - 150, innerHeight - 80, 150, 80);
                    tutorialexplainer.draw(innerWidth - 580, innerHeight - 200);
                }else if(ingametimer.tutorial == 9){
                    tutorialscreen.adjust(loadingbutton.x - 50, loadingbutton.y - 50, loadingbutton.width + 100, loadingbutton.height + 100);
                    tutorialexplainer.draw(loadingbutton.x + loadingbutton.width + 60, loadingbutton.y - 20);
                }else if(ingametimer.tutorial == 10){
                    tutorialscreen.adjust(maincharacter.x - 50, maincharacter.y - 50, maincharacter.width + 100, maincharacter.height + 100);
                    tutorialexplainer.draw(350, innerHeight - 250);
                }else if(ingametimer.tutorial == 11){
                    tutorialscreen.adjust(rightbullets[0].x - 50, rightbullets[0].y - 50, rightbullets[0].width + 100, rightbullets[0].height + 100);
                }else if(ingametimer.tutorial == 12){
                    tutorialscreen.adjust(leftbullets[0].x - 50, leftbullets[0].y - 50, leftbullets[0].width + 100, leftbullets[0].height + 100);
                }else if(ingametimer.tutorial == 13){
                    tutorialscreen.adjust(0, 0, 0, 0);
                    tutorialexplainer.draw(250, 250);
                }else if(ingametimer.tutorial == 14){
                }else if(ingametimer.tutorial == 15){
                    if(heart.value < 3){
                        ingametimer.tutorial = 16;
                        maincharacter.x = 250;
                        maincharacter.y = innerHeight - 350;
                        heart.value = 3;
                    }else if(enemies.length <= 0){
                        ingametimer.tutorial = 22;
                    }
                    tutorialscreen.adjust(enemies[0].x - 50, enemies[0].y - 50, enemies[0].width + 100, enemies[0].height + 100);
                    tutorialexplainer.draw(enemies[0].x - 150, enemies[0].y - 150);
                }else if(ingametimer.tutorial == 16){
                    tutorialscreen.adjust(90, 0, 160, 70);
                    tutorialexplainer.draw(90, 70);
                }else if(ingametimer.tutorial == 17){
                    if(ingametimer.time[2] < 25){
                        heart.value = 3;
                    }else{
                        heart.value = 2;
                    }
                    tutorialscreen.adjust(90, 0, 160, 70);
                    tutorialexplainer.draw(250, 100);
                }else if(ingametimer.tutorial == 18){
                    tutorialscreen.adjust(0, 0, innerWidth, 50);
                    tutorialexplainer.draw(250, 50);
                }else if(ingametimer.tutorial == 19){
                    tutorialscreen.adjust(0, 0, innerWidth, 50);
                    tutorialexplainer.draw(250, 50);
                }else if(ingametimer.tutorial == 20){
                    tutorialscreen.adjust(0, 0, 100, 70);
                    tutorialexplainer.draw(20, 80);
                }else if(ingametimer.tutorial == 21){
                    tutorialscreen.adjust(0, 0, 100, 70);
                    tutorialexplainer.draw(20, 80);
                }else if(ingametimer.tutorial == 22){
                    tutorialscreen.adjust(0, 0, innerWidth, 50);
                    tutorialexplainer.draw(250, 50);
                }else if(ingametimer.tutorial == 23){
                    tutorialscreen.adjust(90, 0, 160, 70);
                    tutorialexplainer.draw(90, 70);
                }else if(ingametimer.tutorial == 24){
                    if(ingametimer.time[2] < 25){
                        heart.value = 3;
                    }else{
                        heart.value = 2;
                    }
                    tutorialscreen.adjust(90, 0, 160, 70);
                    tutorialexplainer.draw(250, 100);
                }else if(ingametimer.tutorial == 25){
                    tutorialscreen.adjust(0, 0, 100, 70);
                    tutorialexplainer.draw(20, 80);
                }else if(ingametimer.tutorial == 26){
                    tutorialscreen.adjust(0, 0, 100, 70);
                    tutorialexplainer.draw(20, 80);
                }else if(ingametimer.tutorial == 27){
                    weapon.firing = false;
                    tutorialscreen.adjust(0, 0, innerWidth, innerHeight);
                }else if(ingametimer.tutorial == 28){
                }else if(ingametimer.tutorial == 29){
                }else if(ingametimer.tutorial == 30){
                }else if(ingametimer.tutorial == 26){
                }else if(ingametimer.tutorial == 20){
                }else if(ingametimer.tutorial == 20){
                }else if(ingametimer.tutorial == 20){
                }else if(ingametimer.tutorial == 13){
                    tutorialscreen.adjust(innerWidth - 325, innerHeight - 100, 325, 100);
                    if(!weapon.loading){
                        ingametimer.tutorial = 7;
                    }
                    gun[0].bullets = 0;
                    maincharacter.x = (innerWidth - maincharacter.width) / 2;
                    ingametimer.tutorial = 12;
                }else if(ingametimer.tutorial == 12){
                    tutorialscreen.adjust(0, 0, innerWidth, innerHeight);
                }
            }*/
}, 20);