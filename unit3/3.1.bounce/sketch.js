let x = 200;
let y = 200;
let xspeed = 3;//speed the object will move left and right 
let yspeed = 2;//speed the object will move up and down

let circleRadius = 25; 


function setup() {
  createCanvas(400, 400);
  noStroke();//Thought it looked better without a stroke. 

}

function draw() {
  background(225,225,225, 55);//opacity trail, increase last number to get the trail more transparent 
  ellipse(x, y, circleRadius * 2, circleRadius * 2);
  
  //check collision with left and right edge 
  if(x < 0 | x > width){
    xspeed = xspeed * -1;//reverse the x direction
    yspeed = yspeed * -1;//reverse the y direction
  }
  //if the circle goes off the left or right sides of the screen, turn it around.
  if (x > width - circleRadius || x < circleRadius) {
    xspeed = -xspeed;
    fill(0,225,255);//this changes the color to light blue. 
  }
  //if the circle goes off the top or bottom sides of the screen, turn it around.
  if (y > height - circleRadius || y < circleRadius) {
    yspeed = -yspeed;
    fill(225,225,0);//this changes the color to yellow. 
  }

  x = x + xspeed; // iterate x
  y = y + yspeed; // iterate y

  circle(x,y,50);//draw circle
}