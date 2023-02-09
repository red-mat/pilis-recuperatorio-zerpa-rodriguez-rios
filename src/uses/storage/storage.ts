export function Storage(key: string, def: string) {
  const get = () => localStorage.getItem(key)
  const set = (data: string) => localStorage.setItem(key, data)
  const create = () => localStorage.setItem(key, def)
  const exist = () => get() === null
  const init = () => exist() || create()

  return {
    get,
    set,
    init,
    exist,
    create,
  }
}
