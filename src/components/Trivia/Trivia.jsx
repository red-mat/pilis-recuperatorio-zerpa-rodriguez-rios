import './Trivias.css'

import { FormProvider, useForm } from 'react-hook-form'

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
  const hookForm = useForm()

  return (
    <>
      <FormProvider {...hookForm}>
        <form onSubmit={hookForm.handleSubmit(onSubmit)}>
          <ListQuiz trivia={trivia} />
          <button type="submit">finalizar</button>
        </form>
      </FormProvider>
    </>
  )
}
