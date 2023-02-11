import { useContext } from 'react'
import { Login } from './provider'

export function useLogin() {
  return useContext(Login)
}
