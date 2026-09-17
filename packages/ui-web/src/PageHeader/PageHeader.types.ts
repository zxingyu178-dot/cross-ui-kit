import type { ReactNode } from 'react'

export interface PageHeaderProps {
  /** 标题 */
  title: ReactNode
  /** 副标题 */
  subTitle?: ReactNode
  /** 面包屑 */
  breadcrumb?: ReactNode
  /** 额外内容（右侧） */
  extra?: ReactNode
  /** 底部内容 */
  footer?: ReactNode
  /** 外层容器类名 */
  className?: string
}
