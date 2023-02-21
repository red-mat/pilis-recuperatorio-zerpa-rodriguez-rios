import { useState } from 'react'
import { MainContext } from './context'

function MainProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFinish, setIsFinish] = useState(false)

  const [preferences, setPreferences] = useState(undefined)
  const [points, setPoints] = useState(undefined)

  return (
    <MainContext.Provider
      value={{
        playing: { isPlaying, setIsPlaying },
        finish: { isFinish, setIsFinish },
        preferences: { preferences, setPreferences },
        points: { points, setPoints },
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export default MainProvider
