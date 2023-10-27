var fps = 50;

var gravity = 9.8;// m/s^2
var meter = 150;
var velocity = 7;// m/s

var spring = {
    x : 0,
    y : 1,
    width : 1,
    height : 1,
    color : 'white'
}
var line = {
    start : 3,
    type : 2,
    list(x){
        return [x, Math.pow(x, 2), Math.pow(x, 0.5)][this.type];
    },
    derivative(x){
        return [1, 2 * x, 0.5 / Math.pow(x, 0.5)][this.type];
    }
}
var marble = {
    x : 1.25,
    y : 0.5,
    radius : 0.25,
    velocity : 0,
    color : 'white',
    m : 0.05 //kg
}
var maximum = 0;