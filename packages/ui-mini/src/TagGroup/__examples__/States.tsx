/** TagGroup 示例：基础标签组（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { TagGroup } from '../index'
import type { TagGroupItem } from '../TagGroup.types'

const initialItems: TagGroupItem[] = [
  { key: '1', label: '标签一', color: 'primary' },
  { key: '2', label: '标签二', color: 'success' },
  { key: '3', label: '标签三', color: 'warning' },
  { key: '4', label: '标签四', color: 'danger' },
  { key: '5', label: '标签五', color: 'info' },
]

export function States() {
  const [items, setItems] = useState<TagGroupItem[]>(initialItems)
  const handleClose = (key: string) => setItems((prev) => prev.filter((item) => item.key !== key))
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础标签组</Text>
        <TagGroup items={items} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>超出显示 +N</Text>
        <TagGroup items={items} max={3} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>可关闭标签</Text>
        <TagGroup
          items={items.slice(0, 3).map((item) => ({ ...item, closable: true }))}
          onClose={handleClose}
        />
      </View>
    </View>
  )
}
