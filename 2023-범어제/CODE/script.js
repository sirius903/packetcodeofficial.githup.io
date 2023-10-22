const tile = [
    {
        name : 'blank',
        text : '□',
        event(){
            //
        }
    },{
        name : 'wall',
        text : '■',
        event(){
            movable = false;
        }
    },{
        name : 'able-goal',
        text : '■',
        event(x, y){
            if(map[y][x].object == 1){
                goal = true;
            }
        }
    },{
        name : 'disable-goal',
        text : '■',
        event(){
            //
        }
    },{
        name : 'trap',
        text : '◬',
        event(x, y){
            if(map[y][x].object == 1){
                move(map, x, y, spawnpoint[0] - x, spawnpoint[1] - y);
            }else{
                map[y][x].object = 0;
            }
            movable = false;
        }
    },{
        name : 'button',
        text : '▣',
        event(x, y){
            if(map[y][x].object == 1){
                move(map, x, y, spawnpoint[0] - x, spawnpoint[1] - y);
            }else{
                map[y][x].object = 0;
            }
            movable = false;
        }
    },{
        name : 'blue-potal',
        text : '◉',
        event(x, y){
            let orange = find(map, 0, 7);
            move(map, x, y, orange[0][0] - x, orange[0][1] - y, true);
            movable = false;
        }
    },{
        name : 'orange-potal',
        text : '◉',
        event(x, y){
            let blue = find(map, 0, 6);
            move(map, x, y, blue[0][0] - x, blue[0][1] - y, true);
            movable = false;
        }
    }
];

const object = [
    {
        name : 'error',
        text : '┼'
    },{
        name : 'main-character',
        text : ':)'
    },{
        name : 'coin',
        text : '©',
        event(x, y, dx, dy){
            remove(map, x + dx, y + dy);
            coin += 1;
        }
    },{
        name : 'key',
        text : '⨡',
        event(x, y, dx, dy){
            remove(map, x + dx, y + dy);
            //
        }
    },{
        name : 'box',
        text : '▥',
        event(x, y, dx, dy){
            move(map, x + dx, y + dy, dx < 0 ? -1 : dx > 0 ? 1 : 0, dy < 0 ? -1 : dy > 0 ? 1 : 0);
        }
    }
];

function new_map(width, height){
    let map = [];
    let low = [];
    for(let i = 0; i < width; i++){
        low.push({tile : 0, object : 0});
    }
    for(let i = 0; i < height; i++){
        map.push(low);
    }
    return JSON.parse(JSON.stringify(map));
}

function fill(map, x, y, dx, dy, tile){
    map.forEach((a, i) => {
        if(y <= i && i <= dy){
            a.fill({tile : tile, object : 0}, x, dx + 1);
        }
    });
    apply(map);
}

function spawn(map, x, y, object){
    map[y][x].object = object;
    apply(map);
}

function find(map, type, n){
    let list = [];
    map.forEach((a, i) =>{
        a.forEach((e, j) => {
            if([e.tile, e.object][type] == n){
                list.push([j, i]);
            }
        })
    })
    return list
}

let movable = true;
function move(map, x, y, dx, dy, able){
    if(!able){
        tile[map[y + dy][x + dx].tile].event(x, y, dx, dy);
    }
    if(movable){
        if(map[y + dy][x + dx].object >= 2){
            object[map[y + dy][x + dx].object].event(x, y, dx, dy);
        }
        if(map[y + dy][x + dx].object == 0){
            map[y + dy][x + dx].object = map[y][x].object;
            map[y][x].object = 0;
        }
    }else{
        movable = true;
    }
    if(goal){
        //Goal!!!
    }
    apply(map);
}

function remove(map, x, y){
    map[y][x].object = 0;
    apply(map);
}

function apply(maps){
    document.getElementById('objects').innerHTML = ``;
    maps.forEach(a => {
        let low = document.createElement('div');
        low.className = 'objects_low';
        a.forEach(e => {
            let object_div = document.createElement('div');
            if(e.object == 0){
                object_div.className = 'object ' + tile[e.tile].name;
                object_div.innerText = tile[e.tile].text;
            }else{
                object_div.className = 'object ' + object[e.object].name;
                object_div.innerText = object[e.object].text;
            }
            low.append(object_div);
        })
        document.getElementById('objects').append(low);
    })
    map = JSON.parse(JSON.stringify(maps));
}

var map = new_map(25, 25);

fill(map, 0, 0, 24, 24, 1);
fill(map, 1, 1, 23, 23, 0);

fill(map, 10, 10, 10, 10, 2)
fill(map, 11, 11, 11, 11, 3)
fill(map, 5, 10, 5, 10, 4)
fill(map, 10, 5, 10, 5, 5)
fill(map, 7, 3, 7, 3, 6)
fill(map, 3, 7, 3, 7, 7)

fill(map, 0, 0, 1, 1, 0)

spawn(map, 1, 1, 1);

spawn(map, 5, 5, 2);

spawn(map, 13, 17, 3)

spawn(map, 5, 7, 4);

/**게임을 시작하고 나서부터 흐른 시간을 저장하는 변수
 * @type {number}
 * @example (time / 20)초
 */
let time = 0;
/**현재 모은 코인의 수를 저장하는 변수
 * @type {number}
 */
let coin = 0;
/**스폰포인트의 위치를 저장하는 변수
 * @type {number[]}
 * @example [a, b] //캐릭터 사망시 a, b에서 부활
 */
let spawnpoint = [1, 1];
/**플레이어가 클리어 조건을 달성했는지를 저장하는 변수
 * @type {boolean}
 * @example 조건 만족 시 true, 조건 불만족 시 false
 */
let goal = false;

setInterval(() => {
    time += 1;
    let times = timer(time);
    document.getElementById('time').innerText = `Time ${times[0]}:${times[1]}.${times[2]}`;
    document.getElementById('coins').innerText = 'Coins ' + String(coin).padStart(2, '0');
}, 50);

function timer(time){
    let times = [];
    times.unshift((time * 5) % 100);
    times.unshift(((time * 5 - times[0]) / 100) % 60);
    times.unshift(Math.floor(time / 1200));
    return times.map(x => String(x).padStart(2, '0'));
}

document.addEventListener("keydown", function(e){
    if(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)){
        find(map, 1, 1).forEach(a => {
            move(map, a[0], a[1], e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : 0, e.key === 'ArrowDown' ? 1 : e.key === 'ArrowUp' ? -1 : 0);
        })
    }
})