import { AvatarGroup } from '../index'
import type { AvatarGroupItem } from '../AvatarGroup.types'

const items: AvatarGroupItem[] = [
  { key: '1', text: '张', color: '#2563eb' },
  { key: '2', text: '李', color: '#16a34a' },
  { key: '3', text: '王', color: '#d97706' },
  { key: '4', text: '赵', color: '#dc2626' },
  { key: '5', text: '钱', color: '#7c3aed' },
  { key: '6', text: '孙', color: '#0891b2' },
  { key: '7', text: '周', color: '#be185d' },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础头像组（5个，圆形）</span>
        <AvatarGroup items={items} max={5} size={36} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">超出显示 +N（max=3，共7个）</span>
        <AvatarGroup items={items} max={3} size={40} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">方形头像</span>
        <AvatarGroup items={items} max={4} size={36} shape="square" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">大尺寸</span>
        <AvatarGroup items={items} max={5} size={48} />
      </div>
    </div>
  )
}
