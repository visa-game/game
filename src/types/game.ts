export interface ScamScenario {
  id: number;
  title: string;
  description: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface GameState {
  currentScenario: number;
  score: number;
  totalQuestions: number;
  answeredQuestions: number;
  isGameComplete: boolean;
  currentAnswer: string | null;
  showExplanation: boolean;
}