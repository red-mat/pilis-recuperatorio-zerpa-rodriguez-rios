import { TUsersStorage } from '@/types/login/user'
import { Storage } from '@/uses/storage'
import { User } from './user'

const STORAGE_KEY = 'USERS'

const storage = Storage(STORAGE_KEY, '')
export class UserStorage {
  private data: TUsersStorage | null = null

  constructor() {
    storage.create()
    const strStorage = storage.get()

    if (strStorage === '') {
      this.data = null
      return
    }

    this.data = storage.parse() as TUsersStorage
  }

  add(newUser: User) {
    if (this.exist(newUser.getID())) return
    if (this.data === null) this.data = {}

    // Update data
    const id = newUser.getID()
    this.data[id] = newUser.parseData()

    // update storage
    const parseData = JSON.stringify(this.data)
    storage.set(parseData)
  }

  get(id: string): string {
    const userData = this.data[id]
    if (!userData) return null
    return userData
  }

  delete(id: string) {
    if (!this.exist(id)) return null

    // update data
    delete this.data[id]

    // update storage
    const parseData = JSON.stringify(this.data)
    storage.set(parseData)
  }

  exist(id: string): boolean {
    if (!this.data) return false
    return this.data.hasOwnProperty(id)
  }
}
