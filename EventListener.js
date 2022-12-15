var cx = 0;
var cy = 0;
window.onmousemove = function(e){
    cx = e.pageX;
    cy = e.pageY;
    if(insetting.wheater){
        if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
            canvas.style.cursor = "pointer";
            backbutton.color = 'skyblue';
        }else{
            backbutton.color = 'gray'
        }
    }else{
        if(inmenutimer.whether){
            if(inmenutimer.play || inmenutimer.setskin || inmenutimer.achievement){
                if(inmenutimer.play){
                    //gamestartmenu
                    if(cx > startui.x && cy > startui.y && cx < startui.x + startui.width && cy < startui.y + startui.height){
                        canvas.style.cursor = "pointer";
                        tutorialbutton.color = 'gray';
                        nomalgamebutton.color = 'gray';
                        specialmodbutton.color = 'gray';
                        speedrunbutton.color = 'gray';
                        startui.color = 'skyblue';
                    }else if(inmenutimer.specailmod){
                        startui.color = 'gray';
                        specialmods.forEach((e)=>{
                            e.forEach((a)=>{
                                if(cx > a.x && cy > a.y && cx < a.x + a.width && cy < a.y + a.height){
                                    canvas.style.cursor = "pointer";
                                    a.color = 'skyblue';
                                    inmenutimer.speicial_b += 1;
                                }else{
                                    a.color = 'gray';
                                }
                            })
                        })
                        if(inmenutimer.speicial_b == 0){
                            canvas.style.cursor = 'default';
                        }
                        inmenutimer.speicial_b = 0;
                    }else{
                        if(cx > tutorialbutton.x && cy > tutorialbutton.y && cx < tutorialbutton.x + tutorialbutton.width && cy < tutorialbutton.y + tutorialbutton.height){
                            canvas.style.cursor = "pointer";
                            tutorialbutton.color = 'skyblue';
                            nomalgamebutton.color = 'gray';
                            specialmodbutton.color = 'gray';
                            speedrunbutton.color = 'gray';
                            startui.color = 'gray';
                        }else if(cx > nomalgamebutton.x && cy > nomalgamebutton.y && cx < nomalgamebutton.x + nomalgamebutton.width && cy < nomalgamebutton.y + nomalgamebutton.height){
                            canvas.style.cursor = "pointer";
                            tutorialbutton.color = 'gray';
                            nomalgamebutton.color = 'skyblue';
                            specialmodbutton.color = 'gray';
                            speedrunbutton.color = 'gray';
                            startui.color = 'gray';
                        }else if(cx > specialmodbutton.x && cy > specialmodbutton.y && cx < specialmodbutton.x + specialmodbutton.width && cy < specialmodbutton.y + specialmodbutton.height){
                            canvas.style.cursor = "pointer";
                            tutorialbutton.color = 'gray';
                            nomalgamebutton.color = 'gray';
                            specialmodbutton.color = 'skyblue';
                            speedrunbutton.color = 'gray';
                            startui.color = 'gray';
                        }else if(cx > speedrunbutton.x && cy > speedrunbutton.y && cx < speedrunbutton.x + speedrunbutton.width && cy < speedrunbutton.y + speedrunbutton.height){
                            canvas.style.cursor = "pointer";
                            tutorialbutton.color = 'gray';
                            nomalgamebutton.color = 'gray';
                            specialmodbutton.color = 'gray';
                            speedrunbutton.color = 'skyblue';
                            startui.color = 'gray';
                        }else{
                            canvas.style.cursor = "default";
                            tutorialbutton.color = 'gray';
                            nomalgamebutton.color = 'gray';
                            specialmodbutton.color = 'gray';
                            speedrunbutton.color = 'gray';
                            startui.color = 'gray';
                        }
                    }
                }else if(inmenutimer.setskin){
                }else if(inmenutimer.achievement){
                }
                if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
                    canvas.style.cursor = "pointer";
                    backbutton.color = 'skyblue';
                }else{
                    backbutton.color = 'gray'
                }
            }else{
                //mainmenu
                if(cx > playbutton.x && cy > playbutton.y && cx < playbutton.x + playbutton.width && cy < playbutton.y + playbutton.height){
                    canvas.style.cursor = "pointer";
                    playbutton.color = 'skyblue';
                    setskinbutton.color = 'gray';
                    achievementbutton.color = 'gray';
                    menusettingbutton.color = 'gray';
                }else if(cx > setskinbutton.x && cy > setskinbutton.y && cx < setskinbutton.x + setskinbutton.width && cy < setskinbutton.y + setskinbutton.height){
                    canvas.style.cursor = "pointer";
                    playbutton.color = 'gray';
                    setskinbutton.color = 'skyblue';
                    achievementbutton.color = 'gray';
                    menusettingbutton.color = 'gray';
                }else if(cx > achievementbutton.x && cy > achievementbutton.y && cx < achievementbutton.x + achievementbutton.width && cy < achievementbutton.y + achievementbutton.height){
                    canvas.style.cursor = "pointer";
                    playbutton.color = 'gray';
                    setskinbutton.color = 'gray';
                    achievementbutton.color = 'skyblue';
                    menusettingbutton.color = 'gray';
                }else if(cx > menusettingbutton.x && cy > menusettingbutton.y && cx < menusettingbutton.x + menusettingbutton.width && cy < menusettingbutton.y + menusettingbutton.height){
                    canvas.style.cursor = "pointer";
                    playbutton.color = 'gray';
                    setskinbutton.color = 'gray';
                    achievementbutton.color = 'gray';
                    menusettingbutton.color = 'skyblue';
                }else{
                    canvas.style.cursor = "default";
                    playbutton.color = 'gray';
                    setskinbutton.color = 'gray';
                    achievementbutton.color = 'gray';
                    menusettingbutton.color = 'gray';
                }
            }
        }else if(ingametimer.whether){
            if(ingametimer.score){
                if(cx > scorebackbutton.x && cy > scorebackbutton.y && cx < scorebackbutton.x + scorebackbutton.width && cy < scorebackbutton.y + scorebackbutton.height){
                    canvas.style.cursor = "pointer";
                    scorebackbutton.color = 'skyblue';
                }else{
                    canvas.style.cursor = "default";
                    scorebackbutton.color = 'gray';
                }
            }else if(ingametimer.pause){
                 if(ingametimer.shop){
                    if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
                        canvas.style.cursor = "pointer";
                        backbutton.color = 'skyblue';
                    }else{
                        canvas.style.cursor = "default";
                        backbutton.color = 'gray';
                    }
                    if(ingametimer.shop){
                        if(cx > shoplist[0].x && cy > shoplist[0].y && cx < shoplist[0].x + shoplist[0].width && cy < shoplist[0].y + shoplist[0].height){
                            canvas.style.cursor = "pointer";
                            shoplist[0].color = '#a1dbffb0';
                            shoplist[1].color = '#7bcdffb0';
                            shoplist[2].color = '#7bcdffb0';
                        }else if(cx > shoplist[1].x && cy > shoplist[1].y && cx < shoplist[1].x + shoplist[1].width && cy < shoplist[1].y + shoplist[1].height){
                            canvas.style.cursor = "pointer";
                            shoplist[0].color = '#7bcdffb0';
                            shoplist[1].color = '#a1dbffb0';
                            shoplist[2].color = '#7bcdffb0';
                        }else if(cx > shoplist[2].x && cy > shoplist[2].y && cx < shoplist[2].x + shoplist[2].width && cy < shoplist[2].y + shoplist[2].height){
                            canvas.style.cursor = "pointer";
                            shoplist[0].color = '#7bcdffb0';
                            shoplist[1].color = '#7bcdffb0';
                            shoplist[2].color = '#a1dbffb0';
                        }else{
                            canvas.style.cursor = "default";
                            shoplist[0].color = '#7bcdffb0';
                            shoplist[1].color = '#7bcdffb0';
                            shoplist[2].color = '#7bcdffb0';
                        }
                    }
                }else if(ingametimer.reconfirm){
                    if(cx > reconfirmbutton.x && cy > reconfirmbutton.y && cx < reconfirmbutton.x + reconfirmbutton.width && cy < reconfirmbutton.y + reconfirmbutton.height){
                        canvas.style.cursor = "pointer";
                        reconfirmbutton.color = 'skyblue';
                        cancelbutton.color = 'gray';
                    }else if(cx > cancelbutton.x && cy > cancelbutton.y && cx < cancelbutton.x + cancelbutton.width && cy < cancelbutton.y + cancelbutton.height){
                        canvas.style.cursor = "pointer";
                        reconfirmbutton.color = 'gray';
                        cancelbutton.color = 'skyblue';
                    }else{
                        canvas.style.cursor = "default";
                        reconfirmbutton.color = 'gray';
                        cancelbutton.color = 'gray';
                    }
                }else{
                    if(cx > gobackbutton.x && cy > gobackbutton.y && cx < gobackbutton.x + gobackbutton.width && cy < gobackbutton.y + gobackbutton.height){
                        canvas.style.cursor = "pointer";
                        gobackbutton.color = 'skyblue';
                        gamesettingbutton.color = 'gray';
                        shopbutton.color = 'gray';
                        menubutton.color = 'gray';
                    }else if(cx > gamesettingbutton.x && cy > gamesettingbutton.y && cx < gamesettingbutton.x + gamesettingbutton.width && cy < gamesettingbutton.y + gamesettingbutton.height){
                        canvas.style.cursor = "pointer";
                        gobackbutton.color = 'gray';
                        gamesettingbutton.color = 'skyblue';
                        shopbutton.color = 'gray';
                        menubutton.color = 'gray';
                    }else if(cx > shopbutton.x && cy > shopbutton.y && cx < shopbutton.x + shopbutton.width && cy < shopbutton.y + shopbutton.height){
                        canvas.style.cursor = "pointer";
                        gobackbutton.color = 'gray';
                        gamesettingbutton.color = 'gray';
                        shopbutton.color = 'skyblue';
                        menubutton.color = 'gray';
                    }else if(cx > menubutton.x && cy > menubutton.y && cx < menubutton.x + menubutton.width && cy < menubutton.y + menubutton.height){
                        canvas.style.cursor = "pointer";
                        gobackbutton.color = 'gray';
                        gamesettingbutton.color = 'gray';
                        shopbutton.color = 'gray';
                        menubutton.color = 'skyblue';
                    }else{
                        canvas.style.cursor = "default";
                        gobackbutton.color = 'gray';
                        gamesettingbutton.color = 'gray';
                        shopbutton.color = 'gray';
                        menubutton.color = 'gray';
                    }
                }
            }else{
                canvas.style.cursor = "default";
            }
        }
    }
}

window.onmousedown = function(){
    if(insetting.wheater){
        if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
            backbutton.color = 'darkgray';
        }
    }else{
        if(inmenutimer.whether){
            if(inmenutimer.play || inmenutimer.setskin || inmenutimer.achievement){
                if(inmenutimer.play){
                    if(cx > startui.x && cy > startui.y && cx < startui.x + startui.width && cy < startui.y + startui.height){
                        startui.color = 'darkgray';
                    }else if(inmenutimer.specailmod){
                        specialmods.forEach((e)=>{
                            e.forEach((a)=>{
                                if(cx > a.x && cy > a.y && cx < a.x + a.width && cy < a.y + a.height){
                                    a.color = 'darkgray';
                                }
                            })
                        })
                    }else{
                        if(cx > tutorialbutton.x && cy > tutorialbutton.y && cx < tutorialbutton.x + tutorialbutton.width && cy < tutorialbutton.y + tutorialbutton.height){
                            tutorialbutton.color = 'darkgray';
                        }else if(cx > nomalgamebutton.x && cy > nomalgamebutton.y && cx < nomalgamebutton.x + nomalgamebutton.width && cy < nomalgamebutton.y + nomalgamebutton.height){
                            nomalgamebutton.color = 'darkgray';
                        }else if(cx > specialmodbutton.x && cy > specialmodbutton.y && cx < specialmodbutton.x + specialmodbutton.width && cy < specialmodbutton.y + specialmodbutton.height){
                            specialmodbutton.color = 'darkgray';
                        }else if(cx > speedrunbutton.x && cy > speedrunbutton.y && cx < speedrunbutton.x + speedrunbutton.width && cy < speedrunbutton.y + speedrunbutton.height){
                            speedrunbutton.color = 'darkgray';
                        }
                    }
                }else if(inmenutimer.setskin){
                }else if(inmenutimer.achievement){
                }else if(inmenutimer.setting){
                }
                if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
                    backbutton.color = 'darkgray';
                }
            }else{
                if(cx > playbutton.x && cy > playbutton.y && cx < playbutton.x + playbutton.width && cy < playbutton.y + playbutton.height){
                    playbutton.color = 'darkgray';
                }else if(cx > setskinbutton.x && cy > setskinbutton.y && cx < setskinbutton.x + setskinbutton.width && cy < setskinbutton.y + setskinbutton.height){
                    setskinbutton.color = 'darkgray';
                }else if(cx > achievementbutton.x && cy > achievementbutton.y && cx < achievementbutton.x + achievementbutton.width && cy < achievementbutton.y + achievementbutton.height){
                    achievementbutton.color = 'darkgray';
                }else if(cx > menusettingbutton.x && cy > menusettingbutton.y && cx < menusettingbutton.x + menusettingbutton.width && cy < menusettingbutton.y + menusettingbutton.height){
                    menusettingbutton.color = 'darkgray';
                }
            }
        }else if(ingametimer.whether){
            if(ingametimer.score){
                if(cx > scorebackbutton.x && cy > scorebackbutton.y && cx < scorebackbutton.x + scorebackbutton.width && cy < scorebackbutton.y + scorebackbutton.height) {
                    scorebackbutton.color = 'darkgray';
                }
            }else if(ingametimer.pause){
                if(ingametimer.shop || ingametimer.reconfirm){
                    if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height) {
                        backbutton.color = 'darkgray';
                    }
                    if(ingametimer.shop){
                        if(cx > shoplist[0].x && cy > shoplist[0].y && cx < shoplist[0].x + shoplist[0].width && cy < shoplist[0].y + shoplist[0].height){
                            shoplist[0].color = '#57bfffb0';
                        }else if(cx > shoplist[1].x && cy > shoplist[1].y && cx < shoplist[1].x + shoplist[1].width && cy < shoplist[1].y + shoplist[1].height){
                            shoplist[1].color = '#57bfffb0';
                        }else if(cx > shoplist[2].x && cy > shoplist[2].y && cx < shoplist[2].x + shoplist[2].width && cy < shoplist[2].y + shoplist[2].height){
                            shoplist[2].color = '#57bfffb0';
                        }
                    }else if(ingametimer.reconfirm){
                        if(cx > reconfirmbutton.x && cy > reconfirmbutton.y && cx < reconfirmbutton.x + reconfirmbutton.width && cy < reconfirmbutton.y + reconfirmbutton.height){
                            reconfirmbutton.color = 'darkgray';
                        }else if(cx > cancelbutton.x && cy > cancelbutton.y && cx < cancelbutton.x + cancelbutton.width && cy < cancelbutton.y + cancelbutton.height){
                            cancelbutton.color = 'darkgray';
                        }
                    }
                }else{
                    if(cx > gobackbutton.x && cy > gobackbutton.y && cx < gobackbutton.x + gobackbutton.width && cy < gobackbutton.y + gobackbutton.height){
                        gobackbutton.color = 'darkgray';
                    }else if(cx > gamesettingbutton.x && cy > gamesettingbutton.y && cx < gamesettingbutton.x + gamesettingbutton.width && cy < gamesettingbutton.y + gamesettingbutton.height){
                        gamesettingbutton.color = 'darkgray';
                    }else if(cx > shopbutton.x && cy > shopbutton.y && cx < shopbutton.x + shopbutton.width && cy < shopbutton.y + shopbutton.height){
                        shopbutton.color = 'darkgray';
                    }else if(cx > menubutton.x && cy > menubutton.y && cx < menubutton.x + menubutton.width && cy < menubutton.y + menubutton.height){
                        menubutton.color = 'darkgray';
                    }
                }
            } 
        }
    }
}

window.onmouseup = function(){
    if(insetting.wheater){
        if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
            insetting.wheater = false;
        }
    }else{
        if(inmenutimer.whether){
            if(inmenutimer.play || inmenutimer.setskin || inmenutimer.achievement){
                if(inmenutimer.play){
                    if(cx > startui.x && cy > startui.y && cx < startui.x + startui.width && cy < startui.y + startui.height){
                        if(inmenutimer.specailmod){
                            if(ingametimer.type == 'sworder'){
                                maincharacter.weapontype = 'sword';
                                change(4,0)
                            }
                            inmenutimer.play = false;
                            inmenutimer.specailmod = false;
                            inmenutimer.whether = false;
                            ingametimer.whether = true;
                        }else{
                            if(inmenutimer.play_n == 3){
                                inmenutimer.specailmod = true;
                                ingametimer.type = specialmods[0][0].type;
                                sworder[0] = 1;
                            }else{
                                maincharacter.weapontype = 'gun';
                                if(inmenutimer.play_n == 1){
                                    ingametimer.tutorial = 1;
                                }
                                inmenutimer.play = false;
                                inmenutimer.whether = false;
                                ingametimer.whether = true;
                            }
                        }
                    }else if(inmenutimer.specailmod){
                        specialmods.forEach((e)=>{
                            e.forEach((a)=>{
                                if(cx > a.x && cy > a.y && cx < a.x + a.width && cy < a.y + a.height){
                                    ingametimer.type = a.type;
                                }
                                a.color = 'gray';
                            })
                        })
                    }else{
                        if(cx > tutorialbutton.x && cy > tutorialbutton.y && cx < tutorialbutton.x + tutorialbutton.width && cy < tutorialbutton.y + tutorialbutton.height){
                            inmenutimer.play_n = 1;
                            ingametimer.type = 'tutorial';
                        }else if(cx > nomalgamebutton.x && cy > nomalgamebutton.y && cx < nomalgamebutton.x + nomalgamebutton.width && cy < nomalgamebutton.y + nomalgamebutton.height){
                            inmenutimer.play_n = 2;
                            ingametimer.type = 'nomalgame';
                        }else if(cx > specialmodbutton.x && cy > specialmodbutton.y && cx < specialmodbutton.x + specialmodbutton.width && cy < specialmodbutton.y + specialmodbutton.height){
                            inmenutimer.play_n = 3;
                        }else if(cx > speedrunbutton.x && cy > speedrunbutton.y && cx < speedrunbutton.x + speedrunbutton.width && cy < speedrunbutton.y + speedrunbutton.height){
                            inmenutimer.play_n = 4;
                            ingametimer.type = 'speedrun';
                        }
                    }
                    tutorialbutton.color = 'gray';
                    nomalgamebutton.color = 'gray';
                    specialmodbutton.color = 'gray';
                    speedrunbutton.color = 'gray';
                    startui.color = 'gray';
                }else if(inmenutimer.setskin){
                }else if(inmenutimer.achievement){
                    localStorage.getItem()
                }
                if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
                    if(!inmenutimer.specailmod){
                        inmenutimer.play = false;
                    }else{
                        inmenutimer.specailmod = false;
                    }
                    inmenutimer.setskin = false;
                    inmenutimer.achievement = false;
                }
                backbutton.color = 'gray';
            }else{
                if(cx > playbutton.x && cy > playbutton.y && cx < playbutton.x + playbutton.width && cy < playbutton.y + playbutton.height){
                    inmenutimer.play = true;
                }else if(cx > setskinbutton.x && cy > setskinbutton.y && cx < setskinbutton.x + setskinbutton.width && cy < setskinbutton.y + setskinbutton.height){
                    inmenutimer.setskin = true;
                }else if(cx > achievementbutton.x && cy > achievementbutton.y && cx < achievementbutton.x + achievementbutton.width && cy < achievementbutton.y + achievementbutton.height){
                    inmenutimer.achievement = true;
                }else if(cx > menusettingbutton.x && cy > menusettingbutton.y && cx < menusettingbutton.x + menusettingbutton.width && cy < menusettingbutton.y + menusettingbutton.height){
                    insetting.wheater = true;
                }
                playbutton.color = 'gray';
                setskinbutton.color = 'gray';
                achievementbutton.color = 'gray';
                menusettingbutton.color = 'gray';
            }
        }else if(ingametimer.whether){
            if(ingametimer.score){
                if(cx > scorebackbutton.x && cy > scorebackbutton.y && cx < scorebackbutton.x + scorebackbutton.width && cy < scorebackbutton.y + scorebackbutton.height){
                    reset();
                }
            }else if(ingametimer.pause){
                if(ingametimer.shop || ingametimer.reconfirm){
                    if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
                        ingametimer.shop = false;
                        ingametimer.reconfirm = false;
                    }
                    if(ingametimer.shop){
                        if(cx > shoplist[0].x && cy > shoplist[0].y && cx < shoplist[0].x + shoplist[0].width && cy < shoplist[0].y + shoplist[0].height){
                            var alert = new Alert;
                            if(shoplist[0].item * 5 <= money.value){
                                alert.text = '성공적으로 구매했습니다.';
                                alerts[1].unshift(alert);
                                thrownweapon.objects += shoplist[0].item;
                                money.value -= shoplist[0].item * 5;
                            }else{
                                alert.color = 'red';
                                alert.text = '구매에 실패했습니다.';
                                alerts[1].unshift(alert);
                            }
                        }else if(cx > shoplist[1].x && cy > shoplist[1].y && cx < shoplist[1].x + shoplist[1].width && cy < shoplist[1].y + shoplist[1].height){
                            var alert = new Alert;
                            alert.color = 'red';
                            alert.text = '사지마';
                            alerts[1].unshift(alert);
                        }else if(cx > shoplist[2].x && cy > shoplist[2].y && cx < shoplist[2].x + shoplist[2].width && cy < shoplist[2].y + shoplist[2].height){
                            var alert = new Alert;
                            if(ingametimer.type == 'sworder'){
                                if(sworder[sworder[0]].value <= money.value){
                                    alert.text = '성공적으로 구매했습니다.';
                                    alerts[1].unshift(alert);
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
                                    alerts[1].unshift(alert);
                                }
                            }else{
                                if(itemlist[shoplist[2].number[0]][shoplist[2].number[1]][1] <= money.value){
                                    if((shoplist[2].number[0] == 2 && itemlist[shoplist[2].number[0]][shoplist[2].number[1]][3] == maincharacter.weapontype) || (shoplist[2].number[0] == 1 && itemlist[shoplist[2].number[0]][shoplist[2].number[1]][3] == maincharacter.throwawaytype)){
                                        alert.text = '이미 보유하고 있습니다.';
                                        alert.color = 'red';
                                    }else{
                                        alert.text = '성공적으로 구매했습니다.';
                                        if(shoplist[2].number[0] == 0){
                                            maincharacter.weapontype = itemlist[shoplist[2].number[0]][shoplist[2].number[1]][3];
                                            gun[0].bullets = gun[itemlist[shoplist[2].number[0]][shoplist[2].number[1]][3]].bullets;
                                        }else if(shoplist[2].number[0] == 1){
                                            maincharacter.throwawaytype = itemlist[shoplist[2].number[0]][shoplist[2].number[1]][3];
                                        }else if(shoplist[2].number[0] == 2){
                                            if(shoplist[2].number[1] == 0){
                                                heart.value += 1;
                                            }
                                        }
                                        money.value -= itemlist[shoplist[2].number[0]][shoplist[2].number[1]][1]
                                    }
                                }else{
                                    alert.color = 'red';
                                    alert.text = '구매에 실패했습니다.';
                                }
                                alerts[1].unshift(alert);
                            }
                        }
                        shoplist[0].color = '#7bcdffb0';
                        shoplist[1].color = '#7bcdffb0';
                        shoplist[2].color = '#7bcdffb0';
                    }else if(ingametimer.reconfirm){
                        if(cx > reconfirmbutton.x && cy > reconfirmbutton.y && cx < reconfirmbutton.x + reconfirmbutton.width && cy < reconfirmbutton.y + reconfirmbutton.height){
                            reset();
                        }else if(cx > cancelbutton.x && cy > cancelbutton.y && cx < cancelbutton.x + cancelbutton.width && cy < cancelbutton.y + cancelbutton.height){
                            ingametimer.reconfirm = false;
                        }
                    }
                    backbutton.color = 'gray';
                }else{
                    if(cx > gobackbutton.x && cy > gobackbutton.y && cx < gobackbutton.x + gobackbutton.width && cy < gobackbutton.y + gobackbutton.height){
                        ingametimer.pause = false;
                    }else if(cx > gamesettingbutton.x && cy > gamesettingbutton.y && cx < gamesettingbutton.x + gamesettingbutton.width && cy < gamesettingbutton.y + gamesettingbutton.height){
                        insetting.wheater = true;
                    }else if(cx > shopbutton.x && cy > shopbutton.y && cx < shopbutton.x + shopbutton.width && cy < shopbutton.y + shopbutton.height){
                        ingametimer.shop = true;
                    }else if(cx > menubutton.x && cy > menubutton.y && cx < menubutton.x + menubutton.width && cy < menubutton.y + menubutton.height){
                        ingametimer.reconfirm = true;
                    }
                    gobackbutton.color = 'gray';
                    gamesettingbutton.color = 'gray';
                    shopbutton.color = 'gray';
                    menubutton.color = 'gray';
                }
            }else if(ingametimer.type == 'tutorial'){
                if(ingametimer.tutorial == 1){
                    ingametimer.tutorial = 2;
                }else if(ingametimer.tutorial == 2){
                    ingametimer.tutorial = 3;
                }else if(ingametimer.tutorial == 3){
                    ingametimer.tutorial = 4;
                }else if(ingametimer.tutorial == 4){
                    ingametimer.tutorial = 5;
                }else if(ingametimer.tutorial == 7){
                    ingametimer.tutorial = 8;
                }else if(ingametimer.tutorial == 8){
                    ingametimer.tutorial = 9;
                }else if(ingametimer.tutorial == 13){
                    ingametimer.tutorial = 14;
                }else if(ingametimer.tutorial == 16){
                    ingametimer.tutorial = 17;
                }else if(ingametimer.tutorial == 17){
                    ingametimer.tutorial = 18;
                    heart.value = 2;
                }else if(ingametimer.tutorial == 18){
                    gun[0].bullets = 12;
                    maincharacter.x = 250;
                    maincharacter.y = innerHeight - 350;
                    maincharacter.direction = 'right';
                    ingametimer.firing = true;
                    ingametimer.tutorial = 19;
                }else if(ingametimer.tutorial == 19){
                    ingametimer.tutorial = 20;
                }else if(ingametimer.tutorial == 20){
                    gun[0].bullets = 30;
                    maincharacter.x = 250;
                    maincharacter.y = innerHeight - 350;
                    maincharacter.direction = 'right';
                    maincharacter.weapontype = 4;
                    ingametimer.firing = true;
                    ingametimer.tutorial = 21;
                }else if(ingametimer.tutorial == 21){
                    ingametimer.tutorial = 27;
                }else if(ingametimer.tutorial == 22){
                    ingametimer.tutorial = 23;
                }else if(ingametimer.tutorial == 23){
                    ingametimer.tutorial = 24;
                }else if(ingametimer.tutorial == 24){
                    ingametimer.tutorial = 25;
                    heart.value = 2;
                }else if(ingametimer.tutorial == 25){
                    gun[0].bullets = 30;
                    maincharacter.x = 250;
                    maincharacter.y = innerHeight - 350;
                    maincharacter.direction = 'right';
                    maincharacter.weapontype = 4;
                    ingametimer.firing = true;
                    ingametimer.tutorial = 26;
                }else if(ingametimer.tutorial == 26){
                    ingametimer.tutorial = 27;
                }
            }
        }
    }
    canvas.style.cursor = "default";
}

document.addEventListener('keyup',function(event){
    if(event.code === 'Escape'){
        if(inmenutimer.whether){
            if(inmenutimer.play){
                if(inmenutimer.specailmod){
                    inmenutimer.specailmod = false;
                }else{
                    inmenutimer.play = false;
                }
            }else if(inmenutimer.setskin){
                inmenutimer.setskin = false;
            }else if(inmenutimer.achievement){
                inmenutimer.achievement = false;
            }
        }else if(ingametimer.whether){
            if(ingametimer.type != "speedrun"){
                if(ingametimer.pause){
                    if(ingametimer.shop){
                        ingametimer.shop = false;
                    }else{
                        ingametimer.pause = false;
                    }
                }else{
                    ingametimer.pause = true;
                }
            }
        }
    }
})


document.addEventListener('keydown',function(event){
    if(event.code === 'ArrowUp'){
        if(ingametimer.whether){
            if(ingametimer.type == 'tutorial'){
                if(ingametimer.tutorial == 6){
                    ingametimer.tutorial = 7;
                }
            }
            ingametimer.jumppress = true;
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'ArrowUp'){
        if(inmenutimer.whether){
            if(inmenutimer.play){
                if(inmenutimer.specailmod){

                }else{
                    if(inmenutimer.play_n > 1){
                        inmenutimer.play_n -= 1;
                    }
                    if(inmenutimer.play_n == 1){
                        ingametimer.type = "tutorial";
                    }else if(inmenutimer.play_n == 2){
                        ingametimer.type = "nomalgame";
                    }else if(inmenutimer.play_n == 3){
                        ingametimer.type = "specialmod";
                    }
                }
            }
        }else if(ingametimer.whether){
            ingametimer.jumppress = false;
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'ArrowDown'){
        ingametimer.onbuilding = 0;
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'ArrowDown'){
        if(inmenutimer.whether){
            if(inmenutimer.play){
                if(inmenutimer.specailmod){
                }else{
                    if(inmenutimer.play_n < 4){
                        inmenutimer.play_n += 1;
                    }
                    if(inmenutimer.play_n == 2){
                        ingametimer.type = "nomalgame";
                    }else if(inmenutimer.play_n == 3){
                        ingametimer.type = "specialmod";
                    }else if(inmenutimer.play_n == 4){
                        ingametimer.type = "speedrun";
                    } 
                }
            }
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'ArrowRight'){
        if(ingametimer.whether){
            if(ingametimer.type == 'tutorial'){
                if(ingametimer.tutorial == 5){
                    ingametimer.tutorial = 6;
                }
                ingametimer.right = true;
            }else{
                ingametimer.right = true;
            }
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'ArrowRight'){
        if(ingametimer.whether){
            ingametimer.right = false;
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'ArrowLeft'){
        if(ingametimer.whether){
            if(ingametimer.type == 'tutorial'){
                if(ingametimer.tutorial == 5){
                    ingametimer.tutorial = 6;
                }
                ingametimer.left = true;
            }else{
                ingametimer.left = true;
            }
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'ArrowLeft'){
        if(ingametimer.whether){
            ingametimer.left = false;
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'Space'){
        if(ingametimer.tutorial >= 8 || ingametimer.tutorial == 0){
            weapon.firing = true;
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'Space'){
        if(ingametimer.tutorial != 18){
            weapon.firing = false;
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'KeyC'){
        if(ingametimer.pause == false){
            if(ingametimer.tutorial >= 9 || ingametimer.tutorial == 0){
                weapon.loading = true;
            }
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'KeyC'){
        if(ingametimer.pause == false){
            if(maincharacter.weapontype == 'sword' || maincharacter.weapontype == 'shield'){
                weapon.loading = false;
                if(ingametimer.type == 'sworder'){
                    if(maincharacter.weapontype == 'sword'){
                        maincharacter.weapontype = 'shield';
                        change(5,0)
                    }else{
                        maincharacter.weapontype = 'sword';
                        change(4,0)
                    }
                }
            }
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'KeyX'){
        if(ingametimer.pause == false){
            ingametimer.buildpress = true;
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'KeyX'){
        if(ingametimer.pause == false){
            ingametimer.buildpress = false;
            ingametimer.building = true;
        }
    }
})

document.addEventListener('keydown',function(event){
    if(event.code === 'KeyZ'){
        if(ingametimer.pause == false){
            thrownweapon.throwing = true;
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'KeyZ'){
        if(ingametimer.pause == false){
            thrownweapon.throwing = false;
        }
    }
})

document.addEventListener('keyup',function(event){
    if(event.code === 'KeyS'){
        if(ingametimer.whether){
            if(ingametimer.shop){
                ingametimer.pause = false;
                ingametimer.shop = false;
            }else{
                ingametimer.pause = true;
                ingametimer.shop = true;
            }
        }
    }
})

document.addEventListener('keydown',function(event){
    if (event.code === 'Digit3'){
        if(currenttype == 1){
            if(skillexplaination.n == 3 && skillable){
                if(agi.value > 0){
                    skills[skillexplaination.n].use();
                    skillable = false;
                }
            }else{
                skillexplaination.n = 3;
                skillable = true;
            }
        }
    }
})

document.addEventListener('keydown',function(event){
    if (event.code === 'Digit4'){
        if(currenttype == 1){
            if(skillexplaination.n == 4 && skillable){
                if(agi.value > 0){
                    skills[skillexplaination.n].use();
                    skillable = false;
                }
            }else{
                skillexplaination.n = 4;
                skillable = true;
            }
        }
    }
})


document.addEventListener('keyup',function(event){
    if (event.code === 'Enter'){
        if(inmenutimer.whether){
            if(inmenutimer.play){
                if(inmenutimer.specailmod){

                }else{
                    if(inmenutimer.play_n == 3){
                        inmenutimer.specailmod = true;
                    }else{
                        if(inmenutimer.play_n == 1){
                            ingametimer.tutorial = 1;
                        }
                        inmenutimer.play = false;
                        inmenutimer.whether = false;
                        ingametimer.whether = true;
                    }
                }
            }
        }
    }
})



var skillable = 0;