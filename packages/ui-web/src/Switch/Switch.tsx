/**
 * Switch（web）—— @radix-ui/react-switch 封装。
 * 视觉值只引用 Tailwind 主题 token（映射自 @kit/tokens），onCheckedChange 统一为 boolean 值回调。
 * 滑块白色为控件中性常量（三栈统一，不随主题换色）；轨道开态走主色、关态走 hover 中性色。
 */
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { forwardRef, useId } from 'react'
import { cn } from '@kit/core'
import type { SwitchProps, SwitchSize } from './Switch.types'

/** 尺寸对应的轨道 / 滑块 / 滑块位移 / spinner 尺寸 */
const DIMS: Record<SwitchSize, { track: string; thumb: string; spinner: string }> = {
  md: {
    track: 'h-6 w-11',
    thumb: 'size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5',
    spinner: 'size-3',
  },
  sm: {
    track: 'h-5 w-9',
    thumb: 'size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5',
    spinner: 'size-2.5',
  },
}

/** 加载转圈（圆弧 + 旋转） */
function LoadingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn('animate-spin', className)} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    checked,
    defaultChecked,
    onCheckedChange,
    disabled = false,
    loading = false,
    size = 'md',
    label,
    id,
    className,
    name,
    value,
  },
  ref,
) {
  const autoId = useId()
  const switchId = id ?? autoId
  const dims = DIMS[size]

  const root = (
    <SwitchPrimitive.Root
      ref={ref}
      id={switchId}
      {...(checked !== undefined ? { checked } : {})}
      {...(defaultChecked !== undefined ? { defaultChecked } : {})}
      {...(name !== undefined ? { name } : {})}
      {...(value !== undefined ? { value } : {})}
      {...(loading ? { 'aria-busy': true } : {})}
      disabled={disabled}
      onCheckedChange={(v) => {
        // loading 期间拦截切换（不置灰，仅忽略操作并显示 spinner），状态待外部确认后再变
        if (!loading) onCheckedChange?.(v)
      }}
      className={cn(
        // 视觉一律用 @theme 语义类（映射自 @kit/tokens），禁止裸引 --kit-* 变量（见 docs/05 §5.1）
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus',
        'data-[state=checked]:bg-primary-default data-[state=unchecked]:bg-bg-hover',
        'disabled:cursor-not-allowed disabled:opacity-50 data-[disabled]:cursor-not-allowed',
        loading && 'cursor-wait',
        dims.track,
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none flex items-center justify-center rounded-full bg-white shadow-sm transition-transform',
          dims.thumb,
        )}
      >
        {loading && <LoadingIcon className={cn('text-primary-default', dims.spinner)} />}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )

  if (!label) {
    return <span className={cn('inline-flex', className)}>{root}</span>
  }

  return (
    <label
      htmlFor={switchId}
      className={cn(
        'inline-flex cursor-pointer select-none items-center gap-2 text-body-md text-text-primary',
        disabled && 'cursor-not-allowed text-text-disabled',
        className,
      )}
    >
      {root}
      <span>{label}</span>
    </label>
  )
})
