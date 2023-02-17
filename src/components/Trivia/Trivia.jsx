import regions from '@/data/regions.json'
import { TriviaApi } from '@/services/trivia'
import CardTrivia from './components/CardTrivia'

const trivias = [
  {
    category: 'Sport & Leisure',
    id: '62417cbc8c3137686862d735',
    correctAnswer: 'Atlanta Falcons',
    incorrectAnswers: ['Atlanta Dynamo', 'Atlanta Marlins', 'Atlanta Rockets'],
    question: 'Which of these is an American Football team based in Atlanta?',
    tags: ['nfl', 'american_football', 'usa', 'sport'],
    type: 'Multiple Choice',
    difficulty: 'hard',
    regions: [],
    isNiche: false,
  },
  {
    category: 'Arts & Literature',
    id: '622a1c347cc59eab6f94f98f',
    correctAnswer: 'Native Son',
    incorrectAnswers: [
      'The English Patient',
      'The Metamorphosis',
      'The Moviegoer',
    ],
    question: "Which book contains the character 'Bigger Thomas'?",
    tags: ['fictitious_characters', 'literature', 'arts_and_literature'],
    type: 'Multiple Choice',
    difficulty: 'hard',
    regions: [],
    isNiche: false,
  },
  {
    category: 'Food & Drink',
    id: '622a1c367cc59eab6f9502ab',
    correctAnswer: 'Bergamot',
    incorrectAnswers: ['Juniper', 'Galangal', 'Cassia'],
    question: "What Is Used To Give Earl Grey It's Distinctive Flavour?",
    tags: ['food_and_drink'],
    type: 'Multiple Choice',
    difficulty: 'medium',
    regions: [],
    isNiche: false,
  },
  {
    category: 'Music',
    id: '622a1c397cc59eab6f950c99',
    correctAnswer: 'Metallica',
    incorrectAnswers: ['Alice Cooper', 'The Pussycat Dolls', 'Three 6 Mafia'],
    question:
      "Which American heavy metal band released the studio album 'Load'?",
    tags: ['music'],
    type: 'Multiple Choice',
    difficulty: 'hard',
    regions: [],
    isNiche: false,
  },
]

export const Trivia = ({ onFinish }) => {
  return (
    <>
      <h2>The trivias</h2>
      <form>
        {trivias.map(data => (
          <CardTrivia key={data.id} data={data} />
        ))}
        <button onClick={onFinish}>finalizar</button>
      </form>
    </>
  )
}
