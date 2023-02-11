import { Logger } from '@/services/login/logger'
import { TLogin } from '@/types/login/login'
import { createContext } from 'react'

export const Login = createContext({
  isLogin: false,
  login: {} as TLogin,
  update: (logger: Logger) => {},
})
