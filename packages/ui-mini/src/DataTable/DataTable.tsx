/**
 * DataTable 数据表格（mini：小程序 / 移动 H5）—— View flex 网格表格。
 * 受控排序（sortState/onSortChange，逻辑在 core sortData）；loading 骨架、空态、斑马纹、行点击。
 */
import { Text, View } from '@tarojs/components'
import { sortData } from '@kit/core'
import type { Align, DataTableProps, TableColumn } from './DataTable.types'
import './DataTable.scss'

const ALIGN: Record<Align, 'left' | 'center' | 'right'> = {
  left: 'left',
  center: 'center',
  right: 'right',
}

function cellStyle<T>(col: TableColumn<T>) {
  const style: Record<string, unknown> = { textAlign: ALIGN[col.align ?? 'left'] }
  if (col.width !== undefined) {
    style.width = typeof col.width === 'number' ? `${col.width}px` : col.width
    style.flexShrink = 0
  } else {
    style.flex = 1
  }
  return style
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

  return (
    <View className={`kit-table ${className}`}>
      <View className="kit-table__head">
        {columns.map((col) => (
          <View key={col.key} className="kit-table__th" style={cellStyle(col)}>
            {col.sortable ? (
              <View className="kit-table__sort" onClick={() => handleSort(col)}>
                <Text>{col.title}</Text>
                <Text className="kit-table__arrow">
                  {sortState !== null && sortState !== undefined && sortState.key === col.key
                    ? sortState.order === 'asc'
                      ? '↑'
                      : '↓'
                    : '↕'}
                </Text>
              </View>
            ) : (
              <Text>{col.title}</Text>
            )}
          </View>
        ))}
      </View>

      {loading ? (
        <View>
          {Array.from({ length: 3 }, (_, r) => (
            <View className="kit-table__row" key={`sk-${r}`}>
              {columns.map((col) => (
                <View
                  key={col.key}
                  className="kit-table__cell kit-table__skeleton"
                  style={cellStyle(col)}
                />
              ))}
            </View>
          ))}
        </View>
      ) : sorted.length === 0 ? (
        <View className="kit-table__empty">
          <Text>{empty ?? '暂无数据'}</Text>
        </View>
      ) : (
        <View>
          {sorted.map((row, i) => {
            const rk =
              rowKey === undefined
                ? String(i)
                : typeof rowKey === 'function'
                  ? rowKey(row, i)
                  : String(row[rowKey] ?? i)
            return (
              <View
                className={`kit-table__row${stripe && i % 2 === 1 ? ' kit-table__row--stripe' : ''}${
                  onRowClick !== undefined ? ' kit-table__row--clickable' : ''
                }`}
                key={rk}
                {...(onRowClick !== undefined ? { onClick: () => onRowClick(row, i) } : {})}
              >
                {columns.map((col) => (
                  <View key={col.key} className="kit-table__cell" style={cellStyle(col)}>
                    <Text>
                      {col.render !== undefined
                        ? col.render((row as Record<string, unknown>)[col.key], row, i)
                        : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </Text>
                  </View>
                ))}
              </View>
            )
          })}
        </View>
      )}
    </View>
  )
}
