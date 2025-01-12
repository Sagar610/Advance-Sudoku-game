import React from "react";
import Cell from "./Cell";

const Board = ({ board, setBoard, setSelectedCell }) => {
  const handleChange = (row, col, value) => {
    if (!/^[1-9]?$/.test(value)) return; // Only allow digits 1-9 or empty
    const newBoard = [...board];
    newBoard[row][col] = value ? parseInt(value) : null;
    setBoard(newBoard);
  };

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col }); // Set the selected cell when a cell is clicked
  };

  return (
    <div className="flex items-center justify-center min-h-200 min-w-200">
      <div className="bg-gray-300 p-1 rounded-none grid grid-cols-9 gap-0.5 w-full max-w-lg mx-auto">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isPreFilled = cell !== null; // Consider filled if it's not null
            return (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={cell}
                onChange={(value) => handleChange(rowIndex, colIndex, value)}
                isHighlighted={rowIndex % 3 === 0 || colIndex % 3 === 0}
                isPreFilled={isPreFilled}
                onClick={() => handleCellClick(rowIndex, colIndex)}  // Handle cell click
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Board;
