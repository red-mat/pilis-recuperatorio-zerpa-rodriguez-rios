import { TUserData, TUsersStorage } from '@/types/login/user'
import { sha256 } from '@/uses/encoder'
import { Storage } from '@/uses/storage'

const STORAGE_KEY = 'USERS'
const storage = Storage(STORAGE_KEY, '{}')

const getID = name => sha256(name)
function parseData(user: TUserData): TUserData {
  const { name, password } = user

  return {
    name,
    password: sha256(password),
  }
}

export function addUser(data: TUserData): void {
  storage.create()

  const users: TUsersStorage = JSON.parse(storage.get())
  users[getID(data.name)] = parseData(data)
  storage.set(JSON.stringify(users))
}
export function getUser(id: string): TUserData {
  const users = JSON.parse(storage.get())
  return users[id]
}
export function dellUser(id: string): void {
  const users = JSON.parse(storage.get())
  delete users[id]
  storage.set(JSON.stringify(users))
}
export function setUser(id: string, data: TUserData): void {
  const user = getUser(id)

  if (!user) return

  dellUser(id)
  addUser(data)
}
