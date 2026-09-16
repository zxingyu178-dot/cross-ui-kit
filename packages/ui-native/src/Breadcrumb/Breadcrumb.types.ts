import type { ReactNode } from 'react'

export interface BreadcrumbItem {
  /** 显示文本 */
  label: ReactNode
  /** 链接地址（仅中间项语义；native 由壳决定跳转，组件只回调 onNavigate） */
  href?: string
}

export interface BreadcrumbProps {
  /** 面包屑路径，最后一项为当前页 */
  items: BreadcrumbItem[]
  /** 分隔符，默认 '/' */
  separator?: ReactNode
  /** 点击中间项回调（可选，受控） */
  onNavigate?: (index: number) => void
}
