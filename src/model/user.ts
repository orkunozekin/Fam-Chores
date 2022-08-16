export type Account = {
  id: number,
  name: string,
  ownerId: number
  users: Array<User>
}

export type User = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  role: string
}