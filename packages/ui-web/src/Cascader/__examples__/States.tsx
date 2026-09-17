import { useState } from 'react'
import { Cascader } from '../index'
import type { CascaderOption } from '../Cascader.types'

const REGION_OPTIONS: CascaderOption[] = [
  {
    value: 'js',
    label: '江苏',
    children: [
      {
        value: 'xz',
        label: '徐州',
        children: [
          { value: 'ql', label: '泉山区' },
          { value: 'gm', label: '鼓楼区' },
        ],
      },
      {
        value: 'nj',
        label: '南京',
        children: [
          { value: 'xw', label: '玄武区' },
          { value: 'gl', label: '鼓楼区' },
        ],
      },
    ],
  },
  {
    value: 'sd',
    label: '山东',
    children: [
      { value: 'jn', label: '济南', children: [{ value: 'lx', label: '历下区' }] },
      { value: 'qd', label: '青岛', children: [{ value: 'sn', label: '市南区' }] },
    ],
  },
]

export function States() {
  const [val, setVal] = useState<string[]>([])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          省市区级联（当前：{val.join(' / ') || '未选择'}）
        </span>
        <div className="w-64">
          <Cascader
            value={val}
            onChange={setVal}
            options={REGION_OPTIONS}
            placeholder="请选择地区"
          />
        </div>
      </div>
    </div>
  )
}
