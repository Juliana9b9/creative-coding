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

let img; 

function preload(){
  //The image link or png goes here
  img = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be02a4e3-e357-4bde-b048-3a8a59e11d49/d2ft73s-8611491a-1457-4534-8d54-5c3c512b9c69.png/v1/fit/w_828,h_828/eye_transparent_png_by_absurdwordpreferred_d2ft73s-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzE1NiIsInBhdGgiOiJcL2ZcL2JlMDJhNGUzLWUzNTctNGJkZS1iMDQ4LTNhOGE1OWUxMWQ0OVwvZDJmdDczcy04NjExNDkxYS0xNDU3LTQ1MzQtOGQ1NC01YzNjNTEyYjljNjkucG5nIiwid2lkdGgiOiI8PTMxNTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uu7tPmeEpXls4uzG9ZxqrsgMO1bufOJPJXa46I8U06g');
}


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
  //Draw an image instead
  //circle(x, y, 50);
  image(img, x - img.width/2, y - img.height/2); //This calculates the x-coordinate of the image's top-left corner, 
  //making sure that the image is centered horizontally & vertically. In the file it looks like the spot that gets reset is to the right of the pupil. 

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