//NYU Creative Coding Fall 2015 
//Assignment: Generative Tree

var theta = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
}

function mouseClicked(){
  theta = map(mouseX,0,width,0,PI/2);
  translate(mouseX, mouseY);
  branch(150);
}

function branch(len){
  line(0,0,0, -len);
  translate (0,-len);
  
  len = len * 0.6;
  
  if(len > 2) {
    push();
    rotate(theta);
    
    branch(len);
    pop();
    
    push();
    rotate(-theta);
    branch(len);
    pop();
    
  }
}