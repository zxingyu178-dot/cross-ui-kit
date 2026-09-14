/**
 * __ComponentName__ 类型定义（native 栈模板）
 * 触摸事件统一 onPress；核心 props 与 web/mini 映射表 sharedProps 一致。
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
  /** 加载中（自动禁用并显示 ActivityIndicator） */
  loading?: boolean
  /** 无障碍标签（必填语义，图标按钮不可省略） */
  accessibilityLabel?: string
  /** 按压事件（web 对应 onClick） */
  onPress?: () => void
}
