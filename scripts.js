let moveS2X = 200;
let moveS2Y = 200;
let speedS2 = 5;
rayS2 = 100; // 

let sensS2X = 1;
let sensS2Y = 1;

let limitTop = 0;
let limitBottom = 400;
let limitLeft = 0;
let limitRight = 400;


function setup() {

    createCanvas(400, 400)
}

function draw() {
  background("#0000ff");
  

  //verificare limita Top S1
  if (moveS2Y < limitTop + rayS2) {
    sensS2Y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS2Y > limitBottom - rayS2) {
    sensS2Y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS2X < limitLeft + rayS2) {
    sensS2X = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS2X > limitRight - rayS2) {
    sensS2X = -1; //schimbare de sens
  }

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y * speedS2;

  smileyFaceRebe(moveS2X, moveS2Y, rayS2 * 2);
}


function smileyFaceRebe(x, y, d) {

    fill("#0072b2");
    circle(x, y, d); 
    fill("#ffffff");
        circle(x-20, y-15, 20); 
        circle(x+20, y-15, 20); 

        //iris
    fill("#6f1414"); 
    circle(x+22, y-17, 7);
    circle(x-12, y-17, 7); 
       
    //mouth
    fill("#cb7b97"); 
    arc(x, y+10, 40, 30, 0, Math.PI); 

}

