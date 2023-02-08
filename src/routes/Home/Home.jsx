import { UserContext } from '@/context/UserContext'
import React from 'react'
import { useContext } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <div className="main-ontainer">
      <header>
        <section className="encabezado">
          <img src="/src/assets/usuario.png" alt="usuario" className="imagen" />
          <p>{currentUser.username}</p>
        </section>
      </header>
      <div className="btn-start">
        <h1>Este es el home </h1>
        <button className="btn" type="submit">
          Start
        </button>
      </div>
    </div>
  )
}

export default Home
