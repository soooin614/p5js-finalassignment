function setup() {
  createCanvas(600, 400);
  background(255, 240, 245);

  
  fill(60, 35, 25);
  noStroke();
  ellipse(300, 225, 210, 275);
  
  
   fill(240,200,180);
  arc(230, 215, 35, 40, HALF_PI, PI + HALF_PI);
  arc(370, 215, 35, 40, -HALF_PI, HALF_PI);
  
  
  fill(240, 200, 180);
  noStroke();
  rect(270, 290, 60, 70);
  
  
  fill(255, 220, 200);
  ellipse(300, 200, 160, 210);

  
  fill(60, 35, 25);
  arc(300, 160, 160, 130, PI, TWO_PI);

  
  stroke(60, 35, 25);
  strokeWeight(2);
  line(250, 135, 245, 180);
  line(270, 130, 268, 185);
  line(290, 128, 290, 185);
  line(310, 128, 312, 185);
  line(330, 130, 332, 185);
  line(350, 135, 355, 180);


  noStroke();
  fill(255);
  ellipse(260, 210, 50, 30);
  ellipse(340, 210, 50, 30);

  fill(0);
  ellipse(260, 210, 18, 18);
  ellipse(340, 210, 18, 18);

  
  fill(255);
  ellipse(255, 205, 7, 7);
  ellipse(335, 205, 7, 7);

  
  noFill();
  stroke(120);
  strokeWeight(1.5);
  arc(260, 203, 50, 20, PI, TWO_PI);
  arc(340, 203, 50, 20, PI, TWO_PI);

  
  stroke(80);
  strokeWeight(3);
  arc(260, 185, 50, 15, PI, TWO_PI);
  arc(340, 185, 50, 15, PI, TWO_PI);

  
  noStroke();
  fill(255, 180, 180);
  ellipse(300, 245, 15, 10);

 
  noFill();
  stroke(200, 80, 100);
  strokeWeight(3);
  arc(300, 265, 50, 25, 0, PI);

  
  noStroke();
  fill(255, 150, 150, 120);
  ellipse(243, 240, 30, 20);
  ellipse(357, 240, 30, 20);
  
  
  fill(255);
  ellipse(220, 235, 10, 10);
  ellipse(380, 235, 10, 10);

 
  fill(200, 200, 255);
  rect(180, 340, 245, 120, 40);
}