import { describe, expect } from 'vitest'
import { User } from '@/services/login/user'

const USERS = [
  { name: 'test', password: 'test' },
  { name: 'test2', password: 'test2' },
]
describe('Test user class', () => {
  test('should register users', () => {
    const users = USERS.map(user => User.Register(user))

    users.forEach(user => {
      expect(user).not.toBeNull()
    })

    const repeatUser = User.Register(USERS[0])
    expect(repeatUser).toBeNull()

    users.forEach((user, i) => {
      expect(user.getData().name).toEqual(USERS[i].name)
    })
  })

  test('should Auth users', () => {
    const users = USERS.map(user => User.Auth(user))

    users.forEach(user => {
      expect(user).not.toBeNull()
    })

    users.forEach((user, i) => {
      expect(user.getData().name).toEqual(USERS[i].name)
    })
  })

  test('should update user name', () => {
    const userData = USERS[0]
    const failData = USERS[1]
    const newData = { name: 'test3' }

    let user = User.Auth(userData)

    user = user.update(failData)
    expect(user).toBeNull()

    user = User.Auth(userData)
    user = user.update(newData)
    expect(user).not.toBeNull()

    user = User.Auth(userData)
    expect(user).toBeNull()

    user = User.Auth({ name: newData.name, password: userData.password })
    expect(user).not.toBeNull()
  })

  test('should update user password', () => {
    const newData = { password: 'test3' }
    const userData = { name: 'test3', password: USERS[0].password }

    let user = User.Auth(userData)

    user = user.update(newData)
    expect(user).not.toBeNull()

    user = User.Auth(userData)
    expect(user).toBeNull()

    user = User.Auth({ name: userData.name, password: newData.password })
    expect(user).not.toBeNull()
  })

  test('should delete user', () => {
    const userData = USERS[1]
    let user = User.Auth(userData)

    const userDeleted = user.delete()
    expect(userDeleted).not.toBeNull()
    expect(userDeleted.delete()).toBeNull()

    user = User.Auth(userData)
    expect(user).toBeNull()
  })
})
