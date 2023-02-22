import './modal.css'
import closeIcon from '@/assets/icons/close.svg'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, handleClose, children }) {
  const content = document.createElement('div')

  useEffect(() => {
    document.body.appendChild(content)
    return () => {
      content.remove()
    }
  }, [content])

  if (isOpen)
    return createPortal(
      <div className="modal" onClick={handleClose}>
        <div className="modal__container">
          <img
            className="modal__close"
            onClick={handleClose}
            src={closeIcon}
            alt="close"
          />
          {children}
        </div>
      </div>,
      content
    )
}
