import type { ReactNode } from 'react'

export interface LayoutProps {
  /** 子元素 */
  children?: ReactNode
  /** 布局方向 */
  direction?: 'horizontal' | 'vertical'
  /** 外层容器类名 */
  className?: string
}

export interface LayoutHeaderProps {
  children?: ReactNode
  className?: string
}

export interface LayoutSiderProps {
  children?: ReactNode
  width?: number | string
  className?: string
}

export interface LayoutContentProps {
  children?: ReactNode
  className?: string
}

export interface LayoutFooterProps {
  children?: ReactNode
  className?: string
}
