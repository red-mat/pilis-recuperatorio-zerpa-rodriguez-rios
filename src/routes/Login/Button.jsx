import { useForm } from 'react-hook-form'

export function Button({ hookForm, handleButton, className, label }) {
  const { handleSubmit } = hookForm
  return (
    <div className={className}>
      <button className="btn-form" onClick={handleSubmit(handleButton)}>
        {label}
      </button>
    </div>
  )
}
