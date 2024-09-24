function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
  //This is my design on the straight faced emoji, which is always in my recently used emojis
}

function draw() {
  background(220);
stroke("gold"); // set the stroke (line) color 
  strokeWeight(6); // set the stroke thickness
  fill("yellow"); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  ellipse(200,200,250,250); 
  
  // The left eye 
  fill("#000000"); // changed color to black 
  stroke("#000000");
  strokeWeight(1);
  rect(150,120,20,50); // X=150 moved the rect right, Y=120 moved the rect down, w= width of the rect, h= height of the rect 
  
  // The right eye
  fill("#000000");
  stroke("#000000");
  strokeWeight(1);
  rect(220,120,20,50);// X=220 moved the rect right next to the left eye , Y=120 moved the rect down, w= width of the rect, h= height of the rect 
  
  
  // The mouth
  fill("#000000");
  stroke("#000000");
  strokeWeight(1);
  rect(155,220,90,15); //X=155 moved the rect right to make it somewhat centered below the eyes , Y=220 moved the rect down, w= width of the rect increased to make it long, h= height of the rect decreased to make a straight line. 
  
  rectMode(CENTER)
 
 
}