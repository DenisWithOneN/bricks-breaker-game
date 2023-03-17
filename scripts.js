function setup() {

    createCanvas(400, 400)
}

function draw() {
    // 0,1,2,3 ... a,b,c,d,e,f HEXA
    // RGB - ** ** **
    // red - ff 00 00

    background("#00ffff")

    smileyFaceRebe(); 
    
}


function smileyFaceRebe() {
    fill("#b2d5ba"); 
    circle(200, 200, 100); 
        circle(180, 185, 20); 

        circle(220, 185, 20); 

}