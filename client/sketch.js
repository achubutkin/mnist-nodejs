'use strict';

let userDigit;

function setup() {
  createCanvas(200, 200);
  userDigit = createGraphics(200, 200);
}

function keyPressed() {
  if (key === ' ') {
    userDigit.background(0);
  }

  if (keyCode === ENTER) {
    const userPixels = getPixelsFromDigit();
  }
}

function draw() {
  background(0);
  image(userDigit, 0, 0);

  if (mouseIsPressed) {
    userDigit.fill(255);
    userDigit.stroke(255);
    userDigit.ellipse(mouseX, mouseY, 16);
  }
}

function getPixelsFromDigit() {
  const img = userDigit.get();
  const inputs = [];
  img.resize(28, 28);
  img.loadPixels();
  for (let i = 0; i < 784; i++) {
    inputs[i] = img.pixels[i*4];
  }
  return inputs;
}
