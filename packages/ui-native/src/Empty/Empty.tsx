/**
 * Empty 空态（native：iOS / Android）—— 四态之 empty。
 * Tamagui YStack/Stack/Text 纯组合布局：图标（默认中性「空文档」几何图形，可经 icon 替换）
 * + 标题 + 描述 + 可选操作；颜色/间距/圆角只引用 token，是否渲染由父级按数据状态控制。
 */
import type { ReactNode } from 'react'
import { Stack, Text, YStack } from 'tamagui'
import type { EmptyProps } from './Empty.types'

/**
 * 默认空态图形：浅灰圆底 + 空文档轮廓（纯几何、零依赖、暗色自适应）。
 * 尺寸为组件内置图形常量：圆底 96（=3×control-height-sm 32）、文档 38×34、内横线 16×2。
 */
function EmptyDefaultIcon() {
  return (
    <Stack
      width={96}
      height={96}
      borderRadius={9999}
      backgroundColor="$bgActive"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        width={38}
        height={34}
        borderRadius="$md"
        borderWidth={2}
        borderColor="$textTertiary"
        alignItems="center"
        justifyContent="center"
      >
        <Stack width={16} height={2} borderRadius={9999} backgroundColor="$textTertiary" />
      </Stack>
    </Stack>
  )
}

export function Empty({ title, description, icon, action, accessibilityLabel }: EmptyProps) {
  return (
    <YStack
      width="100%"
      alignItems="center"
      justifyContent="center"
      paddingVertical="$10"
      paddingHorizontal="$6"
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      <Stack marginBottom="$4" alignItems="center" justifyContent="center">
        {icon ?? <EmptyDefaultIcon />}
      </Stack>
      {title !== undefined && (
        <Text fontSize="$bodyMd" color="$textSecondary" textAlign="center">
          {title}
        </Text>
      )}
      {description !== undefined && (
        <Text
          marginTop="$1"
          maxWidth={280}
          fontSize="$caption"
          lineHeight={18}
          color="$textTertiary"
          textAlign="center"
        >
          {description}
        </Text>
      )}
      {action !== undefined && (
        <Stack marginTop="$5" alignItems="center" justifyContent="center">
          {action as ReactNode}
        </Stack>
      )}
    </YStack>
  )
}
