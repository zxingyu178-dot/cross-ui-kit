/** Input 示例：基础、尺寸、密码、错误、禁用（mini，H5/小程序共用）。 */
import { View } from '@tarojs/components'
import { useState } from 'react'
import { Input } from '../index'

export function States() {
  const [name, setName] = useState('')

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}>
      <Input placeholder="基础输入框" value={name} onChange={setName} />
      <Input size="sm" placeholder="小号" />
      <Input size="md" placeholder="中号（默认）" />
      <Input size="lg" placeholder="大号" />
      <Input type="password" placeholder="密码输入" />
      <Input error="该字段为必填项" placeholder="错误态" />
      <Input disabled placeholder="禁用态" defaultValue="不可编辑" />
      <Input readOnly placeholder="只读态" defaultValue="只读内容" />
    </View>
  )
}
