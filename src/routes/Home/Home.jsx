import { useLogin } from '@/context/login'
import { useLogOut } from '@/hooks/login'
import { Navigate } from 'react-router'
import './Home.css'
import FormTrivia from '@/components/FormTrivia/FormTrivia'
import Trivias from '@/components/Trivias'
import { useState } from 'react'

const Home = () => {
  const { isLogin, login } = useLogin()
  const handleOut = useLogOut()
  const [jugando, setJugando] = useState(false)

  const onSubmit = () => {
    setJugando(true)
  }

  const onFinish = () => {
    setJugando(false)
  }

  if (!isLogin) return <Navigate to={'/login'} />
  return (
    <>
      <header>
        <section className="encabezado">
          <img src="/src/assets/usuario.png" alt="usuario" className="imagen" />
          <p>{login.data.name}</p>
        </section>
        <button className="btn__exit" type="submit" onClick={handleOut}>
          exit
        </button>
      </header>
      <div className="main-container">
        {jugando ? (
          <Trivias onFinish={onFinish} />
        ) : (
          <FormTrivia onSubmit={onSubmit} />
        )}
      </div>
    </>
  )
}

export default Home
