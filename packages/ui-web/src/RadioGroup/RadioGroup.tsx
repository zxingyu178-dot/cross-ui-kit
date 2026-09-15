/**
 * RadioGroup（web）—— @radix-ui/react-radio-group 封装。
 * 视觉值只引用 Tailwind 主题 token（映射自 @kit/tokens），onValueChange 统一为 string 值回调。
 * 圆圈描边/内点走 token；受控/非受控均由 Radix 管理选中态。
 */
import * as RadioPrimitive from '@radix-ui/react-radio-group'
import { forwardRef, useId } from 'react'
import { cn } from '@kit/core'
import type { RadioGroupProps, RadioGroupSize } from './RadioGroup.types'

/** 尺寸对应的圆圈与内点直径 */
const DIMS: Record<RadioGroupSize, { item: string; dot: string }> = {
  md: { item: 'size-5', dot: 'size-2.5' },
  sm: { item: 'size-4', dot: 'size-2' },
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
  {
    options,
    value,
    defaultValue,
    onValueChange,
    disabled = false,
    direction = 'vertical',
    size = 'md',
    name,
    id,
    className,
  },
  ref,
) {
  const autoId = useId()
  const groupId = id ?? autoId
  const dims = DIMS[size]

  return (
    <RadioPrimitive.Root
      ref={ref}
      id={groupId}
      {...(value !== undefined ? { value } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      {...(name !== undefined ? { name } : {})}
      disabled={disabled}
      onValueChange={(v) => onValueChange?.(v)}
      className={cn(
        'flex',
        direction === 'horizontal' ? 'flex-row flex-wrap gap-x-6 gap-y-3' : 'flex-col gap-3',
        className,
      )}
    >
      {options.map((opt) => {
        const itemDisabled = disabled || opt.disabled === true
        const itemId = `${groupId}-${opt.value}`
        return (
          <label
            key={opt.value}
            htmlFor={itemId}
            className={cn(
              'inline-flex cursor-pointer select-none items-center gap-2 text-body-md text-text-primary',
              itemDisabled && 'cursor-not-allowed text-text-disabled',
            )}
          >
            <RadioPrimitive.Item
              id={itemId}
              value={opt.value}
              disabled={itemDisabled}
              className={cn(
                'inline-flex shrink-0 items-center justify-center rounded-full border border-border-default bg-bg-card transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus',
                'data-[state=checked]:border-primary-default',
                'disabled:cursor-not-allowed disabled:border-border-default disabled:bg-bg-hover',
                dims.item,
              )}
            >
              <RadioPrimitive.Indicator className="flex items-center justify-center">
                <span className={cn('rounded-full bg-primary-default', dims.dot)} />
              </RadioPrimitive.Indicator>
            </RadioPrimitive.Item>
            <span>{opt.label}</span>
          </label>
        )
      })}
    </RadioPrimitive.Root>
  )
})
