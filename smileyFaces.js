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


function smileyFaceDenis(x, y, d) {

  // cap
  fill("#b8e4ff")
  circle(x, y, d);
  fill("#ffffff")

  // ochii
  circle(x - d*0.20, y - d*0.10, d*0.2);
  circle(x + d*0.20, y - d*0.10, d*0.2);


      // iris
      fill("#000000")
      circle(x+d*0.20, y-d*0.10, d*0.08)
      circle(x-d*0.20, y-d*0.10, d*0.08)

  // ochelari
  fill('rgba(0,255,0, 0)');
  line(x, y, x + d * 0.1, y)
  
  // line(200, 185, 155, 135)
  circle(x+d*0.20, y-d*0.10, d*0.35)
  circle(x-d*0.20, y-d*0.10, d*0.35)


  // mouth
  fill("#8cafff")
  arc(x-d*0.02, y+d*0.13, d * 0.35, d * 0.5, d* 0.3, Math.PI)
  
   // limba
  fill("#175eff")
  arc(x-2, y+d*0.30, 23, 15, 0.3, Math.PI)
}

function senseSmileyFaceCheckY(y, ray, s) {
  if (y < limitTop + ray) {
     return 1; //schimbare de sens
  }
  //verificare limmita Bottom S1
  if (y > limitBottom - ray) {
    return -1; //schimbare de sens
  }
  
  return s;
}


function senseSmileyFaceCheckX(x, ray, s) {
//verificare limmita Left S1
if (x < limitLeft + ray) {
return 1; //schimbare de sens
}
//verificare limmita Right S1
if (x > limitRight - ray) {
return -1; //schimbare de sens
}
return s;

}
