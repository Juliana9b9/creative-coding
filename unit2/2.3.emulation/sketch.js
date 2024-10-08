function setup() {
  // create the canvas
  createCanvas(1600, 800);

  // disable animation
  noLoop();
  noStroke();//gets rid of border around the shape. 
}

function draw() {

//I will attempt to emulate."Hommage a Durer (Etude) (Tribute to Durer (Study))" by Vera Molnar. 
//https://spalterdigital.com/artworks/prepa-a-monet-etude-preparation-for-monet-study/ I thought this artwork would look interesting in a digital format. 
//The rectangles do not seem to have a lot of color variety. Each rectangle column has an equal amount of rectangles.  
//However, all the columns are slightly slanted in which ever direction.
  background(255);
  translate(100,100);
  for (let x = 0; x <9; x+=1){//9 rectangles in each row. I had to down size the amount of rectangles as 125 was too much for the page to look right. 
    for (let y = 0; y < 11; y+=1){//14 rectangles in each column. 
      push();
      //These are a list of colors the code can choose from when a variable calls random. 
      //I got the idea to use 'const' from this video: https://www.youtube.com/watch?v=TRFkxgreoyU&t=249s
      translate(x * 120, y * 52);// Change the spacing of the shapes to fill out the whole page. 
      colorMode(RGB,100, 100, 25, 1);
   noFill();
  strokeWeight(10);
  stroke(200, 0, 100, 0.5)
      rect(60,0,150,50);//size of the shape.  
      pop(); 
    }
  }
}