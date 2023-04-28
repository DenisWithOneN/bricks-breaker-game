function setup() {
    createCanvas(600, 600);
    initBricks();
  }
  
  function draw() {
    background("blue");

    SmileFaceDenis.sensX = senseSmileyFaceCheckX(SmileFaceDenis.x,  SmileFaceDenis.ray, SmileFaceDenis.sensX);
    SmileFaceDenis.sensY = senseSmileyFaceCheckY(SmileFaceDenis.y,  SmileFaceDenis.ray, SmileFaceDenis.sensY);
    SmileFaceDenis.sensY = bottomBarCheck(SmileFaceDenis);
    SmileFaceDenis.sensY = bricksCheck(SmileFaceDenis);
    

    
    SmileFaceRebe.sensX =  senseSmileyFaceCheckX(SmileFaceRebe.x,  SmileFaceRebe.ray, SmileFaceRebe.sensX);
    SmileFaceRebe.sensY =  senseSmileyFaceCheckY(SmileFaceRebe.y,  SmileFaceRebe.ray, SmileFaceRebe.sensY);
  
    SmileFaceDenis.x += SmileFaceDenis.sensX * SmileFaceDenis.speed;
    SmileFaceDenis.y += SmileFaceDenis.sensY * SmileFaceDenis.speed;
    
  
    SmileFaceRebe.x += SmileFaceRebe.sensX * SmileFaceRebe.speed;
    SmileFaceRebe.y += SmileFaceRebe.sensY * SmileFaceRebe.speed;
    
    smileyFaceDenis(SmileFaceDenis.x, SmileFaceDenis.y, SmileFaceDenis.ray * 2);
    smileyFaceRebe (SmileFaceRebe.x,  SmileFaceRebe.y,   SmileFaceRebe.ray * 2);

    bottomBar();
    showBricks();
  }