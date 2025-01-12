import React from "react";

const Cell = ({ value, onChange, isHighlighted, isPreFilled }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div
      className={`flex items-center justify-center h-12 w-12 border ${
        isHighlighted ? "border-gray-400" : "border-gray-500"
      }`}
    >
      <input
        type="text"
        value={value || ""}
        onChange={handleChange}
        className={`w-full h-full text-center bg-gray-600 text-gray-600 ${
          isPreFilled ? "text-gray-100 bg-blue-600" : ""
        }`}
        disabled={isPreFilled} // Disable editing pre-filled cells
      />
    </div>
  );
};

export default Cell;
