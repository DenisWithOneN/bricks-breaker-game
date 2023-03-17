function setup() {

    createCanvas(400, 400)
}

function draw() {
    // 0,1,2,3 ... a,b,c,d,e,f HEXA
    // RGB - ** ** **
    // red - ff 00 00

    background("#0000ff")
    smileyFaceDenis();


}

function smileyFaceDenis() {

    // cap
    fill("#b8e4ff")
    circle(200, 200, 100)
    fill("#ffffff")

    
    // ochii
    circle(220, 185, 20)
    circle(180, 185, 20)

        // iris
        fill("#000000")
        circle(222, 183, 7)
        circle(178, 183, 7)

    // ochelari
    fill('rgba(0,255,0, 0)');
    line(203, 185, 198, 185)
    // line(200, 185, 155, 135)
    circle(220, 185, 35)
    circle(180, 185, 35)


    // mouth
    fill("#8cafff")
    arc(198, 213, 35, 50, 0.3, Math.PI)

    // limba
    fill("#175eff")
    arc(198, 230, 23, 15, 0.3, Math.PI)
    
}

