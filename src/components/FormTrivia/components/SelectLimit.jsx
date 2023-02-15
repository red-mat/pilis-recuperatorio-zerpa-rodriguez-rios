const SelectLimit = ({ className, hookForm }) => {
  const { register, watch } = hookForm

  return (
    <>
      <input
        className={className}
        {...register('limit')}
        min="0"
        max="20"
        type="range"
      />
      <label htmlFor="limit">Cantidad de preguntas: {watch('limit')}</label>
    </>
  )
}

export default SelectLimit
