function WhenTrue({ children }) {
  return <>{children}</>
}
function WhenFalse({ children }) {
  return <>{children}</>
}
export function CondComp({ conditional, children }) {
  const [ItemA, ItemB] = children

  const WhenTrue = ItemA.type.name === 'WhenTrue' ? ItemA : ItemB
  const WhenFalse = ItemA.type.name === 'WhenFalse' ? ItemA : ItemB

  return conditional ? WhenTrue : WhenFalse
}

CondComp.WhenTrue = WhenTrue
CondComp.WhenFalse = WhenFalse
