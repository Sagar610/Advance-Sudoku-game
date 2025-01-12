import React from "react";

const Controls = ({ onSolve, onHint, hintDisabled, handleResetToEmpty }) => {
  return (
    <div className="mt-6 flex justify-center space-x-4">
      <button
        onClick={onSolve}
        className="px-6 py-3 bg-gray-900 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        Solve Game
      </button>
      <button
        onClick={onHint}
        disabled={hintDisabled} // Disable the hint button if the game is over or 3 hints have been used
        className="px-6 py-3 bg-gray-900 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        Hint
      </button>
      <button
        onClick={handleResetToEmpty}
        className="px-6 py-3 bg-gray-900 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        Fill Your Own
      </button>
    </div>
  );
};

export default Controls;
