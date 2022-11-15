import React, { useState } from "react";

const Circles = () => {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  const [positions, setPositions] = useState([]);
  const [popped, setPopped] = useState([]);

  const handleUndo = () => {
    if (positions.length == 0) return null;
    setPopped([...popped, positions[positions.length - 1]]);
    positions.pop();
  };

  const handleRedo = () => {
    if (popped.length == 0) return null;
    setPositions([...positions, popped[popped.length - 1]]);
    popped.pop();
  };

  const handleMouseClick = (e) => setPositions([...positions, new Point(e.clientX, e.clientY)]);

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="circles-page" onClick={handleMouseClick}>
        {positions.map((point, i) => (
          <div key={i} className="circle" style={{ left: point.x - 5, top: point.y - 5 }}></div>
        ))}
      </div>
    </>
  );
};

export default Circles;
