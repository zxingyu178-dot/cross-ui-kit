/**
 * BackTop 回到顶部（web）—— 固定定位按钮，监听滚动，超过 visibilityHeight 显示，
 * 点击平滑滚动到顶部。
 */
import { useEffect, useState } from 'react'
import { cn } from '@kit/core'
import type { BackTopProps } from './BackTop.types'

export function BackTop({
  visibilityHeight = 400,
  onClick,
  duration = 300,
  className,
}: BackTopProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > visibilityHeight)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visibilityHeight])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onClick?.()
  }

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="回到顶部"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary-default text-white shadow-lg transition-all hover:bg-primary-default/90 focus:outline-none focus:ring-2 focus:ring-primary-default/40',
        className,
      )}
      style={{ transitionDuration: `${duration}ms` }}
      onClick={handleClick}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  )
}
