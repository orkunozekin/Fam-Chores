import { Routes, Route } from 'react-router-dom'
import Dashboard from './view/pages/dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Dashboard name='Orkun' />} />
      </Routes>
    </div>
  )
}

export default App
