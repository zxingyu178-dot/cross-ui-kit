import { Anchor } from '../index'
import type { AnchorItem } from '../Anchor.types'

const items: AnchorItem[] = [
  { key: '1', title: '项目概述', href: 'overview' },
  { key: '2', title: '技术架构', href: 'architecture' },
  { key: '3', title: '组件列表', href: 'components' },
  { key: '4', title: '开发指南', href: 'guide' },
  { key: '5', title: '常见问题', href: 'faq' },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础锚点导航</span>
        <div className="w-48">
          <Anchor items={items} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">固定定位（sticky）</span>
        <div className="h-48 overflow-y-auto rounded-md border border-border-default bg-bg-muted/30 p-4">
          <div className="flex gap-8">
            <div className="w-40 shrink-0">
              <Anchor items={items} affix offsetTop={16} />
            </div>
            <div className="flex-1 space-y-8">
              {items.map((item) => (
                <div
                  key={item.key}
                  id={item.href}
                  className="h-24 rounded-md border border-border-default bg-bg-card p-4"
                >
                  <h3 className="text-bodySm font-medium text-text-primary">{item.title}</h3>
                  <p className="mt-1 text-caption text-text-tertiary">
                    这是 {item.title} 的内容区域。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
