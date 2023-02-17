import { useContext } from 'react'
import { Context } from './context'

export function usePreferencesContext() {
  return useContext(Context)
}
