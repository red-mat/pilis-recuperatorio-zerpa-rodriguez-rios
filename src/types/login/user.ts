export type TUserLogin = IUserLogin
interface IUserLogin {
  name: string
  password: string
}

export type TPublicData = IPublicData
interface IPublicData {
  name: string
}

export type TUserData = IUserData
interface IUserData extends TPublicData {
  password: string
}

export type TUsersStorage = Record<string, TUserData>
