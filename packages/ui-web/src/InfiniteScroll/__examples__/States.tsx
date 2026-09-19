import { useState } from 'react'
import { InfiniteScroll } from '../index'
import { Cell } from '../../Cell'

export function States() {
  const [count, setCount] = useState(5)
  return (
    <InfiniteScroll
      onLoadMore={async () => {
        await new Promise((r) => setTimeout(r, 600))
        setCount((c) => Math.min(c + 5, 20))
      }}
      hasMore={count < 20}
    >
      {Array.from({ length: count }).map((_, i) => (
        <Cell key={i} title={`列表项 ${i + 1}`} />
      ))}
    </InfiniteScroll>
  )
}
