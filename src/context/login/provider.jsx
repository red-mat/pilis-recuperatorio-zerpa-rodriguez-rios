import { Login } from './context'
import { useLogin } from './useLogin'

export function LoginProvider({ children }) {
  const value = useLogin()
  return <Login.Provider value={value}>{children}</Login.Provider>
}
