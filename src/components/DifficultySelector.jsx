import React from "react";

const DifficultySelector = ({ onChange, selected }) => {
  const difficulties = ["easy", "medium", "hard", "extreme"];

  return (
    <div className="flex space-x-2 mb-4">
      {difficulties.map((level) => (
        <button
          key={level}
          onClick={() => onChange(level)}
          className={`px-4 py-2 rounded ${
            (selected === level)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
