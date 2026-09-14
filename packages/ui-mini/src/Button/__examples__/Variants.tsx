/** Button 示例：变体与状态（mini，H5/小程序共用）。 */
import { View } from '@tarojs/components'
import { Button } from '../index'

export function Variants() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 12 }}>
      <Button variant="primary">主要</Button>
      <Button variant="secondary">次要</Button>
      <Button variant="ghost">幽灵</Button>
      <Button variant="danger">危险</Button>
      <Button variant="link">链接</Button>
      <Button size="sm">小号</Button>
      <Button loading>提交中</Button>
      <Button disabled>已禁用</Button>
      <Button block>撑满宽度</Button>
    </View>
  )
}
