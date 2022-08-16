import { Routes, Route } from 'react-router-dom'
import Dashboard from './view/pages/dashboard/Dashboard'
import Login from './view/pages/login/Login'
import Register from './view/pages/register/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Dashboard name='Orkun' />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
