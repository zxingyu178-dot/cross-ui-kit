/** 旋转圈尺寸 */
export type SpinnerSize = 'sm' | 'md' | 'lg'

/** 色调：primary 主色 / muted 中性低调 / inverse 反白（用于主色或深色底上） */
export type SpinnerTone = 'primary' | 'muted' | 'inverse'

export interface SpinnerProps {
  /** 尺寸：sm 16 / md 24 / lg 32（默认 md） */
  size?: SpinnerSize
  /** 色调（默认 primary） */
  tone?: SpinnerTone
  /** 无障碍标签（H5 映射 aria-label） */
  accessibilityLabel?: string
  /** 自定义类名 */
  className?: string
}
