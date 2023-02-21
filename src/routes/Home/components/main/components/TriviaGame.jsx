import { Trivia } from '@/components'
import { useTrivia } from '@/hooks/trivia/usePreferences'

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
