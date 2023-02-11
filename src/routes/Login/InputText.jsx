import { useForm } from 'react-hook-form'

export function Input({ name, type, error, placeholder, hookForm }) {
  const {
    register,
    formState: { errors },
  } = hookForm
  return (
    <>
      <input
        className="input-form"
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: error,
        })}
      />
      <p>{errors.username?.message}</p>
    </>
  )
}
