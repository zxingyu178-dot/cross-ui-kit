/**
 * List 列表（web）—— ul/li 列表，支持数据源/自定义渲染/头部底部/边框/尺寸/加载/空状态。
 */
import { cn } from '@kit/core'
import { Empty } from '../Empty'
import { Skeleton } from '../Skeleton'
import type { ListItem, ListProps, ListSize } from './List.types'

const sizePadding: Record<ListSize, string> = {
  sm: 'px-3 py-2',
  md: 'px-4 py-3',
  lg: 'px-5 py-4',
}

const sizeText: Record<ListSize, string> = {
  sm: 'text-bodySm',
  md: 'text-bodyMd',
  lg: 'text-titleSm',
}

export function List({
  dataSource = [],
  renderItem,
  header,
  footer,
  bordered = false,
  size = 'md',
  loading = false,
  emptyText = '暂无数据',
  className,
}: ListProps) {
  const renderDefaultItem = (item: ListItem) => (
    <li
      key={item.key}
      className={cn(
        'flex items-center justify-between border-b border-border-default last:border-b-0',
        sizePadding[size],
        item.disabled ? 'opacity-50' : '',
      )}
    >
      <div className="min-w-0 flex-1">
        <div className={cn('font-medium text-text-primary', sizeText[size])}>{item.title}</div>
        {item.description ? (
          <div className="mt-0.5 text-caption text-text-tertiary">{item.description}</div>
        ) : null}
      </div>
      {item.extra ? <div className="ml-4 shrink-0">{item.extra}</div> : null}
    </li>
  )

  return (
    <div
      className={cn(
        'overflow-hidden rounded-md bg-bg-card',
        bordered ? 'border border-border-default' : '',
        className,
      )}
    >
      {header ? (
        <div
          className={cn(
            'border-b border-border-default font-medium text-text-primary',
            sizePadding[size],
          )}
        >
          {header}
        </div>
      ) : null}
      {loading ? (
        <div className={cn('flex flex-col gap-2', sizePadding[size])}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="50%" />
        </div>
      ) : dataSource.length === 0 ? (
        <div className={sizePadding[size]}>
          <Empty description={emptyText} />
        </div>
      ) : (
        <ul className="list-none">
          {dataSource.map((item, index) =>
            renderItem ? renderItem(item, index) : renderDefaultItem(item),
          )}
        </ul>
      )}
      {footer ? (
        <div
          className={cn('border-t border-border-default text-text-secondary', sizePadding[size])}
        >
          {footer}
        </div>
      ) : null}
    </div>
  )
}
