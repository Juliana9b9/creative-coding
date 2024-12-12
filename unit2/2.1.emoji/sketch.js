function setup() {
  // create a canvas
  createCanvas(800, 800);

  // disable animation
  noLoop();
  //This a cumulative of different emojis. The Crystal ball emoji, the eye emoji, and a lollipop
}

function draw() {
  background(220);
  
  //The crystal ball stand
  stroke("#4f0501");
  strokeWeight(6);
  fill("brown");
  square(140, 300, 130);

//The crystal ball
  stroke("#dca9f9"); 
  strokeWeight(6); 
  fill("#b959f0"); 
  ellipse(200,240,250,250); 

  stroke("#4f0501");
  strokeWeight(6);
  fill("brown");

//eyeball emoji
//eye shape
  stroke("black");
  strokeWeight(6);
  fill("white");
  ellipse(540, 100, 200, 150);

//pupil
  stroke("#1e8a03");
  strokeWeight(6);
  fill("green");
  circle(540, 100, 100);

//lollipop stick
  stroke("gray");
  strokeWeight(6);
  fill("white");
  rect(400, 500, 25, 250);

//lollipop
  stroke("#c9051f");
  strokeWeight(6);
  fill("red");
  circle(415,460, 100, 100)
 
}