import React from 'react';
import { ScamScenario } from '../types/game';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface AnswerOptionsProps {
  scenario: ScamScenario;
  selectedAnswer: string | null;
  showExplanation: boolean;
  onAnswerSelect: (answerId: string) => void;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  scenario,
  selectedAnswer,
  showExplanation,
  onAnswerSelect
}) => {
  return (
    <div className="space-y-4">
      {scenario.options.map((option) => {
        const isSelected = selectedAnswer === option.id;
        const isCorrect = option.isCorrect;
        
        let buttonClass = "w-full p-4 border rounded-lg text-left transition-all duration-200 ";
        
        if (showExplanation) {
          if (isCorrect) {
            buttonClass += "bg-green-500/10 border-green-500/30 text-green-400";
          } else if (isSelected && !isCorrect) {
            buttonClass += "bg-red-500/10 border-red-500/30 text-red-400";
          } else {
            buttonClass += "bg-zinc-800 border-zinc-700 text-zinc-400";
          }
        } else {
          if (isSelected) {
            buttonClass += "bg-blue-500/10 border-blue-500/30 text-blue-400";
          } else {
            buttonClass += "bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600";
          }
        }
        
        return (
          <div key={option.id} className="space-y-2">
            <button
              onClick={() => onAnswerSelect(option.id)}
              disabled={showExplanation}
              className={buttonClass}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option.text}</span>
                {showExplanation && (
                  <div className="flex-shrink-0 ml-4">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-red-400" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
            
            {showExplanation && (isSelected || isCorrect) && (
              <div className={`p-4 rounded-lg border-l-4 ${
                isCorrect 
                  ? 'bg-green-500/5 border-green-500/30 text-green-400' 
                  : 'bg-red-500/5 border-red-500/30 text-red-400'
              }`}>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{option.explanation}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};