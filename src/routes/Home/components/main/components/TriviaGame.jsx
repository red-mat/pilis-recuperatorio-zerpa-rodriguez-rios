import { Trivia as FormTrivia } from '@/components'
import { CondComp } from '@/components/CondComp/CondComp'
import { useTrivia } from '@/hooks/trivia/useTrivia'
import { useMainContext } from '../context/context'
import { useHandleTrivia } from '../hooks/useHandleTrivia'

export function TriviaGame({ preferences }) {
  const { isLoading, trivia, refetch } = useTrivia(preferences)
  const onSubmit = useHandleTrivia(trivia)
  const {
    finish: { isFinish },
    points: { points },
  } = useMainContext()

  return (
    <CondComp conditional={isLoading}>
      <CondComp.WhenTrue>
        <h2>Loading...</h2>
      </CondComp.WhenTrue>

      <CondComp.WhenFalse>
        <FormTrivia onSubmit={onSubmit} trivia={trivia} />

        {isFinish && <p>{points}</p>}
      </CondComp.WhenFalse>
    </CondComp>
  )
}
