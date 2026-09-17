import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface LayoutProps {
  children?: ReactNode
  direction?: 'horizontal' | 'vertical'
  style?: ViewStyle
}

export interface LayoutHeaderProps {
  children?: ReactNode
  style?: ViewStyle
}

export interface LayoutSiderProps {
  children?: ReactNode
  width?: number | string
  style?: ViewStyle
}

export interface LayoutContentProps {
  children?: ReactNode
  style?: ViewStyle
}

export interface LayoutFooterProps {
  children?: ReactNode
  style?: ViewStyle
}
