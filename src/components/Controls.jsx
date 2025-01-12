import React from "react";

const Controls = ({ onSolve, onHint, hintDisabled }) => {
  return (
    <div className="mt-4">
      <button 
        onClick={onSolve} 
        className="mr-4 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        Solve
      </button>
      <button 
        onClick={onHint} 
        disabled={hintDisabled}  // Disable the hint button if the game is over or 3 hints have been used
        className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
      >
        Hint
      </button>
    </div>
  );
};

export default Controls;
