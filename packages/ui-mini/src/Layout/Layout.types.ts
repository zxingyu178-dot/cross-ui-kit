import type { ReactNode } from 'react'

export interface LayoutProps {
  children?: ReactNode
  direction?: 'horizontal' | 'vertical'
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
