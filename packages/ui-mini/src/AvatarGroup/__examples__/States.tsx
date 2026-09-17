/** AvatarGroup 示例：基础头像组（mini）。 */
import { Text, View } from '@tarojs/components'
import { AvatarGroup } from '../index'
import type { AvatarGroupItem } from '../AvatarGroup.types'

const items: AvatarGroupItem[] = [
  { key: '1', text: '张', color: '#2563eb' },
  { key: '2', text: '李', color: '#16a34a' },
  { key: '3', text: '王', color: '#d97706' },
  { key: '4', text: '赵', color: '#dc2626' },
  { key: '5', text: '钱', color: '#7c3aed' },
]

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础头像组</Text>
        <AvatarGroup items={items} max={5} size={36} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>超出显示 +N</Text>
        <AvatarGroup items={items} max={3} size={40} />
      </View>
    </View>
  )
}
