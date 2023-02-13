import { getCategory, getTags, TriviaApi } from '@/services/trivia'
import { expect, test } from 'vitest'
import regions from '@/data/regions.json'

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
