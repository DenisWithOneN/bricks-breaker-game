let moveS1X = 200;
let moveS1Y = 200;
let speedS1 = 5;
rayS1 = 100; // 

let sensS1X = 1;
let sensS1Y = 1;

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
  if (moveS1Y < limitTop + rayS1) {
    sensS1Y = 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (moveS1Y > limitBottom - rayS1) {
    sensS1Y = -1; //schimbare de sens
  }
  //verificare limmita Left S1
  if (moveS1X < limitLeft + rayS1) {
    sensS1X = 1; //schimbare de sens
  }
  //verificare limmita Right S1
  if (moveS1X > limitRight - rayS1) {
    sens1X = -1; //schimbare de sens
  }

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  smileyFaceRebe(moveS1X, moveS1Y, rayS1 * 2);
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

