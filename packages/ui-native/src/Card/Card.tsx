/**
 * Card 卡片（native：iOS / Android）—— 页面骨架最基础的内容容器，组合式 API。
 * Card 负责容器（圆角/描边/底色/可选投影）；Header/Title/Description/Content/Footer 组合分区。
 * 颜色/间距/圆角只引用 token；卡片本身不发请求、不写业务。
 */
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { CardHeaderProps, CardProps, CardSubPartProps } from './Card.types'

export function Card({ variant = 'outlined', children }: CardProps) {
  return (
    <YStack
      width="100%"
      overflow="hidden"
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="$bgCard"
      {...(variant === 'elevated' ? { elevation: 2 } : {})}
    >
      {children as ReactNode}
    </YStack>
  )
}

export function CardHeader({ title, description, action }: CardHeaderProps) {
  return (
    <XStack
      alignItems="flex-start"
      justifyContent="space-between"
      gap="$3"
      paddingHorizontal="$6"
      paddingTop="$5"
      paddingBottom="$4"
    >
      <YStack gap="$1" flex={1} minWidth={0}>
        {title !== undefined && <CardTitle>{title}</CardTitle>}
        {description !== undefined && <CardDescription>{description}</CardDescription>}
      </YStack>
      {action !== undefined && (
        <XStack gap="$2" alignItems="center" flexShrink={0}>
          {action as ReactNode}
        </XStack>
      )}
    </XStack>
  )
}

export function CardTitle({ children }: CardSubPartProps) {
  return (
    <Text fontSize="$titleSm" fontWeight="medium" color="$textPrimary">
      {children}
    </Text>
  )
}

export function CardDescription({ children }: CardSubPartProps) {
  return (
    <Text marginTop="$1" fontSize="$caption" color="$textTertiary">
      {children}
    </Text>
  )
}

export function CardContent({ children }: CardSubPartProps) {
  return (
    <YStack paddingHorizontal="$6" paddingVertical="$4">
      {children as ReactNode}
    </YStack>
  )
}

export function CardFooter({ children }: CardSubPartProps) {
  return (
    <XStack
      alignItems="center"
      gap="$3"
      paddingHorizontal="$6"
      paddingVertical="$4"
      borderTopWidth={1}
      borderTopColor="$borderDefault"
    >
      {children as ReactNode}
    </XStack>
  )
}
