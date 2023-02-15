import { TDifficulty } from './shared'

interface IMultipliers {
  difficulty: Record<TDifficulty, number>
  isNiche: number
}

export interface IAnswerQuiz {
  id: string
  response: string
}
