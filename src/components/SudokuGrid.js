import React from "react";

const SudokuGrid = ({ grid, setGrid }) => {
  return (
    <div className="grid grid-cols-9 gap-1 bg-black p-2">
      {grid
        ? grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-10 h-10 flex items-center justify-center border ${
                  (rowIndex + 1) % 3 === 0 ? "border-b-4" : "border-b"
                } ${(colIndex + 1) % 3 === 0 ? "border-r-4" : "border-r"}`}
              >
                {cell || ""}
              </div>
            ))
          )
        : Array.from({ length: 81 }).map((_, idx) => (
            <div key={idx} className="w-10 h-10 bg-black"></div>
          ))}
    </div>
  );
};

export default SudokuGrid;
