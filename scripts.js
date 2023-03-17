function setup() {

    createCanvas(400, 400)
}

function draw() {
    // 0,1,2,3 ... a,b,c,d,e,f HEXA
    // RGB - ** ** **
    // red - ff 00 00

    background("#6768d0")

    smileyFaceRebe(); 
    
}


function smileyFaceRebe() {

    fill("#0072b2");
    circle(200, 200, 100); 
    fill("#ffffff");
        circle(180, 185, 20); 
        circle(220, 185, 20); 

        //iris
    fill("#6f1414"); 
    circle(222, 183, 7);
    circle(178, 183, 7); 
       
    //mouth
    fill("#cb7b97"); 
    arc(200, 210, 40, 30, 0, Math.PI); 

}