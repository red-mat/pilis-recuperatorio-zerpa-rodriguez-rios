import { Trivia, TriviaApi } from '@/services/trivia'
import { IPreferences } from '@/types/trivia'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export function useTrivia(preferences: IPreferences) {
  const [trivia, setTrivia] = useState<Trivia>(undefined)
  const { data, isLoading, refetch } = useQuery('questions', () =>
    TriviaApi.getQuestions(preferences)
  )

  useEffect(() => {
    if (!isLoading) {
      setTrivia(() => new Trivia(data))
    }
  }, [isLoading])

  return { trivia, refetch }
}
