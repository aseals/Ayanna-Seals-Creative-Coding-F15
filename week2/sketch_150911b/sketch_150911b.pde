void setup() {
  size(600, 400);
  //noLoop();  // draw() will not loop
}

void draw() {
  
  int a = 45;
  while (a < 150) {
    line(a, 40, a, 350); 
    a = a + 5;
  }
  
  int b = 40;
  while (b < 360) {
    line(180, b, 290, b); 
    b = b + 5;
  }
  
  int c = 310;
  int d = 44;
  int e = 314;
  int f = 40;
  
  /*for (d = 44; d < 600; d += 5) {
    if (d < 360){
      line(c, d, e, f);
    }
    if (e < 420){
      e = e + 5;
    } else {
      e = 419;
      f = f + 5;
    }
  }/*

  
  /*for (d = 44; d < 360; d += 5) {
    if (e < 420){
      line(c, d, e, f);
      e = e + 5;
    } else if (e > 420){
      line(c, d, 420, f);
    }
  }*/
  
    /*line(c, d, e, f); 
    d = d + 5;
    e = e + 5;
  
  if (d > 360){
    d = 360;
    c = c + 5;
  }*/
  /*if (a > 350){
    a = 350;
    f = f + 5;
  }*/
  
}

/*void mousePressed() {
  loop();  // Holding down the mouse activates looping
}

void mouseReleased() {
  noLoop();  // Releasing the mouse stops looping draw()
}*/