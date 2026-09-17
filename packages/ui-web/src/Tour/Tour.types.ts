import type { ReactNode } from 'react'

export interface TourStep {
  /** 步骤标题 */
  title: string
  /** 步骤描述 */
  description: string
  /** 目标元素选择器（web）或索引（mini/native） */
  target?: string
  /** 自定义内容 */
  content?: ReactNode
}

export interface TourProps {
  /** 引导步骤列表 */
  steps?: TourStep[]
  /** 当前步骤（受控） */
  current?: number
  /** 步骤变化回调 */
  onChange?: (current: number) => void
  /** 完成回调 */
  onFinish?: () => void
  /** 关闭回调 */
  onClose?: () => void
  /** 是否显示遮罩 */
  mask?: boolean
  /** 上一步按钮文字 */
  prevText?: string
  /** 下一步按钮文字 */
  nextText?: string
  /** 完成按钮文字 */
  finishText?: string
  /** 跳过按钮文字 */
  skipText?: string
  /** 是否显示跳过按钮 */
  showSkip?: boolean
  /** 外层容器类名 */
  className?: string
}
