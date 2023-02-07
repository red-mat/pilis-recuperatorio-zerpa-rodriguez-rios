import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import '@/css/App.css'
import Login from './routes/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        {/* <Route path="home" element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App
