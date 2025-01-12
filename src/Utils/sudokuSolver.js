export const solveSudoku = (board) => {
    const grid = board.map((row) => row.slice());
    if (solve(grid)) return grid;
    throw new Error("Unsolvable Sudoku");
  };
  
  const solve = (grid) => {
    const emptyCell = findEmpty(grid);
    if (!emptyCell) return true; // No empty cells, puzzle solved
  
    const [row, col] = emptyCell;
    for (let num = 1; num <= 9; num++) {
      if (isSafe(grid, row, col, num)) {
        grid[row][col] = num;
        if (solve(grid)) return true;
        grid[row][col] = null;
      }
    }
    return false;
  };
  
  const findEmpty = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === null) return [row, col];
      }
    }
    return null;
  };
  
  const isSafe = (grid, row, col, num) => {
    return (
      !grid[row].includes(num) &&
      !grid.map((r) => r[col]).includes(num) &&
      !isInBox(grid, row - (row % 3), col - (col % 3), num)
    );
  };
  
  const isInBox = (grid, startRow, startCol, num) => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[startRow + row][startCol + col] === num) return true;
      }
    }
    return false;
  };
  