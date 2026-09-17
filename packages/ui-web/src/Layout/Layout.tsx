/**
 * Layout 布局（web）—— 页面整体布局，含 Header/Sider/Content/Footer。
 */
import { cn } from '@kit/core'
import type {
  LayoutContentProps,
  LayoutFooterProps,
  LayoutHeaderProps,
  LayoutProps,
  LayoutSiderProps,
} from './Layout.types'

export function Layout({ children, direction = 'vertical', className }: LayoutProps) {
  return (
    <div
      className={cn(
        'flex min-h-0 w-full',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {children}
    </div>
  )
}

Layout.Header = function Header({ children, className }: LayoutHeaderProps) {
  return (
    <header
      className={cn(
        'flex h-14 shrink-0 items-center border-b border-border-default bg-bg-card px-4',
        className,
      )}
    >
      {children}
    </header>
  )
}

Layout.Sider = function Sider({ children, width = 200, className }: LayoutSiderProps) {
  return (
    <aside
      className={cn('shrink-0 overflow-auto border-r border-border-default bg-bg-card', className)}
      style={{ width }}
    >
      {children}
    </aside>
  )
}

Layout.Content = function Content({ children, className }: LayoutContentProps) {
  return <main className={cn('flex-1 overflow-auto bg-bg-muted p-4', className)}>{children}</main>
}

Layout.Footer = function Footer({ children, className }: LayoutFooterProps) {
  return (
    <footer
      className={cn(
        'flex h-12 shrink-0 items-center justify-center border-t border-border-default bg-bg-card px-4 text-caption text-text-tertiary',
        className,
      )}
    >
      {children}
    </footer>
  )
}
