import type { ReactNode } from 'react'

/** 结果状态：成功 / 信息 / 警告 / 错误（含网络异常） / 404 未找到 */
export type ResultStatus = 'success' | 'info' | 'warning' | 'error' | 'notFound'

export interface ResultProps {
  /** 结果状态，决定默认图标与语义色（默认 info） */
  status?: ResultStatus
  /** 主标题（如「加载失败」），居中 */
  title?: ReactNode
  /** 次要描述（错误原因/引导），限制最大宽度防超长 */
  description?: ReactNode
  /** 自定义图标，传入则替换按 status 生成的默认状态图标 */
  icon?: ReactNode
  /** 主操作区，通常放一个 Button（如「重试」「返回首页」），组合传入 */
  action?: ReactNode
  /** 次要操作区（如「联系客服」），位于主操作下方 */
  extra?: ReactNode
  /** 无障碍标签 */
  accessibilityLabel?: string
}
