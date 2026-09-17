import { useState } from 'react'
import { ColorPicker } from '../index'

export function States() {
  const [c1, setC1] = useState('#2563eb')
  const [c2, setC2] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（当前：{c1}）</span>
        <div className="w-56">
          <ColorPicker value={c1} onChange={setC1} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          自定义预设色（当前：{c2 || '未选择'}）
        </span>
        <div className="w-56">
          <ColorPicker
            value={c2}
            onChange={setC2}
            presetColors={[
              '#ef4444',
              '#f97316',
              '#eab308',
              '#22c55e',
              '#06b6d4',
              '#3b82f6',
              '#8b5cf6',
              '#ec4899',
            ]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <div className="w-56">
          <ColorPicker defaultValue="#2563eb" disabled />
        </div>
      </div>
    </div>
  )
}
