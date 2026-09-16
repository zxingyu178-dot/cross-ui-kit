/**
 * Breadcrumb 面包屑（native：iOS / Android）—— 路径导航，最后一项为当前页。
 * 中间项绑 onPress（受控），可点项 accessibilityRole=link；颜色只引用 Tamagui token。
 */
import { Stack, Text, XStack } from 'tamagui'
import type { BreadcrumbProps } from './Breadcrumb.types'

export function Breadcrumb({ items, separator = '/', onNavigate }: BreadcrumbProps) {
  return (
    <XStack flexWrap="wrap" alignItems="center" gap="$2">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        const clickable = !isLast && typeof onNavigate === 'function'
        return (
          <XStack key={i} alignItems="center" gap="$2">
            {isLast ? (
              <Text fontSize="$bodySm" color="$textTertiary">
                {item.label}
              </Text>
            ) : (
              <Stack
                {...(clickable
                  ? { onPress: () => onNavigate(i), accessibilityRole: 'link' as const }
                  : {})}
              >
                <Text fontSize="$bodySm" color="$textSecondary">
                  {item.label}
                </Text>
              </Stack>
            )}
            {!isLast && (
              <Text fontSize="$caption" color="$textTertiary" aria-hidden>
                {separator}
              </Text>
            )}
          </XStack>
        )
      })}
    </XStack>
  )
}
