/** Select 示例：基础、受控、尺寸、禁用项、禁用整体、错误态（web）。 */
import { useState } from 'react'
import { Select } from '../index'

const FRUITS = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄（禁用）', value: 'grape', disabled: true },
]

export function States() {
  const [fruit, setFruit] = useState('apple')
  const [size, setSize] = useState('')

  return (
    <div className="flex w-72 flex-col gap-4">
      <Select options={FRUITS} value={fruit} onChange={setFruit} placeholder="选择水果" />
      <Select options={FRUITS} defaultValue="banana" />
      <Select size="sm" placeholder="小号" options={FRUITS.slice(0, 3)} />
      <Select size="md" placeholder="中号（默认）" options={FRUITS.slice(0, 3)} />
      <Select size="lg" placeholder="大号" options={FRUITS.slice(0, 3)} />
      <Select disabled placeholder="禁用整个选择器" options={FRUITS} />
      <Select error="请选择一项" placeholder="错误态" options={FRUITS} />
      <Select
        options={[
          { label: '小', value: 'sm' },
          { label: '中', value: 'md' },
          { label: '大', value: 'lg' },
        ]}
        value={size}
        onChange={setSize}
        placeholder="受控（外部可联动）"
      />
    </div>
  )
}
