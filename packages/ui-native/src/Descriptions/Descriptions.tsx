/**
 * Descriptions 描述列表（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * flex 布局模拟表格，支持标题/列数/边框。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { DescriptionsItem, DescriptionsProps } from './Descriptions.types'

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
  style,
}: DescriptionsProps) {
  const rows = chunkItems(items, column)

  return (
    <YStack width="100%" style={style}>
      {title ? (
        <Text fontSize="$bodyMd" fontWeight={500} color="$textPrimary" marginBottom={12}>
          {title}
        </Text>
      ) : null}
      <YStack
        width="100%"
        {...(bordered
          ? {
              borderWidth: 1,
              borderColor: '$borderDefault',
              borderRadius: '$md',
              overflow: 'hidden',
            }
          : {})}
      >
        {rows.map((row, ri) => (
          <XStack key={ri} width="100%">
            {row.map((item, ci) => (
              <YStack
                key={ci}
                flex={item.span ?? 1}
                paddingHorizontal={12}
                paddingVertical={8}
                gap={4}
                {...(bordered
                  ? {
                      borderRightWidth: ci < row.length - 1 ? 1 : 0,
                      borderRightColor: '$borderDefault',
                      borderBottomWidth: 1,
                      borderBottomColor: '$borderDefault',
                    }
                  : {})}
              >
                <Text fontSize="$bodySm" color="$textTertiary">
                  {item.label}
                </Text>
                <Text fontSize="$bodySm" color="$textPrimary">
                  {item.value}
                </Text>
              </YStack>
            ))}
          </XStack>
        ))}
      </YStack>
    </YStack>
  )
}
