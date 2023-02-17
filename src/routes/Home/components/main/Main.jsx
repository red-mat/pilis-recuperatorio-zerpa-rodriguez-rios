import { PreferencesProvider } from '@/context/preferences'

function Playing({ children }) {
  return <>{children}</>
}

function NotPlaying({ children }) {
  return <>{children}</>
}
function Main({ isPlaying, children }) {
  const [ItemA, ItemB] = children

  const Playing = ItemA.type.name === 'Playing' ? ItemA : ItemB
  const NotPlaying = ItemA.type.name === 'NotPlaying' ? ItemA : ItemB

  return (
    <PreferencesProvider>
      {isPlaying ? Playing : NotPlaying}
    </PreferencesProvider>
  )
}

Main.Playing = Playing
Main.NotPlaying = NotPlaying

export default Main
