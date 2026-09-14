/**
 * Checkbox（web）—— @radix-ui/react-checkbox 封装。
 * 视觉值只引用 Tailwind 主题 token（映射自 @kit/tokens），onChange 统一为 boolean 值回调。
 */
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef, useId } from 'react'
import { cn } from '@kit/core'
import type { CheckboxProps } from './Checkbox.types'

/** 勾选标记（lucide check 路径） */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-3.5"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

/** 半选标记（横线） */
function IndeterminateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className="size-3.5"
    >
      <path d="M5 12h14" />
    </svg>
  )
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  {
    checked,
    defaultChecked,
    disabled = false,
    indeterminate = false,
    label,
    error = false,
    id,
    className,
    onChange,
  },
  ref,
) {
  const autoId = useId()
  const checkboxId = id ?? autoId
  const rootChecked = indeterminate ? 'indeterminate' : checked

  const root = (
    <CheckboxPrimitive.Root
      ref={ref}
      id={checkboxId}
      {...(rootChecked !== undefined ? { checked: rootChecked } : {})}
      {...(defaultChecked !== undefined ? { defaultChecked } : {})}
      disabled={disabled}
      aria-invalid={error || undefined}
      onCheckedChange={(v) => onChange?.(v === true)}
      className={cn(
        // 视觉一律用 @theme 语义类（映射自 @kit/tokens），禁止用方括号任意值语法裸引 --kit-* 变量
        // （裸 var 任意值类不被 Tailwind 稳定编译，且不随暗色语义切换，见 docs/05 §5.1）
        'peer inline-flex size-5 shrink-0 items-center justify-center rounded-sm border border-border-default bg-bg-card transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus',
        'data-[state=checked]:border-primary-default data-[state=checked]:bg-primary-default data-[state=checked]:text-primary-text',
        'data-[state=indeterminate]:border-primary-default data-[state=indeterminate]:bg-primary-default data-[state=indeterminate]:text-primary-text',
        'disabled:cursor-not-allowed disabled:border-border-default disabled:bg-bg-hover disabled:data-[state=checked]:bg-primary-disabled disabled:data-[state=checked]:text-text-disabled',
        error && 'border-border-danger',
      )}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        {indeterminate ? <IndeterminateIcon /> : <CheckIcon />}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

  if (!label) {
    return <span className={cn('inline-flex', className)}>{root}</span>
  }

  return (
    <label
      htmlFor={checkboxId}
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
