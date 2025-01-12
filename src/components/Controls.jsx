import React from "react";

const Controls = ({ onSolve, onHint }) => {
  return (
    <div className="flex space-x-4 mt-4">
      <button
        onClick={onSolve}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Solve
      </button>
      <button
        onClick={onHint}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Hint
      </button>
    </div>
  );
};

export default Controls;
