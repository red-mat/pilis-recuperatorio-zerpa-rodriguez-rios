import { useMainContext } from '@/routes/Home/components/main/context/context'
import { IPreferences, TDifficulty } from '@/types/trivia'

interface IDataInput {
  category: string
  difficulty: TDifficulty
  limit: string
  tag: string
  region: string
}
const parse = (data: IDataInput): IPreferences => {
  return {
    categories: [data.category],
    difficulty: data.difficulty,
    limit: parseInt(data.limit),
    region: data.region,
    tags: [data.tag],
  }
}

export function useHandleForm() {
  const {
    playing: { setIsPlaying },
    preferences: { setPreferences },
  } = useMainContext()

  return (data: IDataInput) => {
    const preferences = parse(data)
    setPreferences(preferences)
    setIsPlaying(true)
  }
}
