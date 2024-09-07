export const generateEmptyGrid = (rows, cols) => {
    return Array.from({ length: rows }).map(() => Array(cols).fill(0));
  };
  
  export const generateRandomGrid = (rows, cols) => {
    return Array.from({ length: rows }).map(() =>
      Array.from({ length: cols }).map(() => (Math.random() > 0.7 ? 1 : 0))
    );
  };
  