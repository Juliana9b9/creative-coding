//This is my time project based on the sun. I specifically coded this project to have the sun start out high on the page and go lower and lower as
//as time passes.
//The background color is supposed to change from day, to sunset, to night. 
//This is the webiste that helped me complete this project: 
//https://www.shecodes.io/athena/67661-how-to-change-background-color-based-on-time-of-day-with-javascript

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  // create easy hour and minute variables
  let h = hour();
  let m = minute();
  

  // Set background color based on time
  if (h >= 7 && h < 16) {
    // Light Blue 7 am and 4 pm 
    background(135, 206, 235);
  } else if (h >= 16 && m < 30) { //this should change to a darker blue at 4:30 pm.
    background(75, 123, 201);
  } else if (h >= 16 && m >= 30 && h < 18) { //this should change to orange at 4:30 pm and stay until 6 pm  
    background(255, 140, 0);
  } else {
    // dark purple
    background(7, 59, 143); 
  }

  let sun;
  if (h >= 6 && h < 18) {
    sun = map(h + m / 50, 4, 16, height * 0.3, height - 100); //This makes the sun go lower and lower. 
  } else {
    sun = height + 100; //The sun should be off screen at 6 pm.  
  }
  fill(255, 204, 0);
  noStroke();
  ellipse(width / 2,sun,180,170); 
}