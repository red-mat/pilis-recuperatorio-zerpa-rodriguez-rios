import { Logger } from '@/services/login/logger'
import { User } from '@/services/login/user'
import { describe, expect } from 'vitest'

const USER = { name: 'asdf', password: 'asdf' }

describe('Login Test', () => {
  test('should register user', () => {
    const logger = new Logger()

    const user = User.Register(USER)
    logger.LogIn(user)

    expect(user).not.toBeNull()

    const isLogin = logger.isLogin()
    expect(isLogin).toBeTruthy()

    const name = logger.getLogin().data.name
    expect(name).toEqual(USER.name)
  })

  test('logOut', () => {
    const logger = new Logger()

    expect(logger.isLogin()).toBeTruthy()
    const name = logger.getLogin().data.name
    expect(name).toEqual(USER.name)

    logger.LogOut()
    console.log(logger.getLogin())
    expect(logger.isLogin()).toBeFalsy()
  })

  test('should LogIn', () => {
    const logger = new Logger()
    const user = User.Auth(USER)

    expect(logger.isLogin()).toBeFalsy()

    logger.LogIn(user.value)
    expect(logger.isLogin()).toBeTruthy()

    const name = user.value.getData().name
    expect(name).toEqual(logger.getLogin().data.name)
  })
})
