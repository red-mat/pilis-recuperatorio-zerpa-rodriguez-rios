import { Trivia } from '@/components'
import { CondComp } from '@/components/CondComp/CondComp'
import { useTrivia } from '@/hooks/trivia/useTrivia'

export function TriviaGame({ preferences }) {
  const { loading, trivia } = useTrivia(preferences)

  return (
    <CondComp conditional={loading}>
      <CondComp.WhenTrue>
        <h2>Loading...</h2>
      </CondComp.WhenTrue>

      <CondComp.WhenFalse>
        <Trivia onSubmit={data => console.log(data)} trivia={trivia} />
      </CondComp.WhenFalse>
    </CondComp>
  )
}
