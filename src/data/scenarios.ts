import { ScamScenario } from '../types/game';
import scenariosData from './scenarios.json';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle the options for each scenario every time it's accessed
const shuffleScenarioOptions = (scenario: ScamScenario): ScamScenario => ({
  ...scenario,
  options: shuffleArray(scenario.options)
});

// Load scenarios from JSON and shuffle options each time
export const getShuffledScenarios = (): ScamScenario[] => {
  return (scenariosData as ScamScenario[]).map(shuffleScenarioOptions);
};

// Export the scenarios (this will be shuffled each time the module is imported)
export const scamScenarios: ScamScenario[] = getShuffledScenarios();