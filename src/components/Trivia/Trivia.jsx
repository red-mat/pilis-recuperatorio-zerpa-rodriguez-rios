import './Trivias.css'

import { usePreferencesContext } from '@/context/preferences'
import CardTrivia from './components/CardTrivia'
import { useTrivia } from '@/hooks/trivia/useTrivia'

const ListQuiz = ({ trivia }) => {
  return (
    <div className="trivias">
      {trivia.getQuiz().map(q => (
        <CardTrivia key={q.getData().id} data={q.getData()} />
      ))}
    </div>
  )
}

export const Trivia = ({ onFinish }) => {
  const { preferences } = usePreferencesContext()
  const { trivia } = useTrivia(preferences)

  const onSubmit = data => console.log(data)

  if (trivia === undefined) return <h2>loading</h2>
  return (
    <>
      <h2>The trivias</h2>
      <form>
        <ListQuiz trivia={trivia} />
        <button onClick={onSubmit}>finalizar</button>
      </form>
    </>
  )
}
