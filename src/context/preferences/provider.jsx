import { useState } from 'react'
import { Context } from './context'

export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(undefined)

  return (
    <Context.Provider value={{ preferences, setPreferences }}>
      {children}
    </Context.Provider>
  )
}
