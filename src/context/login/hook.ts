import { Logger } from '@/services/login/logger'
import { useState, useCallback } from 'react'

export function useLogger() {
  const logger = new Logger()

  const [isLogin, setIsLogin] = useState(logger.isLogin())
  const [login, setLogin] = useState(logger.getLogin())

  const update = useCallback((log: Logger) => {
    setIsLogin(log.isLogin())
    setLogin(log.getLogin())
  }, [])

  return { isLogin, login, update }
}
