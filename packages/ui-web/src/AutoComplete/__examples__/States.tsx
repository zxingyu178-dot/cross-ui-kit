import { useState } from 'react'
import { AutoComplete } from '../index'

const CITIES = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州' },
  { value: 'nanjing', label: '南京', disabled: true },
  { value: 'chengdu', label: '成都' },
  { value: 'wuhan', label: '武汉' },
]

export function States() {
  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（当前：{v1 || '空'}）</span>
        <div className="w-64">
          <AutoComplete value={v1} onChange={setV1} options={CITIES} placeholder="输入城市名" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义过滤（仅匹配开头）</span>
        <div className="w-64">
          <AutoComplete
            value={v2}
            onChange={setV2}
            options={CITIES}
            placeholder="输入拼音开头"
            filterOption={(input, opt) => opt.value.startsWith(input.toLowerCase())}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <div className="w-64">
          <AutoComplete defaultValue="北京" options={CITIES} disabled />
        </div>
      </div>
    </div>
  )
}
