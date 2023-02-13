import { Storage } from '@/uses/storage'
import { expect, test } from 'vitest'

const key = 'test'
const def = 'hola mundo'

describe('Storage uses', () => {
  const storage = Storage(key, def)

  test('should init storage', () => {
    let item = localStorage.getItem(key)
    expect(item).toBeNull()

    storage.init()

    item = localStorage.getItem(key)
    expect(item).toEqual(def)
  })

  test('should delete storage', () => {
    storage.del()
    const item = localStorage.getItem(key)
    expect(item).toBeNull()
  })

  test('should existence storage', () => {
    storage.create()
    expect(storage.exist()).toBeTruthy()

    storage.del()
    expect(storage.exist()).toBeFalsy()
  })

  test('should get storage', () => {
    const item = localStorage.getItem(key)
    expect(storage.get()).toEqual(item)
  })

  test('should set storage', () => {
    const value = 'adios mundo'
    storage.set(value)

    const item = localStorage.getItem(key)
    expect(storage.get()).toEqual(item)
  })

  test('should restore storage', () => {
    const value = 'chanchito feliz'

    storage.init()
    expect(storage.get()).toEqual(def)

    storage.set(value)
    expect(storage.get()).toEqual(value)

    storage.init()
    expect(storage.get()).toEqual(def)
  })

  test('should not recreate storage ', () => {
    const value = 'wazaaaaa'

    storage.set(value)
    storage.create()

    expect(storage.get()).toEqual(value)
  })
})
