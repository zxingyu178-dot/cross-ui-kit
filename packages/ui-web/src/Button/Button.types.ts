import type { ButtonHTMLAttributes, ReactNode } from 'react'

/** 视觉层级（三栈同一枚举，见 component-mapping.json sharedProps） */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'

/** 控件尺寸（高度取 controlHeight token） */
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 视觉层级，每个主视觉区域只允许一个 primary */
  variant?: ButtonVariant
  /** 控件尺寸 */
  size?: ButtonSize
  /** 加载中：自动禁用、展示 Spinner、防重复提交，并暴露 aria-busy */
  loading?: boolean
  /** 是否撑满父容器宽度 */
  block?: boolean
  /** 渲染为子元素（Radix Slot，如渲染为路由 Link） */
  asChild?: boolean
  /** 前置图标 */
  icon?: ReactNode
}
