/**
 * DataTable 数据表格（native：iOS / Android）—— XStack/YStack 网格表格。
 * 受控排序（sortState/onSortChange，逻辑在 core sortData）；loading 骨架、空态、斑马纹、行点击。
 */
import { Stack, Text, XStack, YStack } from 'tamagui'
import { sortData } from '@kit/core'
import type { Align, DataTableProps, TableColumn } from './DataTable.types'

const ALIGN: Record<Align, 'left' | 'center' | 'right'> = {
  left: 'left',
  center: 'center',
  right: 'right',
}

function cellStyle<T>(col: TableColumn<T>): {
  flex?: number
  width?: number | string
  alignItems: 'flex-start' | 'center' | 'flex-end'
} {
  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end' } as const
  if (col.width !== undefined) {
    return {
      width: typeof col.width === 'number' ? col.width : col.width,
      alignItems: alignMap[col.align ?? 'left'],
    }
  }
  return { flex: 1, alignItems: alignMap[col.align ?? 'left'] }
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

  const arrowText = (col: TableColumn<T>): string => {
    if (!col.sortable) return ''
    if (sortState !== null && sortState !== undefined && sortState.key === col.key) {
      return sortState.order === 'asc' ? ' ↑' : ' ↓'
    }
    return ' ↕'
  }

  const arrowColor = (col: TableColumn<T>): string => {
    if (sortState !== null && sortState !== undefined && sortState.key === col.key)
      return '$primaryDefault'
    return '$textTertiary'
  }

  return (
    <YStack
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="$bgCard"
      overflow="hidden"
      width="100%"
    >
      <XStack backgroundColor="$bgHover" borderBottomWidth={1} borderBottomColor="$borderDefault">
        {columns.map((col) => (
          <Stack key={col.key} paddingVertical="$3" paddingHorizontal="$4" {...cellStyle(col)}>
            {col.sortable ? (
              <XStack
                alignItems="center"
                gap="$1"
                {...(onSortChange !== undefined
                  ? { onPress: () => handleSort(col), accessibilityRole: 'button' as const }
                  : {})}
              >
                <Text fontSize="$caption" fontWeight="medium" color="$textSecondary">
                  {col.title}
                </Text>
                <Text fontSize="$caption" color={arrowColor(col)}>
                  {arrowText(col)}
                </Text>
              </XStack>
            ) : (
              <Text fontSize="$caption" fontWeight="medium" color="$textSecondary">
                {col.title}
              </Text>
            )}
          </Stack>
        ))}
      </XStack>

      {loading ? (
        <YStack>
          {Array.from({ length: 3 }, (_, r) => (
            <XStack
              key={`sk-${r}`}
              borderBottomWidth={r < 2 ? 1 : 0}
              borderBottomColor="$borderDefault"
            >
              {columns.map((col) => (
                <Stack
                  key={col.key}
                  paddingVertical="$3"
                  paddingHorizontal="$4"
                  {...cellStyle(col)}
                >
                  <Stack
                    height={16}
                    flex={1}
                    borderRadius="$sm"
                    backgroundColor="$bgActive"
                    opacity={0.6}
                  />
                </Stack>
              ))}
            </XStack>
          ))}
        </YStack>
      ) : sorted.length === 0 ? (
        <Stack paddingVertical="$10" alignItems="center">
          <Text fontSize="$bodySm" color="$textTertiary">
            {empty ?? '暂无数据'}
          </Text>
        </Stack>
      ) : (
        <YStack>
          {sorted.map((row, i) => {
            const rk =
              rowKey === undefined
                ? String(i)
                : typeof rowKey === 'function'
                  ? rowKey(row, i)
                  : String(row[rowKey] ?? i)
            return (
              <XStack
                key={rk}
                borderBottomWidth={i < sorted.length - 1 ? 1 : 0}
                borderBottomColor="$borderDefault"
                {...(stripe && i % 2 === 1 ? { backgroundColor: '$bgHover', opacity: 0.45 } : {})}
                {...(onRowClick !== undefined ? { onPress: () => onRowClick(row, i) } : {})}
              >
                {columns.map((col) => (
                  <Stack
                    key={col.key}
                    paddingVertical="$3"
                    paddingHorizontal="$4"
                    {...cellStyle(col)}
                  >
                    <Text
                      fontSize="$bodySm"
                      color="$textPrimary"
                      textAlign={ALIGN[col.align ?? 'left']}
                    >
                      {col.render !== undefined
                        ? col.render((row as Record<string, unknown>)[col.key], row, i)
                        : String((row as Record<string, unknown>)[col.key] ?? '')}
                    </Text>
                  </Stack>
                ))}
              </XStack>
            )
          })}
        </YStack>
      )}
    </YStack>
  )
}
