/**
 * 分页纯函数（headless，无 React/DOM）——三栈共用。
 * 页码列表包含数字页与 'ellipsis' 省略标记，组件按类型渲染。
 */

/** 页码项：数字页 或 省略号 */
export type PageItem = number | 'ellipsis'

/** 总页数（至少 1） */
export function getPageCount(total: number, pageSize: number): number {
  const size = pageSize > 0 ? pageSize : 1
  return Math.max(1, Math.ceil(total / size))
}

/**
 * 生成页码列表（含省略号）。
 * @param current 当前页（1-based）
 * @param totalPages 总页数
 * @param siblingCount 当前页左右各显示几页（默认 1）
 */
export function getPageList(current: number, totalPages: number, siblingCount = 1): PageItem[] {
  const cur = Math.min(Math.max(1, current), totalPages)
  // 首末 + 当前 + 左右兄弟 + 两个省略号 = 5 + 2*siblingCount
  const totalNumbers = siblingCount * 2 + 5
  if (totalPages <= totalNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSibling = Math.max(cur - siblingCount, 2)
  const rightSibling = Math.min(cur + siblingCount, totalPages - 1)
  const showLeftEllipsis = leftSibling > 2
  const showRightEllipsis = rightSibling < totalPages - 1

  const pages: PageItem[] = [1]
  if (showLeftEllipsis) pages.push('ellipsis')
  for (let i = leftSibling; i <= rightSibling; i++) pages.push(i)
  if (showRightEllipsis) pages.push('ellipsis')
  pages.push(totalPages)
  return pages
}
