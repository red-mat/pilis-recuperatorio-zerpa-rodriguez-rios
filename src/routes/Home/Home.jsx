import { useLogin } from '@/context/login'
import { useState } from 'react'

import { Navigate } from 'react-router'

import { Trivia, FormTrivia } from '@/components'
import { Header, Main } from './components'
import { useOnSubmit } from './hooks/useOnSubmit'

const Home = () => {
  const { isLogin, login } = useLogin()
  const [isPlaying, setIsPlaying] = useState(false)
  const updatePreferences = useOnSubmit()

  const onSubmit = data => {
    updatePreferences(data)
    setIsPlaying(true)
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
          <Trivia onFinish={onFinish} />
        </Main.Playing>

        <Main.NotPlaying>
          <FormTrivia onSubmit={onSubmit} />
        </Main.NotPlaying>
      </Main>
    </>
  )
}

export default Home
