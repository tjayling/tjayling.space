"use strict";
(function () {
  let canvas, ctx;

  let cellWidth, cellHeight;
  let cellsX, cellsY;

  let myFaceRectangles = new Array();

  function init() {
    canvas = document.getElementById("solarCanvas");
    ctx = canvas.getContext("2d");

    let sun = new Planet(10, 10, 200, 200, `/img/earth.gif`);

    sun.draw();

    // loop through rectangles and update for each
    // window.requestAnimationFrame(update);
    //myFaceRectangles.forEach(update);
  }

  function loadImage(url) {
    return new Promise((r) => {
      let i = new Image();
      i.onload = () => r(i);
      i.src = url;
    });
  }

  const loadImg = async (imgURL) => {
    try {
      const img = await loadImage(imgURL);
      console.log("Success");
      return img;
    } catch (error) {
        console.error(`${imgURL} failed to load.`);
    }
  };

  class Planet {
    constructor(x, y, width, height, imgURL) {
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
      this.img = loadImg(imgURL);
      console.log(this.img);
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y);

    }

  }
  document.addEventListener("DOMContentLoaded", init);
})();

// $("#sun").hover(
//   function () {
//     $("#earth").show();
//     $("#mars").show();

//   },
//   function () {
//     $("#earth").hide();
//     $("#mars").hide();
//   }
// );
