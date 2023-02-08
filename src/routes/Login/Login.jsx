import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../context/UserContext'
import Home from '../Home/Home'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { setCurrentUser } = useContext(UserContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    setCurrentUser(data)
    navigate('/')
  }

  return (
    <div className="sign-in-container">
      <h2>Ingresa con tu usuario y contraseña</h2>
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-form"
          type="text"
          placeholder="Nombre de usuario"
          {...register('username', {
            required: 'Debe ingresar su nombre de usuario',
          })}
        />
        <p>{errors.username?.message}</p>
        <input
          className="input-form"
          type="password"
          placeholder="Contraseña"
          {...register('password', {
            required: 'Debe ingresar su contraseña',
          })}
        />
        <p>{errors.password?.message}</p>
        <div className="btn-login">
          <div className="btn1-login">
            <button className="btn-form" type="submit">
              Iniciar Sesión
            </button>
          </div>
          <div className="btn2-login">
            <button className="btn-form" type="submit">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
