import { Trivia } from '@/services/trivia'
import { IPreferences } from '@/types/trivia'
import { createContext, useContext } from 'react'

interface IContext {
  playing: {
    isPlaying: boolean
    setIsPlaying: (ip: boolean) => void
  }
  finish: {
    isFinish: boolean
    setIsFinish: (f: boolean) => void
  }
  preferences: {
    preferences: IPreferences
    setPreferences: (p: IPreferences) => void
  }
  points: {
    points: number
    setPoints: (t: number) => void
  }
}
export const MainContext = createContext<IContext>(undefined)
export const useMainContext = () => useContext(MainContext)
