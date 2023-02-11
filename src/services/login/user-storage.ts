import { TUserData, TUsersStorage } from '@/types/login/user'
import { Storage } from '@/uses/storage'
import { User } from './user'

const STORAGE_KEY = 'USERS'

export class UserStorage {
  private static instance: UserStorage
  private static storage = Storage(STORAGE_KEY, '{}')
  private data: TUsersStorage

  private constructor() {
    UserStorage.storage.create()
    this.data = UserStorage.storage.parse()
  }

  public static Instance(): UserStorage {
    if (!UserStorage.instance) {
      UserStorage.instance = new UserStorage()
    }

    return UserStorage.instance
  }

  add(newUser: User) {
    if (this.exist(newUser.getID())) return null

    // Update data
    const id = newUser.getID()
    this.data[id] = newUser.parseData()

    // update storage
    const parseData = JSON.stringify(this.data)
    UserStorage.storage.set(parseData)
  }

  get(id: string): string {
    const userData = this.data[id]
    if (userData) return null
    return userData
  }

  delete(id: string) {
    if (!this.exist(id)) return null

    // update data
    delete this.data[id]

    // update storage
    const parseData = JSON.stringify(this.data)
    UserStorage.storage.set(parseData)
  }

  exist(id: string): boolean {
    return undefined !== this.data[id]
  }
}
