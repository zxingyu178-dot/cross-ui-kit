import { useState } from 'react'
import { DateRangePicker } from '../index'

export function States() {
  const [value, setValue] = useState<[string, string]>(['', ''])
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础日期范围选择器</span>
        <div className="w-96">
          <DateRangePicker value={value} onChange={setValue} />
        </div>
        {value[0] && value[1] ? (
          <div className="mt-1 text-caption text-text-secondary">
            选中范围：{value[0]} 至 {value[1]}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义连接符</span>
        <div className="w-96">
          <DateRangePicker separator="~" placeholder={['Start', 'End']} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-96">
          <DateRangePicker value={['2026-01-01', '2026-12-31']} disabled />
        </div>
      </div>
    </div>
  )
}
