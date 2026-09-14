import type { ReactNode } from 'react'
import type { StackProps } from 'tamagui'

/** 视觉层级（三栈同一枚举，见 component-mapping.json sharedProps） */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link'

/** 控件尺寸 */
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  /** 按钮内容（字符串自动包 Text） */
  children?: ReactNode
  /** 视觉层级 */
  variant?: ButtonVariant
  /** 控件尺寸 */
  size?: ButtonSize
  /** 禁用态 */
  disabled?: boolean
  /** 加载中：显示 ActivityIndicator、禁用交互、accessibilityState.busy */
  loading?: boolean
  /** 是否撑满父容器宽度 */
  block?: boolean
  /** 前置图标（loading 时被替换） */
  icon?: ReactNode
  /** 无障碍标签（图标按钮必填） */
  accessibilityLabel?: string
  /** 按压事件（web/mini 对应 onClick） */
  onPress?: StackProps['onPress']
}
