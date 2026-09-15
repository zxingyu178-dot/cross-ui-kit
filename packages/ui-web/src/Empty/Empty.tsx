/**
 * Empty 空态（web）—— 四态之 empty：列表/区块无数据时的占位。
 * 纯组合布局：图标（默认中性「空文档」几何图形，可经 icon 替换）+ 标题 + 描述 + 可选操作。
 * 只负责空态视觉，是否渲染由父级（StateContainer）按数据状态控制。
 */
import { cn } from '@kit/core'
import type { EmptyProps } from './Empty.types'

/**
 * 默认空态图形：浅灰圆底 + 空文档轮廓（纯几何、零依赖、暗色自适应）。
 * 尺寸为组件内置图形常量：圆底 96（=3×control-height-sm 32）、文档 38×34、内横线 16×2。
 */
function EmptyDefaultIcon() {
  return (
    <div aria-hidden className="flex size-24 items-center justify-center rounded-full bg-bg-active">
      <div className="flex h-[34px] w-[38px] items-center justify-center rounded-md border-2 border-text-tertiary">
        <div className="h-0.5 w-4 rounded-full bg-text-tertiary" />
      </div>
    </div>
  )
}

export function Empty({
  title,
  description,
  icon,
  action,
  accessibilityLabel,
  className,
  id,
}: EmptyProps) {
  return (
    <div
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
      {...(id !== undefined ? { id } : {})}
      className={cn(
        'flex w-full flex-col items-center justify-center px-6 py-10 text-center',
        className,
      )}
    >
      <div className="mb-4">{icon ?? <EmptyDefaultIcon />}</div>
      {title !== undefined && <div className="text-body-md text-text-secondary">{title}</div>}
      {description !== undefined && (
        <div className="mt-1 max-w-[280px] text-caption text-text-tertiary">{description}</div>
      )}
      {action !== undefined && <div className="mt-5">{action}</div>}
    </div>
  )
}
