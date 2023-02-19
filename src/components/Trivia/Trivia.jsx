import './Trivias.css'

import { usePreferencesContext } from '@/context/preferences'
import { useTrivia } from '@/hooks/trivia/useTrivia'
import { useForm, FormProvider } from 'react-hook-form'

import CardTrivia from './components/CardTrivia'

const ListQuiz = ({ trivia }) => {
  return (
    <div className="trivias">
      {trivia.getQuiz().map(q => {
        const id = q.getData().id
        const question = q.getQuestion()
        const answers = q.getAnswers()

        return (
          <CardTrivia key={id} id={id} question={question} answers={answers} />
        )
      })}
    </div>
  )
}

export const Trivia = ({ onSubmit, trivia }) => {
  const { preferences } = usePreferencesContext()
  const { trivia, loading } = useTrivia(preferences)
  const hookForm = useForm()

  if (loading) return <h2>loading</h2>
  return (
    <>
      {/* TODO: remove title */}
      <h2>The trivias</h2>

      <FormProvider {...hookForm}>
        <form onSubmit={onSubmit}>
          <ListQuiz trivia={trivia} />
          <button>finalizar</button>
        </form>
      </FormProvider>
    </>
  )
}
