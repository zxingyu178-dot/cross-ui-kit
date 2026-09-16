import type { ReactNode } from 'react'

export interface BreadcrumbItem {
  /** 显示文本 */
  label: ReactNode
  /** 链接地址（仅中间项生效；最后一项始终为当前页） */
  href?: string
}

export interface BreadcrumbProps {
  /** 面包屑路径，最后一项为当前页 */
  items: BreadcrumbItem[]
  /** 分隔符，默认 '/' */
  separator?: ReactNode
  /** 点击中间项回调（可选，受控）；web 有 href 时渲染 <a> 并 preventDefault 后回调 */
  onNavigate?: (index: number) => void
  className?: string
}
