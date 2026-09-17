/**
 * Layout 布局（mini：小程序 / 移动 H5）—— 页面整体布局，含 Header/Sider/Content/Footer。
 */
import { View } from '@tarojs/components'
import type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSiderProps,
} from './Layout.types'
import './Layout.scss'

export function Layout({ children, direction = 'vertical', className = '' }: LayoutProps) {
  return (
    <View className={`kit-layout kit-layout--${direction} ${className}`.trim()}>{children}</View>
  )
}

Layout.Header = function Header({ children, className = '' }: LayoutHeaderProps) {
  return <View className={`kit-layout__header ${className}`.trim()}>{children}</View>
}

Layout.Sider = function Sider({ children, width = 200, className = '' }: LayoutSiderProps) {
  return (
    <View className={`kit-layout__sider ${className}`.trim()} style={{ width }}>
      {children}
    </View>
  )
}

Layout.Content = function Content({ children, className = '' }: LayoutContentProps) {
  return <View className={`kit-layout__content ${className}`.trim()}>{children}</View>
}

Layout.Footer = function Footer({ children, className = '' }: LayoutFooterProps) {
  return <View className={`kit-layout__footer ${className}`.trim()}>{children}</View>
}
