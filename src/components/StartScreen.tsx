import React from 'react';
import { Shield, Play, AlertTriangle, Target } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">VISA Scam Prevention</h1>
            <p className="text-zinc-400 text-lg">Master the art of spotting scams before they get you</p>
          </div>
          
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 mb-6">
            <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              What you'll learn
            </h2>
            <ul className="text-zinc-300 space-y-2 text-left">
              <li>• Spot fake emails that look scary but are totally bogus</li>
              <li>• Handle smooth-talking phone scammers like a pro</li>
              <li>• Shop online without getting ripped off</li>
              <li>• Avoid ATM traps and card skimmers</li>
              <li>• Know what to do when something feels fishy</li>
            </ul>
          </div>
          
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <h3 className="text-red-400 font-semibold mb-1">Important</h3>
                <p className="text-red-300 text-sm">
                  These scenarios are based on real scams that happen every day. We're showing you the tricks so you won't fall for them!
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={onStart}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center gap-3 mx-auto text-lg"
          >
            <Play className="w-6 h-6" />
            Let's Do This!
          </button>
        </div>
      </div>
    </div>
  );
};