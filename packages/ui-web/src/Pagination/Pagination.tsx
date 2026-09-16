/**
 * Pagination 分页（web）—— 受控分页，页码列表由 @kit/core 的 getPageList 生成（含省略号）。
 * 上一页/下一页在边界自动禁用；当前页高亮；支持 showTotal / size / disabled。
 */
import { getPageCount, getPageList } from '@kit/core'
import type { PaginationProps } from './Pagination.types'

const SIZE_CLASS: Record<NonNullable<PaginationProps['size']>, string> = {
  sm: 'h-7 min-w-7 px-1.5 text-caption',
  md: 'h-8 min-w-8 px-2 text-body-sm',
}

const ELLIPSIS_SIZE: Record<NonNullable<PaginationProps['size']>, string> = {
  sm: 'h-7 min-w-7',
  md: 'h-8 min-w-8',
}

export function Pagination({
  current = 1,
  pageSize = 10,
  total,
  onChange,
  showTotal = true,
  size = 'md',
  disabled = false,
  className = '',
}: PaginationProps) {
  const totalPages = getPageCount(total, pageSize)
  const pages = getPageList(current, totalPages)
  const btnBase = `inline-flex items-center justify-center rounded-md transition-colors duration-150 ${SIZE_CLASS[size]}`
  const ellipsisCls = `inline-flex items-center justify-center text-text-tertiary ${ELLIPSIS_SIZE[size]}`

  const prevDisabled = disabled || current <= 1
  const nextDisabled = disabled || current >= totalPages

  const go = (page: number) => {
    if (disabled) return
    if (page < 1 || page > totalPages || page === current) return
    onChange(page)
  }

  return (
    <nav aria-label="分页" className={`flex items-center gap-2 ${className}`}>
      {showTotal && <span className="text-caption text-text-tertiary">共 {total} 条</span>}
      <button
        type="button"
        aria-label="上一页"
        disabled={prevDisabled}
        onClick={() => go(current - 1)}
        className={`${btnBase} border border-border-default bg-bg-card text-text-primary hover:bg-bg-hover disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-bg-card`}
      >
        ‹
      </button>
      {pages.map((p, i) => {
        if (p === 'ellipsis') {
          return (
            <span key={`e-${i}`} className={ellipsisCls} aria-hidden="true">
              …
            </span>
          )
        }
        const active = p === current
        return (
          <button
            key={p}
            type="button"
            aria-label={`第 ${p} 页`}
            aria-current={active ? 'page' : undefined}
            disabled={disabled}
            onClick={() => go(p)}
            className={
              active
                ? `${btnBase} bg-primary-default font-medium text-primary-text`
                : `${btnBase} border border-border-default bg-bg-card text-text-primary hover:bg-bg-hover disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-bg-card`
            }
          >
            {p}
          </button>
        )
      })}
      <button
        type="button"
        aria-label="下一页"
        disabled={nextDisabled}
        onClick={() => go(current + 1)}
        className={`${btnBase} border border-border-default bg-bg-card text-text-primary hover:bg-bg-hover disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-bg-card`}
      >
        ›
      </button>
    </nav>
  )
}
