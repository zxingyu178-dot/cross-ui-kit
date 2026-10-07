/**
 * IconGallery 图标展示页（web）—— @kit/icons 精选矢量图标。
 * 支持：关键词实时搜索（语义名/中文名/别名）、分类筛选、点击复制语义名。
 * 图标统一来自 @kit/icons，颜色跟随 currentColor（亮暗主题自适应）。
 */
import { useMemo, useState } from 'react'
import { Icon } from '@kit/icons'
import type { KitIconName, IconCategory } from '@kit/icons'
import { KIT_ICONS, ICON_CATEGORY_ORDER } from '@kit/icons'
import { Card } from '@kit/ui-web'

type CategoryFilter = '全部' | IconCategory

export function IconGallery() {
  const [keyword, setKeyword] = useState('')
  const [category, setCategory] = useState<CategoryFilter>('全部')
  const [copied, setCopied] = useState<KitIconName | null>(null)

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase()
    return KIT_ICONS.filter((m) => {
      const inCategory = category === '全部' || m.category === category
      const hit =
        q === '' ||
        m.name.includes(q) ||
        m.label.toLowerCase().includes(q) ||
        m.keywords.some((k) => k.toLowerCase().includes(q))
      return inCategory && hit
    })
  }, [keyword, category])

  const handleCopy = async (name: KitIconName) => {
    try {
      await navigator.clipboard.writeText(name)
      setCopied(name)
      window.setTimeout(() => setCopied((cur) => (cur === name ? null : cur)), 1200)
    } catch {
      // 非安全上下文或剪贴板不可用时静默（localhost 为安全上下文，正常可用）
    }
  }

  const chips: CategoryFilter[] = ['全部', ...ICON_CATEGORY_ORDER]

  return (
    <div className="flex flex-col gap-4">
      {/* 搜索框 */}
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
          <Icon name="search" size={18} />
        </span>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="搜索图标：输入 home / 首页 / 设置…"
          className="w-full rounded-lg border border-border-default bg-bg-card py-2.5 pl-10 pr-9 text-body-md text-text-primary placeholder:text-text-tertiary focus:border-primary-default focus:outline-none focus:ring-2 focus:ring-primary-default/30"
        />
        {keyword !== '' && (
          <button
            type="button"
            onClick={() => setKeyword('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-text-tertiary hover:text-text-secondary"
            aria-label="清空"
          >
            <Icon name="x" size={16} />
          </button>
        )}
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => {
          const active = category === c
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={
                active
                  ? 'rounded-full bg-primary-default px-3.5 py-1.5 text-body-sm font-medium text-white'
                  : 'rounded-full border border-border-default bg-bg-card px-3.5 py-1.5 text-body-sm text-text-secondary hover:border-primary-default hover:text-primary-default'
              }
            >
              {c}
            </button>
          )
        })}
      </div>

      <div className="flex items-center justify-between text-body-sm text-text-tertiary">
        <span>
          共 {filtered.length} 个图标（精选集 {KIT_ICONS.length}，底层 lucide 1500+）
        </span>
        <span>点击图标复制语义名</span>
      </div>

      {filtered.length === 0 ? (
        <Card>
          <div className="flex flex-col items-center gap-2 py-10 text-center">
            <span className="text-text-tertiary">
              <Icon name="search" size={32} />
            </span>
            <p className="text-body-md text-text-secondary">没有匹配的图标</p>
            <p className="text-body-sm text-text-tertiary">换个关键词，或切换到「全部」分类</p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {filtered.map((m) => (
            <button
              key={m.name}
              type="button"
              onClick={() => handleCopy(m.name)}
              title={`${m.label} · ${m.name}（点击复制）`}
              className="group flex min-h-[88px] flex-col items-center justify-center gap-1.5 rounded-lg border border-border-default bg-bg-card px-2 py-3 transition hover:border-primary-default hover:bg-bg-hover focus:outline-none focus:ring-2 focus:ring-primary-default/30"
            >
              <span className="text-text-secondary transition group-hover:text-primary-default">
                <Icon name={copied === m.name ? 'check' : m.name} size={22} />
              </span>
              <span className="text-body-sm text-text-primary">{m.label}</span>
              <span className="font-mono text-[11px] leading-tight text-text-tertiary">
                {m.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
