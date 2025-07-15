import React from 'react';
import { ScamScenario } from '../types/game';
import { AlertTriangle, Phone, Mail, Globe, Shield, CreditCard } from 'lucide-react';

interface ScenarioCardProps {
  scenario: ScamScenario;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Phishing': return <Mail className="w-5 h-5" />;
    case 'Phone Scam': return <Phone className="w-5 h-5" />;
    case 'Online Shopping': return <Globe className="w-5 h-5" />;
    case 'Social Media': return <Globe className="w-5 h-5" />;
    case 'Physical Security': return <Shield className="w-5 h-5" />;
    case 'Website Security': return <Globe className="w-5 h-5" />;
    default: return <CreditCard className="w-5 h-5" />;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy': return 'text-green-400 bg-green-400/10';
    case 'medium': return 'text-yellow-400 bg-yellow-400/10';
    case 'hard': return 'text-red-400 bg-red-400/10';
    default: return 'text-zinc-400 bg-zinc-400/10';
  }
};

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 mb-6">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-red-400">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">{scenario.title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-zinc-400">
            {getCategoryIcon(scenario.category)}
            <span className="text-sm">{scenario.category}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(scenario.difficulty)}`}>
            {scenario.difficulty}
          </span>
        </div>
      </div>
      
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
        <p className="text-zinc-300 leading-relaxed text-lg">
          {scenario.description}
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-white font-semibold mb-4">What should you do?</h3>
      </div>
    </div>
  );
};