import { useState } from 'react'
import { Rate } from '../index'

export function States() {
  const [score, setScore] = useState(3)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（受控，当前 {score} 分）</span>
        <Rate value={score} onChange={setScore} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">半星（allowHalf）</span>
        <Rate defaultValue={3.5} allowHalf />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义数量 / 字符 / 尺寸</span>
        <div className="flex flex-wrap items-center gap-4">
          <Rate defaultValue={4} count={10} size="sm" />
          <Rate defaultValue={3} character="♥" />
          <Rate defaultValue={5} size="lg" character="▲" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <Rate defaultValue={4} disabled />
      </div>
    </div>
  )
}
