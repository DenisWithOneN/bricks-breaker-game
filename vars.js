let bricks = [];

const SmileFaceDenis = {

    x: 200,
    y: 100,
    speed: 5,
    ray: 20,
    sensX: 1,
    sensY: 1,
}

const SmileFaceRebe = {

    x: 300,
    y: 400,
    speed: 3,
    ray: 50,
    sensX: 2,
    sensY: 2,
}


const BottomBar = {
    color: "#262626",
    width: 120,
    height: 15,
    bottomYPosition: 580,
    x1: undefined, // intre ce x-uri este bottom bar-ul
    x2: undefined,
}


let limitTop = 0;
let limitBottom = 600;
let limitLeft = 0;
let limitRight = 600;