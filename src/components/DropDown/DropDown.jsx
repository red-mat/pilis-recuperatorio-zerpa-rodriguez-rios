import './DropDown.css'

import { useState } from 'react'

export function Item({ onClick, text }) {
  return (
    <li className="header__item" onClick={onClick}>
      {text}
    </li>
  )
}

DropDown.Item = Item
export function DropDown({ icon, title, children }) {
  ç
  const [active, setActive] = useState(false)
  return (
    <div className="DropDown" onClick={() => setActive(!active)}>
      <img
        src={icon}
        alt="icon"
        className="DropDown__icon"
        onClick={() => setActive(!active)}
      />

      <div
        className={`DropDown__menu${
          active ? ' DropDown__menu--active ' : ' DropDown__menu--inactive'
        }`}
      >
        <span className="DropDown__title">{title}</span>

        <ul className="DropDown__list">{children}</ul>
      </div>
    </div>
  )
}
