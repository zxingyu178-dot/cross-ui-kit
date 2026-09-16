/**
 * 排序纯函数（headless，无 React/DOM）——三栈共用。
 * 数字按大小、字符串按 localeCompare（zh-CN，中文按拼音），null/undefined 排前。
 */

/** 排序方向 */
export type SortOrder = 'asc' | 'desc'

/** 受控排序状态 */
export interface SortState {
  key: string
  order: SortOrder
}

/** 比较两个值：相等 0；a<b 负；a>b 正；null/undefined 视为最小 */
export function compareValues(a: unknown, b: unknown): number {
  if (a === b) return 0
  if (a === null || a === undefined) return -1
  if (b === null || b === undefined) return 1
  if (typeof a === 'number' && typeof b === 'number') return a - b
  if (typeof a === 'string' && typeof b === 'string') return a.localeCompare(b, 'zh-CN')
  return String(a).localeCompare(String(b), 'zh-CN')
}

/**
 * 排序数据副本（不修改原数组）。
 * @param key 排序列 key
 * @param order 方向
 * @param sorter 列自定义比较器（有则优先；缺省按 key 值比较）
 */
export function sortData<T>(
  data: T[],
  key: string,
  order: SortOrder,
  sorter?: (a: T, b: T) => number,
): T[] {
  if (key === '') return data
  const dir = order === 'asc' ? 1 : -1
  const compare =
    sorter ??
    ((a: T, b: T) =>
      compareValues(
        (a as unknown as Record<string, unknown>)[key],
        (b as unknown as Record<string, unknown>)[key],
      ))
  return [...data].sort((a, b) => compare(a, b) * dir)
}
