import SelectCategory from './components/SelectCategory'
import './FormTrivia.css'
import SelectTags from './components/SelectTags'
import SelectRegion from './components/SelectRegion'
import { useForm } from 'react-hook-form'
import SelectDifficultty from './components/SelectDifficultty'
import { useState } from 'react'

const FormTrivia = ({ onSubmit }) => {
  const hookForm = useForm()
  const [num, setNum] = useState(0)

  return (
    <div>
      <form onSubmit={hookForm.handleSubmit(onSubmit)}>
        <h2>..............The trivia..............</h2>
        <div className="form__input">
          <SelectCategory className="form__select" hookForm={hookForm} />
        </div>
        <div className="form__input">
          <SelectDifficultty className="form__select" hookForm={hookForm} />
        </div>
        <div className="form__input">
          <input
            className="input__range"
            min="0"
            max="20"
            type="range"
            value={num}
            onChange={e => setNum(e.target.value)}
            hookForm={hookForm}
          />
          <h3>{num}</h3>
        </div>
        <div className="form__input">
          <SelectTags
            className="form__select form__select--tags"
            hookForm={hookForm}
          />
        </div>
        <div className="form__input">
          <SelectRegion className="form__select" hookForm={hookForm} />
        </div>

        <button className="form__btn" type="submit">
          start
        </button>
      </form>
    </div>
  )
}
export default FormTrivia
