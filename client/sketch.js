'use strict';

let userDigit;

function setup() {
  createCanvas(400, 200);
  userDigit = createGraphics(200, 200);
}

function keyPressed() {
  if (key === ' ') {
    userDigit.background(0);
  }

  if (keyCode === ENTER) {
    const userPixels = getPixelsFromDigit();

    fetch('/api/guess', {
      body: JSON.stringify({ inputs: userPixels }),
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then(console.log);
  }
}

function draw() {
  background(0);
  image(userDigit, 0, 0);
  drawDebugImage();
  if (mouseIsPressed) {
    userDigit.fill(255);
    userDigit.stroke(255);
    userDigit.ellipse(mouseX, mouseY, 16);
  }
}

function drawDebugImage() {
  const inputs = getPixelsFromDigit();
  const debugImage = createImage(28, 28);
  debugImage.loadPixels();
  inputs.forEach((value, index) => {
    const i = index * 4;
    debugImage.pixels[i] = value;
    debugImage.pixels[i + 1] = value;
    debugImage.pixels[i + 2] = value;
    debugImage.pixels[i + 3] = 255;
  });
  debugImage.updatePixels();
  image(debugImage, 200, 0, 200, 200);
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
