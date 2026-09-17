/**
 * Divider 分割线（web）—— 水平/垂直分割，solid/dashed/dotted 三线型，支持居中文字。
 * 视觉值只走 Tailwind 主题语义类（border-default）；垂直方向需父容器有确定高度。
 */
import { cn } from '@kit/core'
import type { DividerProps, DividerType, DividerTextPosition } from './Divider.types'

const H_LINE: Record<DividerType, string> = {
  solid: 'border-t border-border-default',
  dashed: 'border-t border-dashed border-border-default',
  dotted: 'border-t border-dotted border-border-default',
}

const V_LINE: Record<DividerType, string> = {
  solid: 'border-l border-border-default',
  dashed: 'border-l border-dashed border-border-default',
  dotted: 'border-l border-dotted border-border-default',
}

const TEXT_GROW: Record<DividerTextPosition, [string, string]> = {
  left: ['flex-none', 'flex-1'],
  center: ['flex-1', 'flex-1'],
  right: ['flex-1', 'flex-none'],
}

export function Divider({
  orientation = 'horizontal',
  type = 'solid',
  text,
  textPosition = 'center',
  className,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('h-full w-0 self-stretch', V_LINE[type], className)}
        role="separator"
        aria-orientation="vertical"
      />
    )
  }

  if (text) {
    const [leftGrow, rightGrow] = TEXT_GROW[textPosition]
    return (
      <div
        className={cn('flex w-full items-center gap-3', className)}
        role="separator"
        aria-orientation="horizontal"
      >
        <div className={cn('h-0', H_LINE[type], leftGrow)} />
        <span className="whitespace-nowrap text-body-sm text-text-tertiary">{text}</span>
        <div className={cn('h-0', H_LINE[type], rightGrow)} />
      </div>
    )
  }

  return (
    <div
      className={cn('h-0 w-full', H_LINE[type], className)}
      role="separator"
      aria-orientation="horizontal"
    />
  )
}
