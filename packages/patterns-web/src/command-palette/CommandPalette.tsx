/**
 * CommandPalette 命令面板（web）—— cmdk（MIT，shadcn 同源）集成模板。
 * 覆盖：⌘K/Ctrl+K 唤起、分组命令、模糊搜索、键盘上下导航、Esc/遮罩关闭。
 * 视觉值全部用 token；命令面板是高频交互能力，可直接取用。
 */
import { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { Icon } from '@kit/icons'
import type { KitIconName } from '@kit/icons'
import { Card } from '@kit/ui-web'

interface CmdItem {
  id: string
  label: string
  icon: KitIconName
  keywords?: string[]
}
interface CmdGroup {
  heading: string
  items: CmdItem[]
}

const GROUPS: CmdGroup[] = [
  {
    heading: '导航',
    items: [
      { id: 'home', label: '回到首页', icon: 'home', keywords: ['主页'] },
      { id: 'explore', label: '发现内容', icon: 'compass' },
      { id: 'messages', label: '查看消息', icon: 'message', keywords: ['聊天'] },
      { id: 'profile', label: '个人中心', icon: 'user', keywords: ['我的'] },
    ],
  },
  {
    heading: '操作',
    items: [
      { id: 'new', label: '新建项目', icon: 'plus', keywords: ['创建', '添加'] },
      { id: 'search', label: '全局搜索', icon: 'search', keywords: ['查找'] },
      { id: 'upload', label: '上传文件', icon: 'upload' },
      { id: 'download', label: '下载报表', icon: 'download' },
      { id: 'print', label: '打印当前页', icon: 'printer' },
    ],
  },
  {
    heading: '设置',
    items: [
      { id: 'settings', label: '通用设置', icon: 'settings', keywords: ['设定'] },
      { id: 'appearance', label: '外观主题', icon: 'sliders-horizontal', keywords: ['皮肤'] },
      { id: 'notifications', label: '通知偏好', icon: 'bell', keywords: ['提醒'] },
      { id: 'shortcuts', label: '键盘快捷键', icon: 'command', keywords: ['快捷键'] },
    ],
  },
  {
    heading: '账号',
    items: [
      { id: 'login', label: '登录账号', icon: 'login', keywords: ['登入'] },
      { id: 'logout', label: '退出登录', icon: 'logout', keywords: ['登出'] },
    ],
  },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [lastAction, setLastAction] = useState<string | null>(null)

  // 全局快捷键：Ctrl/⌘ + K 唤起；Esc 关闭
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const run = (label: string) => {
    setLastAction(label)
    setOpen(false)
  }

  return (
    <Card>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-title-sm font-medium text-text-primary">命令面板 · ⌘K</h3>
        <p className="text-body-sm text-text-tertiary">
          统一的命令入口：搜索页面、执行操作、跳转设置
        </p>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-4 flex w-full items-center justify-between rounded-lg border border-border-default bg-bg-hover px-3 py-2.5 text-body-md text-text-secondary hover:border-primary-default"
      >
        <span className="flex items-center gap-2">
          <Icon name="search" size={16} />
          搜索或执行命令…
        </span>
        <kbd className="rounded border border-border-default bg-bg-card px-1.5 py-0.5 font-mono text-caption text-text-tertiary">
          Ctrl K
        </kbd>
      </button>

      {lastAction && (
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-success-bg px-3 py-2 text-body-sm text-success-default">
          <Icon name="check-circle" size={16} />
          已执行：{lastAction}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-bg-inverse/50 p-4 pt-[12vh]"
          onClick={() => setOpen(false)}
        >
          <Command
            label="命令面板"
            className="w-full max-w-xl overflow-hidden rounded-xl border border-border-default bg-bg-card shadow-popover"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 border-b border-border-default px-3.5">
              <span className="text-text-tertiary">
                <Icon name="search" size={17} />
              </span>
              <Command.Input
                placeholder="输入命令或关键词…"
                className="w-full bg-transparent py-3 text-body-md text-text-primary placeholder:text-text-tertiary focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded p-1 text-text-tertiary hover:text-text-secondary"
                aria-label="关闭"
              >
                <Icon name="x" size={16} />
              </button>
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="py-8 text-center text-body-sm text-text-tertiary">
                没有找到匹配的命令
              </Command.Empty>
              {GROUPS.map((g) => (
                <Command.Group
                  key={g.heading}
                  heading={g.heading}
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-caption [&_[cmdk-group-heading]]:text-text-tertiary"
                >
                  {g.items.map((c) => (
                    <Command.Item
                      key={c.id}
                      value={c.label}
                      onSelect={() => run(c.label)}
                      className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-body-md text-text-primary data-[selected=true]:bg-primary-bg data-[selected=true]:text-primary-default"
                      {...(c.keywords ? { keywords: c.keywords } : {})}
                    >
                      <Icon name={c.icon} size={17} />
                      {c.label}
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </div>
      )}
    </Card>
  )
}
