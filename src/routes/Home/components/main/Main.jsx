import { CondComp } from '@/components/CondComp/CondComp'
import { useMainContext } from '@/routes/Home/components/main/context/context'
import { FormPreferences } from './components/FormPreferences'
import { TriviaGame } from './components/TriviaGame'

export function Main() {
  const {
    playing: { isPlaying, setIsPlaying },
    preferences: { preferences },
  } = useMainContext()

  return (
    <CondComp conditional={isPlaying}>
      <CondComp.WhenFalse>
        <FormPreferences />
      </CondComp.WhenFalse>

      <CondComp.WhenTrue>
        <TriviaGame preferences={preferences} />
        <button onClick={() => setIsPlaying(false)}>exit</button>
      </CondComp.WhenTrue>
    </CondComp>
  )
}
