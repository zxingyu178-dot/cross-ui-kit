/**
 * Select（web）—— @radix-ui/react-select 封装。
 * 视觉值只走 Tailwind 主题语义类（映射自 @kit/tokens）；onChange 统一为 string 值回调。
 */
import * as SelectPrimitive from '@radix-ui/react-select'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, useId } from 'react'
import { cn } from '@kit/core'
import type { SelectOption, SelectProps } from './Select.types'

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-4', className)}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-4', className)}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('size-4', className)}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

/** 触发框样式（与 Input 视觉对齐） */
const triggerVariants = cva(
  'flex w-full items-center justify-between gap-2 rounded-md border bg-bg-card text-text-primary transition-colors duration-fast ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-bg-hover disabled:text-text-disabled ' +
    'data-[placeholder]:text-text-tertiary [&>span]:truncate',
  {
    variants: {
      size: {
        sm: 'h-control-sm px-3 text-body-sm',
        md: 'h-control-md px-4 text-body-md',
        lg: 'h-control-lg px-6 text-body-lg',
      },
      invalid: {
        true: 'border-border-danger focus-visible:outline-border-danger',
        false: 'border-border-default focus-visible:outline-border-focus',
      },
    },
    defaultVariants: { size: 'md', invalid: false },
  },
)

type TriggerVariants = VariantProps<typeof triggerVariants>

export const Select = forwardRef<HTMLButtonElement, SelectProps>(function Select(
  {
    options,
    value,
    defaultValue,
    placeholder = '请选择',
    size,
    disabled = false,
    error = false,
    id,
    className,
    onChange,
  },
  ref,
) {
  const invalid = Boolean(error)
  const errorText = typeof error === 'string' ? error : ''
  const autoId = useId()
  const selectId = id ?? `kit-select-${autoId}`

  return (
    <div className={cn('flex w-full flex-col gap-1.5', className)}>
      <SelectPrimitive.Root
        {...(value !== undefined ? { value } : {})}
        {...(defaultValue !== undefined ? { defaultValue } : {})}
        disabled={disabled}
        {...(onChange ? { onValueChange: onChange } : {})}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          id={selectId}
          aria-invalid={invalid || undefined}
          aria-describedby={errorText ? `${selectId}-error` : undefined}
          className={triggerVariants({ size, invalid } as TriggerVariants)}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown className="text-text-tertiary disabled:opacity-50" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={4}
            className="relative z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-border-default bg-bg-card text-text-primary shadow-popover data-[side=bottom]:translate-y-1"
          >
            <SelectPrimitive.ScrollUpButton className="flex h-6 items-center justify-center text-text-tertiary">
              <ChevronUp />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-1">
              {options.map((opt: SelectOption) => (
                <SelectPrimitive.Item
                  key={opt.value}
                  value={opt.value}
                  {...(opt.disabled !== undefined ? { disabled: opt.disabled } : {})}
                  className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-3 pr-8 text-body-md text-text-primary outline-none data-[highlighted]:bg-bg-hover data-[disabled]:pointer-events-none data-[disabled]:text-text-disabled"
                >
                  <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute right-2 inline-flex items-center text-primary-default">
                    <Check />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex h-6 items-center justify-center text-text-tertiary">
              <ChevronDown />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      {errorText ? (
        <p id={`${selectId}-error`} role="alert" className="text-body-sm text-text-danger">
          {errorText}
        </p>
      ) : null}
    </div>
  )
})
