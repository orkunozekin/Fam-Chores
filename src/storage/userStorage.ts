import { Account, User } from "../model/user"

// helper to get user from localstorage
export function getStoredUser(): User {
  const storedUser = localStorage.getItem('user')
  return JSON.parse(storedUser)
}

export function setStoredUser(user: User) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function clearStoredUser() {
  localStorage.removeItem('user')
  localStorage.removeItem('account')
}

export function setStoredAccount(account: Account) {
  // const cookies = new Cookies()
  // cookies.set('current_account', account.slug, { path: '/' })
  localStorage.setItem('account', JSON.stringify(account))
}

export function getStoredAccount() {
  const storedUser = getStoredUser()
  const storedAccount = localStorage.getItem('account')
  return storedAccount ? JSON.parse(storedAccount) : ((storedUser?.accounts?.length >= 1) ? storedUser.accounts[0] : null)
}