/**
 * PageHeader 页头（native：iOS / Android）—— 页面顶部的标题、副标题、面包屑和额外操作。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { PageHeaderProps } from './PageHeader.types'

export function PageHeader({ title, subTitle, breadcrumb, extra, footer, style }: PageHeaderProps) {
  return (
    <YStack gap={12} style={style}>
      {breadcrumb ? (
        <Text fontSize="$caption" color="$textTertiary">
          {breadcrumb}
        </Text>
      ) : null}
      <XStack alignItems="flex-start" justifyContent="space-between" gap={16}>
        <YStack gap={4}>
          <Text fontSize={20} fontWeight="600" color="$textPrimary">
            {title}
          </Text>
          {subTitle ? (
            <Text fontSize="$bodySm" color="$textSecondary">
              {subTitle}
            </Text>
          ) : null}
        </YStack>
        {extra ? (
          <XStack flexShrink={0} alignItems="center" gap={8}>
            <Text>{extra}</Text>
          </XStack>
        ) : null}
      </XStack>
      {footer ? (
        <YStack marginTop={4} paddingTop={12} borderTopWidth={1} borderTopColor="$borderDefault">
          <Text fontSize="$caption" color="$textTertiary">
            {footer}
          </Text>
        </YStack>
      ) : null}
    </YStack>
  )
}
