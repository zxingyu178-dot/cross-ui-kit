/** Cascader 示例：省市区级联（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Cascader } from '../index'
import type { CascaderOption } from '../Cascader.types'

const REGION_OPTIONS: CascaderOption[] = [
  {
    value: 'js',
    label: '江苏',
    children: [{ value: 'xz', label: '徐州', children: [{ value: 'ql', label: '泉山区' }] }],
  },
  {
    value: 'sd',
    label: '山东',
    children: [{ value: 'jn', label: '济南', children: [{ value: 'lx', label: '历下区' }] }],
  },
]

export function States() {
  const [val, setVal] = useState<string[]>([])
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 12, width: 256 }}>
      <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
        省市区级联（当前：{val.join(' / ') || '未选择'}）
      </Text>
      <Cascader value={val} onChange={setVal} options={REGION_OPTIONS} placeholder="请选择地区" />
    </View>
  )
}
