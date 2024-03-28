var stepSize = 20;
var modifier = 50;

function setup() {
  createCanvas(500, 500);
//    modifier = mouseY /100;
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
  fill(255);
  text("X = " + mouseX, 10,20);
  text("Y = " + mouseY, 10,30);
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
    var from = color(255, 165, 0);
    var to = color(0, 0, 255);

    for(var i = 0; i < 25; i++)
        {
            for(var j = 0; j < 25; j++)
                {
                    var n = noise(i/modifier, j/modifier, frameCount/mouseX);
                    var c = lerpColor(from,to,n);
                    noStroke();
                    fill(c);
                    rect(i*stepSize,j*stepSize,stepSize,stepSize);
                }
        }
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here
    angleMode(DEGREES);
//    rotate(PI/angle);
    modifier = mouseY/5;
    
    for(var i = 0; i < 25; i++)
        {
            for(var j = 0; j < 25; j++)
                {
                    push();
                    var n = noise(i/modifier, j/modifier, frameCount/mouseX);
                    var angle = map(n,0,1,0,720)
                    stroke(0,0,0,100);
                    strokeWeight(3);
                    
                    translate(i*stepSize+10,j*stepSize+10);
                    rotate(angle);
                    line(0,0,10,-stepSize );
                    pop();
                }
        }
}
