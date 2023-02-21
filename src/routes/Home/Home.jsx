import { useLogin } from '@/context/login'

import { Navigate } from 'react-router'

import MainProvider from '@/routes/Home/components/main/context/provider'
import { Header, Main } from './components'

const Home = () => {
  const { isLogin, login } = useLogin()

  if (!isLogin) return <Navigate to={'/login'} />

  return (
    <>
      <Header login={login} />
      <MainProvider>
        <Main />
      </MainProvider>
    </>
  )
}

export default Home
