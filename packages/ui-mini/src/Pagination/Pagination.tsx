/**
 * Pagination 分页（mini：小程序 / 移动 H5）—— 受控分页，页码列表由 @kit/core 的 getPageList 生成。
 * 上一页/下一页边界自动禁用；当前页高亮；showTotal / size / disabled。
 */
import { Text, View } from '@tarojs/components'
import { getPageCount, getPageList } from '@kit/core'
import type { PaginationProps } from './Pagination.types'
import './Pagination.scss'

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

  const go = (page: number) => {
    if (disabled) return
    if (page < 1 || page > totalPages || page === current) return
    onChange(page)
  }

  const prevDisabled = disabled || current <= 1
  const nextDisabled = disabled || current >= totalPages

  const btnCls = (active: boolean, btnDisabled: boolean) =>
    [
      'kit-pagination__btn',
      `kit-pagination__btn--${size}`,
      active ? 'kit-pagination__btn--active' : '',
      btnDisabled ? 'kit-pagination__btn--disabled' : '',
    ]
      .filter(Boolean)
      .join(' ')

  return (
    <View className={`kit-pagination ${className}`}>
      {showTotal && <Text className="kit-pagination__total">共 {total} 条</Text>}
      <View
        className={btnCls(false, prevDisabled)}
        aria-label="上一页"
        {...(prevDisabled ? {} : { onClick: () => go(current - 1) })}
      >
        <Text>‹</Text>
      </View>
      {pages.map((p, i) => {
        if (p === 'ellipsis') {
          return (
            <View
              key={`e-${i}`}
              className={`kit-pagination__ellipsis kit-pagination__ellipsis--${size}`}
              aria-hidden
            >
              <Text>…</Text>
            </View>
          )
        }
        const active = p === current
        return (
          <View
            key={p}
            className={btnCls(active, disabled)}
            aria-label={`第 ${p} 页`}
            {...(active ? { 'aria-current': 'page' } : {})}
            {...(disabled ? {} : { onClick: () => go(p) })}
          >
            <Text>{p}</Text>
          </View>
        )
      })}
      <View
        className={btnCls(false, nextDisabled)}
        aria-label="下一页"
        {...(nextDisabled ? {} : { onClick: () => go(current + 1) })}
      >
        <Text>›</Text>
      </View>
    </View>
  )
}
