"use strict";

let sun, earth, mars;
let width, height;
let planets;
let stars;
let imgs;

function preload() {
  imgs = {
    sun: loadImage(`/img/sun.gif`),
    earth: loadImage(`/img/earth.gif`),
    mars: loadImage(`/img/mars.gif`),
    saturn: loadImage(`/img/saturn.gif`),
  };
}

function setup() {
  let dimensions = getCanvasDimensions();
  width = dimensions[0];
  height = dimensions[1];
  createCanvas(width, height);

  planets = {
    sun: new Planet(250, 0, 0, 0.25, imgs["sun"]),
    earth: new Planet(50, 150, 1, -2, imgs["earth"]),
    mars: new Planet(40, 200, 0.5, -1.5, imgs["mars"]),
    saturn: new Planet(60, 350, 0.25, 0.75, imgs["saturn"]),
  };

  stars = new Array();
  let starsNo = random(100, 200);
  for (let i = 0; i < starsNo; i++) {
    stars.push(
      new Star(
        random(width),
        random(height),
        random(10)
      )
    );
  }

  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);

  let loadingGif = select("#loadingGif");
  loadingGif.remove();
}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  // draw stars
  for (let star of stars) {
    star.draw();
  }
  push();
  // translate screen
  translate(width / 2, height / 2);
  // draw planets
  for (let planet in planets) {
    planets[planet].update();
    planets[planet].draw();
  }
  pop();
}

class Planet {
  constructor(size, distance, speed, offset, img) {
    this.width = Number(size);
    this.height = Number(size);
    // distance from the sun
    this.distance = Number(distance);

    // angle offset
    this.offset = offset;
    //starting planet angle
    this.angle = Math.floor(random(360));
    // orbit speed
    this.speed = speed;
    // starting orbit angle
    this.orbit = Math.floor(random(360));

    this.img = img;
    this.active = false;
  }
  draw() {
    push();
    rotate(this.orbit);
    translate(this.distance, 0);
    rotate(this.angle);
    image(this.img, 0, 0, this.width, this.height);
    pop();
  }
  update() {
    this.orbit += this.speed;
    this.angle += this.offset;
    this.angle = this.angle < 0 ? this.angle : 360;
  }
}

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  draw() {
    stroke(255);
    strokeWeight(1.5);
    line(this.x - this.size / 2, this.y, this.x + this.size / 2, this.y);
    line(this.x, this.y - this.size / 2, this.x, this.y + this.size / 2);
    noStroke();
    ellipse(this.x, this.y, this.size * 0.75, this.size * 0.75);
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
