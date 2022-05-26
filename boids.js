"use strict";
const flock = [];

let width, height;

let aSlider, cSlider, sSlider, pSlider;

function setup() {
  // canvas creation
  let dimensions = getCanvasDimensions();
  width = dimensions[0];
  height = dimensions[1];
  createCanvas(width, height);

  aSlider = createSlider(0, 5, 1, 0.1);
  aSlider.position(10, 160);
  cSlider = createSlider(0, 5, 1, 0.1);
  cSlider.position(10, 180);
  sSlider = createSlider(0, 5, 1, 0.1);
  sSlider.position(10, 200);
  pSlider = createSlider(50, 200, 50, 10);
  pSlider.position(10, 220);

  let boidsNo = random(50, 100);

  for (let i = 0; i < boidsNo; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(51);
  for (let boid of flock) {
    boid.flock(flock);
    boid.edges();
    boid.update();
    boid.draw();
  }
}

function windowResized() {
  let dimensions = getCanvasDimensions();
  width = dimensions[0];
  height = dimensions[1];
  resizeCanvas(width, height);
}

function getCanvasDimensions() {
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");
  let localWidth = body.clientWidth;
  let localHeight =
    body.clientHeight - header.clientHeight - footer.clientHeight;
  return [localWidth, localHeight];
}
