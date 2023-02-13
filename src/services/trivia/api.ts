import {
  type TQuestions,
  type TPreferences,
  type TTags,
  type TCategories,
} from '@/types/trivia-api'

const API = 'https://the-trivia-api.com/api'

function getQuery(parameter: string, value: string | string[]): string {
  const query = parameter + '='

  if (typeof value === 'string') return value === '' ? value : query + value
  if (value.length === 0) return ''

  return query + value.reduce((parse, value) => parse + ',' + value)
}

function addQuery(query: string): string {
  if (query === '') return query
  return '&' + query
}

type TTriviaFetcher = (preferences: TPreferences) => Promise<TQuestions>
export const getQuestions: TTriviaFetcher = async preferences => {
  let url = API + '/questions?'

  if (preferences == null) return []
  if (preferences.limit === 0) return []

  url += getQuery('limit', preferences.limit.toString())

  const categoryQuery = getQuery('categories', preferences.categories)
  url += addQuery(categoryQuery)

  const difficulty = getQuery('difficulty', preferences.difficulty)
  url += addQuery(difficulty)

  const tags = getQuery('tags', preferences.tags)
  url += addQuery(tags)

  const region = getQuery('region', preferences.region)
  url += addQuery(region)

  const response = await fetch(url)
  return await response.json()
}

type TCategoryFetcher = () => Promise<TCategories>
export const getCategory: TCategoryFetcher = async () => {
  const URL = API + '/categories'

  const response = await fetch(URL)
  return await response.json()
}

type TTagsFetcher = () => Promise<TTags>
export const getTags: TTagsFetcher = async () => {
  const URL = API + '/tags'

  const response = await fetch(URL)
  return await response.json()
}

export const TriviaApi = {
  getTags,
  getCategory,
  getQuestions,
}
