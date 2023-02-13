export type TQuestions = IQuestion[]
export interface IQuestion {
  category: string
  id: string
  correctAnswer: string
  incorrectAnswers: string[]
  question: string
  tags: string[]
  type: string
  difficulty: string
  regions: any[]
  isNiche: boolean
}

export type TCategories = Record<string, string[]>
export type TTags = string[]
