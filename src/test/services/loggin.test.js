import { Logger } from '@/services/login/logger'
import { User } from '@/services/login/user'
import { describe, expect } from 'vitest'

const USER = { name: 'asdf', password: 'asdf' }

describe('Login Test', () => {
  test('should make user', () => {
    const log = Logger.Instance()
    const user = User.Register(USER)
    log.LogIn(user)

    expect(user).not.toBeNull()

    const isLogin = log.isLogin()
    expect(isLogin).toBeTruthy()
    console.log(log.getLogin())

    // const nameLog = log.getLogin().data.name
    // const name = user.getData().name
    // expect(nameLog).toEqual(name)
  })
})
