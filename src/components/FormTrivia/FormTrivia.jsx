import SelectCategory from './components/SelectCategory'
import './FormTrivia.css'
import SelectTags from './components/SelectTags'
import SelectRegion from './components/SelectRegion'
import { useForm } from 'react-hook-form'
import SelectDifficultty from './components/SelectDifficultty'
import SelectLimit from './components/SelectLimit'

export const FormTrivia = ({ onSubmit }) => {
  const hookForm = useForm()

  return (
    <>
      <form className="form" onSubmit={hookForm.handleSubmit(onSubmit)}>
        <h2>The trivia</h2>

        <SelectCategory className="form__select" hookForm={hookForm} />

        <SelectDifficultty className="form__select" hookForm={hookForm} />

        <SelectLimit
          className="form__select form__select--range"
          hookForm={hookForm}
        />

        <SelectTags className="form__select" hookForm={hookForm} />

        <SelectRegion className="form__select" hookForm={hookForm} />

        <button className="form__btn" type="submit">
          start
        </button>
      </form>
    </>
  )
}
