import { FormTrivia } from '@/components'
import { useHandleForm } from '../hooks/useHandleForm'

export function FormPreferences() {
  const handleForm = useHandleForm()
  return <FormTrivia onSubmit={handleForm} />
}
