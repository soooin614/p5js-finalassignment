function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke();
  fill("#DBE9F8");
  rect(0, 0, 600, 400);

  fill("#D1D177");
  stroke("#757540");
  strokeWeight(3);
  arc(200, 400, 600, 250, PI, TWO_PI);
  fill("#F59090");
  stroke("#9F4949");
  strokeWeight(3);
  arc(400, 420, 600, 300, PI, TWO_PI);
  
  noStroke();
  fill("#C1C1F9");
  ellipse(90, 80, 80, 50);
  ellipse(140, 70, 100, 60);
  ellipse(200, 85, 90, 50);
  ellipse(160, 75, 70, 40);
  
  fill("#F5F5B7");
  ellipse(380, 70, 100, 60);
  ellipse(450, 60, 110, 70);
  ellipse(520, 75, 90, 50);
  
  fill("#B2E0E0");
  ellipse(250, 110, 120, 60);
  ellipse(310, 100, 100, 50);
  
  fill("#FF9999");
  stroke("#892C2C");
  strokeWeight(1.5);
  quad(200, 110, 260, 130, 250, 190, 190, 170);

  fill("#FF6666");
  stroke("#871212");
  triangle(260, 130, 300, 160, 230, 210);

  stroke("#871212");
  line(235, 205, 220, 230);
  line(220, 230, 260, 260);
  line(260, 260, 230, 300);

  noStroke();
  fill("#BE93EA");
  stroke("#8240CA");
  quad(360, 170, 430, 150, 450, 240, 370, 260);

  fill("#B66BFF");
  stroke("#8240CA");
  triangle(430, 150, 480, 210, 390, 240);

  stroke("#8240CA");
  line(400, 253, 380, 300);
  line(380, 300, 420, 330);
  line(420, 330, 360, 360);

  stroke("#2C5F11");
  strokeWeight(1.5)
  fill("#ABC494");
  triangle(80, 260, 60, 320, 110, 320);

  fill("#93B093");
  ellipse(120, 280, 40, 40);

  fill("#9ED69E");
  rect(160, 260, 40, 60);

  fill("#85A26A");
  triangle(450, 250, 420, 310, 480, 310);

  fill("#99CCA8");
  ellipse(500, 280, 45, 45);

  noFill();
  stroke("#5AA6F2");
  strokeWeight(2);
  ellipse(80, 150, 28, 28);
  ellipse(300, 180, 26, 26);
  stroke("#EDED8E");
  ellipse(140, 210, 18, 18);
  ellipse(350, 220, 16, 16);
  strokeWeight(1);
  stroke("#E89999");
  ellipse(420, 130, 22, 22);
  ellipse(520, 190, 24, 24);
  stroke("#BEBE61");
  ellipse(270, 120, 20, 20);
  ellipse(310, 260, 18, 18);
  stroke("#924CD7");
  ellipse(317, 258, 13, 13);
  ellipse(100, 160, 23, 23);
  ellipse(470, 100, 30, 30)
}