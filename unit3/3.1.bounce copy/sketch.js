let x1 = 200;
let y1 = 200;
let xspeed1 = -3;
let yspeed1 = 2;
let circleRadius1 = 25;

let x2 = 100;
let y2 = 300;
let xspeed2 = -2;
let yspeed2 = 4;
let circleRadius2 = 25;

let x3 = 300;
let y3 = 100;
let xspeed3 = 1;
let yspeed3 = -2;
let circleRadius3 = 25;


function setup() {
  createCanvas(400, 400);
  noStroke();//Thought it looked better without a stroke. 

}

function draw() {
  background(225,225,225, 55);//opacity trail, increase last number to get the trail more transparent 
  ellipse(x1, y1, circleRadius1 * 2, circleRadius1 * 2);
  ellipse(x2, y2, circleRadius2 * 2, circleRadius2 * 2);
  ellipse(x3, y3, circleRadius3 * 2, circleRadius3 * 2);
    
  //check collision with left and right edge 
  if(x1 < 0 | x1 > width){
    xspeed1 = xspeed1 * -1;//reverse the x direction
    yspeed1 = yspeed1 * -1;//reverse the y direction
  }
  //if the circle goes off the left or right sides of the screen, turn it around.
  if (x1 > width - circleRadius1 || x1 < circleRadius1) {
    xspeed1 = -xspeed1;
    fill('red');//this changes the color. 
  }
  //if the circle goes off the top or bottom sides of the screen, turn it around.
  if (y1 > height - circleRadius1 || y1 < circleRadius1) {
    yspeed1 = -yspeed1;
    fill('orange'); 
  }
  if (x2 > width - circleRadius2 || x2 < circleRadius2) {
    xspeed2 = -xspeed2;
    fill('yellow'); 
  }
  //if the circle goes off the top or bottom sides of the screen, turn it around.
  if (y2 > height - circleRadius2 || y2 < circleRadius2) {
    yspeed2 = -yspeed2;
    fill('green');
  }
  if (x3 > width - circleRadius3 || x3 < circleRadius3) {
    xspeed3 = -xspeed3;
    fill('blue'); 
  }
  //if the circle goes off the top or bottom sides of the screen, turn it around.
  if (y3 > height - circleRadius3 || y3 < circleRadius3) {
    yspeed3 = -yspeed3;
    fill('purple'); 
  }


  x1 = x1 + xspeed1; // iterate x
  y1 = y1 + yspeed1; // iterate y
 
  x2 = x2 + xspeed2; 
  y2 = y2 + yspeed2; 
 
  x3 = x3 + xspeed3; 
  y3 = y3 + yspeed3; 
 
    
  circle(x1,y1,50);//draw circle
  circle(x2,y2,50);
  circle(x3,y3,50);
  
}