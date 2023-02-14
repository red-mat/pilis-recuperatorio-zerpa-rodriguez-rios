import { TriviaApi } from '@/services/trivia'
import { useEffect, useState } from 'react'

const SelectCategory = ({ className, hookForm }) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { register } = hookForm

  useEffect(() => {
    setIsLoading(true)
    TriviaApi.getCategory().then(cat => {
      const categories = Object.keys(cat).map(key => {
        return { name: key, tags: cat[key] }
      })
      setCategories(categories)
      setIsLoading(false)
    })
  }, [])

  return (
    <select className={className} {...register('category')}>
      {isLoading ||
        categories.map(category => (
          <option key={category.name} value={category.tags[0]}>
            {category.name}
          </option>
        ))}
    </select>
  )
}

export default SelectCategory
