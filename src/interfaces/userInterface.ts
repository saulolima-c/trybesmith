export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IdUser extends IUser {
  id: number,
  message?: string,
}