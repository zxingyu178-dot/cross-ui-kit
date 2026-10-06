/**
 * MultiTabLayoutPage 多标签页布局（web）—— 可关闭标签栏 + 内容区（浏览器/IDE 风格）。
 */
import { useState } from 'react'
import { Tag } from '@kit/ui-web'

interface Tab {
  key: string
  label: string
  emoji: string
  closable: boolean
}

const initial: Tab[] = [
  { key: 'home', label: '首页', emoji: '🏠', closable: false },
  { key: 'project', label: '项目管理', emoji: '📁', closable: true },
  { key: 'task', label: '任务列表', emoji: '✅', closable: true },
  { key: 'data', label: '数据看板', emoji: '📊', closable: true },
]

const contents: Record<string, React.ReactNode> = {
  home: (
    <p className="text-bodyMd text-text-secondary">
      欢迎使用多标签布局，点击标签切换内容，× 关闭标签。
    </p>
  ),
  project: <p className="text-bodyMd text-text-secondary">这里是「项目管理」的内容区。</p>,
  task: <p className="text-bodyMd text-text-secondary">这里是「任务列表」的内容区。</p>,
  data: <p className="text-bodyMd text-text-secondary">这里是「数据看板」的内容区。</p>,
}

export function MultiTabLayoutPage() {
  const [tabs, setTabs] = useState(initial)
  const [active, setActive] = useState('project')

  const close = (key: string) => {
    setTabs((ts) => {
      const next = ts.filter((t) => t.key !== key)
      if (active === key) setActive(next[next.length - 1]?.key ?? 'home')
      return next
    })
  }

  return (
    <div className="flex h-[420px] flex-col overflow-hidden rounded-lg border border-border-default bg-bg-card">
      {/* 标签栏 */}
      <div className="flex items-center bg-bg-secondary">
        {tabs.map((t) => (
          <div
            key={t.key}
            className={`flex cursor-pointer items-center gap-2 border-r border-border-default px-4 py-2.5 text-bodySm ${
              active === t.key
                ? 'border-b-2 border-b-primary-default bg-bg-card text-text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActive(t.key)}
          >
            <span>{t.emoji}</span>
            <span>{t.label}</span>
            {t.closable && (
              <button
                className="ml-1 flex h-4 w-4 items-center justify-center rounded text-text-tertiary hover:bg-bg-secondary"
                onClick={(e) => {
                  e.stopPropagation()
                  close(t.key)
                }}
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button className="px-3 text-text-secondary hover:text-primary-default">+</button>
      </div>

      {/* 内容区 */}
      <div className="flex-1 overflow-auto p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-titleSm font-medium text-text-primary">
            {tabs.find((t) => t.key === active)?.label}
          </h3>
          <Tag variant="primary" tone="soft">
            {tabs.length} 个标签
          </Tag>
        </div>
        {contents[active]}
      </div>
    </div>
  )
}
