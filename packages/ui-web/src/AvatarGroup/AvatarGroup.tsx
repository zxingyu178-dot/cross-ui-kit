/**
 * AvatarGroup 头像组（web）—— 多个头像堆叠显示，超出显示 +N。
 */
import { cn } from '@kit/core'
import type { AvatarGroupProps } from './AvatarGroup.types'

export function AvatarGroup({
  items = [],
  max = 5,
  size = 32,
  shape = 'circle',
  children,
  className,
}: AvatarGroupProps) {
  const displayItems = items.slice(0, max)
  const remaining = items.length - max

  return (
    <div className={cn('flex items-center', className)} style={{ gap: -size / 4 }}>
      {displayItems.map((item, index) => (
        <div
          key={item.key}
          className={cn(
            'flex items-center justify-center overflow-hidden border-2 border-bg-card',
            shape === 'circle' ? 'rounded-full' : 'rounded-md',
          )}
          style={{
            width: size,
            height: size,
            backgroundColor: item.color ?? 'var(--kit-color-primary-default)',
            marginLeft: index > 0 ? -size / 4 : 0,
            zIndex: displayItems.length - index,
          }}
        >
          {item.src ? (
            <img src={item.src} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="font-medium text-white" style={{ fontSize: size * 0.4 }}>
              {item.text ?? item.key.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      ))}
      {remaining > 0 ? (
        <div
          className={cn(
            'flex items-center justify-center overflow-hidden border-2 border-bg-card bg-bg-muted',
            shape === 'circle' ? 'rounded-full' : 'rounded-md',
          )}
          style={{
            width: size,
            height: size,
            marginLeft: -size / 4,
            zIndex: 0,
          }}
        >
          <span className="font-medium text-text-secondary" style={{ fontSize: size * 0.35 }}>
            +{remaining}
          </span>
        </div>
      ) : null}
      {children}
    </div>
  )
}
