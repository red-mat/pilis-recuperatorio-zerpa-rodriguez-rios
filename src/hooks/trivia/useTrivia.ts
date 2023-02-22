import { Trivia, TriviaApi } from '@/services/trivia'
import { IPreferences } from '@/types/trivia'
import { useCallback, useEffect, useState } from 'react'

export function useTrivia(preferences: IPreferences) {
  const [trivia, setTrivia] = useState<Trivia>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const fetchTrivia = useCallback(() => {
    setIsLoading(true)
    TriviaApi.getQuestions(preferences)
      .then(q => setTrivia(new Trivia(q)))
      .then(() => setIsLoading(false))
  }, [preferences])

  useEffect(() => {
    fetchTrivia()
  }, [fetchTrivia])

  const refetch = useCallback(() => {
    fetchTrivia()
  }, [fetchTrivia])

  return { isLoading, trivia, refetch }
}
