/**
 * Cell 列表项（web）—— 标题 + 描述 + 图标 + 右侧内容/箭头。
 */
import { cn } from '@kit/core'
import type { CellProps } from './Cell.types'

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export function Cell({
  title,
  description,
  icon,
  right,
  onClick,
  clickable = false,
  className,
}: CellProps) {
  const clickableNow = clickable || onClick !== undefined
  return (
    <div
      className={cn(
        'flex items-center gap-3 border-b border-border-default px-4 py-3',
        clickableNow && 'cursor-pointer transition-colors hover:bg-bg-secondary',
        className,
      )}
      onClick={onClick}
    >
      {icon ? <span className="flex shrink-0 items-center text-text-secondary">{icon}</span> : null}
      <div className="flex flex-1 flex-col gap-0.5">
        {title ? <span className="text-bodyMd text-text-primary">{title}</span> : null}
        {description ? (
          <span className="text-caption text-text-tertiary">{description}</span>
        ) : null}
      </div>
      <div className="flex shrink-0 items-center gap-1.5 text-text-secondary">
        {right}
        {clickableNow && right === undefined ? <Arrow /> : null}
      </div>
    </div>
  )
}
