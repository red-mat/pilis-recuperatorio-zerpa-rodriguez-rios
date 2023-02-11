import { Logger } from '@/services/login/logger'
import { createContext, useCallback } from 'react'

export const Login = createContext(null)
const logger = Logger.Instance()

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(logger.isLogin())
  const [login, setLogin] = useState(logger.getLogin())

  const update = useCallback(logger => {
    setIsLogin(logger.isLogin())
    setLogin(logger.getLogin())
  }, [])

  return (
    <Login.Provider value={{ isLogin, login, update }}>
      {children}
    </Login.Provider>
  )
}
