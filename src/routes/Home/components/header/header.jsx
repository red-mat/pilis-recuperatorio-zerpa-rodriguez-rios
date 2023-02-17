import './header.css'

import { useLogOut } from '@/hooks/login'
import { DropDown } from '@/components'
import userIcon from '@/assets/user.png'
import exitIcon from '@/assets/icons/exit.svg'

export function Header({ login }) {
  const handleOut = useLogOut()

  return (
    <header className="header">
      <DropDown icon={userIcon} title={login.data.name}>
        <DropDown.Item onClick={handleOut} icon={exitIcon} label="Exit" />
      </DropDown>
    </header>
  )
}
