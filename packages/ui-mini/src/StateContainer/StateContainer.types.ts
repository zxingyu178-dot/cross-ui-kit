import type { ReactNode } from 'react'

/** 数据区块状态：加载中 / 空 / 错误 / 成功（正常内容） */
export type StateStatus = 'loading' | 'empty' | 'error' | 'success'

/** 加载态呈现：骨架屏（默认，布局不跳动）/ 居中转圈（区块刷新） */
export type LoadingMode = 'skeleton' | 'spinner'

export interface StateContainerProps {
  /** 当前状态（受控，通常由 core 的 useRequest/useTable 输出） */
  status: StateStatus
  /** loading 态呈现方式（默认 skeleton 骨架屏） */
  loadingMode?: LoadingMode
  /** 自定义 loading 视图，传入则覆盖默认骨架屏/转圈 */
  loading?: ReactNode
  /** 自定义空态视图，传入则覆盖默认 Empty */
  empty?: ReactNode
  /** 自定义错误视图，传入则覆盖默认 Result(error) */
  error?: ReactNode
  /** 默认错误视图的重试回调；传入后默认错误视图才显示「重试」按钮（完全自定义请用 error slot） */
  onRetry?: () => void
  /** success（normal）态内容，必填 */
  children: ReactNode
  /** 无障碍标签（H5 映射 aria-label） */
  accessibilityLabel?: string
  /** 自定义类名 */
  className?: string
}
