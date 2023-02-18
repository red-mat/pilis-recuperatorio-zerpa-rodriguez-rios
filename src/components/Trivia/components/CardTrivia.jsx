import { useEffect, useState } from 'react'
import './CardTrivia.css'

const exampleData = {
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
}

const CardTrivia = ({ data = exampleData }) => {
  const [respuestas, setRespuestas] = useState([])

  useEffect(() => {
    const newRespuestas = [...data.incorrectAnswers]
    newRespuestas.push(data.correctAnswer)

    setRespuestas(newRespuestas)
    //console.log(newRespuestas)
  }, [])

  return (
    <>
      <fieldset className="fieldset__block">
        <legend className="block__question">{data.question}</legend>

        {respuestas.map(respuesta => (
          <label htmlFor={respuesta} key={respuesta} className="block__answer">
            <input
              className="radio__botton"
              id={data.id}
              name={data.id}
              type="radio"
              value={respuesta}
            />
            {respuesta}
          </label>
        ))}
      </fieldset>
    </>
  )
}

export default CardTrivia
