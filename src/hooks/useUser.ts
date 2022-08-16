import { useState } from 'react'
import { getStoredAccount, getStoredUser, setStoredUser, setStoredAccount } from '../storage/userStorage'
import { Account, User } from '../model/user'

export const useUser = () => {

  const [user, setUser] = useState<User>(getStoredUser())
  const [account, setAccount] = useState<Account>(getStoredAccount())

  //meant to be called from useAuth
  const updateUser = (newUser: User) => {
    setUser(newUser)
    //update user in localStorage
    setStoredUser(newUser)
    //pre-populate user profile in React Query client
    // queryClient.setQueryData('user', newUser)
  }

  const updateAccount = (newAccount: Account) => {
    setAccount(newAccount)
    setStoredAccount(newAccount)
    // queryClient.setQueryData('account', newAccount)
  }

  return (
    { user, account, updateUser, updateAccount }
  )
}
