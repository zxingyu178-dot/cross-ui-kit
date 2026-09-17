/**
 * Layout 布局（native：iOS / Android）—— 页面整体布局，含 Header/Sider/Content/Footer。
 */
import { XStack, YStack } from 'tamagui'
import type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSiderProps,
} from './Layout.types'

export function Layout({ children, direction = 'vertical', style }: LayoutProps) {
  const Container = direction === 'vertical' ? YStack : XStack
  return (
    <Container width="100%" flex={1} style={style}>
      {children}
    </Container>
  )
}

Layout.Header = function Header({ children, style }: LayoutHeaderProps) {
  return (
    <XStack
      alignItems="center"
      height={56}
      paddingHorizontal={16}
      borderBottomWidth={1}
      borderBottomColor="$borderDefault"
      backgroundColor="$bgCard"
      flexShrink={0}
      style={style}
    >
      {children}
    </XStack>
  )
}

Layout.Sider = function Sider({ children, width = 200, style }: LayoutSiderProps) {
  return (
    <YStack
      flexShrink={0}
      width={width}
      borderRightWidth={1}
      borderRightColor="$borderDefault"
      backgroundColor="$bgCard"
      style={style}
    >
      {children}
    </YStack>
  )
}

Layout.Content = function Content({ children, style }: LayoutContentProps) {
  return (
    <YStack flex={1} padding={16} backgroundColor="$bgMuted" style={style}>
      {children}
    </YStack>
  )
}

Layout.Footer = function Footer({ children, style }: LayoutFooterProps) {
  return (
    <XStack
      alignItems="center"
      justifyContent="center"
      height={48}
      paddingHorizontal={16}
      borderTopWidth={1}
      borderTopColor="$borderDefault"
      backgroundColor="$bgCard"
      flexShrink={0}
      style={style}
    >
      {children}
    </XStack>
  )
}
