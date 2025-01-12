import React from "react";

const Cell = ({ value, onChange }) => {
  return (
    <input
      type="text"
      maxLength="1"
      className="w-8 h-8 text-center border border-gray-500 rounded"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Cell;
