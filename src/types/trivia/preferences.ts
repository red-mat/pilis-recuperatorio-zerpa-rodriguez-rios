export type TPreferences = IPreferences | undefined | null
export interface IPreferences {
  categories: string[]
  difficulty: 'easy' | 'medium' | 'hard' | ''
  limit: number
  tags: string[]
  region: string
}
