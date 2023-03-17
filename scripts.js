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
    fill("#d1ffb8")
    circle(200, 200, 100)
    fill("#ffffff")
    // ochii
    circle(220, 185, 20)
    circle(180, 185, 20)

        // iris
        circle(222, 183, 7)
        circle(178, 183, 7)
    
}

