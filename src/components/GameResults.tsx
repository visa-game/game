import React from 'react';
import { GameState } from '../types/game';
import { Award, Target, TrendingUp, RotateCcw, CheckCircle } from 'lucide-react';

interface GameResultsProps {
  gameState: GameState;
  onRestart: () => void;
}

export const GameResults: React.FC<GameResultsProps> = ({ gameState, onRestart }) => {
  const percentage = Math.round((gameState.score / gameState.totalQuestions) * 100);
  
  const getScoreMessage = () => {
    if (percentage >= 90) return { text: "Wow! You're basically a scam-spotting superhero now!", color: "text-green-400" };
    if (percentage >= 70) return { text: "Nice work! You've got good scam radar.", color: "text-blue-400" };
    if (percentage >= 50) return { text: "Not bad! A few more rounds and you'll be unstoppable.", color: "text-yellow-400" };
    return { text: "Hey, everyone starts somewhere! Try again to sharpen those skills.", color: "text-red-400" };
  };
  
  const scoreMessage = getScoreMessage();
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Game Complete!</h2>
          <p className="text-zinc-400">You've graduated from Scam Shield Academy!</p>
        </div>
        
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-zinc-400">Score</span>
              </div>
              <div className="text-3xl font-bold text-white">
                {gameState.score} / {gameState.totalQuestions}
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span className="text-zinc-400">Accuracy</span>
              </div>
              <div className="text-3xl font-bold text-white">
                {percentage}%
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <p className={`text-xl font-semibold ${scoreMessage.color}`}>
            {scoreMessage.text}
          </p>
        </div>
        
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 mb-6">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            Remember These Golden Rules
          </h3>
          <ul className="text-zinc-300 space-y-2 text-left">
            <li>• When in doubt, hang up and call the official number yourself</li>
            <li>• If it sounds too good to be true, it probably is</li>
            <li>• Real companies never ask for passwords or card details via email</li>
            <li>• Gift card payments = instant red flag, no exceptions</li>
            <li>• Trust your gut - if something feels off, it usually is</li>
          </ul>
        </div>
        
        <button
          onClick={onRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
        >
          <RotateCcw className="w-5 h-5" />
          Test Me Again!
        </button>
      </div>
    </div>
  );
};