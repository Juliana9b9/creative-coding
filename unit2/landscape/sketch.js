function setup() {
  createCanvas(1490, 800);
  noLoop();
  noStroke();
  fill("white");
  
 //I decided to do mountains during the night time when I was in Shenandoah for a whole day.Seeing the stars behind the mountains is a sight I have engraved in my mind. I thought about using lerpColor as a gradient for the night sky.  
}

function draw() {
  background("white");
  
   // Create p5.Color objects to interpolate between.
  let from = color(0, 0, 225);
  let to = color(225, 0, 0);

  // Create intermediate colors.
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

  // 1st rectangle, lightest color first.
  noStroke();
  fill(from);
  rect(5, 0, 1490, 200);

  // 2nd rectangle.
  fill(interA);
  rect(5, 200, 1490, 400);

  // 3rd rectangle.
  fill(interB);
  rect(5, 400, 1490, 400);

  // 4th rectangle, darkest last.
  fill(to);
  rect(5, 600, 1490, 400);
  
 //this is the 'stars'
  for (let x = 0; x <= width; x+=10){

    let offset = randomGaussian(0,100);//increasing y makes the dots spread out more. Decrease the number and the dots will be closer to each other. 
    let y = height / 6 + offset; //increasing the number will raise or lower the dots on the y axis.    
    
    circle(x,y,3);
  // move left to right across the canvas
  for (let x = 0; x <= width; x+=1){

    
    let y = noise(x * 0.01) * height;
   
    
    circle(x,y,5);////increase the number and the circles get thicker and bolder. 
    
  }
  
  }
}