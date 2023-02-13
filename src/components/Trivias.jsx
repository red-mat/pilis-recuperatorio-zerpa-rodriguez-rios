import Trivia from './Trivia'
import regions from '@/data/regions.json'
import api from '@/services/trivia/api'

const Trivias = ({ trivias }) => {
  return (
    <div>
      <h2>Trivias</h2>
      {trivias.map(trivia => (
        <Trivia
          key={trivia.id}
          category={trivia.category}
          difficulty={trivia.difficulty}
          tags={trivia.tags}
        />
      ))}
    </div>
  )
}
export default Trivias
