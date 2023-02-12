import { useLogin } from '@/context/login/useLogin'
import { Logger } from '@/services/login/logger'
import { useCallback } from 'react'

export function useLogOut() {
  const { update, isLogin } = useLogin()

  return useCallback(() => {
    if (!isLogin) return

    const logger = new Logger()

    logger.LogOut()
    update(logger)
  }, [])
}
