import { IQuestion } from '@/types/trivia'

export class Quiz {
  private question: IQuestion
  private isResolve: boolean = false
  private answers: string[] = []

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
    if (this.answers.length === 0)
      this.answers = this.shuffleArray([
        this.question.correctAnswer,
        ...this.question.incorrectAnswers,
      ])

    return this.answers
  }

  getQuestion() {
    return this.question.question
  }

  resolve(answer: string) {
    this.isResolve = this.question.correctAnswer === answer
    return this.isResolve
  }
}
