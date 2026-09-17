/**
 * Descriptions 描述列表（web）—— 表格布局，支持标题/列数/边框/水平垂直布局。
 */
import { cn } from '@kit/core'
import type { DescriptionsItem, DescriptionsProps } from './Descriptions.types'

function chunkItems(items: DescriptionsItem[], column: number): DescriptionsItem[][] {
  const rows: DescriptionsItem[][] = []
  let currentRow: DescriptionsItem[] = []
  let currentSpan = 0
  for (const item of items) {
    const span = item.span ?? 1
    if (currentSpan + span > column && currentRow.length > 0) {
      rows.push(currentRow)
      currentRow = []
      currentSpan = 0
    }
    currentRow.push(item)
    currentSpan += span
  }
  if (currentRow.length > 0) rows.push(currentRow)
  return rows
}

export function Descriptions({
  title,
  items,
  column = 3,
  bordered = false,
  layout = 'horizontal',
  className,
}: DescriptionsProps) {
  const rows = chunkItems(items, column)

  return (
    <div className={cn('w-full', className)}>
      {title ? <div className="mb-3 text-bodyMd font-medium text-text-primary">{title}</div> : null}
      <div
        className={cn(
          'w-full overflow-hidden',
          bordered ? 'rounded-md border border-border-default' : '',
        )}
      >
        {layout === 'horizontal' ? (
          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={bordered && ri > 0 ? 'border-t border-border-default' : ''}>
                  {row.map((item, ci) => (
                    <td
                      key={ci}
                      colSpan={(item.span ?? 1) * 2 - 1}
                      className={cn(
                        'px-3 py-2 text-bodySm align-top',
                        bordered ? 'border-r border-border-default last:border-r-0' : 'pb-3',
                      )}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-text-tertiary">{item.label}</span>
                        <span className="text-text-primary">{item.value}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={bordered && ri > 0 ? 'border-t border-border-default' : ''}>
                  {row.map((item, ci) => (
                    <td
                      key={ci}
                      colSpan={item.span ?? 1}
                      className={cn(
                        'px-3 py-2 text-bodySm align-top',
                        bordered ? 'border-r border-border-default last:border-r-0' : 'pb-3',
                      )}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-text-tertiary">{item.label}</span>
                        <span className="text-text-primary">{item.value}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
