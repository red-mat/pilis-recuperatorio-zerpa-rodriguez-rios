import { Logger } from '@/services/login/logger'
import { createContext } from 'react'

const logger = Logger.Instance()
export const Login = createContext({
  isLogin: logger.isLogin(),
  login: logger.getLogin(),
  update: (logger: Logger) => {},
})
