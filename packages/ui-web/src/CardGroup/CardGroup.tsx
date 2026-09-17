/**
 * CardGroup 卡片组（web）—— 多个卡片网格排列。
 */
import { cn } from '@kit/core'
import type { CardGroupProps } from './CardGroup.types'

const columnsMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
}

export function CardGroup({
  items = [],
  columns = 3,
  gutter = 16,
  children,
  className,
}: CardGroupProps) {
  return (
    <div className={cn('grid', columnsMap[columns], className)} style={{ gap: gutter }}>
      {items.map((item) => (
        <div
          key={item.key}
          className="flex flex-col overflow-hidden rounded-lg border border-border-default bg-bg-card shadow-card transition-shadow hover:shadow-lg"
        >
          {item.cover ? <img src={item.cover} alt="" className="h-40 w-full object-cover" /> : null}
          <div className="flex flex-1 flex-col gap-2 p-4">
            {item.title ? (
              <div className="flex items-center justify-between">
                <h3 className="text-bodyMd font-medium text-text-primary">{item.title}</h3>
                {item.extra}
              </div>
            ) : null}
            {item.content ? (
              <div className="text-bodySm text-text-secondary">{item.content}</div>
            ) : null}
          </div>
        </div>
      ))}
      {children}
    </div>
  )
}
