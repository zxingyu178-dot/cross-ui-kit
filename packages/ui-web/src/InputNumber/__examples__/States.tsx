import { useState } from 'react'
import { InputNumber } from '../index'

export function States() {
  const [v, setV] = useState<number | null>(1)
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（min 0 / max 10 / step 1）</span>
        <InputNumber defaultValue={1} min={0} max={10} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">小数（precision 2 / step 0.1）</span>
        <InputNumber defaultValue={3.14} precision={2} step={0.1} min={0} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">受控（当前值：{v ?? 'null'}）</span>
        <InputNumber value={v} onChange={setV} min={-5} max={5} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">无按钮 / 禁用 / 尺寸</span>
        <div className="flex flex-wrap items-center gap-3">
          <InputNumber controls={false} placeholder="请输入" />
          <InputNumber defaultValue={5} disabled />
          <InputNumber defaultValue={1} size="sm" />
          <InputNumber defaultValue={1} size="lg" />
        </div>
      </div>
    </div>
  )
}
