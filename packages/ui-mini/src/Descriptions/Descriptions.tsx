/**
 * Descriptions 描述列表（mini：小程序 / 移动 H5）—— View+Text 自建，
 * flex 布局模拟表格，支持标题/列数/边框。
 */
import { Text, View } from '@tarojs/components'
import type { DescriptionsItem, DescriptionsProps } from './Descriptions.types'
import './Descriptions.scss'

function chunkItems(items: DescriptionsItem[], column: number): DescriptionsItem[][] {
  const rows: DescriptionsItem[][] = []
  let currentRow: DescriptionsItem[] = []
  let currentSpan = 0
  for (const item of items) {
    const span = item.span ?? 1
    if (currentSpan + span > column && currentRow.length > 0) {
      rows.push(currentRow)
      currentRow = []
      currentSpan = 0
    }
    currentRow.push(item)
    currentSpan += span
  }
  if (currentRow.length > 0) rows.push(currentRow)
  return rows
}

export function Descriptions({
  title,
  items,
  column = 3,
  bordered = false,
  layout: _layout = 'horizontal',
  className = '',
}: DescriptionsProps) {
  const rows = chunkItems(items, column)

  return (
    <View className={`kit-descriptions ${className}`.trim()}>
      {title ? <Text className="kit-descriptions__title">{title}</Text> : null}
      <View
        className={`kit-descriptions__body ${bordered ? 'kit-descriptions__body--bordered' : ''}`}
      >
        {rows.map((row, ri) => (
          <View key={ri} className="kit-descriptions__row">
            {row.map((item, ci) => (
              <View
                key={ci}
                className={`kit-descriptions__item ${bordered ? 'kit-descriptions__item--bordered' : ''}`}
                style={{ flex: item.span ?? 1 }}
              >
                <Text className="kit-descriptions__label">{item.label}</Text>
                <Text className="kit-descriptions__value">{item.value}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}
