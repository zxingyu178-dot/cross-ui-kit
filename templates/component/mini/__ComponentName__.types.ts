/**
 * __ComponentName__ 类型定义（mini 栈模板）
 * 触摸事件统一 onPress；核心 props 与 web/native 映射表 sharedProps 保持一致。
 */
import type { ReactNode } from 'react'

export interface __ComponentName__Props {
  /** 子内容 */
  children?: ReactNode
  /** 视觉层级（固定枚举，三栈一致） */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'
  /** 尺寸（固定枚举） */
  size?: 'sm' | 'md' | 'lg'
  /** 禁用态 */
  disabled?: boolean
  /** 加载中（自动禁用防重复提交） */
  loading?: boolean
  /** 是否撑满父容器宽度 */
  block?: boolean
  /** 外层类名（只允许 token 化的 SCSS 类） */
  className?: string
  /** 点击（web 对应 onClick） */
  onPress?: () => void
}
