import { useLogin } from '@/context/login'
import { useLogOut } from '@/hooks/login'
import { Navigate } from 'react-router'
import './Home.css'
import Trivia from '@/components/Trivia'

const Home = () => {
  const { isLogin, login } = useLogin()
  const handleOut = useLogOut()

  if (!isLogin) return <Navigate to={'/login'} />
  return (
    <>
      <header>
        <section className="encabezado">
          <img src="/src/assets/usuario.png" alt="usuario" className="imagen" />
          <p>{login.data.name}</p>
        </section>
      </header>
      <div className="main-container">
        <h1>Este es el home </h1>
        <Trivia />
        <button className="btn" type="submit" onClick={handleOut}>
          exit
        </button>
      </div>
    </>
  )
}

export default Home
