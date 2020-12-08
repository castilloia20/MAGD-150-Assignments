let key
var dirx, diry, dirz;
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 30;
let table;

function preload() {
  key = loadModel("Worn_Key.obj", true);
  
  table=loadTable("Number Data.csv");
}

function setup() {
  createCanvas(510, 510, WEBGL);
  dirx = random(-.5, 5);
  diry = random(-.5, .5);
  dirz = random(-.5, .5);

  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
  
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');


  
    for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
}

function draw() {
  background(255);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, dirx, diry, dirz);
  pointLight(0, 0, 255, locX, locY, 250);


  translate(-240, -100, 0);


  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50, 50, 50);
  specularMaterial(250);
  pop();


  translate(140, 0, 0);
  push();
  scale(0.6);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  ambientMaterial(255);
  model(key);
  pop();
  
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  stroke(255);
  fill(255, 102, 94);
  box(85);
}