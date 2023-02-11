import { TPublicData } from '@/types/login'
import { Storage } from '@/uses/storage'
import { User } from './user'

const STORAGE_KEY = 'LOGGER'

type TLogin = {
  id: string
  data: TPublicData
  token: string
}

export class Logger {
  private static instance: Logger | undefined
  private static storage = Storage(STORAGE_KEY, undefined)

  private login: TLogin

  private constructor(login: TLogin) {
    const parse = JSON.stringify(login)

    // update storage
    Logger.storage.init()
    Logger.storage.set(parse)

    // update instance
    this.login = login
  }

  static LogIn(user: User): Logger {
    if (this.isLogin) throw new Error('is LogIn')

    return new Logger({
      id: user.getID(),
      data: user.getData(),
      token: user.getToken(),
    })
  }

  static Instance(): Logger {
    if (Logger.instance !== undefined) return Logger.instance
    if (!this.isLogin()) return null

    const login = Logger.storage.parse()
    return new Logger(login)
  }

  static isLogin() {
    return Logger.storage.exist()
  }

  LogOut() {
    Logger.storage.del()
    Logger.instance = undefined
  }

  id(): string {
    return this.login.id
  }

  token(): string {
    return this.login.token
  }
  userData(): TPublicData {
    return this.login.data
  }
}
