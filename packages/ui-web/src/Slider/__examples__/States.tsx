import { useState } from 'react'
import { Slider } from '../index'

export function States() {
  const [v1, setV1] = useState(30)
  const [v2, setV2] = useState(50)
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（当前 {v1}）</span>
        <Slider value={v1} onChange={setV1} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">范围 0-10 / 步长 0.5（当前 {v2}）</span>
        <Slider value={v2} onChange={setV2} min={0} max={10} step={0.5} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <Slider defaultValue={60} disabled />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">垂直方向（需父容器高度）</span>
        <div className="flex h-32 flex-row items-start gap-8">
          <Slider defaultValue={40} orientation="vertical" />
          <Slider defaultValue={70} orientation="vertical" />
          <Slider defaultValue={20} orientation="vertical" disabled />
        </div>
      </div>
    </div>
  )
}
