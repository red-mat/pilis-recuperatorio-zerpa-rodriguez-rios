import { IState } from '@/types/globals/state'
import { TUserData, TUserCredentials, TPublicData } from '@/types/login'
import { decoder, encoder, sha256 } from '@/uses/encoder'
import { UserStorage } from './user-storage'

export class User {
  private data: TUserData

  private constructor(data: TUserData) {
    this.data = data
  }

  static Register(data: TUserData): IState<User> {
    const id = sha256(data.name)
    const storage = UserStorage.Instance()

    if (storage.exist(id))
      return { error: true, state: 'ya existe un usuario con ese nombre' }

    const user = new User(data)
    storage.add(user)

    return { error: false, state: 'usuario registrado', value: user }
  }
  static Auth(credentials: TUserCredentials): IState<User> {
    const { name, password } = credentials

    const storage = UserStorage.Instance()
    const id = sha256(name)

    const encryptedData = storage.get(id)

    const stringData = decoder(password, encryptedData)
    if (stringData === '')
      return { error: true, state: 'credenciales incorrectas' }
    const data = JSON.parse(stringData)

    return {
      error: false,
      state: 'usuario autentificado',
      value: new User(data),
    }
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
  update(data: Partial<TUserData>): IState<User> {
    const newId = sha256(data.name)
    const storage = UserStorage.Instance()

    if (this.getID() !== newId && storage.exist(newId))
      return { error: true, state: 'ya existe un usuario con ese nombre' }

    const newData: TUserData = {
      name: data.name || this.data.name,
      password: data.password || this.data.password,
    }

    storage.delete(this.getID())
    return {
      error: false,
      state: 'usuario actualizado',
      value: new User(newData),
    }
  }
}
