export const generateSudoku = (difficulty) => {
    const baseGrid = createCompletedGrid();
    const difficultyMap = {
        easy: 36,
        medium: 46,
        hard: 52,
        extreme: 62,
    };

    const cellsToRemove = difficultyMap[difficulty] || 36;
    return removeNumbers(baseGrid, cellsToRemove);
};

const createCompletedGrid = () => {
    const grid = Array.from({ length: 9 }, () => Array(9).fill(null));
    fillGrid(grid);
    return grid;
};

const fillGrid = (grid) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === null) {
                shuffle(nums);
                for (let num of nums) {
                    if (isSafe(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (fillGrid(grid)) return true;
                        grid[row][col] = null;
                    }
                }
                return false;
            }
        }
    }
    return true;
};

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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

const removeNumbers = (grid, count) => {
    const puzzle = grid.map((row) => row.slice());
    let attempts = count;
    while (attempts > 0) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (puzzle[row][col] !== null) {
            puzzle[row][col] = null;
            attempts--;
        }
    }
    return puzzle;
};
