export function Storage(key: string, def: string) {
  const get = () => localStorage.getItem(key)
  const set = (data: string) => localStorage.setItem(key, data)
  const del = () => localStorage.removeItem(key)
  const init = () => localStorage.setItem(key, def)
  const exist = () => get() !== null
  const parse = () => JSON.parse(get())
  const create = () => exist() || init()

  return {
    get,
    set,
    del,
    init,
    exist,
    parse,
    create,
  }
}
