function setup() {
  createCanvas(360,576);
}

function draw(){

  background('#BFBBBB');
             
  noStroke();
  fill('#291b2c');
  quad(171, 6, 284, 31, 210, 175, mouseX, mouseY);
  
  noStroke();
  fill('#b6912f');
  quad(163, 317, 239, 323, 214, 428, mouseX, mouseY);
  
  noStroke();
  fill('#233573');
  quad(53, 392, 287, 418, 287, 428, mouseX, mouseY);
  
  noStroke();
  fill('#131313');
  quad(76, 371, 140, 373, 140, 436, mouseX, mouseY);
  
  noStroke();
  fill('#131313');
  quad(113, 470, 162, 438, 179, 464, mouseX, mouseY);
  
  noStroke();
  fill('#9c2021');
  quad(162, 478, 199, 474, 200, 491, mouseX, mouseY);
  
  noStroke();
  fill('#9c2021');
  quad(190, 495, 242, 497, 242, 503, mouseX, mouseY);
  
  noStroke();
  fill('#216432');
  ellipse(208,522,mouseX,mouseY);
}