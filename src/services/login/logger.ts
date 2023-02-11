import { TPublicData } from '@/types/login'
import { TLogin } from '@/types/login/login'
import { Storage } from '@/uses/storage'
import { User } from './user'

const STORAGE_KEY = 'LOGGER'

export class Logger {
  private static storage = Storage(STORAGE_KEY, '')
  private login: TLogin | null = null

  constructor(login?: TLogin) {
    if (this.isLogin()) {
      const login = Logger.storage.parse()
      this.login = login
    } else if (!login) this.login = null
    else {
      const parse = JSON.stringify(login)

      // update storage
      Logger.storage.init()
      Logger.storage.set(parse)

      // update instance
      this.login = login
    }
  }

  LogIn(user: User) {
    if (this.isLogin()) {
      return
    }

    this.login = {
      id: user.getID(),
      data: user.getData(),
      token: user.getToken(),
    }

    const parse = JSON.stringify(this.login)
    Logger.storage.set(parse)
  }

  isLogin(): boolean {
    return Logger.storage.get() !== null
  }

  LogOut() {
    Logger.storage.del()
    this.login = null
  }

  getLogin(): TLogin {
    return this.login
  }
}
