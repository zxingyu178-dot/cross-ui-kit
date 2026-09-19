/**
 * WorkspacePage 工作台模板（web）—— 左侧导航 + 顶栏 + 内容卡片墙。
 */
import { useState } from 'react'
import { Card, StatisticCard, Button, Tag, Menu, type MenuItem } from '@kit/ui-web'

export interface WorkspacePageProps {
  userName?: string
}

const menus: MenuItem[] = [
  { key: 'dashboard', label: '工作台', icon: '🏠' },
  { key: 'project', label: '项目管理', icon: '📁' },
  { key: 'task', label: '任务列表', icon: '✅' },
  { key: 'data', label: '数据统计', icon: '📊' },
  { key: 'setting', label: '系统设置', icon: '⚙️' },
]

export function WorkspacePage({ userName = '赵星宇' }: WorkspacePageProps) {
  const [active, setActive] = useState('dashboard')

  return (
    <div className="flex h-[600px] overflow-hidden rounded-lg border border-border-default bg-bg-card">
      {/* 侧边栏 */}
      <aside className="flex w-48 flex-col border-r border-border-default bg-bg-secondary">
        <div className="border-b border-border-default px-4 py-4">
          <p className="text-titleSm font-semibold text-text-primary">🟢 控制台</p>
        </div>
        <Menu items={menus} selectedKey={active} onSelect={setActive} className="flex-1" />
        <div className="border-t border-border-default p-3">
          <p className="text-bodySm text-text-secondary">你好，{userName}</p>
        </div>
      </aside>

      {/* 主区 */}
      <div className="flex flex-1 flex-col">
        {/* 顶栏 */}
        <header className="flex items-center justify-between border-b border-border-default px-6 py-3">
          <h1 className="text-titleSm font-medium text-text-primary">
            {menus.find((m) => m.key === active)?.label ?? '工作台'}
          </h1>
          <Button variant="primary" size="sm">
            + 新建项目
          </Button>
        </header>

        {/* 内容 */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatisticCard title="进行中项目" value="12" trend="up" trendValue="+2" />
            <StatisticCard title="待办任务" value="34" trend="down" trendValue="-5" />
            <StatisticCard title="本周完成" value="18" trend="up" trendValue="+3" />
            <StatisticCard title="逾期" value="2" trend="up" trendValue="+1" />
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card>
              <h3 className="mb-3 text-bodyMd font-medium text-text-primary">最近项目</h3>
              <div className="flex flex-col gap-2">
                {['金彭电器管理系统', '跨端 UI 组件库', '移动端巡检 App'].map((p, i) => (
                  <div
                    key={p}
                    className="flex items-center justify-between rounded-md bg-bg-secondary px-3 py-2"
                  >
                    <span className="text-bodySm text-text-primary">{p}</span>
                    <Tag variant={i === 0 ? 'success' : i === 1 ? 'primary' : 'warning'}>
                      {i === 0 ? '进行中' : i === 1 ? '设计' : '待排期'}
                    </Tag>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="mb-3 text-bodyMd font-medium text-text-primary">待办事项</h3>
              <div className="flex flex-col gap-2">
                {['评审 v2.4 发布计划', '更新接口文档', '修复登录页 bug', '周三产品周会'].map(
                  (t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 text-bodySm text-text-primary"
                    >
                      <input type="checkbox" className="h-4 w-4 rounded border-border-default" />
                      {t}
                    </label>
                  ),
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
