import React from "react";
import Cell from "./Cell";

const Board = ({ board, setBoard }) => {
  const handleChange = (row, col, value) => {
    if (!/^[1-9]?$/.test(value)) return; // Only allow digits 1-9 or empty
    const newBoard = [...board];
    newBoard[row][col] = value ? parseInt(value) : null;
    setBoard(newBoard);
  };

  return (
    <div className="flex items-center justify-center min-h-100 min-w-100 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
      <div className="bg-gray-800 p-1 rounded-lg shadow-lg grid grid-cols-9 gap-1 w-full max-w-xl mx-auto">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => handleChange(rowIndex, colIndex, value)}
              isHighlighted={rowIndex % 3 === 0 || colIndex % 3 === 0}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Board;
