let x_hour = 50;
let x_minute = 50;



function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(220);
  

  textSize(16);
  text("Hour: " + hour(), 50, 95);
  text("Minute: " + minute(), 50, 80);
  

  
  // draw the starting line and finish line
  push();
  line(50,170,50,350); // starting line
  line(550,170,550,350); // finish line
  pop();
  
  //draw  circles
  push();
  noStroke();
  fill("darkgray");
  
   let demo_x = map(0,0,23,50,550);
   circle(demo_x,180,40);
  
  
 // assign value to x_hour using map()
   x_hour = map(hour(), 0, 23, 50, 550);
   circle(x_hour, 180, 40);
  
   // assign value to x_minute using map()
   x_minute = map(minute(), 0, 59, 50, 550);
   circle(x_minute, 240, 40);
  
  
  pop();
}
