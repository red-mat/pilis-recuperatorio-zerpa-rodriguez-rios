import FormTrivia from '@/components/FormTrivia/FormTrivia'
import Trivias from '@/components/Trivias'
import { useLogin } from '@/context/login'
import { useState } from 'react'
import { Navigate } from 'react-router'
import { Header } from './components/header'
import './Home.css'

const Home = () => {
  const { isLogin, login } = useLogin()
  const [jugando, setJugando] = useState(false)

  const onSubmit = data => {
    setJugando(true)
    console.log(data)
  }

  const onFinish = data => {
    console.log(data)
    setJugando(false)
  }

  if (!isLogin) return <Navigate to={'/login'} />

  return (
    <>
      <Header login={login} />
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
