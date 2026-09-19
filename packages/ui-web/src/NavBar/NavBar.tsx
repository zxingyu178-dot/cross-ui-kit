/**
 * NavBar 顶部导航栏（web）—— 标题 + 返回 + 右侧操作。
 */
import { cn } from '@kit/core'
import type { NavBarProps } from './NavBar.types'

function BackArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export function NavBar({ title, left, right, onBack, showBack = true, className }: NavBarProps) {
  return (
    <header
      className={cn(
        'relative flex h-14 items-center justify-between border-b border-border-default bg-bg-card px-4',
        className,
      )}
    >
      <div className="flex w-24 items-center">
        {left !== undefined
          ? left
          : showBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center text-text-primary hover:text-primary-default"
                aria-label="返回"
              >
                <BackArrow />
              </button>
            )}
      </div>
      <div className="flex flex-1 items-center justify-center text-title-sm font-medium text-text-primary">
        {title}
      </div>
      <div className="flex w-24 items-center justify-end gap-2">{right}</div>
    </header>
  )
}
