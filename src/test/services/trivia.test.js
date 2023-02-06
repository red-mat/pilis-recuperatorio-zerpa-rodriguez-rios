import { getCategory, getTags } from '@/services/trivia-api'
import { expect } from 'vitest'

describe('Trivia Api', () => {
  let tags
  let category

  test('get tags', async () => {
    tags = await getTags()
    expect(tags).length(359)
  })

  test('get category', async () => {
    category = await getCategory()

    console.log(category)
    expect(category['Music']).toBeDefined()
  })
})
