/**
 * Card 卡片（web）—— 页面骨架最基础的内容容器，组合式 API。
 * Card 负责容器（圆角/描边/底色/可选投影）；Header/Title/Description/Content/Footer 组合分区。
 * 视觉值全部走 token 语义类；卡片本身不发请求、不写业务。
 */
import type { HTMLAttributes } from 'react'
import { cn } from '@kit/core'
import type { CardHeaderProps, CardProps } from './Card.types'

export function Card({
  variant = 'outlined',
  className,
  ...rest
}: CardProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'w-full rounded-lg border border-border-default bg-bg-card text-text-primary',
        variant === 'elevated' && 'shadow-card',
        className,
      )}
      {...rest}
    />
  )
}

export function CardHeader({ title, description, action, className }: CardHeaderProps) {
  return (
    <div
      className={cn('flex flex-row items-start justify-between gap-3 px-6 pb-4 pt-5', className)}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {title !== undefined && <CardTitle>{title}</CardTitle>}
        {description !== undefined && <CardDescription>{description}</CardDescription>}
      </div>
      {action !== undefined && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </div>
  )
}

export function CardTitle({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-title-sm font-medium text-text-primary', className)} {...rest} />
}

export function CardDescription({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-caption text-text-tertiary', className)} {...rest} />
}

export function CardContent({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 py-4', className)} {...rest} />
}

export function CardFooter({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'flex flex-row items-center gap-3 border-t border-border-default px-6 py-4',
        className,
      )}
      {...rest}
    />
  )
}
