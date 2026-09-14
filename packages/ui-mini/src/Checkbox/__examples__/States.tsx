/** Checkbox 示例：基础、默认选中、半选、禁用、错误（mini）。 */
import { View } from '@tarojs/components'
import { useState } from 'react'
import { Checkbox } from '../index'

export function States() {
  const [agree, setAgree] = useState(true)

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}>
      <Checkbox label="未选中" />
      <Checkbox
        label={`受控选中（当前：${agree ? '已选' : '未选'}）`}
        checked={agree}
        onChange={setAgree}
      />
      <Checkbox label="默认选中（非受控）" defaultChecked />
      <Checkbox label="半选（父级）" indeterminate checked />
      <Checkbox label="禁用未选" disabled />
      <Checkbox label="禁用已选" disabled defaultChecked />
      <Checkbox label="错误态" error />
    </View>
  )
}
