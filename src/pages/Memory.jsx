import React, { useState, useEffect } from "react";
import cardBack from "../img/card-back.png";
import card1 from "../img/card-1.png";
import card2 from "../img/card-2.png";
import card3 from "../img/card-3.png";
import card4 from "../img/card-4.png";
import card5 from "../img/card-5.png";
import card6 from "../img/card-6.png";
import card7 from "../img/card-7.png";
import card8 from "../img/card-8.png";

const Memory = () => {
  const width = 4;
  const height = 4;

  const cards = {
    1: <img src={card1} alt="🤖" className="card-img" />,
    2: <img src={card2} alt="👽" className="card-img" />,
    3: <img src={card3} alt="🤡" className="card-img" />,
    4: <img src={card4} alt="👹" className="card-img" />,
    5: <img src={card5} alt="👻" className="card-img" />,
    6: <img src={card6} alt="😵‍💫" className="card-img" />,
    7: <img src={card7} alt="🥸" className="card-img" />,
    8: <img src={card8} alt="😈" className="card-img" />,
  };

  const [grid, setGrid] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [previousCell, setPreviousCell] = useState(undefined);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [reset, setReset] = useState(false);

  let randomNums = new Array(width * height).fill(0);
  let preGrid = new Array(width).fill("").map(() => new Array(height).fill(0));

  useEffect(() => {
    randomNums.map((e, i) => (randomNums[i] = i + 1 <= (width * height) / 2 ? i + 1 : i - (width * height) / 2 + 1));
    randomNums.sort(() => Math.random() - 0.5);
    preGrid.map((e, i) => e.map((e, j) => (preGrid[i][j] = randomNums[4 * i + j])));
    setGrid(preGrid);
    setRevealed(new Array(width).fill("").map(() => new Array(height.length).fill(false)));
    setPreviousCell(undefined);
    setScore(0);
    setGameWon(false);
  }, [reset]);

  const checkBoard = () => {
    for (let row of revealed) {
      for (let col of row) {
        if (col === false) return;
      }
    }
    setGameWon(true);
  };

  const handleReveal = (row, col) => {
    if (revealed[row][col]) return;
    let newRevealed = [...revealed];
    newRevealed[row][col] = true;
    setRevealed([...newRevealed]);

    if (previousCell) {
      setScore(score + 1);
      const thisClick = grid[row][col];
      const previousClick = grid[previousCell.row][previousCell.col];
      if (previousClick !== thisClick) {
        setTimeout(() => {
          newRevealed[row][col] = false;
          newRevealed[previousCell.row][previousCell.col] = false;
          setRevealed(newRevealed);
        }, 1000);
      } else {
        checkBoard();
      }

      setPreviousCell(undefined);
    } else {
      setPreviousCell({ row: row, col: col });
    }
  };

  return (
    <div className="memory-page">
      {gameWon && (
        <div className="won-popup-bg">
          <div className="won-popup-content">
            <h1>YOU WON!</h1>
            <h2>You used {score} guesses!</h2>
            <button onClick={() => setReset(!reset)} className="button restart">
              Restart
            </button>
          </div>
        </div>
      )}
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((item, colIndex) => (
              <div key={colIndex} className={revealed[rowIndex][colIndex] ? "flip-card flipped" : "flip-card not-flipped"} onClick={() => handleReveal(rowIndex, colIndex)}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">{cards[item]}</div>
                  <div className="flip-card-back">
                    <img src={cardBack} className="card-back card-img" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memory;
