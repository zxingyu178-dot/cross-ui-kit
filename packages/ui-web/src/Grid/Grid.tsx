/**
 * Grid 栅格（web）—— 24 栅格系统，Row + Col，flex 布局，
 * 支持间距/对齐/换行/偏移/排序。
 */
import { cn } from '@kit/core'
import type { ColProps, GridAlign, GridJustify, RowProps } from './Grid.types'

const justifyMap: Record<GridJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
}

const alignMap: Record<GridAlign, string> = {
  top: 'items-start',
  middle: 'items-center',
  bottom: 'items-end',
}

export function Row({
  gutter = 0,
  justify = 'start',
  align = 'top',
  wrap = true,
  children,
  className,
}: RowProps) {
  const [hGutter, vGutter] = Array.isArray(gutter) ? gutter : [gutter, 0]
  const style = {
    marginLeft: hGutter > 0 ? `${-hGutter / 2}px` : undefined,
    marginRight: hGutter > 0 ? `${-hGutter / 2}px` : undefined,
    rowGap: vGutter > 0 ? `${vGutter}px` : undefined,
  }

  return (
    <div
      className={cn(
        'flex flex-row',
        justifyMap[justify],
        alignMap[align],
        wrap ? 'flex-wrap' : 'flex-nowrap',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}

export function Col({ span = 24, offset = 0, order, children, className }: ColProps) {
  const width = `${(span / 24) * 100}%`
  const marginLeft = offset > 0 ? `${(offset / 24) * 100}%` : undefined

  return (
    <div className={cn('box-border', className)} style={{ width, marginLeft, order }}>
      {children}
    </div>
  )
}
