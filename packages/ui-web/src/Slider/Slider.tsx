/**
 * Slider 滑块（web）—— @radix-ui/react-slider 封装，
 * 受控优先，min/max/step，禁用态，键盘无障碍，四方向。
 */
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@kit/core'
import type { SliderProps } from './Slider.types'

export function Slider({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = 'horizontal',
  className,
}: SliderProps) {
  const isVertical = orientation === 'vertical'
  return (
    <SliderPrimitive.Root
      className={cn(
        'relative flex touch-none select-none',
        isVertical ? 'h-full flex-col items-center' : 'w-full items-center',
        className,
      )}
      {...(value !== undefined ? { value: [value] } : { defaultValue: [defaultValue] })}
      onValueChange={(v: number[]) => onChange?.(v[0] ?? min)}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      orientation={orientation}
    >
      <SliderPrimitive.Track
        className={cn(
          'relative grow overflow-hidden rounded-full bg-border-default',
          isVertical ? 'h-full w-1' : 'h-1 w-full',
        )}
      >
        <SliderPrimitive.Range
          className={cn('absolute bg-primary-default', isVertical ? 'w-full' : 'h-full')}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-primary-default bg-bg-card shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-default/40 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
  )
}
