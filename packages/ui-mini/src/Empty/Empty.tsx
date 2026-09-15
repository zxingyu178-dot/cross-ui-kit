/**
 * Empty 空态（mini：小程序 / 移动 H5）—— 四态之 empty。
 * Taro View 纯组合布局：图标（默认中性「空文档」几何图形，可经 icon 替换）+ 标题 + 描述 + 可选操作。
 * 图形与布局样式在 Empty.scss 全量 token 化；是否渲染由父级按数据状态控制。
 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { cn } from '@kit/core'
import type { EmptyProps } from './Empty.types'
import './Empty.scss'

/** 默认空态图形：浅灰圆底 + 空文档轮廓（纯几何、零依赖、暗色自适应） */
function EmptyDefaultIcon() {
  return (
    <View className="kit-empty__icon">
      <View className="kit-empty__doc">
        <View className="kit-empty__line" />
      </View>
    </View>
  )
}

export function Empty({
  title,
  description,
  icon,
  action,
  accessibilityLabel,
  className,
}: EmptyProps) {
  return (
    <View
      className={cn('kit-empty', className)}
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
    >
      <View className="kit-empty__figure">{icon ?? <EmptyDefaultIcon />}</View>
      {title !== undefined && <Text className="kit-empty__title">{title}</Text>}
      {description !== undefined && <Text className="kit-empty__desc">{description}</Text>}
      {action !== undefined && <View className="kit-empty__action">{action as ReactNode}</View>}
    </View>
  )
}
