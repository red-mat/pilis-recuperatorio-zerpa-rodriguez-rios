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
      <div className="portal">
        <div className="portal__close" onClick={handleClose}>
          x
        </div>
        {children}
      </div>,
      content
    )
}
