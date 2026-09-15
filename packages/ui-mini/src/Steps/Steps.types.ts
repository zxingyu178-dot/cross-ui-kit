import type { ReactNode } from 'react'
import type { StepStatus } from '@kit/core'

export type { StepStatus }

/** 方向：horizontal 横向（默认）/ vertical 纵向 */
export type StepsDirection = 'horizontal' | 'vertical'

export interface StepItem {
  /** 步骤标题 */
  title: ReactNode
  /** 步骤次要描述（可选） */
  description?: ReactNode
  /** 显式状态，覆盖按 current 推导的结果（如把当前步标为 error） */
  status?: StepStatus
}

export interface StepsProps {
  /** 步骤列表 */
  items: StepItem[]
  /** 当前步骤索引（从 0 开始，默认 0） */
  current?: number
  /** 排列方向，默认 horizontal */
  direction?: StepsDirection
  /** 点击已完成（finish）步骤回调，用于回溯；未完成步骤不可点 */
  onChange?: (index: number) => void
  className?: string
}
