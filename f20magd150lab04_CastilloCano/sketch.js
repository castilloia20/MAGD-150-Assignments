var pressed=0;
var pressedState=0;
let x= 100;

function setup() {
  createCanvas(550, 600);
  stroke(0);
  background(200);
}

function draw(){
  if (pressedState==1) {
    fill(247,202,22);
    triangle(50,50,400,50,250,450);
  } else {
    fill(139,104,43);
    triangle(50,50,400,50,250,450);
  }
  
  if(pressedState==1){
    fill(252,183,22);
    rect(50,50,350,50);
  } else{
    fill(255,204,153);
    rect(50,50,350,50);
  }
  
  x=x-1;
  if (x<0){
    x=height;
  }
  line(0,x,width,x);  
  
  push();{
    if(mouseIsPressed){
      fill(255,0,0);
      ellipse(mouseX,mouseY,50,50);
    } else{
      fill(255,0,0);
      ellipse(mouseX,mouseY,70,70);
    }
    pop();
  }
}





function keyPressed(){
  pressed=pressed+1;
  pressedState=(pressed%2);
}