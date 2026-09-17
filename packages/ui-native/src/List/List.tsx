/**
 * List 列表（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 支持数据源/头部底部/边框/尺寸/加载/空状态。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { ListProps, ListSize } from './List.types'

const sizePadding: Record<ListSize, { paddingHorizontal: number; paddingVertical: number }> = {
  sm: { paddingHorizontal: 12, paddingVertical: 8 },
  md: { paddingHorizontal: 16, paddingVertical: 12 },
  lg: { paddingHorizontal: 20, paddingVertical: 16 },
}

export function List({
  dataSource = [],
  header,
  footer,
  bordered = false,
  size = 'md',
  loading = false,
  emptyText = '暂无数据',
  style,
}: ListProps) {
  const pad = sizePadding[size]

  return (
    <YStack
      overflow="hidden"
      borderRadius="$md"
      backgroundColor="$bgCard"
      borderWidth={bordered ? 1 : 0}
      borderColor="$borderDefault"
      style={style}
    >
      {header ? (
        <XStack
          {...pad}
          borderBottomWidth={1}
          borderBottomColor="$borderDefault"
          alignItems="center"
        >
          <Text fontSize="$bodyMd" fontWeight="500" color="$textPrimary">
            {header}
          </Text>
        </XStack>
      ) : null}
      {loading ? (
        <YStack {...pad} gap={8}>
          <YStack height={14} width="60%" borderRadius={4} backgroundColor="$bgMuted" />
          <YStack height={14} width="80%" borderRadius={4} backgroundColor="$bgMuted" />
          <YStack height={14} width="50%" borderRadius={4} backgroundColor="$bgMuted" />
        </YStack>
      ) : dataSource.length === 0 ? (
        <XStack {...pad} alignItems="center" justifyContent="center">
          <Text fontSize="$bodySm" color="$textTertiary">
            {emptyText}
          </Text>
        </XStack>
      ) : (
        <YStack>
          {dataSource.map((item, index) => (
            <XStack
              key={item.key}
              {...pad}
              alignItems="center"
              justifyContent="space-between"
              borderBottomWidth={index < dataSource.length - 1 ? 1 : 0}
              borderBottomColor="$borderDefault"
              opacity={item.disabled ? 0.5 : 1}
            >
              <YStack flex={1} minWidth={0}>
                <Text fontSize="$bodyMd" fontWeight="500" color="$textPrimary">
                  {item.title}
                </Text>
                {item.description ? (
                  <Text marginTop={2} fontSize="$caption" color="$textTertiary">
                    {item.description}
                  </Text>
                ) : null}
              </YStack>
              {item.extra ? (
                <XStack marginLeft={16} flexShrink={0}>
                  {item.extra}
                </XStack>
              ) : null}
            </XStack>
          ))}
        </YStack>
      )}
      {footer ? (
        <XStack {...pad} borderTopWidth={1} borderTopColor="$borderDefault" alignItems="center">
          <Text fontSize="$bodySm" color="$textSecondary">
            {footer}
          </Text>
        </XStack>
      ) : null}
    </YStack>
  )
}
