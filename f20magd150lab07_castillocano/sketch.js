let Bird;   //The type of class I'm going for with this nature themed lab

var leaves=[-40,40,120,200,280,360];

function setup() {
  createCanvas(400, 400);
  noStroke();
  print(leaves.length);
  Bird = new Robin(200,200);   //Speciftly, it will be a robin I make from
                               //the bird class  
}

function draw() {
  background(42,122,29);
  
  fill(43,255,0);
  
  leaves[0]+=0.5;       //This will create some leaves in the background
  leaves[1]+=0.5;       //that will fall down
  leaves[2]+=0.5;
  leaves[3]+=0.5;
  leaves[4]+=0.5;
  leaves[5]+=0.5;
  
  
  ellipse(leaves[0],40,70,40);
  ellipse(leaves[1],90,70,40);
  ellipse(leaves[2],140,70,40);
  ellipse(leaves[3],190,70,40);
  ellipse(leaves[4],240,70,40);
  ellipse(leaves[5],290,70,40);
  
  Bird.move();
  Bird.draw();
}

class Robin {           //Right here is where I start making the robin
  
constructor(x,y){
  var centerX,centerY,offset1,offset2;
  
  this.centerX=x;
  this.centerY=y;
  this.offset1=30;
  this.offset2=30;
}
  
  move(){
    this.centerX+=round(random(-10,10));
    this.centerY+=round(random(-10,10));
}
  
draw(){
  fill(255,0,0);
  circle(this.centerX,this.centerY,50);
  fill(0);
  ellipse(this.centerX+this.offset1,this.centerY+this.offset2,70,20);
  ellipse(this.centerX-this.offset2,this.centerY+this.offset2,70,20);
}
}