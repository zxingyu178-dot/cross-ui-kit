/**
 * SidebarLayoutPage 侧边导航布局页（web）—— 顶栏 + 侧边菜单 + 面包屑 + 内容。
 */
import { useState } from 'react'
import { Card, Menu, Breadcrumb, Tag, type MenuItem } from '@kit/ui-web'

const menus: MenuItem[] = [
  { key: 'overview', label: '概览', icon: '📊' },
  { key: 'devices', label: '设备管理', icon: '🔌' },
  { key: 'alerts', label: '告警中心', icon: '🚨' },
  { key: 'reports', label: '报表中心', icon: '📈' },
  { key: 'users', label: '用户权限', icon: '👥' },
  { key: 'logs', label: '操作日志', icon: '📝' },
]

export function SidebarLayoutPage() {
  const [active, setActive] = useState('devices')
  const current = menus.find((m) => m.key === active)

  return (
    <div className="flex h-[560px] overflow-hidden rounded-lg border border-border-default bg-bg-card">
      {/* 侧边 */}
      <aside className="w-44 border-r border-border-default bg-bg-secondary">
        <div className="border-b border-border-default px-4 py-4">
          <p className="text-titleSm font-semibold text-text-primary">⚡ 运维平台</p>
        </div>
        <Menu items={menus} selectedKey={active} onSelect={setActive} />
      </aside>

      {/* 主区 */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-border-default px-5 py-3">
          <Breadcrumb items={[{ label: '首页' }, { label: current?.label ?? '' }]} />
          <div className="flex items-center gap-3">
            <span className="text-bodySm text-text-secondary">🔔</span>
            <Tag variant="success" tone="soft">
              系统正常
            </Tag>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-5">
          <h1 className="mb-4 text-titleMd font-semibold text-text-primary">{current?.label}</h1>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: '在线设备', value: '128 / 130' },
              { label: '今日告警', value: '3' },
              { label: '平均响应', value: '42ms' },
            ].map((s) => (
              <Card key={s.label}>
                <p className="text-bodySm text-text-secondary">{s.label}</p>
                <p className="mt-1 text-2xl font-semibold text-text-primary">{s.value}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-4">
            <h3 className="mb-3 text-bodyMd font-medium text-text-primary">最近活动</h3>
            <div className="flex flex-col gap-2 text-bodySm text-text-secondary">
              <p>· 设备 DEV-018 恢复在线（10:24）</p>
              <p>· 赵星宇 更新了告警规则（09:50）</p>
              <p>· 设备 DEV-042 触发离线告警（09:32）</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
