import { IPreferences } from '@/types/trivia'
import { createContext } from 'react'

interface IContext {
  preferences: IPreferences
  setPreferences: (p: IPreferences) => void
}
export const Context = createContext<IContext>({
  preferences: undefined,
  setPreferences: (p: IPreferences) => {},
})
