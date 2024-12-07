//Juliana Pacheco’s Artists Statement: In the index file :) 


function setup() {
  createCanvas(1425, 800, WEBGL);


  angleMode(DEGREES);
  normalMaterial();
  describe(
    'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains 8 planets that contain their respective colors'
  );
}

function draw() {
  background(23, 2, 38);

//Turn on the lights.
  ambientLight(30, 40, 50);// This creates the color of the light. 
  directionalLight(200, 170, 128, 0, 0, -100);// Changing the numbers here will change the direction of where the lights are coming from. 


  // Call every frame to adjust camera based on mouse/touch
  orbitControl();


//Polka dot planet 
  push();
  fill("white")
  translate(614, 273, -777);//Changing these numbers will move the 3d object up, down, and left & right. 
  sphere(200);// Increases or decreases the size of the sphere.
  pop();
//Lines 35-57 is the code for the dots. 
  push();
  fill("yellow")
  translate(614, 400, -654);//Changing these numbers will move the 3d object up, down, and left & right. 
  sphere(50);// Increases or decreases the size of the sphere.
  pop();

  push();
  fill("red")
  translate(700, 200, -640);//Changing these numbers will move the 3d object up, down, and left & right. 
  sphere(50);// Increases or decreases the size of the sphere.
  pop();

  push();
  fill("coral")
  translate(500, 200, -640);//Changing these numbers will move the 3d object up, down, and left & right. 
  sphere(50);// Increases or decreases the size of the sphere.
  pop();

  push();
  fill("green")
  translate(400, 300, -800);//Changing these numbers will move the 3d object up, down, and left & right. 
  sphere(50);// Increases or decreases the size of the sphere.
  pop();

//In-half planet
  push(); 
  fill("blue");
  translate(55, 200, 6);
  sphere(245); 
  pop();
//plane in the center 
  push();
  translate(55, 200, 6);
  plane(550);//Increases or decreases the size of the plane.
  pop();

//Disc Planet
  push();
  fill(181, 181, 255); 
  translate(-405, 200, 780);
  sphere(255); 
  pop();
// Ellipsoid disc 
  push();
  fill(114, 77, 163);
  translate(-405, 200, 780);
  ellipsoid(50, 200, 400);//x makes the object thin or big, y makes the object long or short, and z makes the object long or short vertically.
  pop();


//Blue Saturn
  push();
  fill(3, 49, 156); 
  translate(-320, -772, -385);
  sphere(600); 
  pop();
//The ring for Saturn
  push(); //
  translate(-320, -772, -385);
  rotateWithFrameCount();
  torus(800, 50); //x determies how big it is, y determines how thick the rings are. 
  pop();


//Ice Cream Planet
  push();
  fill(247, 178, 240);
  translate(356, -120, 600);
  sphere(290); 
  pop();
//Waffle Cone
  push();
  fill(240, 195, 91);
  stroke(0);
  translate(356, 400, 600);
  cone(200, 600);//x makes the cone thick or thin, and y makes the cone long or short.
  pop();


//Dango(a japanese desert)planet
  push();
  fill("pink"); 
  translate(-695, 800, 249);
  sphere(230); 
  pop();

  push();
  fill("white"); 
  translate(-695, 350, 249);
  sphere(230); 
  pop();

  push();
  fill("green"); 
  translate(-695, -100, 249);
  sphere(230); 
  pop();
//Stick
  push();
  fill(255, 212, 105);
  translate(-695, 452, 249);
  cylinder(50, 1800);//x makes the cylinder thick or thin, and y makes the cylinder long or short.
  pop(); 

//Orange (fruit) planet
  push();
  fill("orange"); 
  translate(761, -229, -513);
  sphere(269); 
  pop();
//Green stem 
  push();
  fill(40, 150, 6);
  translate(761, -350, -513);
  cylinder(50, 300);
  pop(); 
  //Small green moon
  push();
  fill(40, 150, 6);
  rotateWithFrameCount();
  translate(600, 800, 900);
  sphere(80);
  pop();

}

// Rotate for ring and green moon 
function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}
