import { useState } from 'react'
import { DatePicker } from '../index'

export function States() {
  const [d1, setD1] = useState<Date | undefined>()
  const [d2, setD2] = useState<Date>(new Date(2024, 0, 15))
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础（当前：{d1 ? d1.toLocaleDateString() : '未选择'}）
        </span>
        <div className="w-56">
          <DatePicker value={d1} onChange={setD1} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          中文格式（当前：{d2.toLocaleDateString()}）
        </span>
        <div className="w-56">
          <DatePicker value={d2} onChange={setD2} format="YYYY年MM月DD日" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <div className="w-56">
          <DatePicker defaultValue={new Date()} disabled />
        </div>
      </div>
    </div>
  )
}
