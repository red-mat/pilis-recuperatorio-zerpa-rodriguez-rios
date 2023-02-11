import * as users from '@/services/login/user-storage'
import { sha256 } from '@/uses/encoder'
import { expect, test } from 'vitest'

users.addUser
users.exist
users.dellUser
users.getUser
users.setUser

const user = { name: 'user', password: 'pass' }
describe('users management', () => {
  test('add user', () => {
    users.addUser(user)
    const getUser = users.getUser(sha256('user'))

    expect(getUser.name).toEqual(user.name)
    expect(getUser.password).not.toEqual(user.password)
  })

  test('exist user', () => {
    const id = sha256(user.name)

    expect(users.exist(id)).toBeTruthy()
  })

  test('set user', () => {
    const newUser = { name: 'user2', password: 'pass2' }
    const newID = sha256(newUser.name)

    users.setUser(newID, newUser)

    expect(users.exist(newID)).toBeTruthy()
    expect()
  })

  test('del user', () => {
    const id = sha256(user.name)
    users.dellUser(id)

    expect(users.exist(id)).toBeFalsy()
  })
})
