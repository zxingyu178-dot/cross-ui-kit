/**
 * Card 卡片（mini：小程序 / 移动 H5）—— 页面骨架最基础的内容容器，组合式 API。
 * Card 负责容器（圆角/描边/底色/可选投影）；Header/Title/Description/Content/Footer 组合分区。
 * 视觉值在 Card.scss 全量 token 化；卡片本身不发请求、不写业务。
 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { cn } from '@kit/core'
import type { CardHeaderProps, CardProps, CardSubPartProps } from './Card.types'
import './Card.scss'

export function Card({ variant = 'outlined', className, children }: CardProps) {
  return (
    <View className={cn('kit-card', variant === 'elevated' && 'kit-card--elevated', className)}>
      {children as ReactNode}
    </View>
  )
}

export function CardHeader({ title, description, action, className }: CardHeaderProps) {
  return (
    <View className={cn('kit-card__header', className)}>
      <View className="kit-card__header-main">
        {title !== undefined && <Text className="kit-card__title">{title}</Text>}
        {description !== undefined && <Text className="kit-card__desc">{description}</Text>}
      </View>
      {action !== undefined && <View className="kit-card__action">{action as ReactNode}</View>}
    </View>
  )
}

export function CardTitle({ className, children }: CardSubPartProps) {
  return <Text className={cn('kit-card__title', className)}>{children}</Text>
}

export function CardDescription({ className, children }: CardSubPartProps) {
  return <Text className={cn('kit-card__desc', className)}>{children}</Text>
}

export function CardContent({ className, children }: CardSubPartProps) {
  return <View className={cn('kit-card__content', className)}>{children as ReactNode}</View>
}

export function CardFooter({ className, children }: CardSubPartProps) {
  return <View className={cn('kit-card__footer', className)}>{children as ReactNode}</View>
}
