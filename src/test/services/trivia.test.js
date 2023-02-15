import { getCategory, getTags, TriviaApi } from '@/services/trivia'
import { describe, expect, test } from 'vitest'
import regions from '@/data/regions.json'
import { Quiz } from '@/services/trivia/quiz'

describe('Trivia Api', () => {
  let tags
  let category

  test('get tags', async () => {
    tags = await getTags()
    expect(tags.length > 0).toBeTruthy()
  })

  test('get category', async () => {
    category = await getCategory()

    expect(category['Music']).toBeDefined()
  })

  test('get questions from regions', async () => {
    const locations = Object.keys(regions)
    const preferences = { limit: 1, region: regions[locations[130]] }

    const quiz = await TriviaApi.getQuestions(preferences)

    expect(quiz).toHaveLength(1)
  })

  test('get questions from tags', async () => {
    const testTags = [tags[3], tags[1], tags[2]]
    const preferences = { limit: 1, tags: testTags }

    const quiz = await TriviaApi.getQuestions(preferences)

    expect(quiz).toHaveLength(1)
  })
})

describe('Trivia QUIZ', () => {
  let QuizID = {}
  let questions = []

  test('should Quiz', async () => {
    questions = await TriviaApi.getQuestions({ limit: 5 })

    for (const question of questions) {
      QuizID[question.id] = new Quiz(question)
    }

    for (const question of questions) {
      expect(QuizID[question.id].getData().id).toEqual(question.id)
    }
  })

  test('should getAnswers', () => {
    // compare two arrays
    const isEqual = (a = [], b = []) => {
      if (a.pop() !== b.pop()) return false
      if (a.length === 0) return true
      isEqual(a, b)
    }

    // get answers from question object
    const getAnswers = question => [
      ...question.incorrectAnswers,
      question.correctAnswer,
    ]

    // compare if answersQuiz and answers questions are not equals
    for (const question of questions) {
      const answersQuiz = QuizID[question.id].getAnswers()
      const answers = getAnswers(question)

      expect(answers.length === answersQuiz.length).toBeTruthy()
      expect(isEqual(answers, answersQuiz)).toBeFalsy()
    }
  })

  test('should get resolve state', () => {
    for (const question of questions) {
      const id = question.id

      // return true with correct answers
      let isResolve = QuizID[id].resolve(question.correctAnswer)
      expect(isResolve).toBeTruthy()

      // return false with incorrect answers
      isResolve = QuizID[id].resolve(question.question)
      expect(isResolve).toBeFalsy()
    }
  })
})
