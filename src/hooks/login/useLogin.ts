import { useLogin } from '@/context/login'
import { Logger } from '@/services/login/logger'
import { User } from '@/services/login/user'
import { TUserData } from '@/types/login'
import { useCallback } from 'react'

export function useLogIn() {
  const { update, isLogin } = useLogin()

  return useCallback((data: TUserData) => {
    const user = User.Auth(data)

    if (isLogin) return
    if (!user) return

    const logger = new Logger()
    logger.LogIn(user)
    update(logger)
  }, [])
}
