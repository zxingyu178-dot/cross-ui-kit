/**
 * VideoPlayerPage 视频播放页（web）—— 播放器 + 进度条 + 控制栏 + 推荐列表。
 */
import { Card, Progress, Button, Tag } from '@kit/ui-web'

const recommends = [
  { title: '跨端组件库介绍', duration: '05:32', emoji: '🎬' },
  { title: 'Tailwind v4 实战', duration: '12:08', emoji: '💨' },
  { title: 'Tauri 2 桌面开发', duration: '18:45', emoji: '🦀' },
  { title: 'Taro 小程序入门', duration: '08:21', emoji: '📱' },
]

export function VideoPlayerPage() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* 播放器 */}
      <div className="lg:col-span-2">
        <div className="relative flex aspect-video items-center justify-center rounded-lg bg-black">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <span className="text-3xl text-white">▶️</span>
          </div>
          {/* 控制栏 */}
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/80 to-transparent p-3">
            <span className="text-bodySm text-white">02:15</span>
            <div className="flex-1">
              <Progress value={42} max={100} size="sm" />
            </div>
            <span className="text-bodySm text-white">05:20</span>
            <button className="text-white">⚙️</button>
            <button className="text-white">⛶</button>
          </div>
        </div>

        <div className="mt-3">
          <h1 className="text-titleMd font-semibold text-text-primary">CrossUI Kit 快速上手教程</h1>
          <div className="mt-2 flex items-center gap-3">
            <Tag variant="primary">前端</Tag>
            <Tag variant="neutral">教程</Tag>
            <span className="text-bodySm text-text-secondary">1.2 万次观看 · 2026-09-20</span>
          </div>
          <div className="mt-3 flex gap-2">
            <Button variant="secondary" size="sm">
              👍 点赞 234
            </Button>
            <Button variant="secondary" size="sm">
              ⭐ 收藏
            </Button>
            <Button variant="secondary" size="sm">
              ↗️ 分享
            </Button>
          </div>
        </div>
      </div>

      {/* 推荐 */}
      <Card>
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">相关推荐</h3>
        <div className="flex flex-col gap-3">
          {recommends.map((r) => (
            <div key={r.title} className="flex gap-2">
              <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded bg-bg-secondary text-2xl">
                {r.emoji}
              </div>
              <div>
                <p className="text-bodySm font-medium text-text-primary">{r.title}</p>
                <p className="text-bodySm text-text-tertiary">{r.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
