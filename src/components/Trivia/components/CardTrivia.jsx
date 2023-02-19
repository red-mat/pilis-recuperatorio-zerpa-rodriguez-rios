import './CardTrivia.css'

import { useFormContext } from 'react-hook-form'

const CardTrivia = ({ id, question, answers }) => {
  const { register } = useFormContext()
  return (
    <>
      <fieldset className="fieldset__block">
        <legend className="block__question">{question}</legend>

        {answers.map(answer => (
          <label key={answer} className="block__answer">
            <input
              {...register(id)}
              className="radio__bottom"
              type="radio"
              value={answer}
            />
            {answer}
          </label>
        ))}
      </fieldset>
    </>
  )
}

export default CardTrivia
