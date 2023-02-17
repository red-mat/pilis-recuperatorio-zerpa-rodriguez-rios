import { usePreferencesContext } from '@/context/preferences'
import { IPreferences, TDifficulty } from '@/types/trivia'

interface IDataSubmit {
  category: string
  difficulty: TDifficulty
  limit: string
  tag: string
  region: string
}

const parse = (data: IDataSubmit): IPreferences => ({
  categories: [data.category],
  difficulty: data.difficulty,
  limit: parseInt(data.limit),
  region: data.region,
  tags: [data.tag],
})

export function useOnSubmit() {
  const { setPreferences } = usePreferencesContext()

  return (d: IDataSubmit) => {
    setPreferences(parse(d))
  }
}
