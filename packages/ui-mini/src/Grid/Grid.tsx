/**
 * Grid 栅格（mini：小程序 / 移动 H5）—— 24 栅格系统，Row + Col，flex 布局，
 * 支持间距/对齐/换行/偏移/排序。
 */
import { View } from '@tarojs/components'
import type { CSSProperties } from 'react'
import type { ColProps, GridAlign, GridJustify, RowProps } from './Grid.types'
import './Grid.scss'

const justifyMap: Record<GridJustify, string> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
}

const alignMap: Record<GridAlign, string> = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
}

export function Row({
  gutter = 0,
  justify = 'start',
  align = 'top',
  wrap = true,
  children,
  className = '',
}: RowProps) {
  const [hGutter, vGutter] = Array.isArray(gutter) ? gutter : [gutter, 0]
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: justifyMap[justify],
    alignItems: alignMap[align],
    flexWrap: wrap ? 'wrap' : 'nowrap',
    marginLeft: hGutter > 0 ? `${-hGutter / 2}px` : undefined,
    marginRight: hGutter > 0 ? `${-hGutter / 2}px` : undefined,
    rowGap: vGutter > 0 ? `${vGutter}px` : undefined,
  }

  return (
    <View className={`kit-grid-row ${className}`.trim()} style={style}>
      {children}
    </View>
  )
}

export function Col({ span = 24, offset = 0, order, children, className = '' }: ColProps) {
  const style: CSSProperties = {
    width: `${(span / 24) * 100}%`,
    marginLeft: offset > 0 ? `${(offset / 24) * 100}%` : undefined,
    order,
    boxSizing: 'border-box',
  }

  return (
    <View className={`kit-grid-col ${className}`.trim()} style={style}>
      {children}
    </View>
  )
}
