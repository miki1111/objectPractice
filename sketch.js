// declaration and initialize it
/* instead of this
var x = 0;
var y = 100;
var diameter = 50; */

// put in an object
var circle = {
  x: 0,
  y: 200,
  diameter: 50
};

function setup() {
  createCanvas(600, 400);
  
}

// infinite loop
function draw() {
  background (250, 250, 100);
  fill(250, 200, 200);
  circle.x++;
  ellipse(circle.x,circle.y,50,50);

}


// Event (does not run right away, wait state)
function mousePressed() {
  background(250, 250, 100);
  
}