import { Login } from './context'
import { useLogger } from './hooks/hook'

export function LoginProvider({ children }) {
  const value = useLogger()
  return <Login.Provider value={value}>{children}</Login.Provider>
}
