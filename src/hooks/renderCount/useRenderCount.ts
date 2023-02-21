import { useEffect, useRef } from 'react'

export function useRenderCount(title: string) {
  const count = useRef(1)

  useEffect(() => {
    console.log(title, count.current)
    count.current += 1
  })
}
