import React from 'react';

const Cell = ({ isAlive, onClick }) => {
  return (
    <div
      className={`cell ${isAlive ? 'alive' : ''}`}
      onClick={onClick}
    />
  );
};

export default Cell;
