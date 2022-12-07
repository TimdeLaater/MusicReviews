export interface User {
  // Optioneel description attribuut

  _id: string,
  name: string,
  email: string,
  password: string,
  token?: Token,

}
export interface AuthUser {
  user: User,
  token: Token,
}
export interface Token {
  token: string
}
export interface LoginUser {
  email: string,
  password: string,
}
export interface RegisterUser extends LoginUser{
  name: string,
}

