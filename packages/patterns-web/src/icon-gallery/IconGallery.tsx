/**
 * IconGallery 图标展示页（web）—— 常用图标 emoji 分组网格（icons 包完善后替换为矢量）。
 */
import { Card } from '@kit/ui-web'

const groups: { title: string; icons: { emoji: string; name: string }[] }[] = [
  {
    title: '操作',
    icons: [
      { emoji: '➕', name: 'add' },
      { emoji: '✏️', name: 'edit' },
      { emoji: '🗑️', name: 'delete' },
      { emoji: '🔍', name: 'search' },
      { emoji: '⚙️', name: 'setting' },
      { emoji: '⭐', name: 'star' },
    ],
  },
  {
    title: '导航',
    icons: [
      { emoji: '🏠', name: 'home' },
      { emoji: '📁', name: 'folder' },
      { emoji: '👤', name: 'user' },
      { emoji: '🔔', name: 'bell' },
      { emoji: '📊', name: 'chart' },
      { emoji: '📅', name: 'calendar' },
    ],
  },
  {
    title: '状态',
    icons: [
      { emoji: '✅', name: 'success' },
      { emoji: '❌', name: 'error' },
      { emoji: '⚠️', name: 'warning' },
      { emoji: 'ℹ️', name: 'info' },
      { emoji: '⏳', name: 'loading' },
      { emoji: '🔒', name: 'lock' },
    ],
  },
  {
    title: '通讯',
    icons: [
      { emoji: '💬', name: 'chat' },
      { emoji: '📧', name: 'mail' },
      { emoji: '📞', name: 'phone' },
      { emoji: '📷', name: 'camera' },
      { emoji: '🎵', name: 'music' },
      { emoji: '🔗', name: 'link' },
    ],
  },
]

export function IconGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {groups.map((g) => (
        <Card key={g.title}>
          <h3 className="mb-3 text-titleSm font-medium text-text-primary">{g.title}</h3>
          <div className="grid grid-cols-3 gap-3">
            {g.icons.map((i) => (
              <div
                key={i.name}
                className="flex flex-col items-center gap-1 rounded-lg bg-bg-secondary py-3"
              >
                <span className="text-2xl">{i.emoji}</span>
                <span className="font-mono text-bodySm text-text-secondary">{i.name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
