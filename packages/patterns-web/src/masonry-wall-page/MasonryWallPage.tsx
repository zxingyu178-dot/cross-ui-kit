/**
 * MasonryWallPage 瀑布流页（web）—— CSS columns 多列不等高卡片。
 */
import { Card, Tag, Button } from '@kit/ui-web'

const items = [
  { emoji: '🏔️', title: '山间晨雾', h: 160, tag: '风景', color: 'from-slate-100 to-blue-100' },
  { emoji: '☕', title: '慢煮时光', h: 220, tag: '生活', color: 'from-amber-100 to-orange-100' },
  { emoji: '🌊', title: '海岸线', h: 140, tag: '旅行', color: 'from-cyan-100 to-blue-100' },
  { emoji: '🎨', title: '色彩练习', h: 200, tag: '设计', color: 'from-rose-100 to-pink-100' },
  { emoji: '🌿', title: '绿植日记', h: 170, tag: '植物', color: 'from-emerald-100 to-teal-100' },
  { emoji: '🏙️', title: '城市夜色', h: 230, tag: '城市', color: 'from-indigo-100 to-purple-100' },
  { emoji: '🍞', title: '手作烘焙', h: 150, tag: '美食', color: 'from-yellow-100 to-amber-100' },
  { emoji: '📚', title: '周末书单', h: 190, tag: '阅读', color: 'from-stone-100 to-neutral-100' },
  { emoji: '🐱', title: '猫咪日常', h: 210, tag: '宠物', color: 'from-orange-100 to-rose-100' },
]

export function MasonryWallPage() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">发现 · 瀑布流</h3>
        <div className="flex gap-2">
          <Tag variant="primary">最新</Tag>
          <Tag variant="neutral">热门</Tag>
          <Tag variant="neutral">关注</Tag>
        </div>
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((it) => (
          <Card key={it.title} className="break-inside-avoid p-0">
            <div
              className={`flex items-center justify-center bg-gradient-to-br text-5xl ${it.color}`}
              style={{ height: it.h }}
            >
              {it.emoji}
            </div>
            <div className="p-3">
              <div className="flex items-center justify-between">
                <p className="text-bodyMd font-medium text-text-primary">{it.title}</p>
                <Tag variant="neutral" tone="soft">
                  {it.tag}
                </Tag>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-bodySm text-text-secondary">♡ 128 · 💬 12</span>
                <Button variant="ghost" size="sm">
                  收藏
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
