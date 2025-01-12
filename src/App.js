import React, { useState, useEffect } from "react";
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
  const [solution, setSolution] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const [gameOver, setGameOver] = useState(false);  // Track if the game is over
  const [errorMessage, setErrorMessage] = useState("");  // State for error messages


  const handleSolve = () => {
    try {
      setBoard(solveSudoku(board));  // Try to solve the Sudoku
      setScore(score - 100);  // Reduce score for using solve
      setErrorMessage("");    // Clear any previous errors
    } catch (error) {
      setErrorMessage("This puzzle cannot be solved. Please try a different one.");
    }
  };
// Reset the board to an empty state
  const generateEmptyBoard = () => {
    return Array.from({ length: 9 }, () => Array(9).fill(null));
  };
  const handleResetToEmpty = () => {
    setBoard(generateEmptyBoard());
    
  };

// Solve the Sudoku puzzle when the board changes
  useEffect(() => {
    setSolution(solveSudoku(board));
  }, [board]);

  const handleHint = () => {
    if (hintsUsed >= 4) {
      setGameOver(true);  // End game if 3 hints have been used
      return;
    }

    if (selectedCell) {
      const { row, col } = selectedCell;
      if (board[row][col] === null) {
        const hintValue = solution[row][col];
        const newBoard = [...board];
        newBoard[row][col] = hintValue;
        setBoard(newBoard);
        setHintsUsed(hintsUsed + 1);
        setScore(score - 300); // Reduce score for using a hint

        if (hintsUsed + 1 >= 4) {
          setGameOver(true);  // End game when the 3rd hint is used
        }
      }
    }
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    setBoard(generateSudoku(level));
    setScore(1000); // Reset score
    setErrorMessage("");  // Clear any errors
    setGameOver(false);  // Reset game over state
  };
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "easy":
        return "bg-green-300";
      case "medium":
        return "bg-yellow-200";
      case "hard":
        return "bg-orange-300";
      case "extreme":
        return "bg-red-300";
      default:
        return "bg-green-300"; // Default to easy
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center p-2 ${getDifficultyColor()}`}>
      <h2 className="text-4xl font-bold my-4">Sudoku Game & sudokuSolver</h2>
      <DifficultySelector selected={difficulty}   onChange={handleDifficultyChange}/>
      <Timer time={time} setTime={setTime} /><p className="text-xl text-gray-800">Hints Used: {hintsUsed} | Score : {score}</p>
      <Board board={board} setBoard={setBoard} setSelectedCell={setSelectedCell} />
      <Controls
        onSolve={handleSolve}
        onHint={handleHint}
        handleResetToEmpty={handleResetToEmpty}
        hintDisabled={gameOver || hintsUsed >= 3}  // Disable the hint button when the game is over or 3 hints have been used
      />
      <div className="mt-6">
        {gameOver && <p className="text-red-600 text-xl font-bold mt-4">Game Over! You've used all your hints.</p>}
        {errorMessage && <p className="text-red-600 text-xl font-bold mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default App;
