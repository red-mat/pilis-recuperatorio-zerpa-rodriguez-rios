import { TPublicData } from '@/types/login'
import { TLogin } from '@/types/login/login'
import { Storage } from '@/uses/storage'
import { User } from './user'

const STORAGE_KEY = 'LOGGER'

export class Logger {
  private static instance: Logger
  private static storage = Storage(STORAGE_KEY, undefined)

  private login: TLogin | undefined

  private constructor(login: TLogin | undefined) {
    if (login === undefined) this.login = undefined
    else {
      const parse = JSON.stringify(login)

      // update storage
      Logger.storage.init()
      Logger.storage.set(parse)

      // update instance
      this.login = login
    }
  }

  static Instance(): Logger {
    if (Logger.instance !== undefined) return Logger.instance
    if (!this.storage.exist()) {
      this.instance = new Logger(undefined)
      return this.instance
    }

    const login = Logger.storage.parse()
    this.instance = new Logger(login)

    return this.instance
  }

  LogIn(user: User): Logger {
    if (Logger.storage.exist()) throw new Error('is LogIn')

    Logger.instance = new Logger({
      id: user.getID(),
      data: user.getData(),
      token: user.getToken(),
    })

    return Logger.instance
  }

  isLogin(): boolean {
    return this.isLogin !== undefined
  }

  LogOut() {
    Logger.storage.del()
    this.login = undefined
  }

  getLogin(): TLogin {
    return { ...this.login } as TLogin
  }
}
