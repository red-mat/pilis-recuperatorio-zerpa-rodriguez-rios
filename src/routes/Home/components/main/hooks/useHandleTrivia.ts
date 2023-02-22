import { Trivia } from '@/services/trivia'
import { IAnswerQuiz } from '@/types/trivia'
import { useCallback } from 'react'
import { useMainContext } from '../context/context'

type TData = Record<string, string | null>
function parse(data: TData): IAnswerQuiz[] {
  return Object.keys(data)
    .map(id => ({ id, response: data[id] }))
    .filter(a => a.response !== null)
}

export function useHandleTrivia(trivia: Trivia) {
  const {
    finish: { setIsFinish },
    points: { setPoints },
  } = useMainContext()

  return useCallback(
    (data: TData) => {
      const answers = parse(data)
      setPoints(trivia.resolve(answers))
      setIsFinish(true)
    },
    [trivia]
  )
}
