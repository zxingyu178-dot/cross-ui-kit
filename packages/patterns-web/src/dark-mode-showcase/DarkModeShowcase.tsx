/**
 * DarkModeShowcase 亮暗对比页（web）—— 左亮右暗并排展示同一组件。
 */
import { Button, Tag, Input, Avatar, Switch } from '@kit/ui-web'

export function DarkModeShowcase() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* 亮色 */}
      <div className="rounded-lg bg-bg-card p-5 text-text-primary">
        <h3 className="mb-4 text-titleSm font-medium">亮色 Light</h3>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要</Button>
            <Button variant="ghost">幽灵</Button>
          </div>
          <div className="flex gap-2">
            <Tag variant="primary">Primary</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="danger">Danger</Tag>
          </div>
          <Input placeholder="输入框 · 亮色" />
          <div className="flex items-center gap-2">
            <Avatar name="亮" />
            <span className="text-bodySm">头像 + 文字</span>
            <Switch checked />
          </div>
        </div>
      </div>

      {/* 暗色（手动套暗色 token 类） */}
      <div className="rounded-lg bg-[#0f172a] p-5 text-[#f1f5f9]">
        <h3 className="mb-4 text-titleSm font-medium">暗色 Dark</h3>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary" className="border-white/20 bg-white/10 text-white">
              次要
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              幽灵
            </Button>
          </div>
          <div className="flex gap-2">
            <Tag variant="primary">Primary</Tag>
            <Tag variant="success">Success</Tag>
            <Tag variant="warning">Warning</Tag>
            <Tag variant="danger">Danger</Tag>
          </div>
          <Input placeholder="输入框 · 暗色" className="border-white/20 bg-white/5 text-white" />
          <div className="flex items-center gap-2">
            <Avatar name="暗" />
            <span className="text-bodySm">头像 + 文字</span>
            <Switch checked />
          </div>
        </div>
      </div>
    </div>
  )
}
