/**
 * DataTable 数据表格（web）—— 语义化 <table>，受控排序（sortState/onSortChange，逻辑在 core sortData）。
 * 加载中渲染 Skeleton 骨架行；空态轻量文本（整页空态请用 Empty）；支持斑马纹与行点击。
 */
import { sortData } from '@kit/core'
import { Skeleton } from '../Skeleton'
import type { Align, DataTableProps, TableColumn } from './DataTable.types'

const ALIGN_CLASS: Record<Align, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

function getRowKey<T>(
  row: T,
  index: number,
  rowKey?: keyof T | ((row: T, index: number) => string),
): string {
  if (rowKey === undefined) return String(index)
  if (typeof rowKey === 'function') return rowKey(row, index)
  const v = row[rowKey]
  return typeof v === 'string' || typeof v === 'number' ? String(v) : String(index)
}

function thCls<T>(col: TableColumn<T>): string {
  return `px-4 py-3 text-caption font-medium text-text-secondary ${ALIGN_CLASS[col.align ?? 'left']}`
}

function tdCls<T>(col: TableColumn<T>): string {
  return `px-4 py-3 text-body-sm text-text-primary ${ALIGN_CLASS[col.align ?? 'left']}`
}

export function DataTable<T>({
  columns,
  data,
  rowKey,
  loading = false,
  empty,
  stripe = true,
  onRowClick,
  sortState,
  onSortChange,
  className = '',
}: DataTableProps<T>) {
  const activeSort =
    sortState !== null && sortState !== undefined
      ? columns.find((c) => c.key === sortState.key)
      : undefined
  const sorted =
    sortState !== null && sortState !== undefined && activeSort !== undefined
      ? sortData(data, sortState.key, sortState.order, activeSort.sorter)
      : data

  const handleSort = (col: TableColumn<T>) => {
    if (!col.sortable || onSortChange === undefined) return
    if (sortState !== null && sortState !== undefined && sortState.key === col.key) {
      onSortChange(col.key, sortState.order === 'asc' ? 'desc' : 'asc')
    } else {
      onSortChange(col.key, 'asc')
    }
  }

  const arrow = (col: TableColumn<T>) => {
    if (!col.sortable) return null
    const active = sortState !== null && sortState !== undefined && sortState.key === col.key
    if (!active) return <span className="ml-1 text-text-tertiary">↕</span>
    return (
      <span className="ml-1 text-primary-default">{sortState.order === 'asc' ? '↑' : '↓'}</span>
    )
  }

  return (
    <div
      className={`w-full overflow-x-auto rounded-lg border border-border-default bg-bg-card ${className}`}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border-default bg-bg-hover/60">
            {columns.map((col) => (
              <th
                key={col.key}
                aria-sort={
                  col.sortable
                    ? sortState !== null && sortState !== undefined && sortState.key === col.key
                      ? sortState.order === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : 'none'
                    : undefined
                }
                style={
                  col.width !== undefined
                    ? { width: typeof col.width === 'number' ? `${col.width}px` : col.width }
                    : undefined
                }
                className={thCls(col)}
              >
                {col.sortable ? (
                  <button
                    type="button"
                    onClick={() => handleSort(col)}
                    className="inline-flex items-center transition-colors duration-150 hover:text-primary-default"
                  >
                    {col.title}
                    {arrow(col)}
                  </button>
                ) : (
                  col.title
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 3 }, (_, r) => (
              <tr key={`sk-${r}`} className="border-b border-border-default">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))
          ) : sorted.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-10 text-center text-body-sm text-text-tertiary"
              >
                {empty ?? '暂无数据'}
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => {
              const rk = getRowKey(row, i, rowKey)
              return (
                <tr
                  key={rk}
                  onClick={onRowClick !== undefined ? () => onRowClick(row, i) : undefined}
                  className={`border-b border-border-default last:border-b-0 ${
                    stripe && i % 2 === 1 ? 'bg-bg-hover/40' : ''
                  } ${onRowClick !== undefined ? 'cursor-pointer transition-colors duration-150 hover:bg-bg-hover/70' : ''}`}
                >
                  {columns.map((col) => (
                    <td key={col.key} className={tdCls(col)}>
                      {col.render !== undefined
                        ? col.render((row as Record<string, unknown>)[col.key], row, i)
                        : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </td>
                  ))}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}
