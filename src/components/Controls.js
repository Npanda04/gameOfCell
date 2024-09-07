import React from 'react';

const Controls = ({ isRunning, onPlay, onStop, onReset, onRandom }) => {
  return (
    <div className="controls">
      <button onClick={isRunning ? onStop : onPlay}>
        {isRunning ? 'Stop' : 'Play'}
      </button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onRandom}>Random</button>
    </div>
  );
};

export default Controls;
