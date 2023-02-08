import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '@/css/App.css'
import Login from './routes/Login/Login'
import Home from '@/routes/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
