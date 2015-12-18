//NYU Creative Coding Fall 2015 
//Assignment: Video

var video1;
var video2;
var video3;
var video4;
var video5;
var video6;
var video7;
var bgColor;
var playing = false;

function setup() {
  bgColor = color(0,0,0);
  createCanvas(windowWidth,windowHeight);
  video = createVideo(['media/road.mp4']);
  video.size(windowWidth,windowHeight);
  video.loop(); 
  video.volume(0);
  video.position(0,0);
  
 video1 = createVideo(['media/dog.mp4']);
 video1.size(width/2,height/2);
 video1.position(20,300);
 video1.hide();
 
 video2 = createVideo(['media/sky.mp4']);
 video2.size(windowWidth,windowHeight);
 video2.position(0,0);
 video2.hide();
 
 video1 = createVideo(['media/dog.mp4']);
 video1.size(width/2,height/2);
 video1.position(20,300);
 video1.hide();
 
 
 video5 = createVideo(['media/sky.mp4']);
 video5.size(windowWidth,windowHeight);
 video5.position(0,0);
 video5.hide();
  

  textSize(32);
}

function draw(){
  background(bgColor);

  video.addCue(2.0, start2);
  video.addCue(9.0, start3);
  video.addCue(9.1, start2);
  video.addCue(15.0, start6);

}

function start2(){
    video1.show();
    video1.loop();
}
function start3(){
    video2.show();
    video2.loop();
}
function start5(){
    video4.show();
    video4.loop();
}
function start6(){
    video5.show();
    video5.loop();
}
