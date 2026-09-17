import { useState } from 'react'
import { TagGroup } from '../index'
import type { TagGroupItem } from '../TagGroup.types'

const initialItems: TagGroupItem[] = [
  { key: '1', label: '标签一', color: 'primary' },
  { key: '2', label: '标签二', color: 'success' },
  { key: '3', label: '标签三', color: 'warning' },
  { key: '4', label: '标签四', color: 'danger' },
  { key: '5', label: '标签五', color: 'info' },
  { key: '6', label: '标签六', color: 'neutral' },
  { key: '7', label: '标签七', color: 'primary' },
]

export function States() {
  const [items, setItems] = useState<TagGroupItem[]>(initialItems)

  const handleClose = (key: string) => {
    setItems((prev) => prev.filter((item) => item.key !== key))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础标签组（全部显示）</span>
        <TagGroup items={items} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">超出显示 +N（max=4，共7个）</span>
        <TagGroup items={items} max={4} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">可关闭标签</span>
        <TagGroup
          items={items.slice(0, 4).map((item) => ({ ...item, closable: true }))}
          onClose={handleClose}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">不同尺寸</span>
        <div className="flex flex-col gap-2">
          <TagGroup items={items.slice(0, 3)} size="sm" />
          <TagGroup items={items.slice(0, 3)} size="md" />
          <TagGroup items={items.slice(0, 3)} size="lg" />
        </div>
      </div>
    </div>
  )
}
