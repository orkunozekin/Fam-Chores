import React from 'react'
import LoginForm from './components/login-form/LoginForm'
import './Login.scss'
// import { LoginEntity } from "../model/login";

// Just a fake loginAPI
// export const isValidLogin = (loginInfo: LoginEntity): Promise<boolean> =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       // mock call
//       resolve(loginInfo.login === "admin" && loginInfo.password === "test");
//     }, 500);
//   });

const Login = () => {
  return (
    <div className='login-page'>
      <LoginForm />
    </div>
    
  )
}

export default Login
