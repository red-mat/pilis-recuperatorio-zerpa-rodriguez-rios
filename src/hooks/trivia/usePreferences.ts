import { Trivia, TriviaApi } from '@/services/trivia'
import { IPreferences } from '@/types/trivia'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export function useTrivia(preferences: IPreferences) {
  const [loading, setLoading] = useState(true)
  const [trivia, setTrivia] = useState<Trivia>()
  const { data, isLoading, refetch } = useQuery('questions', () =>
    TriviaApi.getQuestions(preferences)
  )

  useEffect(() => {
    setLoading(false)
    if (!isLoading) setTrivia(new Trivia(data))
  }, [isLoading])

  useEffect(() => {
    if (trivia !== undefined) setLoading(false)
  }, [trivia])

  return { trivia, loading, refetch }
}
