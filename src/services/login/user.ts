import { TPublicData, TUserCredentials, TUserData } from '@/types/login'
import { decoder, encoder, sha256 } from '@/uses/encoder'
import { UserStorage } from './user-storage'

export class User {
  private data: TUserData

  private constructor(data: TUserData) {
    this.data = data
  }

  private updateData(newData: Partial<TUserData>) {
    const data = this.data

    return {
      name: newData.name || data.name,
      password: newData.password || data.password,
    }
  }

  static Register(data: TUserData): User {
    const storage = new UserStorage()

    const id = sha256(data.name)

    if (storage.exist(id)) return null

    const user = new User(data)
    storage.add(user)

    return user
  }
  static Auth(credentials: TUserCredentials): User {
    const storage = new UserStorage()

    const { name, password } = credentials
    const id = sha256(name)

    const encryptedData = storage.get(id)
    if (encryptedData === null) return null

    const stringData = decoder(password, encryptedData)
    if (stringData === '') return null

    const data = JSON.parse(stringData)
    return new User(data)
  }

  getID(): string {
    return sha256(this.data.name)
  }
  getToken(): string {
    const { name, password } = this.data
    return sha256(name + password)
  }
  getData(): TPublicData {
    return {
      name: this.data.name,
    }
  }
  parseData(): string {
    const { password } = this.data
    const data = JSON.stringify(this.data)

    return encoder(password, data)
  }
  update(data: Partial<TUserData>): User {
    const storage = new UserStorage()

    const newId = sha256(data.name)

    if (this.getID() !== newId && storage.exist(newId)) return null

    const newData = this.updateData(data)
    const userUpdate = new User(newData)

    storage.delete(this.getID())
    storage.add(userUpdate)

    return userUpdate
  }
  delete(): User {
    const storage = new UserStorage()

    const id = this.getID()
    const stateDelete = storage.delete(id)
    if (stateDelete === null) return null

    return new User(this.data)
  }
}
