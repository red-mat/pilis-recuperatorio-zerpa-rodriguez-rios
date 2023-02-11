import { Logger } from '@/services/login/logger'
import { useCallback, useState } from 'react'
import { Login } from './context'

const logger = Logger.Instance()

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(logger.isLogin())
  const [login, setLogin] = useState(logger.getLogin())

  const update = useCallback(log => {
    setIsLogin(log.isLogin())
    setLogin(log.getLogin())
  }, [])

  return (
    <Login.Provider value={{ isLogin, login, update }}>
      {children}
    </Login.Provider>
  )
}
