let moveS1X = 300;
let moveS1Y = 900;
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
    sensS1X = -1; //schimbare de sens
  }

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  smileyFaceDenis(moveS1X, moveS1Y, rayS1 * 2);
}

function smileyFaceDenis(x, y, d) {

    // cap
    fill("#b8e4ff")
    circle(x, y, d)
    fill("#ffffff")

    
    // ochii
    circle(x+20, y-10, 20)
    circle(x-20, y-10, 20)

        // iris
        fill("#000000")
        circle(x+20, y-10, 7)
        circle(x-20, y-10, 7)

    // ochelari
    fill('rgba(0,255,0, 0)');
    line(x, y, x, y)
    // line(200, 185, 155, 135)
    circle(x+20, y-10, 35)
    circle(x-20, y-10, 35)


    // mouth
    fill("#8cafff")
    arc(x-2, y+13, 35, 50, 0.3, Math.PI)

    // limba
    fill("#175eff")
    arc(x-2, y+30, 23, 15, 0.3, Math.PI)
    
}