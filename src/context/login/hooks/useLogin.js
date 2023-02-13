import { useContext } from 'react'
import { Login } from '../context'

export function useLogin() {
  return useContext(Login)
}
