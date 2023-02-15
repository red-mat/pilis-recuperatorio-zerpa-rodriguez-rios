import { IQuestion } from '@/types/trivia'

export class Quiz {
  private question: IQuestion
  private isResolve: boolean = false

  constructor(question: IQuestion) {
    this.question = { ...question }
  }

  private shuffleArray(array: string[]) {
    return array
      .map(value => ({ index: Math.random(), value }))
      .sort((a, b) => a.index - b.index)
      .map(a => a.value)
  }

  getData() {
    const isResolve = this.isResolve
    return { isResolve, ...this.question }
  }

  getAnswers() {
    return this.shuffleArray([
      ...this.question.incorrectAnswers,
      this.question.correctAnswer,
    ])
  }

  getQuestion() {
    return this.question.question
  }

  resolve(answer: string) {
    this.isResolve = this.question.correctAnswer === answer
    return this.isResolve
  }
}
