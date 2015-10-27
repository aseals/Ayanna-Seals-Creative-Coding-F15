//Painterly Realism of a Football Player – Color Masses in the 4th Dimension
//Kazimir Malevich
//https://www.google.com/culturalinstitute/u/0/asset-viewer/painterly-realism-of-a-football-player-%E2%80%93-color-masses-in-the-4th-dimension/HAFbsVPXhzyLMg?projectId=art-project

void setup(){
  size(360,576); 
}

void draw(){
  background(#BFBBBB);
  
  //shapes are ordered from top to bottom
  noStroke();
  fill(#291b2c);
  quad(171, 6, 284, 31, 210, 175, 94, 149);
  
  noStroke();
  fill(#b6912f);
  quad(163, 317, 239, 323, 214, 428, 168, 428);
  
  noStroke();
  fill(#233573);
  quad(53, 392, 287, 418, 287, 428, 53, 403);
  
  noStroke();
  fill(#131313);
  quad(76, 371, 140, 373, 140, 436, 76, 434);
  
  noStroke();
  fill(#131313);
  quad(113, 470, 162, 438, 179, 464, 126, 496);
  
  noStroke();
  fill(#9c2021);
  quad(162, 478, 199, 474, 200, 491, 163, 495);
  
  noStroke();
  fill(#9c2021);
  quad(190, 495, 242, 497, 242, 503, 190, 500);
  
  noStroke();
  fill(#216432);
  ellipse(208,522,18,18);
}