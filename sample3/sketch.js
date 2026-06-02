/*********************************************
  1. mouse:
		- 마우스 버튼 클릭시: 배경 색이 전환되며(연두색, 분홍색) 배경의 무늬들이 무작위로 재배치됩니다.
		- 마우스 포인터 이동시: 캐릭터의 눈동자가 마우스의 위치를 실시간으로 추적하여 움직입니다.
	2. keyboard:
		- 키보드의 스페이스 바를 누르면: 캐릭터의 입 모양이 세 단계(미소, 벌린 입, 슬픈 입)로 순환하며 변경됩니다.
        -키보드의 방향키를 누르면: 위(베레모), 아래(목걸이), 왼쪽(안경), 오른쪽(리본)에 따라 각 방향에 매칭된 악세서리가 교체됩니다.
***********************************************/
let bgState = 0;
let mouthState = 0;
let accState = 0;
let eyeX = 0;
let eyeY = 0;
let seedValue = 100;
let prevSpacePressed = false;
let prevMousePressed = false;


function setup() {
  createCanvas(600, 400);
  frameRate(30);
  pixelDensity(1);
}

function keyPressed() {
  if (key === 's') {
    const targetFPS=30;
    const durationSec = 10;
    const totalFrames = targetFPS*durationSec;    saveGif('movingCharacter',totalFrames,{
      units:'frames',
      delay: 0
    });
  }
}

function draw() {
  if (mouseIsPressed && !prevMousePressed) {
    bgState = (bgState + 1) % 2;
    seedValue = random(1000);
    prevMousePressed = true;
  }
  if (!mouseIsPressed) {
    prevMousePressed = false;
  }

  if (keyIsPressed && key === ' ') {
    if (!prevSpacePressed) {
      mouthState = (mouthState + 1) % 3;
      prevSpacePressed = true;
    }
  } else {
    prevSpacePressed = false;
  }

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) accState = 0;
    else if (keyCode === DOWN_ARROW) accState = 1;
    else if (keyCode === RIGHT_ARROW) accState = 2;
    else if (keyCode === UP_ARROW) accState = 3;
  }

  if (bgState === 0) background('#FFB4B4');
  else background('#DCF5DC');

  randomSeed(seedValue);
  for (let i = 0; i < 12; i++) {
    let patX = random(width);
    let patY = random(height);
    let patSize = random(15, 45);
    stroke('#FFFFFFB4');
    strokeWeight(3);
    fill('#FFFFFF96');
    ellipse(patX, patY, patSize, patSize);
  }

  eyeX = constrain(map(mouseX, 0, width, -7, 7), -7, 7);
  eyeY = constrain(map(mouseY, 0, height, -5, 5), -5, 5);
  
  noStroke();
  fill('#3C2319');
  ellipse(300, 225, 210, 275);
  
  fill('#F0C8B4');
  arc(230, 215, 35, 40, HALF_PI, PI + HALF_PI);
  arc(370, 215, 35, 40, -HALF_PI, HALF_PI);
  
  fill('#F0C8B4');
  rect(270, 290, 60, 70);
  
  fill('#FFDCC8');
  ellipse(300, 200, 160, 210);
  
  fill('#3C2319');
  arc(300, 160, 160, 130, PI, TWO_PI);

  stroke('#3C2319');
  strokeWeight(2);
  line(250, 135, 245, 180);
  line(270, 130, 268, 185);
  line(290, 128, 290, 185);
  line(310, 128, 312, 185);
  line(330, 130, 332, 185);
  line(350, 135, 355, 180);

  noStroke();
  fill('#FFFFFF');
  ellipse(260, 210, 50, 30);
  ellipse(340, 210, 50, 30);
  
  fill('#000000');
  ellipse(260 + eyeX, 210 + eyeY, 18, 18);
  ellipse(340 + eyeX, 210 + eyeY, 18, 18);
  
  fill('#FFFFFF');
  ellipse(255 + eyeX, 205 + eyeY, 7, 7);
  ellipse(335 + eyeX, 205 + eyeY, 7, 7);

  noFill();
  stroke('#787878');
  strokeWeight(1.5);
  arc(260, 203, 50, 20, PI, TWO_PI);
  arc(340, 203, 50, 20, PI, TWO_PI);
  
  stroke('#644632');
  strokeWeight(3);
  arc(260, 185, 50, 15, PI, TWO_PI);
  arc(340, 185, 50, 15, PI, TWO_PI);

  noStroke();
  fill('#FFB4B4');
  ellipse(300, 245, 15, 10);

  stroke('#C85064');
  strokeWeight(3);
  noFill();
  if (mouthState === 0) {
    arc(300, 265, 50, 25, 0, PI);
  } else if (mouthState === 1) {
    fill('#C85064');
    ellipse(300, 275, 30, 35);
  } else {
    arc(300, 280, 40, 20, PI, TWO_PI);
  }

  noStroke();
  fill('#FF969678');
  ellipse(243, 240, 30, 20);
  ellipse(357, 240, 30, 20);
  
  fill('#FFFFFF');
  ellipse(220, 235, 10, 10);
  ellipse(380, 235, 10, 10);

  fill('#C8C8FF');
  rect(180, 340, 245, 120, 40);
  
  fill('#FFFFFF');
  triangle(300, 340, 270, 340, 285, 360);
  triangle(300, 340, 330, 340, 315, 360);
  
  ellipse(300, 375, 8, 8);

  if (accState === 0) {
    noFill();
    stroke('#643C28');
    strokeWeight(4);
    ellipse(260, 210, 55, 45);
    ellipse(340, 210, 55, 45);
    line(287, 210, 313, 210);
  } else if (accState === 1) {
    noFill();
    stroke('#DCA000');
    strokeWeight(2);
    arc(300, 340, 60, 30, 0, PI);
    fill('#64C8FF');
    noStroke();
    ellipse(300, 355, 12, 12);
  } else if (accState === 2) {
    fill('#FFFFFF');
    noStroke();
    triangle(340, 130, 360, 120, 360, 140);
    triangle(340, 130, 320, 120, 320, 140);
    fill('#B4B4B4');
    ellipse(340, 130, 12, 12);
  } else if (accState === 3) {
    fill('#B48C6E');
    noStroke();
    ellipse(300, 100, 175, 65);
    rect(295, 60, 10, 15);
  }
}