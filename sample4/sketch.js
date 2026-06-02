function setup() {
  createCanvas(600, 400);
  frameRate(30);
  pixelDensity(1);
}

function keyPressed() {
  if (key === 's') {
    const targetFPS = 30; 
    const durationSec = 10; 
    const totalFrames = targetFPS * durationSec;  
    
    saveGif('movingAbstractArt', totalFrames, {
      units: 'frames',
      fps: targetFPS,
      delay: 0
    });
  }
}

function draw() {
  let f = frameCount;
  let timeRatio = (sin(f * 0.02) + 1) / 2; 

  let wave1 = sin(f * 0.1) * 5;
  let wave2 = cos(f * 0.12) * 4;

  let redKiteX = sin(f * 0.02) * 80;   
  let redKiteY = cos(f * 0.035) * 50;  

  let purpleKiteX = cos(f * 0.03 + 2) * 70; 
  let purpleKiteY = sin(f * 0.02 + 1) * 60; 

  let cloudMoveA = sin(f * 0.015) * 40; 
  let cloudMoveB = cos(f * 0.02) * 35;  
  let cloudMoveC = sin(f * 0.025) * 45; 

  let cloudPulse = sin(f * 0.02) * 8;

  let bgCol = lerpColor(color("#DBE9F8"), color("#7FAAD6"), timeRatio);
  let hillCol1 = lerpColor(color("#D1D177"), color("#7A7A3A"), timeRatio); 
  let hillCol2 = lerpColor(color("#F59090"), color("#8E4F4F"), timeRatio); 

  let treeCol1 = lerpColor(color("#ABC494"), color("#666650"), timeRatio);
  let treeCol2 = lerpColor(color("#93B093"), color("#506650"), timeRatio);
  let treeCol3 = lerpColor(color("#9ED69E"), color("#667F66"), timeRatio);
  let treeCol4 = lerpColor(color("#85A26A"), color("#505F40"), timeRatio);
  let treeCol5 = lerpColor(color("#99CCA8"), color("#667F70"), timeRatio);

  noStroke();
  fill(bgCol);
  rect(0, 0, 600, 400);

  fill(hillCol1);
  stroke("#757540");
  strokeWeight(3);
  arc(200, 400, 600, 250, PI, TWO_PI);
  
  fill(hillCol2);
  stroke("#9F4949");
  strokeWeight(3);
  arc(400, 420, 600, 300, PI, TWO_PI);
  
  noStroke();
  fill("#C1C1F9");
  ellipse(90 + cloudMoveA, 80, 80 + cloudPulse, 50 + cloudPulse);
  ellipse(140 + cloudMoveA, 70, 100 + cloudPulse, 60 + cloudPulse);
  ellipse(200 + cloudMoveA, 85, 90 + cloudPulse, 50 + cloudPulse);
  ellipse(160 + cloudMoveA, 75, 70 + cloudPulse, 40 + cloudPulse);
  
  fill("#F5F5B7");
  ellipse(380 + cloudMoveB, 70, 100 + cloudPulse, 60 + cloudPulse);
  ellipse(450 + cloudMoveB, 60, 110 + cloudPulse, 70 + cloudPulse);
  ellipse(520 + cloudMoveB, 75, 90 + cloudPulse, 50 + cloudPulse);
  
  fill("#B2E0E0");
  ellipse(250 + cloudMoveC, 110, 120 + cloudPulse, 60 + cloudPulse);
  ellipse(310 + cloudMoveC, 100, 100 + cloudPulse, 50 + cloudPulse);
  
  stroke("#2C5F11");
  strokeWeight(1.5);
  let ty1 = sin(f * 0.04) * 12;
  fill(treeCol1); triangle(80, 260 + ty1, 60, 320 + ty1, 110, 320 + ty1);
  let ty2 = cos(f * 0.03) * 16;
  fill(treeCol2); ellipse(120, 280 + ty2, 40, 40);
  let ty3 = sin(f * 0.05) * 8;
  fill(treeCol3); rect(160, 260 + ty3, 40, 60);
  let ty4 = cos(f * 0.035) * 14;
  fill(treeCol4); triangle(450, 250 + ty4, 420, 310 + ty4, 480, 310 + ty4);
  let ty5 = sin(f * 0.025) * 18;
  fill(treeCol5); ellipse(500, 280 + ty5, 45, 45);

  fill("#FF9999");
  stroke("#892C2C");
  strokeWeight(1.5);
  quad(200 + redKiteX + wave1, 110 + redKiteY + wave2, 
       260 + redKiteX - wave2, 130 + redKiteY + wave1, 
       250 + redKiteX + wave2, 190 + redKiteY - wave1, 
       190 + redKiteX - wave1, 170 + redKiteY - wave2);

  fill("#FF6666");
  stroke("#871212");
  triangle(260 + redKiteX - wave2, 130 + redKiteY + wave1, 
           300 + redKiteX + wave1, 160 + redKiteY + wave2, 
           230 + redKiteX + wave2, 210 + redKiteY - wave1);

  stroke("#871212");
  let rTail1 = sin(f * 0.1) * 15;
  let rTail2 = cos(f * 0.08) * 20;
  let rTail3 = sin(f * 0.07) * 25;
  line(235 + redKiteX + wave2, 205 + redKiteY - wave1, 220 + redKiteX + rTail1, 230 + redKiteY);
  line(220 + redKiteX + rTail1, 230 + redKiteY, 260 + redKiteX + rTail2, 260 + redKiteY);
  line(260 + redKiteX + rTail2, 260 + redKiteY, 230 + redKiteX + rTail3, 300 + redKiteY);

  noStroke();
  fill("#BE93EA");
  stroke("#8240CA");
  quad(360 + purpleKiteX + wave2, 170 + purpleKiteY + wave1, 
       430 + purpleKiteX - wave1, 150 + purpleKiteY + wave2, 
       450 + purpleKiteX + wave1, 240 + purpleKiteY - wave2, 
       370 + purpleKiteX - wave2, 260 + purpleKiteY - wave1);

  fill("#B66BFF");
  stroke("#8240CA");
  triangle(430 + purpleKiteX - wave1, 150 + purpleKiteY + wave2, 
           480 + purpleKiteX + wave2, 210 + purpleKiteY + wave1, 
           390 + purpleKiteX + wave1, 240 + purpleKiteY - wave2);

  stroke("#8240CA");
  let pTail1 = cos(f * 0.11) * 15;
  let pTail2 = sin(f * 0.09) * 22;
  let pTail3 = cos(f * 0.06) * 28;
  line(400 + purpleKiteX + wave1, 253 + purpleKiteY - wave2, 380 + purpleKiteX + pTail1, 300 + purpleKiteY);
  line(380 + purpleKiteX + pTail1, 300 + purpleKiteY, 420 + purpleKiteX + pTail2, 330 + purpleKiteY);
  line(420 + purpleKiteX + pTail2, 330 + purpleKiteY, 360 + purpleKiteX + pTail3, 360 + purpleKiteY);

  noFill();
  let bPulse = sin(f * 0.06) * 4; 
  
  stroke("#5AA6F2"); strokeWeight(2);
  ellipse(80  + sin(f * 0.03) * 25, 150 + cos(f * 0.04) * 20, 28 + bPulse, 28 + bPulse);
  ellipse(300 + cos(f * 0.02) * 35, 180 + sin(f * 0.03) * 25, 26 + bPulse, 26 + bPulse);
  ellipse(550 + sin(f * 0.035) * 20, 120 + cos(f * 0.03) * 30, 22 + bPulse, 22 + bPulse);
  
  stroke("#EDED8E");
  ellipse(140 + sin(f * 0.04 + 1) * 30, 210 + cos(f * 0.025) * 18, 18 + bPulse, 18 + bPulse);
  ellipse(410 + cos(f * 0.015 + 2) * 40, 140 + sin(f * 0.035) * 22, 32 + bPulse, 32 + bPulse);
  ellipse(220 + sin(f * 0.025 + 3) * 25, 90 + cos(f * 0.02) * 15, 16 + bPulse, 16 + bPulse);
  
  strokeWeight(1); stroke("#E89999");
  ellipse(520 + cos(f * 0.045) * 30, 190 + sin(f * 0.02) * 35, 24 + bPulse, 24 + bPulse);
  ellipse(40  + sin(f * 0.035 + 4) * 15, 250 + cos(f * 0.04) * 25, 20 + bPulse, 20 + bPulse);
  
  stroke("#924CD7");
  ellipse(100 + cos(f * 0.03 + 2) * 35, 160 + sin(f * 0.025) * 30, 23 + bPulse, 23 + bPulse);
  ellipse(480 + sin(f * 0.025 + 1) * 25, 80 + cos(f * 0.03) * 20, 19 + bPulse, 19 + bPulse);
  ellipse(260 + cos(f * 0.04 + 3) * 30, 230 + sin(f * 0.015) * 25, 25 + bPulse, 25 + bPulse);
}