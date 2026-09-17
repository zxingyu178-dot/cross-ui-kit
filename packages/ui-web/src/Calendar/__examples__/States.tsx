import { useState } from 'react'
import { Calendar } from '../index'

export function States() {
  const [date, setDate] = useState(new Date())
  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础（选中：{date.toLocaleDateString()}）
        </span>
        <Calendar value={date} onChange={setDate} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">非受控</span>
        <Calendar defaultValue={new Date(2024, 0, 15)} />
      </div>
    </div>
  )
}
