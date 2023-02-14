import { useEffect, useState } from 'react'

const difficulty = ['easy', 'medium', 'hard']

const SelectDifficultty = ({ className, hookForm }) => {
  const { register } = hookForm

  return (
    <select className={className} {...register('difficulty')}>
      {difficulty.map(diff => (
        <option key={diff} value={diff}>
          {diff}
        </option>
      ))}
    </select>
  )
}

export default SelectDifficultty
