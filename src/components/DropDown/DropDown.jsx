import './DropDown.css'

import { useState } from 'react'

export function Item({ onClick, icon, label }) {
  return (
    <li className="DropDown__item" onClick={onClick}>
      <img src={icon} />
      {label}
    </li>
  )
}

export function DropDown({ icon, title, children }) {
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
DropDown.Item = Item
