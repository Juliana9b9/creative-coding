function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
  }

function draw() {
  background(220);
  translate(100,100);
  for (let x = 0; x <8; x+=1){//This calculates how many shapes go in each row
    for (let y = 0; y < 8; y+=1){//This calculates how many shapes go in each column. 
      push();
      //These are a list of colors the code can choose from when a variable calls random. I got the idea to use 'const' from this video: https://www.youtube.com/watch?v=TRFkxgreoyU&t=249s
      const colors = ['red','orange','yellow','green','blue','purple','white', 'black','brown','magenta','coral','gray','lime','pink','olive']; 
      fill(random(colors)); //will choose a random color from the list to fill the shape.
      stroke(random(colors));// will choose a random color to outline the shape.
      strokeWeight(random(1,15));// Changes the thickness of the outline of the shape. In this case, 1 is pretty thin and 15 is as thick as it can get. 
      translate(x * 145, y * 145);// Change the spacing of the shapes to fill out the whole page. 
      ellipse(0,0,100,100);//size of the shape. 
      pop();
    }
  }
}

