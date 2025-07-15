import React, { useState } from 'react';
import { GameState, ScamScenario } from '../types/game';
import { getShuffledScenarios } from '../data/scenarios';
import { GameHeader } from './GameHeader';
import { ScenarioCard } from './ScenarioCard';
import { AnswerOptions } from './AnswerOptions';
import { GameResults } from './GameResults';
import { ArrowRight } from 'lucide-react';

interface GameProps {
  onRestart: () => void;
}

export const Game: React.FC<GameProps> = ({ onRestart }) => {
  // Get freshly shuffled scenarios each time the game starts
  const [scenarios] = useState<ScamScenario[]>(() => getShuffledScenarios());
  
  const [gameState, setGameState] = useState<GameState>({
    currentScenario: 0,
    score: 0,
    totalQuestions: scenarios.length,
    answeredQuestions: 0,
    isGameComplete: false,
    currentAnswer: null,
    showExplanation: false
  });

  const currentScenario = scenarios[gameState.currentScenario];

  const handleAnswerSelect = (answerId: string) => {
    if (gameState.showExplanation) return;
    
    const selectedOption = currentScenario.options.find(opt => opt.id === answerId);
    if (!selectedOption) return;
    
    setGameState(prev => ({
      ...prev,
      currentAnswer: answerId,
      showExplanation: true,
      score: prev.score + (selectedOption.isCorrect ? 1 : 0)
    }));
  };

  const handleNextQuestion = () => {
    const nextScenario = gameState.currentScenario + 1;
    
    if (nextScenario >= scenarios.length) {
      setGameState(prev => ({
        ...prev,
        isGameComplete: true,
        answeredQuestions: prev.answeredQuestions + 1
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentScenario: nextScenario,
        answeredQuestions: prev.answeredQuestions + 1,
        currentAnswer: null,
        showExplanation: false
      }));
    }
  };

  if (gameState.isGameComplete) {
    return (
      <div className="min-h-screen bg-zinc-950 p-6">
        <GameHeader gameState={gameState} />
        <div className="max-w-4xl mx-auto py-8">
          <GameResults gameState={gameState} onRestart={onRestart} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <GameHeader gameState={gameState} />
      
      <div className="max-w-4xl mx-auto p-6">
        <ScenarioCard scenario={currentScenario} />
        
        <div className="mb-6">
          <AnswerOptions
            scenario={currentScenario}
            selectedAnswer={gameState.currentAnswer}
            showExplanation={gameState.showExplanation}
            onAnswerSelect={handleAnswerSelect}
          />
        </div>
        
        {gameState.showExplanation && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              {gameState.currentScenario + 1 < scenarios.length ? 'Next Question' : 'View Results'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};