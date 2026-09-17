/**
 * Affix 固钉（web）—— 监听滚动，当元素距离视口顶部/底部达到偏移量时固定定位。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { AffixProps } from './Affix.types'

export function Affix({ offsetTop, offsetBottom, onChange, children, className }: AffixProps) {
  const [affixed, setAffixed] = useState(false)
  const [placeholderStyle, setPlaceholderStyle] = useState<React.CSSProperties>({})
  const [fixedStyle, setFixedStyle] = useState<React.CSSProperties>({})
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current) return
      const rect = placeholderRef.current.getBoundingClientRect()

      if (offsetTop !== undefined && rect.top <= offsetTop) {
        if (!affixed) {
          setAffixed(true)
          setPlaceholderStyle({ height: rect.height, width: rect.width })
          setFixedStyle({ position: 'fixed', top: offsetTop, width: rect.width, zIndex: 1000 })
          onChange?.(true)
        }
      } else if (offsetBottom !== undefined && window.innerHeight - rect.bottom <= offsetBottom) {
        if (!affixed) {
          setAffixed(true)
          setPlaceholderStyle({ height: rect.height, width: rect.width })
          setFixedStyle({
            position: 'fixed',
            bottom: offsetBottom,
            width: rect.width,
            zIndex: 1000,
          })
          onChange?.(true)
        }
      } else if (affixed) {
        setAffixed(false)
        setPlaceholderStyle({})
        setFixedStyle({})
        onChange?.(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [offsetTop, offsetBottom, affixed, onChange])

  return (
    <div ref={placeholderRef} style={placeholderStyle} className={className}>
      <div style={fixedStyle} className={cn(affixed ? 'shadow-lg' : '')}>
        {children}
      </div>
    </div>
  )
}
