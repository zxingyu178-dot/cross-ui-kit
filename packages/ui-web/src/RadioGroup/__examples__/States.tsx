/** RadioGroup 示例：受控、非受控、横向、尺寸、单项禁用、整组禁用（web）。 */
import { useState } from 'react'
import { RadioGroup } from '../index'

const FRUITS = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
]

export function States() {
  const [fruit, setFruit] = useState('apple')
  const [pay, setPay] = useState('wechat')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-body-md text-text-tertiary">受控（当前选中：{fruit}）</span>
        <RadioGroup options={FRUITS} value={fruit} onValueChange={setFruit} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-md text-text-tertiary">非受控（默认香蕉）</span>
        <RadioGroup options={FRUITS} defaultValue="banana" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-md text-text-tertiary">横向排列 + 含禁用项</span>
        <RadioGroup
          options={[
            { value: 'wechat', label: '微信支付' },
            { value: 'alipay', label: '支付宝' },
            { value: 'cloud', label: '云闪付（维护中）', disabled: true },
          ]}
          value={pay}
          onValueChange={setPay}
          direction="horizontal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-md text-text-tertiary">小号 sm</span>
        <RadioGroup options={FRUITS} defaultValue="apple" size="sm" direction="horizontal" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-md text-text-tertiary">整组禁用</span>
        <RadioGroup options={FRUITS} defaultValue="apple" disabled />
      </div>
    </div>
  )
}
