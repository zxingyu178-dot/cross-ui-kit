import type { MouseEvent, ReactNode } from 'react'

/** 视觉层级（三栈同一枚举，见 component-mapping.json sharedProps） */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'

/** 控件尺寸（小端统一最小热区 44px，尺寸主要区分字号/内边距） */
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  /** 按钮内容 */
  children?: ReactNode
  /** 视觉层级 */
  variant?: ButtonVariant
  /** 控件尺寸 */
  size?: ButtonSize
  /** 禁用态 */
  disabled?: boolean
  /** 加载中：自动禁用防重复提交 */
  loading?: boolean
  /** 是否撑满父容器宽度 */
  block?: boolean
  /** 前置图标 */
  icon?: ReactNode
  /** 外层类名（只允许 token 化的样式类） */
  className?: string
  /** 点击（web 对应 onClick；封装层统一为 onPress 业务语义） */
  onPress?: (e: MouseEvent<HTMLButtonElement>) => void
}
