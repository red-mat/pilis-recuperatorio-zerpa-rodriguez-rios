import { Storage } from '@/uses/storage'

const key = 'test'
const def = ''

describe('Storage uses', () => {
  const STest = Storage(key, def)

  test('should init storage', () => {
    let item = localStorage.getItem(key)

    expect(item).toBeNull()
    STest.init()

    item = localStorage.getItem(key)
    expect(item).toEqual(def)
  })
})
