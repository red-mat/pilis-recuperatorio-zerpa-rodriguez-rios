import { useLogin } from '@/context/login/useLogin'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { Button, Input } from './components'
import './Login.css'

const Login = () => {
  const { isLogin } = useLogin()
  const hookForm = useForm()

  if (isLogin) return <Navigate to="/" />
  return (
    <div className="sign-in-container">
      <h2>Ingresa con tu usuario y contraseña</h2>
      <form className="sign-in-form">
        <Input
          name="name"
          className="input-form"
          type="text"
          placeholder="Nombre del usuario"
          error="Debe ingresar su nombre de usuario"
          hookForm={hookForm}
        />

        <Input
          name="password"
          className="input-form"
          type="password"
          placeholder="Nombre del usuario"
          error="Debe ingresar su contraseña"
          hookForm={hookForm}
        />

        <div className="btn-login">
          <Button
            className="btn1-login"
            label="Iniciar Sesión"
            hookForm={hookForm}
            handleButton={() => {}}
          />

          <Button
            className="btn2-login"
            label="Registrarse"
            hookForm={hookForm}
            handleButton={() => {}}
          />
        </div>
      </form>
    </div>
  )
}

export default Login
