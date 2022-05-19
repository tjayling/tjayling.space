(function () {
  let canvas, ctx;

  let cellWidth, cellHeight;

  let myFaceRectangles = new Array();

  function init() {
    canvas = document.getElementById("menuCanvas");
    ctx = canvas.getContext("2d");

    cellWidth = 20;
    cellHeight = 20;
    cellsX = canvas.width / cellWidth;
    cellsY = canvas.height / cellHeight;

    //drawGrid();

    // left eye
    myFaceRectangles.push(new Rectangle(80, 120, 60, 60, "gold"));
    // left pupil
    myFaceRectangles.push(new Rectangle(100, 140, 10, 10, "black", "black"));
    // right eye
    myFaceRectangles.push(new Rectangle(300, 80, 120, 140, "gold", "black"));
    // right pupil
    myFaceRectangles.push(new Rectangle(340, 160, 20, 20, "black", "black"));
    // mouth
    myFaceRectangles.push(new Rectangle(20, 400, 300, 80, "white"));

    
    myFaceRectangles[1].setUpdate(Math.random()*5, Math.random()*2, 85, 125, 125, 165);
    myFaceRectangles[3].setUpdate(Math.random()*5, Math.random()*2, 310, 390, 90, 190);


    myFaceRectangles[4].setUpdate(2, 1, 20, 180, 260, 400);



    // loop through rectangles and update for each
    window.requestAnimationFrame(update);
    //myFaceRectangles.forEach(update);
  }

  function draw(rects) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rects.forEach((rect) => {
      rect.draw();
    });
  }

  function update() {
    window.requestAnimationFrame(update);

    myFaceRectangles.forEach((rect) => {
      rect.update();
    });

    draw(myFaceRectangles);
  }

  class Rectangle {
    constructor(
      x = 0,
      y = 0,
      width = 0,
      height = 0,
      fillColor = "",
      strokeColor = "",
      strokeWidth = 2
    ) {
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
      this.fillColor = fillColor;
      this.strokeColor = strokeColor;
      this.strokeWidth = strokeWidth;

      this.moves = false;

      this.xDiff = 0;
      this.yDixx = 0;
      this.xBoundMin = 0;
      this.xBoundMax = canvas.width;
      this.yBoundMin = 0;
      this.yBoundMax = canvas.height;
    }

    update() {
      if (this.moves) {
        this.x += this.xDiff;

        if (this.x <= this.xBoundMin || this.x >= this.xBoundMax) {
          this.xDiff *= -1
        }

        this.y += this.yDiff;

        if (this.y < this.yBoundMin) {
          this.y = this.yBoundMin;
          this.yDiff *= -1
        }else if (this.y > this.yBoundMax) {
          this.y = this.yBoundMax;
          this.yDiff *= -1
        }
      }
    }

    draw() {
      const { x, y, width, height, fillColor, strokeColor, strokeWidth } = this;
      ctx.save();

      ctx.fillStyle = fillColor;
      ctx.lineWidth = strokeWidth;
      ctx.strokeStyle = strokeColor;

      ctx.beginPath();
      ctx.rect(x, y, width, height);
      // draw the items
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }

    setUpdate(
      xDiff = 0,
      yDiff = 0,
      xBoundMin = 0,
      xBoundMax = 0,
      yBoundMin = 0,
      yBoundMax = 0
    ) {
      this.moves = true;

      this.xDiff = xDiff;
      this.yDiff = yDiff;
      this.xBoundMin = xBoundMin;
      this.xBoundMax = xBoundMax,
      this.yBoundMin = yBoundMin,
      this.yBoundMax = yBoundMax;
    }

    get area() {
      return this.width * this.height;
    }
    get left() {
      return this.x;
    }
    get right() {
      return this.x + this.width;
    }
    get top() {
      return this.y;
    }
    get bottom() {
      return this.y + this.height;
    }
  }

  function drawGrid() {
    ctx.beginPath();
    ctx.strokeStyle = "#cccccc";
    for (let i = 0; i < cellsX; i++) {
      ctx.moveTo(i * cellWidth, 0);
      ctx.lineTo(i * cellWidth, canvas.height);
      for (let j = 0; j < cellsY; j++) {
        ctx.moveTo(0, j * cellWidth);
        ctx.lineTo(canvas.width, j * cellWidth);
      }
    }
    ctx.stroke();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
