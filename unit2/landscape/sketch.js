// Revision Landscape

function setup() {
  createCanvas(800, 800);
} // end setup

function draw() {
  background(99, 68, 120 );

  push()
//The grass
  noStroke();
  fill(0);
  rect(0, 460, 800, 400);

//Big Mountain
  fill(0,0,0);
  ellipse(80, 450, 170, 400);
  ellipse(220, 450, 170, 330);
  ellipse(600, 450, 140, 270);
  ellipse(720, 450, 160, 400);

//The moon
  fill(168, 127, 197);
  circle(560, 140, 250);


  // cloud
  fill(167, 122, 204);
  stroke(167, 122, 204)
  ellipse(225,60,80,40)
  ellipse(225,60,50,60)
  ellipse(300,40,90,40)
  ellipse(300,40,50,60)
  pop()
  
  }
  

