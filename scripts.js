function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("blue");

    SmileFaceDenis.sensX = senseSmileyFaceCheckX(SmileFaceDenis.x,  SmileFaceDenis.ray, SmileFaceDenis.sensX);
    SmileFaceDenis.sensY = senseSmileyFaceCheckY(SmileFaceDenis.y,  SmileFaceDenis.ray, SmileFaceDenis.sensY);
    SmileFaceDenis.sensY = bottomBarCheck(SmileFaceDenis);

    
    sensS2X = senseSmileyFaceCheckX(moveS2X,  rayS2, sensS2X);
    sensS2Y =senseSmileyFaceCheckY(moveS2Y,  rayS2, sensS2Y);
  
    SmileFaceDenis.x += SmileFaceDenis.sensX * SmileFaceDenis.speed;
    SmileFaceDenis.y += SmileFaceDenis.sensY * SmileFaceDenis.speed;
    
  
    moveS2X += sensS2X * speedS2;
    moveS2Y += sensS2Y * speedS2;
    
    smileyFaceDenis(SmileFaceDenis.x, SmileFaceDenis.y, SmileFaceDenis.ray * 2);
    smileyFaceRebe(moveS2X, moveS2Y, rayS2 *2);
    bottomBar();
  }