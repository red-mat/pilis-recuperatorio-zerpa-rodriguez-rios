import FormTrivia from '@/components/FormTrivia/FormTrivia'
import Trivias from '@/components/Trivias'
import { useLogin } from '@/context/login'
import { useState } from 'react'
import { Navigate } from 'react-router'
import { Header } from './components/header'
import './Home.css'

const Home = () => {
  const { isLogin, login } = useLogin()
  const [isPlaying, setIsPlaying] = useState(false)

  const onSubmit = data => {
    setIsPlaying(true)
    console.log(data)
  }

  const onFinish = data => {
    console.log(data)
    setIsPlaying(false)
  }

  if (!isLogin) return <Navigate to={'/login'} />

  return (
    <>
      <Header login={login} />
      <div className="main-container">
        {isPlaying ? (
          <Trivias onFinish={onFinish} />
        ) : (
          <FormTrivia onSubmit={onSubmit} />
        )}
      </div>
    </>
  )
}

export default Home
