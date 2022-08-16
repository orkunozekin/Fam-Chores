import { useUser } from './useUser'
import { LoginEntity } from '../model/login'
import { User } from '../model/user'
// import  '../storage/mock-data/user.json'

export const useAuth = () => {

  const { updateUser, updateAccount } = useUser()

  const logIn = (credentials: LoginEntity) => {
    let user: User
    fetch('http://localhost:3000/users')
      .then(response => {
        response.json()
      })
      .then()
    // updateUser()
  }

  return {}
}

export default useAuth