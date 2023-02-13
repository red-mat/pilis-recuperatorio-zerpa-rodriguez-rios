export type TUserCredentials = IUserCredentials
interface IUserCredentials {
  name: string
  password: string
}

export type TPublicData = IPublicData
interface IPublicData {
  name: string
}

export type TUserData = IUserData
interface IUserData extends IPublicData {
  password: string
}

export type TUsersStorage = Record<string, string>
