import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import Board from './components/Board';
import Controls from './components/Controls';
import { generateEmptyGrid, generateRandomGrid } from './utils/gameHelpers';

const numRows = 25;
const numCols = 25;

const App = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid(numRows, numCols));
  const [isRunning, setIsRunning] = useState(false);
  const runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            let neighbors = 0;
            const directions = [
              [0, 1], [0, -1], [1, 0], [-1, 0],
              [1, 1], [1, -1], [-1, 1], [-1, -1]
            ];

            directions.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;

              if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  const handlePlay = () => {
    setIsRunning(true);
    runningRef.current = true;
    runSimulation();
  };

  const handleStop = () => {
    setIsRunning(false);
    runningRef.current = false;
  };

  const handleReset = () => {
    setGrid(generateEmptyGrid(numRows, numCols));
    handleStop();
  };

  const handleRandom = () => {
    setGrid(generateRandomGrid(numRows, numCols));
  };

  return (
    <div className="App">
      <h1>Game of Cell</h1>
      <Board grid={grid} setGrid={setGrid} isRunning={isRunning} />
      <Controls 
        isRunning={isRunning} 
        onPlay={handlePlay} 
        onStop={handleStop} 
        onReset={handleReset} 
        onRandom={handleRandom} 
      />
    </div>
  );
};

export default App;
