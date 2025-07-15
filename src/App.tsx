import React, { useState } from 'react';
import { StartScreen } from './components/StartScreen';
import { Game } from './components/Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleRestart = () => {
    setGameStarted(false);
    // Small delay to ensure clean state reset
    setTimeout(() => setGameStarted(true), 100);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      {!gameStarted ? (
        <StartScreen onStart={handleStart} />
      ) : (
        <Game onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;