import { IAnswerQuiz, IMultipliers, IQuestion } from '@/types/trivia'
import { Quiz } from './quiz'

const MULTIPLIERS: IMultipliers = {
  difficulty: {
    easy: 2,
    medium: 5,
    hard: 10,
  },
  isNiche: 0,
}

export class Trivia {
  questions: Record<string, Quiz>
  basePoints: number
  multipliers: IMultipliers

  constructor(
    questions: IQuestion[],
    basePoints = 100,
    multipliers = MULTIPLIERS
  ) {
    this.basePoints = basePoints
    this.multipliers = multipliers
    questions.forEach(q => (this.questions[q.id] = new Quiz(q)))
  }

  private getMultipliers(quiz: Quiz): number[] {
    const { isResolve, difficulty, isNiche } = quiz.getData()

    const multipliers = []

    if (!isResolve) return [0]
    else multipliers.push(1)

    multipliers.push(this.multipliers.difficulty[difficulty])

    if (isNiche) multipliers.push(this.multipliers.isNiche)

    return multipliers
  }

  private getPoints(quiz: Quiz): number {
    const multiplier = this.getMultipliers(quiz).reduce((m1, m2) => m1 * m2)
    return this.basePoints * multiplier
  }

  resolve(answers: IAnswerQuiz[]): number {
    let totalPoints = 0
    for (const answer of answers) {
      const quiz = this.questions[answer.id]
      if (quiz.resolve(answer.response)) {
        totalPoints += this.getPoints(quiz)
      }
    }
    return totalPoints
  }
  getQuiz() {
    return Object.values(this.questions)
  }
}
