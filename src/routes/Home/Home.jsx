import { UserContext } from '@/context/UserContext'
import React from 'react'
import { useContext } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { correntUser } = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <div className="main-ontainer">
      <header>
        <section className="encabezado">
          <img src="/src/assets/usuario.png" alt="usuario" class="imagen" />
          <p>{JSON.stringify(correntUser)}</p>
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
