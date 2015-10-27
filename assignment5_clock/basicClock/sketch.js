//NYU Creative Coding Fall 2015 
//Assignment: Create A Clock

var radius = 225.0;
var angle = 0.0;

var xSecond=0,ySecond=0;
var xMinute=0,yMinute=0;
var xHour=0,yHour=0;

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(25);
  translate(width/2, height/2);
  ellipse(0,0,5,5);
  rotate(radians(270));
  
  angleSecond = (second() / 59.0) * TWO_PI;
  angleMinute = (minute() / 59.0) * TWO_PI;
  angleHour = (hour() / 12.0) * TWO_PI;
  
  xSecond = cos(angleSecond)* radius;
  ySecond = sin(angleSecond)* radius;
  
  xMinute = cos(angleMinute)* radius;
  yMinute = sin(angleMinute)* radius;
  
  xHour = cos(angleHour)* radius;
  yHour = sin(angleHour)* radius;
  
  
  stroke(255);
  
  //draw a line from the center of our screen and as long as our radius
  //line(0,0,xSecond,ySecond);
  ellipse(xSecond,ySecond,5,5);
  
  //line(0,0,xMinute,yMinute);
  ellipse(xMinute,yMinute,15,15);
  
  //line(0,0,xHour,yHour);
  ellipse(xHour,yHour,25,25);
  
  
}
