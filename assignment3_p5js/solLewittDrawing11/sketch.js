//NYU Creative Coding Fall 2015 
//Assignment: Sol Lewitt Drawing Exercise
//Assignment Source: http://solvingsol.com/solutions/056/y-a-v-a/index.html
//Details: Wall Drawing #11 (1969)
//A wall divided horizontally and vertically into four equal parts. Within each part, three of the four kinds of lines are superimposed.

function setup (){
createCanvas(500,500);

strokeWeight(2);
stroke(0);
rect(0,0, height, width);  

//vertical
var a = 0;
  while (a < width) {
    line(a, 0, a, height);
    a = a + 25;
  }
 
//horizontal lines
 var b = 0;
  while (b < height) {
    if (b > width/2){
      line(0, b, width/2, b); 
      b = b + 25;
    } else {
      line(0, b, width, b); 
      b = b + 25;
    }
  }
  
  var d = width/2;
  var e = width;
  var f = width/2;
  for (var c = 0; c <= width/2; c = c + 25){
    //diagonal full width
    stroke(0);
    line(0, c, c, 0); 
    line(c, width/2, d, 0); 
    line(d, width/2, width ,c);
    //diagonal quarter
    line(width/2, c, e, width/2);
    line(d, 0, width, f);
    d = d + 25;
    e = e - 25;
    f = f - 25;
  }
  
  
}
