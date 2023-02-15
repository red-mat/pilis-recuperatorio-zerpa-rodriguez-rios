import { TriviaApi } from '@/services/trivia'
import { useEffect, useState } from 'react'

const SelectTags = ({ className, hookForm }) => {
  const [tags, setTags] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { register } = hookForm

  useEffect(() => {
    setIsLoading(true)
    TriviaApi.getTags().then(tags => {
      setTags(tags)
      setIsLoading(false)
    })
  }, [])

  return (
    <select className={className} {...register('tag')}>
      <option value={''}>Seleccione etiqueta</option>
      {isLoading ||
        tags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
    </select>
  )
}

export default SelectTags
