import { useLogin } from '@/context/login'
import { Navigate } from 'react-router'
import './Home.css'

const Home = () => {
  const { isLogin, login } = useLogin()

  if (!isLogin) return <Navigate to={'/login'} />
  return (
    <div className="main-ontainer">
      <header>
        <section className="encabezado">
          <img src="/src/assets/usuario.png" alt="usuario" className="imagen" />
          <p>{login.data.name}</p>
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
