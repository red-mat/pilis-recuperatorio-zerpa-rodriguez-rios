import { Trivia, TriviaApi } from '@/services/trivia'
import { IPreferences } from '@/types/trivia'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export function useTrivia(preferences: IPreferences) {
  const [trivia, setTrivia] = useState<Trivia>(undefined)
  const [loading, setLoading] = useState(true)
  const { data, isLoading, refetch } = useQuery('questions', () =>
    TriviaApi.getQuestions(preferences)
  )

  useEffect(() => {
    if (!isLoading) {
      setTrivia(() => new Trivia(data))
    }
  }, [isLoading])
  useEffect(() => {
    if (trivia === undefined) setLoading(true)
    else setLoading(false)
  })

  return { loading, trivia, refetch }
}
