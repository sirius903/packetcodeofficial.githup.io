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
        playbutton.adjust();
        setskinbutton.adjust();
        achievementbutton.adjust();
        menusettingbutton.adjust();
        backbutton.adjust();
        playtitle.adjust();
        playbackground.adjust();
        tutorialbutton.adjust();
        nomalgamebutton.adjust();
        specialmodbutton.adjust();
        speedrunbutton.adjust();
        specialmods.forEach((e)=>{
            e.forEach((a)=>{
                a.adjust();
            })
        })
        startui.adjust();
        gameex.adjust();

        screen.adjust();
        gamewindow.adjust();
        shoplist[0].adjust();
        shoplist[1].adjust();
        shoplist[2].adjust();

        time.adjust();
        waveshower.adjust();
        ground.adjust();
        throwingbutton.adjust();
        buildingbutton.adjust();
        loadingbutton.adjust();
        
        gobackbutton.adjust();
        gamesettingbutton.adjust();
        achievebutton.adjust();
        skinbutton.adjust();
        shopbutton.adjust();
        menubutton.adjust();
        reconfirmbutton.adjust();
        cancelbutton.adjust();
    }

    if(inmenutimer.whether){
        if(inmenutimer.play){
            backbutton.draw();
            if(inmenutimer.specailmod){
                specialmods.forEach((e)=>{
                    e.forEach((a)=>{
                        a.draw();
                    })
                })
            }else{
                playbackground.draw();
                tutorialbutton.draw();
                nomalgamebutton.draw();
                specialmodbutton.draw();
                speedrunbutton.draw();
            }
            playtitle.draw();
            startui.draw();
            gameex.draw();
        }else if(inmenutimer.setskin){
            backbutton.draw();
        }else if(inmenutimer.achievement){
            backbutton.draw();
        }else{
            background.draw();
            playbutton.draw();
            setskinbutton.draw();
            achievementbutton.draw();
            menusettingbutton.draw();
            setting();
        }
    }else if(ingametimer.whether){
        if(ingametimer.score){
            if(score.score[1][0] != "♥ x" + heart.maxvalue){
                score.score[1][0] = "♥ x" + heart.maxvalue;
            }
            if(score.score[1][1] != "♥ x" + heart.value){
                score.score[1][1] = "♥ x" + heart.value;
            }
            if(score.score[1][2] != ingametimer.time[0] + ":" + ingametimer.time[1] + "." + ingametimer.time[2]){
                score.score[1][2] = ingametimer.time[0] + ":" + ingametimer.time[1] + "." + ingametimer.time[2];
            }
            배경이요.draw();
            score.show();
            scorebackbutton.draw();
        }else{
            //배경 그리기
            background.draw();
            //UI 그리기
            ground.draw();
            time.draw();
            //스텟 보여주기
            exp.show();
            level.show();
            //구조물 그리기
            buildings.forEach((e)=>{
                e.draw();
            })
            //주인공 그리기
            maincharacter.draw();
        
    
            if(ingametimer.tutorial == 0 || ingametimer.tutorial >= 7){
                weapon.draw();
                if(ingametimer.tutorial != 7 && ingametimer.tutorial != 8){
                    loadingbutton.draw();
                    if(ingametimer.tutorial == 0 || (ingametimer.tutorial >= 16 && ingametimer.tutorial != 18)){
                        heart.show();
                    }
                }
            }
            
            money.show();
            
            
            
            
            //UI 그리기
            throwingbutton.draw();
            buildingbutton.draw();
            thrownweapon.draw();
            waveshower.draw();
            
                //적 그리기
                enemies.forEach((e, i , a)=>{
                    if(e.y + e.height > ground.y){
                        e.y = ground.y - e.height;
                        e.falling = 0; 
                    }else if(e.y + e.height < ground.y){
                        e.falling += 1;
                        e.y += e.falling * e.falling - (e.falling - 1) * (e.falling - 1);
                    }

                    bullets.forEach((b1, n1)=>{
                        b1.forEach((b2, n)=>{
                            if(e.x <= b2.x + b2.width && e.x + e.width >= b2.x && e.y <= b2.y + b2.height && e.y + e.height >= b2.y){
                                e.hp -= weapon.present[1];
                                score.score[1][4] += weapon.present[1];
                                e.knockback = weapon.present[2] * ((n1 * 2) - 1);
                                b1.splice(n, 1);
                            }
                        })
                    })

                    objects.forEach((o1, n1)=>{
                        o1.forEach((o2, n)=>{
                            if(e.x <= o2.x + o2.width && e.x + e.width >= o2.x && e.y <= o2.y + o2.height && e.y + e.height >= o2.y){
                                e.hp -= thrownweapon.present[1];
                                score.score[1][4] += thrownweapon.present[1];
                                e.knockback = thrownweapon.present[2] * ((n1 * 2) - 1);
                                o1.splice(n, 1);
                            }
                        })
                    })

                    if(maincharacter.weapontype == 'sword' || maincharacter.weapontype == 'shield'){
                        if(weapon.fire > 0 && weapon.fire < 15){
                            if(e.x <= weapon.present[6] + weapon.present[8] && e.x + e.width >= weapon.present[6] && e.y <= maincharacter.y + weapon.present[7] + weapon.present[9] && e.y + e.height >= maincharacter.y + weapon.present[7] && e.sword){
                                if(e.shield > 0){
                                    e.hp -= weapon.present[1] * 3 * e.combo;
                                    score.score[1][4] += weapon.present[1] * 3 * e.combo;
                                    e.combo += 1;
                                    e.shield += 20
                                }else{
                                    e.hp -= weapon.present[1];
                                    score.score[1][4] += weapon.present[1];
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

                    if(e.hp <= 0){
                        score.score[1][3] += 1;
                        e.exp();
                        a.splice(i, 1);
                    }
    
                    if(ingametimer.pause == false){
                        if(e.x > maincharacter.x + maincharacter.width){
                            e.x -= e.speed;
                        }else if(e.x + e.width < maincharacter.x){
                            e.x += e.speed;
                        }else if(e.x + e.width >= maincharacter.x && e.x <= maincharacter.x + maincharacter.width && e.y <= maincharacter.y + maincharacter.height && e.y + e.height >= maincharacter.y){
                            if(ingametimer.invincibility == false){
                                if(e.shield <= 0){
                                    heart.value -=1
                                    score.score[1][5] += 1;
                                    ingametimer.invincibility = true;
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
            
                //경험치
                if(ingametimer.exp == 1){
                    if(ingametimer.exptimer < 10){
                        if(ingametimer.exptimer == 0){
                            exp.plus = exp.value - exp.showingvalue;
                        }
                        exp.showingvalue += exp.plus / 10;
                        ingametimer.exptimer += 1;
                    }else if(ingametimer.exptimer >= 10){
                        exp.showingvalue = exp.value;
                        ingametimer.exptimer = 0;
                        ingametimer.exp = 0;
                        exp.value = Math.round(exp.value);
                    }
                }else if(ingametimer.exp >= 2){
                    ingametimer.exp = 1;
                    ingametimer.exptimer = 0;
                }
            
                //레벨
                if(exp.value >= limitexp[level.value]){
                    exp.value -= limitexp[level.value];
                    exp.showingvalue -= limitexp[level.value];
                    level.value += 1;
                    heart.value += 1;
                }
            
    
    
    
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
            }
    
    
            if(heart.value <= 0){
                reset();
            }
    
    
    
    
            //일시정지
            if(ingametimer.pause){
                screen.draw();
                setting();
                if(!insetting.wheater){
                    if(ingametimer.shop){
                        shop();
                        alerts[1].forEach((e, i, a)=>{
                            e.draw();
                            a[i].y = 20 + 100 * i
                            e.timer -= 1;
                            if(e.timer <= 0){
                                a.splice(i, 1)
                            }
                        })
                    }else if(ingametimer.reconfirm){
                        reconfirmbutton.draw();
                        cancelbutton.draw();
                    }else{
                        gobackbutton.draw();
                        gamesettingbutton.draw();
                        achievebutton.draw();
                        skinbutton.draw();
                        shopbutton.draw();
                        menubutton.draw();
                    }
                }
            }else{
                //시간
                ingametimer.time[2] += 1;
                if(ingametimer.time[2] >= 50){
                    ingametimer.time[1] += 1;
                    ingametimer.time[2] = 0;
                }
                if(ingametimer.time[1] >= 60){
                    ingametimer.time[0] += 1;
                    ingametimer.time[1] = 0;
                }
    
                //좌우이동
                if(ingametimer.tutorial == 0 || ingametimer.tutorial >= 6){
                    if(ingametimer.right == true && ingametimer.left == false){
                        maincharacter.x += maincharacter.speed;
                        maincharacter.direction = "right";
                        maincharacter.src = "images/game/characters/maincharacter_right.png";
                    }
                    if(ingametimer.left == true && ingametimer.right == false){
                        maincharacter.x -= maincharacter.speed;
                        maincharacter.direction = "left";
                        maincharacter.src = "images/game/characters/maincharacter_left.png";
                    }
                }
                
                //점프
                if(ingametimer.tutorial == 0 || ingametimer.tutorial >= 6){
                    if(ingametimer.jump == true){
                        ingametimer.jumptimer += 1;
                        maincharacter.y += ingametimer.jumptimer * 2 - 30;
                    }else if(maincharacter.y + maincharacter.height < ground.y){
                        if(ingametimer.onbuilding <= 0){
                            ingametimer.jumptimer += 1;
                            maincharacter.y += ingametimer.jumptimer * 2
                        }
                        ingametimer.onbuilding = 0;
                    }
                }
        
                
                //무적타임
                if(ingametimer.invincibility == true){
                    if(ingametimer.invincibilitytimer >= 250){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '.png';
                        ingametimer.invincibility = false;
                    }
                    if(heart.previousvalue != heart.value + 1){
                        heart.value = heart.previousvalue - 1;
                    }
                    if(ingametimer.invincibilitytimer % 50 < 5){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 10){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '2.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 15){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '3.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 20){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '4.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 25){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '5.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 30){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '6.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 35){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '5.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 40){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '4.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 45){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '3.png';
                    }else if(ingametimer.invincibilitytimer % 50 < 50){
                        maincharacter.src = 'images/game/characters/maincharacter_' + maincharacter.direction + '2.png';
                    }
                    ingametimer.invincibilitytimer += 1;
                }else{
                    heart.previousvalue = heart.value
                    ingametimer.invincibilitytimer = 0;
                    maincharacter.color = 'lime'
                }

                if(maincharacter.weapontype == 'gun'){
                    if(weapon.loading){
                        if(weapon.load >= weapon.present[6]){
                            weapon.bullets = weapon.present[5];
                            weapon.loading = false;
                            if(ingametimer.tutorial == 9){
                                ingametimer.tutorial = 10;
                            }
                        }
                        weapon.load += 1;
                    }else{
                        weapon.load = 0;
                    }
                }

                fire();
            
                //총알 이동
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


                build();
            
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
            
                throwweapon();
            
            
                if(ingametimer.jumppress == true && (ingametimer.onbuilding > 0 || maincharacter.y + maincharacter.height == ground.y)){
                    ingametimer.jump = true;
                }
            
            
                buildings.forEach((e)=>{
                    if(e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.y <= maincharacter.y + maincharacter.height && e.y > maincharacter.y){
                        if(ingametimer.jump == false){
                            ingametimer.onbuilding += 1;
                        }else if(ingametimer.jumptimer > 15){
                            maincharacter.y = e.y - maincharacter.height;
                            ingametimer.jumptimer = 0;
                            if(ingametimer.jump == true){
                                if(ingametimer.jumppress == false){
                                    ingametimer.jump = false;
                                }
                            }
                        }
                    }
                })
        
                //땅과 충돌
                if(maincharacter.y + maincharacter.height >= ground.y){
                    ingametimer.jumptimer = 0;
                    maincharacter.y = ground.y - maincharacter.height;
                    if(ingametimer.jump == true){
                        if(ingametimer.jumppress == false){
                            ingametimer.jump = false;
                        }
                    }
                }
            
                if(maincharacter.x <= 0){
                    maincharacter.x = 0;
                }else if(maincharacter.x >= innerWidth - maincharacter.width){
                    maincharacter.x = innerWidth - maincharacter.width
                }
            
            
                //웨이브
                if(ingametimer.tutorial == 0){
                    if(ingametimer.wave == 0){
                        if(ingametimer.time[1] >= 3){
                            ingametimer.wave = 1;
                            ingametimer.summon = true;
                        }
                    }else{
                        if(ingametimer.summon){
                            nomalgamewaves[ingametimer.wave].forEach((e)=>{
                                summon(e);
                            })
                            ingametimer.summon = false;
                        }
                        if(enemies.length == 0){
                            if(nomalgamewaves.length == ingametimer.wave + 1){
                                ingametimer.score = true;
                                ingametimer.end = true;
                            }
                            if(ingametimer.dowave === false){
                                money.value += 10;
                                resetshop();
                                ingametimer.dowave = 0;
                            }else{
                                if(ingametimer.dowave < 150){
                                    ingametimer.dowave += 1;
                                }else if(ingametimer.dowave >= 150){
                                    ingametimer.wave += 1;
                                    ingametimer.dowave = false;
                                    ingametimer.summon = true;
                                }
                            }
                        }
                    }
                }else if(ingametimer.tutorial >= 14){
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
                            }
                        }*/
                    }
                }
            }
        }
    }
}, 20);