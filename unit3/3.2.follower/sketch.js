let debug = true;
let x = 0;
let y = 0;
let d = 0; 
let score = 0;
let speedfactor = 3; 
let speedx = speedfactor;
let speedy = speedfactor; 
let goalx = 0;
let goaly = 0;
let goalSize = 30;


function setup() {
  createCanvas(800,800);

  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background(200);

  rect(goalx, goaly, goalSize, goalSize);
  fill("green");
  noStroke();

//distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  x += speedx; //add the movement on x-axis (left to right)
  y += speedy; //add the movement on y-axis (up and down)

  //Draw circle for the follower
  circle(x, y, 50); 
  fill("red");
  noStroke();

  if (mouseX > x ){ //move to the right
    
    speedx = speedfactor;

  }else{ //move left 
    
    speedx = -speedfactor;
  }

  if (mouseY > y ){ //move to the right
    
    speedy = speedfactor;

  }else{ //move left 
    
    speedy = -speedfactor;
  }

  if (d < 25){ //check for collison with follower
    score -= 1;
    x = random(width);
    y = random(height);
  }

  //check for collision with square
  if (
    mouseX > goalx &
    mouseX < goalx + goalSize & 
    mouseY > goaly & 
    mouseY < goaly + goalSize 
    ){
    score += 1;
    //reset follower
    x = random(width);
    y = random(height);

    //reset goal
    goalx = random(width);
    goaly = random(height);
  }


  if (debug){
    textSize(30);
    //text("mouseX: " + mouseX, 50,50);
    //text("mouseY: " + mouseY, 50,80);
    //text("x: " + x, 50, 120);
    //text("x: " + x, 50, 150);
    //text("d: " + d, 50, 180);
    text("score: " + score, 50, 210); 
  }
}