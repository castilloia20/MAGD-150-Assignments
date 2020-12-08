var rectX, rectY;
var circleX, circleY;
var rectSize = 25;
var circleSize = 25;
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;
var a,b;

function setup() {
  createCanvas(700, 400);
  rectColor = color(0);
  rectHighlight = color(51);
  circleColor = color(255);
  circleHighlight = color(204);
  baseColor = color(102);
  currentColor = baseColor;
  circleX = (370);
  circleY = (385);
  rectX = (330);
  rectY = (375);
  ellipseMode(CENTER);
  colorMode(HSB);
  a=25;
  b=height/2;

}

function draw() {

  push();
  update(mouseX, mouseY);
  background(currentColor);
  noStroke();
  fill(51, 51, 255);
  rect(0, 0, 700, 15);
  rect(0, 0, 10, 400);
  rect(690, 0, 40, 400);
  rect(0, 370, 700, 75);
  pop();
  
  push();
  fill(0);
  s = "On";
  text(s, 360, 390);
  pop();
  
  push();
  fill(0);
  w = "Off"
  text(w,330,390);
  pop();
  
  ellipse(a,b,50,50);
  a=a+6;

  if (rectOver) {
    noFill();
  } else {
    noFill();
  }
  stroke(255);
  rect(rectX, rectY, rectSize, rectSize);

  if (circleOver) {
    noFill();
  } else {
    noFill();
  }
  stroke(0);
  ellipse(circleX, circleY, circleSize, circleSize);
}

function update(x, y) {
  if (overCircle(circleX, circleY, circleSize)) {
    circleOver = true;
    rectOver = false;
  } else if (overRect(rectX, rectY, rectSize, rectSize)) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    currentColor = circleColor;
  }
  if (rectOver) {
    currentColor = rectColor;
  }
}

function overRect(x, y, width, height) {
  if (mouseX >= x && mouseX <= x + width &&
    mouseY >= y && mouseY <= y + height) {
    return true;
  } else {
    return false;
  }
}

function overCircle(x, y, diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter / 2) {
    return true;
  } else {
    return false;
  }

}