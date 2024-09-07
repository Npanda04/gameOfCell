import React from 'react';
import Cell from './Cell';

const Board = ({ grid, setGrid, isRunning }) => {
  const handleCellClick = (row, col) => {
    if (isRunning) return;

    const newGrid = grid.map((rows, i) => 
      rows.map((cell, j) => (i === row && j === col ? (cell ? 0 : 1) : cell))
    );
    setGrid(newGrid);
  };

  return (
    <div className="board">
      {grid.map((rows, rowIndex) =>
        rows.map((col, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            isAlive={col}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Board;
