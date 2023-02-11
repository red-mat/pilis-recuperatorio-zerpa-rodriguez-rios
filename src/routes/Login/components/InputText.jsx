export function Input({ className, name, type, error, placeholder, hookForm }) {
  const {
    register,
    formState: { errors },
  } = hookForm
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: error,
        })}
      />
      <p>{errors[name]?.message}</p>
    </>
  )
}
