import React, { useState } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import DifficultySelector from "./components/DifficultySelector";
import Timer from "./components/Timer";
import { generateSudoku } from "./Utils/sudokuGenerator"; 
import { solveSudoku } from "./Utils/sudokuSolver";
import "./index.css";

const App = () => {
  const [board, setBoard] = useState(generateSudoku("easy"));
  const [difficulty, setDifficulty] = useState("easy");
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(1000);
  const [hintsUsed, setHintsUsed] = useState(0);

  const handleSolve = () => {
    setBoard(solveSudoku(board));
    setScore(score - 100); // Reduce score for using solve
  };

  const handleHint = () => {
    // Add logic to reveal one hint
    const hintScorePenalty = 50;
    setHintsUsed(hintsUsed + 1);
    setScore(score - hintScorePenalty);
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    setBoard(generateSudoku(level));
    setScore(1000); // Reset score
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-2">
      <h1 className="text-4xl font-bold my-4">Sudoku Game</h1>
      <DifficultySelector onChange={handleDifficultyChange} />
      <Timer time={time} setTime={setTime} />
      <Board board={board} setBoard={setBoard} />
      <Controls onSolve={handleSolve} onHint={handleHint} />
      <div className="mt-4">
        <p className="text-lg font-semibold">Score: {score}</p>
        <p className="text-sm text-gray-600">Hints Used: {hintsUsed}</p>
      </div>
    </div>
  );
};

export default App;
