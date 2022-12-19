function inbutton(n){
    if(cx > n.x && cy > n.y && cx < n.x + n.width && cy < n.y + n.height){
        return true;
    }else{
        return false;
    }
}

var cx = 0;
var cy = 0;
window.onmousemove = function(e){
    cx = e.pageX;
    cy = e.pageY;
    if(windows.menu){
        if(inmenu.play[0] || inmenu.setskin || inmenu.rank || inmenu.setting){
            if(inbutton(backbutton)){
                canvas.style.cursor = 'pointer';
                backbutton.color = 'skyblue';
            }else{
                backbutton.color = 'gray'
                if(inmenu.play[0]){
                    if(inbutton(startbutton)){
                        canvas.style.cursor = 'pointer';
                        startbutton.color = 'lightblue';
                    }else{
                        startbutton.color = 'gray';
                        if(inmenu.play[2]){
                            specialmods.forEach((e)=>{
                                e.forEach((a)=>{
                                    if(inbutton(a)){
                                        a.color = 'lightblue';
                                    }else{
                                        a.color = 'gray';
                                    }
                                })
                            })
                            let n = 0;
                            specialmods.forEach((e)=>{
                                n += e.filter(a => inbutton(a)).length
                            })
                            if(n){
                                canvas.style.cursor = 'pointer';
                            }else{
                                canvas.style.cursor = 'default';
                            }
                        }else{
                            playbutton.forEach((e)=>{
                                if(inbutton(e)){
                                    e.color = 'lightblue';
                                }else{
                                    e.color = 'gray';
                                }
                            })
                            if(playbutton.filter(e => inbutton(e)).length){
                                canvas.style.cursor = 'pointer';
                            }else{
                                canvas.style.cursor = 'default';
                            }
                        }
                    }
                }else if(inmenu.setskin){
                }else if(inmenu.rank){
                }else if(inmenu.setting){
                    controll.forEach((e)=>{
                        if(inbutton(e)){
                            e.color = 'gray';
                        }else{
                            e.color = 'black';
                        }
                    })
                    if(controll.filter(e=>inbutton(e)).length){
                        canvas.style.cursor = 'pointer';
                    }else{
                        canvas.style.cursor = 'default';
                    }
                }
            }
        }else{
            inmenubutton.forEach((e)=>{
                if(inbutton(e)){
                    e.color = 'lightblue';
                }else{
                    e.color = 'gray';
                }
            })
            if(inmenubutton.filter(e => inbutton(e)).length == 0){
                canvas.style.cursor = 'default';
            }else{
                canvas.style.cursor = 'pointer';
            }
        }
    }else if(windows.game){
        if(ingame.pausing){
            if(pausing.setting || pausing.ranking || pausing.setskin || pausing.shop){
                if(inbutton(backbutton)){
                    canvas.style.cursor = 'pointer';
                    backbutton.color = 'skyblue';
                }else{
                    if(pausing.setting){
                        controll.forEach((e)=>{
                            if(inbutton(e)){
                                e.color = 'gray';
                            }else{
                                e.color = 'black';
                            }
                        })
                        if(controll.filter(e=>inbutton(e)).length){
                            canvas.style.cursor = 'pointer';
                        }else{
                            canvas.style.cursor = 'default';
                        }
                    }else if(pausing.shop){
                        if(inbutton(backbutton)){
                            canvas.style.cursor = 'pointer';
                            backbutton.color = 'lightblue';
                        }else{
                            backbutton.color = 'gray';
                            catalog.forEach((e)=>{
                                if(inbutton(e)){
                                    e.color = '#a1dbffb0';
                                }else{
                                    e.color = '#7bcdffb0';
                                }
                            })
                            if(catalog.filter(e=>inbutton(e)).length == 0){
                                canvas.style.cursor = 'default';
                            }else{
                                canvas.style.cursor = 'pointer';
                            }
                        }
                    }
                }
            }else if(pausing.reconfirm){
                reconfirmbutton.forEach((e)=>{
                    if(inbutton(e)){
                        e.color = 'lightblue';
                    }else{
                        e.color = 'gray';
                    }
                })
                if(reconfirmbutton.filter(e=>inbutton(e)).length == 0){
                    canvas.style.cursor = "default";
                }else{
                    canvas.style.cursor = "pointer";
                }
            }else{
                onpausebutton.forEach((e)=>{
                    if(inbutton(e)){
                        e.color = 'lightblue';
                    }else{
                        e.color = 'gray';
                    }
                })
                if(onpausebutton.filter(e=>inbutton(e)).length == 0){
                    canvas.style.cursor = 'default';
                }else{
                    canvas.style.cursor = 'pointer';
                }
            }
        }else{
            ingamebutton.forEach((e)=>{
                if(inbutton(e)){
                    e.color = '#00000030';
                }else{
                    e.color = '#00000000';
                }
            })
            if(ingamebutton.filter(e=>inbutton(e)).length){
                canvas.style.cursor = 'pointer';
            }else{
                canvas.style.cursor = 'default';
            }
        }
    }else if(windows.score){
    }
}

window.onmousedown = function(){
    if(windows.menu){
        if(inmenu.play[0] || inmenu.setskin || inmenu.rank || inmenu.setting){
            if(inbutton(backbutton)){
                backbutton.color = 'darkgray';
            }else{
                if(inmenu.play[0]){
                    if(inbutton(startbutton)){
                        startbutton.color = 'darkgray';
                    }else if(inmenu.play[2]){
                        specialmods.forEach((e)=>{
                            e.forEach((a)=>{
                                if(inbutton(a)){
                                    a.color = 'darkgray';
                                }
                            })
                        })
                    }else{
                        playbutton.forEach((e)=>{
                            if(inbutton(e)){
                                e.color = 'darkgray';
                            }
                        })
                    }
                }else if(inmenu.setskin){
                }else if(inmenu.rank){
                }else if(inmenu.setting){
                    controll.forEach((e)=>{
                        if(inbutton(e)){
                            e.color = 'darkgray';
                        }
                    })
                }
            }
        }else{
            inmenubutton.forEach((e)=>{
                if(inbutton(e)){
                    e.color = 'darkgray';
                }
            })
        }
    }else if(windows.game){
        if(ingame.pausing){
            if(pausing.setting || pausing.ranking || pausing.setskin || pausing.shop){
                if(inbutton(backbutton)){
                    backbutton.color = 'darkgray';
                }else{
                    if(pausing.setting){
                        controll.forEach((e)=>{
                            if(inbutton(e)){
                                e.color = 'darkgray';
                            }
                        })
                    }else if(pausing.shop){
                        if(inbutton(backbutton)){
                            backbutton.color = 'darkgray';
                        }else{
                            catalog.forEach((e)=>{
                                if(inbutton(e)){
                                    e.color = '#57bfffb0';
                                }
                            })
                        }
                    }
                }
            }else if(pausing.reconfirm){
                reconfirmbutton.forEach((e)=>{
                    if(inbutton(e)){
                        e.color = 'darkgray';
                    }
                })
            }else{
                onpausebutton.forEach((e)=>{
                    if(inbutton(e)){
                        e.color = 'darkgray';
                    }
                })
            }
        }else{
            ingamebutton.forEach((e)=>{
                if(inbutton(e)){
                    e.color = '#00000070';
                }
            })
        }
    }else if(windows.score){
    }
}

window.onmouseup = function(){
    if(windows.menu){
        if(inmenu.play[0] || inmenu.setskin || inmenu.rank || inmenu.setting){
            if(inbutton(backbutton)){
                backbutton.color = 'gray';
                if(inmenu.play[2]){
                    inmenu.play[2] = false;
                }else{
                    inmenu.play[0] = false;
                    inmenu.setskin = false;
                    inmenu.rank = false;
                    inmenu.setting = false;
                }
            }else{
                if(inmenu.play[0]){
                    if(inbutton(startbutton)){
                        startbutton.color = 'gray';
                        if(inmenu.play[2]){
                            if(ingame.type == 'sworder'){
                                change(4,0)
                            }
                            inmenu.play[0] = false;
                            windows.menu = false;
                            windows.game = true;
                        }else{
                            if(inmenu.play[1] == 2){
                                inmenu.play[2] = true;
                                ingame.type = specialmods[inmenu.play[3][0]][inmenu.play[3][1]].type
                                /*sworder[0] = 1*/
                            }else{
                                maincharacter.weapontype = 'gun';
                                change(0, 0);
                                /*
                                if(inmenu.play[1] == 0){
                                    ingametimer.tutorial = 1;
                                }*/
                                inmenu.play[0] = false;
                                windows.menu = false;
                                windows.game = true;
                            }
                        }
                    }else if(inmenu.play[2]){
                        specialmods.forEach((e, i)=>{
                            e.forEach((a, j)=>{
                                if(inbutton(a)){
                                    inmenu.play[3] = [i, j];
                                    ingame.type = a.type;
                                    a.color = 'gray';
                                }
                            })
                        })
                    }else{
                        playbutton.forEach((e, i)=>{
                            if(inbutton(e)){
                                inmenu.play[1] = i;
                                e.color = 'gray';
                                if(i == 1){
                                    ingame.type = 'tutorial';
                                }else if(i == 2){
                                    ingame.type = 'nomalgame';
                                }else if(i == 4){
                                    ingame.type = 'speedrun';
                                }
                            }
                        })
                    }
                }else if(inmenu.setskin){
                }else if(inmenu.rank){
                }else if(inmenu.setting){
                    controll.forEach((e, i)=>{
                        if(inbutton(e)){
                            insetting.controlls = i + 1;
                        }
                    })
                }
            }
        }else{
            inmenubutton.forEach((e, i)=>{
                if(inbutton(e)){
                    e.color = 'gray';
                    if(i == 0){
                        inmenu.play[0] = true;
                    }else if(i == 1){
                        inmenu.setskin = true;
                    }else if(i == 2){
                        inmenu.rank = true;
                    }else if(i == 3){
                        inmenu.setting = true;
                    }
                    title.n = i;
                }
            })
        }
    }else if(windows.game){
        if(ingame.pausing){
            if(pausing.setting || pausing.ranking || pausing.setskin || pausing.shop){
                if(inbutton(backbutton)){
                    backbutton.color = 'gray';
                    pausing.setting = false;
                    insetting.controlls = 0;
                    pausing.ranking = false;
                    pausing.setskin = false;
                    pausing.shop = false;
                }else{
                    if(pausing.setting){
                        controll.forEach((e, i)=>{
                            if(inbutton(e)){
                                insetting.controlls = i + 1;
                            }
                        })
                    }else if(pausing.shop){
                        catalog.forEach((e)=>{
                            if(inbutton(e)){
                                e.color = '#7bcdffb0';
                                e.use();
                            }
                        })
                    }
                }
            }else if(pausing.reconfirm){
                reconfirmbutton.forEach((e, i)=>{
                    if(inbutton(e)){
                        if(i == 0){
                            reset();
                        }else{
                            pausing.reconfirm = false;
                        }
                    }
                })
            }else{
                onpausebutton.forEach((e, i)=>{
                    if(inbutton(e)){
                        if(i == 0){
                            ingame.pausing = false;
                        }else if(i == 1){
                            pausing.setting = true;
                        }else if(i == 2){
                            pausing.ranking = true;
                        }else if(i == 3){
                            pausing.setskin = true;
                        }else if(i == 4){
                            pausing.shop = true;
                        }else if(i == 5){
                            pausing.reconfirm = true;
                        }
                        e.color = 'gray';
                    }
                })
            }
        }else{
            ingamebutton.forEach((e, i)=>{
                if(inbutton(e)){
                    e.color = '#00000000';
                    if(i == 0){
                        ingame.pausing = true;
                    }else if(i == 1){
                        ingame.pausing = true;
                        pausing.setting = true;
                    }else if(i == 2){
                        ingame.pausing = true;
                        pausing.shop = true;
                    }
                }
            })
        }
    }else if(windows.score){
    }

    /*
    if(insetting.wheater){
        if(cx > backbutton.x && cy > backbutton.y && cx < backbutton.x + backbutton.width && cy < backbutton.y + backbutton.height){
            insetting.wheater = false;
        }
    }else{
        }else if(windows.game){
            if(ingametimer.score){
                if(cx > scorebackbutton.x && cy > scorebackbutton.y && cx < scorebackbutton.x + scorebackbutton.width && cy < scorebackbutton.y + scorebackbutton.height){
                    rank.set();
                    reset();
                }
            }else if(ingametimer.pause){
                if(ingametimer.shop || ingametimer.reconfirm){
                    
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
    */
    canvas.style.cursor = "default";
}

document.addEventListener('keydown', function(e){
    if((windows.menu && inmenu.setting) || (windows.game && ingame.pausing && pausing.setting) && insetting.controlls > 0){
        if(e.code.substring(3).length == 1){
            if(insetting.controlls == 1){
                controlls.throwing = e.code;
                controll[0].key = controlls.throwing;
            }else if(insetting.controlls == 2){
                controlls.building = e.code;
                controll[1].key = controlls.building;
            }else if(insetting.controlls == 3){
                controlls.loading = e.code;
                controll[2].key = controlls.loading;
            }else if(insetting.controlls == 4){
                controlls.skip = e.code;
                controll[3].key = controlls.skip;
            }else if(insetting.controlls == 5){
                controlls.goshop = e.code;
                controll[4].key = controlls.goshop;
            }else if(insetting.controlls == 6){
                controlls.ranking = e.code;
                controll[5].key = controlls.ranking;
            }else if(insetting.controlls == 7){
                controlls.retry = e.code;
                controll[6].key = controlls.retry;
            }
            insetting.controlls = 0;
        }
    }
    if(e.code === 'Escape'){
        if(windows.menu){

        }else if(windows.game){
            if(ingame.pausing){
                if(pausing.setting){
                    pausing.setting = false;
                }else if(pausing.ranking){
                    pausing.ranking = false;
                }else if(pausing.setskin){
                    pausing.setskin = false;
                }else if(pausing.shop){
                    pausing.shop = false;
                }else if(pausing.reconfirm){
                    pausing.reconfirm = false;
                }else{
                    ingame.pausing = false;
                }
            }else{
                ingame.pausing = true;
            }
        }else if(windows.score){
        }
    }
    if(e.code === 'ArrowUp'){
        if(windows.menu){
        }else if(windows.game){
            keys[4].color = '#4b4b4b';
            if(!ingame.pausing){
                player.jumppress = true;
            }
        }
    }
    if(e.code === 'ArrowDown'){
        if(windows.game){
            keys[2].color = '#4b4b4b';
            if(!ingame.pausing){
                buildings.filter(e=>e.x < maincharacter.x + maincharacter.width && e.x + e.width > maincharacter.x && e.y <= maincharacter.y + maincharacter.height && e.y + 20 > maincharacter.y + maincharacter.height && e.able).forEach((e)=>{
                    e.walking = false;
                })
            }
        }
    }
    if(e.code === 'ArrowLeft'){
        if(windows.menu){
        }else if(windows.game){
            if(ingame.pausing){
            }else{
                keys[1].color = '#4b4b4b';
                maincharacter.direction = 'left';
                player.move[0] = true;
            }
        }
    }
    if(e.code === 'ArrowRight'){
        if(windows.menu){
        }else if(windows.game){
            if(ingame.pausing){
            }else{
                keys[3].color = '#4b4b4b';
                maincharacter.direction = 'right';
                player.move[1] = true;
            }
        }
    }
    if(e.code === 'Space'){
        if(windows.game){
            keys[0].color = '#4b4b4b';
            if(!ingame.pausing){
                weapon.firing = true;
            }
        }
    }
    if(e.code === controlls.throwing){
        if(windows.game){
            if(!ingame.pausing){
                thrownweapon.throwing = true;
            }
        }
    }
    if(e.code === controlls.building){
        if(windows.game){
            if(!ingame.pausing){
                structure.building = true;
            }
        }
    }
    if(e.code === controlls.loading){
        if(windows.game){
            if(!ingame.pausing){
                weapon.loading = true;
            }
        }
    }
})
document.addEventListener('keyup', function(e){
    if(e.code === 'ArrowUp'){
        if(windows.menu){/*
            if(inmenu.play[0]){
                if(inmenutimer.specailmod){

                }else{
                    if(inmenu.play[1] > 1){
                        inmenu.play[1] -= 1;
                    }
                    if(inmenu.play[1] == 1){
                        ingametimer.type = "tutorial";
                    }else if(inmenu.play[1] == 2){
                        ingametimer.type = "nomalgame";
                    }else if(inmenu.play[1] == 3){
                        ingametimer.type = "specialmod";
                    }
                }
            }*/
        }else if(windows.game){
            keys[4].color = 'gray';
            if(!ingame.pausing){
                player.jumppress = false;
            }
        }
    }
    if(e.code === 'ArrowDown'){
        if(windows.menu){/*
            if(inmenu.play[0]){
                if(inmenutimer.specailmod){
                }else{
                    if(inmenu.play[1] < 4){
                        inmenu.play[1] += 1;
                    }
                    if(inmenu.play[1] == 2){
                        ingametimer.type = "nomalgame";
                    }else if(inmenu.play[1] == 3){
                        ingametimer.type = "specialmod";
                    }else if(inmenu.play[1] == 4){
                        ingametimer.type = "speedrun";
                    } 
                }
            }*/
        }else if(windows.game){
            keys[2].color = 'gray';
        }
    }
    if(e.code === 'ArrowLeft'){
        if(windows.game){
            keys[1].color = 'gray';
            if(!ingame.pausing){
                player.move[0] = false;
            }
        }
    }
    if(e.code === 'ArrowRight'){
        if(windows.game){
            keys[3].color = 'gray';
            if(!ingame.pausing){
                player.move[1] = false;
            }
        }
    }
    if(e.code === 'Space'){
        if(windows.game){
            keys[0].color = 'gray';
            if(!ingame.pausing){
                weapon.firing = false;
            }
        }
    }
    if(e.code === controlls.throwing){
        if(windows.game){
            if(!ingame.pausing){
                thrownweapon.throwing = false;
            }
        }
    }
    if(e.code === controlls.building){
        if(windows.game){
            if(!ingame.pausing){
                structure.building = false;
            }
        }
    }
    if(e.code === controlls.loading){
        if(windows.game){
            if(!ingame.pausing){
                if(maincharacter.weapontype == 'sword' || maincharacter.weapontype == 'shield'){
                    weapon.loading = false;
                    if(ingame.type == 'sworder'){
                        if(maincharacter.weapontype == 'sword'){
                            change(5,0)
                        }else{
                            change(4,0)
                        }
                    }
                }
            }
        }
    }
})


/*
document.addEventListener('keyup',function(event){
    if(event.code === 'Escape'){
        if(windows.menu){/*
            if(inmenu.play[0]){
                if(inmenutimer.specailmod){
                    inmenutimer.specailmod = false;
                }else{
                    inmenu.play[0] = false;
                }
            }else if(inmenutimer.setskin){
                inmenutimer.setskin = false;
            }else if(inmenutimer.achievement){
                inmenutimer.achievement = false;
            }
        }
    }
})*/

document.addEventListener('keyup',function(event){
    if(event.code === 'KeyS'){
        if(windows.game){
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
        if(windows.menu){
            if(inmenu.play[0]){
                if(inmenutimer.specailmod){

                }else{
                    if(inmenu.play[1] == 3){
                        inmenutimer.specailmod = true;
                    }else{
                        if(inmenu.play[1] == 1){
                            ingametimer.tutorial = 1;
                        }
                        inmenu.play[0] = false;
                        windows.menu = false;
                        windows.game = true;
                    }
                }
            }
        }
    }
})



var skillable = 0;