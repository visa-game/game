import React from 'react';
import { GameState } from '../types/game';
import { Shield, Target, Award } from 'lucide-react';

interface GameHeaderProps {
  gameState: GameState;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ gameState }) => {
  const currentQuestion = gameState.isGameComplete ? gameState.totalQuestions : gameState.currentScenario + 1;

  return (
    <div className="bg-zinc-900 border-b border-zinc-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Scam Shield Academy</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">{gameState.score}</span>
              <span className="text-zinc-400">/ {gameState.totalQuestions}</span>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-zinc-400 mt-4">
          <span>Question {currentQuestion} of {gameState.totalQuestions}</span>
        </div>
      </div>
    </div>
  );
};