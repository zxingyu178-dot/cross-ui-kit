import { useState } from 'react'
import { TimeRangePicker } from '../index'

export function States() {
  const [value, setValue] = useState<[string, string]>(['', ''])
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础时间范围选择器</span>
        <div className="w-96">
          <TimeRangePicker value={value} onChange={setValue} />
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
          <TimeRangePicker separator="~" placeholder={['Start', 'End']} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-96">
          <TimeRangePicker value={['09:00', '18:00']} disabled />
        </div>
      </div>
    </div>
  )
}
