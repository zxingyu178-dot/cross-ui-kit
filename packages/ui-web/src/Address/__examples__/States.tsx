import { useState } from 'react'
import { Address } from '../index'
import type { AddressValue } from '../Address.types'

export function States() {
  const [value, setValue] = useState<AddressValue>({})
  const [value2, setValue2] = useState<AddressValue>({
    province: 'guangdong',
    city: 'shenzhen',
    district: 'nanshan',
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础地址选择</span>
        <div className="max-w-xl">
          <Address value={value} onChange={setValue} />
        </div>
        <span className="text-caption text-text-tertiary">
          选中：{value.province ?? '-'} / {value.city ?? '-'} / {value.district ?? '-'}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">预设值</span>
        <div className="max-w-xl">
          <Address value={value2} onChange={setValue2} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="max-w-xl">
          <Address
            value={{ province: 'beijing', city: 'beijing-city', district: 'chaoyang' }}
            disabled
          />
        </div>
      </div>
    </div>
  )
}
