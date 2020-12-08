var mySound;
let capture;
let sound, amplitude;
var Amp

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('Tesla-Jingle.mp3'); //These are where the two 
  //sound files I use go
  sound = loadSound('Electronika-Jingle.mp3');
}

function setup() {
  let cnv = createCanvas(400, 240);
  capture = createCapture(VIDEO); //This will create a live capture
  capture.size(320, 240); //footage from the computer's cam

  mySound.setVolume(0.1);
  mySound.play();

  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();

}


function draw() {
  background(0);
  image(capture, 0, 0, 320, 240); //This helps put the capture up
  filter(THRESHOLD); //In place on the sketch


  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
  ellipse(width / 2, height / 2, size, size);
}

function toggleSound() { //This controls when the amp is played
  if (sound.isPlaying()) { //or not
    sound.stop();
  } else {
    sound.play();
  }
}