/**
 * Anchor 锚点（web）—— 侧边锚点导航，点击滚动到对应位置，支持滚动监听激活。
 */
import { useEffect, useState } from 'react'
import { cn } from '@kit/core'
import type { AnchorItem, AnchorProps } from './Anchor.types'

export function Anchor({
  items = [],
  affix = false,
  offsetTop = 24,
  activeKey,
  onChange,
  onClick,
  className,
}: AnchorProps) {
  const [innerActive, setInnerActive] = useState<string>(items[0]?.key ?? '')
  const currentActive = activeKey ?? innerActive

  useEffect(() => {
    if (activeKey !== undefined) return
    const handleScroll = () => {
      const scrollPos = window.scrollY + offsetTop + 50
      let current = items[0]?.key ?? ''
      for (const item of items) {
        const el = document.getElementById(item.href)
        if (el && el.offsetTop <= scrollPos) {
          current = item.key
        }
      }
      setInnerActive(current)
      onChange?.(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items, offsetTop, activeKey, onChange])

  const handleClick = (item: AnchorItem) => {
    const el = document.getElementById(item.href)
    if (el) {
      window.scrollTo({ top: el.offsetTop - offsetTop, behavior: 'smooth' })
    }
    setInnerActive(item.key)
    onChange?.(item.key)
    onClick?.(item.key, item.href)
  }

  return (
    <nav
      className={cn(
        'flex flex-col gap-1 border-l-2 border-border-default pl-3',
        affix ? 'sticky' : '',
        className,
      )}
      style={affix ? { top: offsetTop } : undefined}
    >
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={cn(
            'truncate py-1.5 text-left text-bodySm transition-colors',
            currentActive === item.key
              ? 'font-medium text-primary-default'
              : 'text-text-secondary hover:text-text-primary',
          )}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}
