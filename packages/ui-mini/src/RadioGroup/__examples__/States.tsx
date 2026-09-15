/** RadioGroup 示例：受控、非受控、横向、尺寸、单项禁用、整组禁用（mini）。 */
import { View } from '@tarojs/components'
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
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View>受控（当前选中：{fruit}）</View>
        <RadioGroup options={FRUITS} value={fruit} onValueChange={setFruit} />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View>非受控（默认香蕉）</View>
        <RadioGroup options={FRUITS} defaultValue="banana" />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View>横向排列 + 含禁用项</View>
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
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View>小号 sm</View>
        <RadioGroup options={FRUITS} defaultValue="apple" size="sm" direction="horizontal" />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View>整组禁用</View>
        <RadioGroup options={FRUITS} defaultValue="apple" disabled />
      </View>
    </View>
  )
}
