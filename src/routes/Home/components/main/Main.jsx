function Playing({ children }) {
  return <>{children}</>
}

function NotPlaying({ children }) {
  return <>{children}</>
}
export function Main({ isPlaying, children }) {
  const [ItemA, ItemB] = children

  const Playing = ItemA.type.name === 'Playing' ? ItemA : ItemB
  const NotPlaying = ItemA.type.name === 'NotPlaying' ? ItemA : ItemB

  return isPlaying ? Playing : NotPlaying
}

Main.Playing = Playing
Main.NotPlaying = NotPlaying
