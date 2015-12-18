//NYU Creative Coding Fall 2015 
//Assignment: Use Api data to create something
//A flower floats in the wind, at a speed identical to the current wind speed (openweathermap.org)
//flower design from http://www.keyvan.net/2009/09/processing-getting-started/

var wind;
var position;

function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(15);

	var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
	loadJSON(url, gotWeather);

	position = createVector(width/2, height/2);
	wind = createVector();

}

function draw(){
  
	background(135, 206, 235);

	position.add(wind);

  translate(position.x, position.y);
  rotate(radians(frameCount + position.x));


  fill("#c6ff89"); // green
  
  for (i = 0; i < 5; i++) {
    ellipse(0, -40, 50, 50);
    rotate(radians(72));
  }
  

  fill("#fff9bb"); 
  ellipse(0, 0, 50, 50);
  
	if(position.x > width) position.x = 0;
	if(position.x < 0) position.x = width;
	if(position.y > height) position.y =0;
	if(position.y < 0) position.y = height;

}

function gotWeather(weather){

	var angle = radians(Number(weather.wind.deg));
	var windmag = Number(weather.wind.speed);


	wind = p5.Vector.fromAngle(angle);

}