//NYU Creative Coding Fall 2015 
//Assignment: DOM Website
//direction from http://coursescript.com/notes/interactivecomputing/animation/
var bg;
var img;
var canvas;
var x = 400;
var y = 400;
var numPixels = 100;
var targetX;
var targetY;
var easing = 0.05;

function setup() {
  
  img = createImg("http://www.produnkhoops.com/photos/albums/david-50x45-hercules-diamond-basketball-system-50/park-basketball-court-hercules-diamond-hoop-181-source.jpg");
  img.position(0,0);
  img.size(windowWidth, windowHeight);
  
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
}

function draw() {

  clear();
  fill(255,69,0);
  stroke(0);
  ellipseMode(CENTER);
  
  
  var dx = targetX - x;
  if(abs(dx) > 1) {
    x += dx * easing;
  }
  
  var dy = targetY - y;
  if(abs(dy) > 1) {
    y += dy * easing;
  }
  
  ellipse(x, y, 50, 50);
  
}

function keyPressed()
{
  if(keyCode == UP_ARROW){
    targetY = y - numPixels;
  }
  if(keyCode == DOWN_ARROW){ 
    targetY = y + numPixels; 
  }
  if(keyCode == RIGHT_ARROW){
    targetX = x + numPixels; 
  }
  if(keyCode == LEFT_ARROW){
    targetX = x - numPixels; 
  }
}