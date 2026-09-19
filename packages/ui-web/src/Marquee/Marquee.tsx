/**
 * Marquee 跑马灯（web）—— CSS 动画实现，内容无缝滚动。
 */
import { cn } from '@kit/core'
import type { MarqueeProps } from './Marquee.types'

export function Marquee({
  children,
  speed = 50,
  pauseOnHover = true,
  reverse = false,
  className,
}: MarqueeProps) {
  const duration = 20
  return (
    <div
      className={cn('overflow-hidden whitespace-nowrap', className)}
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
      }}
    >
      <div
        className="inline-block"
        style={{
          animation: `kit-marquee-${reverse ? 'reverse' : 'normal'} ${duration}s linear infinite`,
          animationDuration: `${(duration * 50) / speed}s`,
          ...(pauseOnHover ? { ['--pause-on-hover' as string]: 'paused' } : {}),
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'
        }}
      >
        <span className="mr-8">{children}</span>
        <span className="mr-8">{children}</span>
      </div>
      <style>{`@keyframes kit-marquee-normal { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes kit-marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }`}</style>
    </div>
  )
}
