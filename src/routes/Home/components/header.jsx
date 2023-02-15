import { useLogOut } from '@/hooks/login'

export function Header({ login }) {
  const handleOut = useLogOut()

  return (
    <header>
      <section className="encabezado">
        <img src="/src/assets/usuario.png" alt="usuario" className="imagen" />
        <p>{login.data.name}</p>
      </section>
      <button className="btn__exit" type="submit" onClick={handleOut}>
        exit
      </button>
    </header>
  )
}
