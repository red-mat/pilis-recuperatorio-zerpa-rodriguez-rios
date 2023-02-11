import { Logger } from '@/services/login/logger'
import { createContext } from 'react'

export const Login = createContext({
  isLogin: false,
  login: {},
  update: (logger: Logger) => {},
})
