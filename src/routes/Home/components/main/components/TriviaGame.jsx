import { Trivia as FormTrivia } from '@/components'
import { CondComp } from '@/components/CondComp/CondComp'
import Modal from '@/components/modal/Modal'
import { useTrivia } from '@/hooks/trivia/useTrivia'
import { useMainContext } from '../context/context'
import { useHandleTrivia } from '../hooks/useHandleTrivia'

export function TriviaGame({ preferences }) {
  const { isLoading, trivia, refetch } = useTrivia(preferences)
  const onSubmit = useHandleTrivia(trivia)
  const {
    finish: { isFinish, setIsFinish },
    points: { points },
    playing: { setIsPlaying },
  } = useMainContext()

  return (
    <CondComp conditional={isLoading}>
      <CondComp.WhenTrue>
        <h2>Loading...</h2>
      </CondComp.WhenTrue>

      <CondComp.WhenFalse>
        <CondComp conditional={trivia?.getQuiz().length == 0}>
          <CondComp.WhenTrue>
            <h2>No trivia</h2>
          </CondComp.WhenTrue>
          <CondComp.WhenFalse>
            <FormTrivia onSubmit={onSubmit} trivia={trivia} />
          </CondComp.WhenFalse>
        </CondComp>

        <Modal isOpen={isFinish} handleClose={() => setIsFinish(false)}>
          <h1>{points}</h1>
          <button
            onClick={() => {
              setIsFinish(false)
              setIsPlaying(false)
            }}
          >
            return preferences
          </button>
          <button
            onClick={() => {
              refetch()
              setIsFinish(false)
            }}
          >
            refresh
          </button>
        </Modal>
      </CondComp.WhenFalse>
    </CondComp>
  )
}
