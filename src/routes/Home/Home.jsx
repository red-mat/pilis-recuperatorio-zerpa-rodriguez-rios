import FormTrivia from '@/components/FormTrivia/FormTrivia'
import Trivias from '@/components/Trivias'
import { useLogin } from '@/context/login'
import { useState } from 'react'
import { Navigate } from 'react-router'
import { Header } from './components/header/header'
import Main from './components/main/Main'

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
      <Main isPlaying={isPlaying}>
        <Main.Playing>
          <Trivias onFinish={onFinish} />
        </Main.Playing>

        <Main.NotPlaying>
          <FormTrivia onSubmit={onSubmit} />
        </Main.NotPlaying>
      </Main>
    </>
  )
}

export default Home
