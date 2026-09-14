import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, useId, type ChangeEvent } from 'react'
import { cn } from '@kit/core'
import type { InputProps } from './Input.types'

/**
 * 输入框样式（视觉值全部走 Tailwind 主题类 -> @kit/tokens CSS 变量）
 * 状态：default / error；尺寸 sm/md/lg。
 */
export const inputVariants = cva(
  'flex w-full rounded-md border bg-bg-card text-text-primary transition-colors duration-fast ' +
    'placeholder:text-text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 ' +
    'disabled:cursor-not-allowed disabled:bg-bg-hover disabled:text-text-disabled [&_svg]:shrink-0',
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
      hasPrefix: { true: 'pl-9' },
      hasSuffix: { true: 'pr-9' },
    },
    defaultVariants: { size: 'md', invalid: false, hasPrefix: false, hasSuffix: false },
  },
)

type InputVariants = VariantProps<typeof inputVariants>

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    size,
    error = false,
    prefixIcon,
    suffixIcon,
    onChange,
    id,
    disabled,
    readOnly,
    ...rest
  },
  ref,
) {
  const invalid = Boolean(error)
  const errorText = typeof error === 'string' ? error : ''
  const autoId = useId()
  const inputId = id ?? `kit-input-${autoId}`

  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="relative flex w-full items-center">
        {prefixIcon ? (
          <span className="pointer-events-none absolute left-3 flex size-5 items-center justify-center text-text-tertiary">
            {prefixIcon}
          </span>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            inputVariants({
              size,
              invalid,
              hasPrefix: Boolean(prefixIcon),
              hasSuffix: Boolean(suffixIcon),
            } as InputVariants),
            className,
          )}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={invalid || undefined}
          aria-describedby={errorText ? `${inputId}-error` : undefined}
          {...rest}
          {...(onChange
            ? { onChange: (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value) }
            : {})}
        />
        {suffixIcon ? (
          <span className="absolute right-3 flex size-5 items-center justify-center text-text-tertiary">
            {suffixIcon}
          </span>
        ) : null}
      </div>
      {errorText ? (
        <p id={`${inputId}-error`} role="alert" className="text-body-sm text-text-danger">
          {errorText}
        </p>
      ) : null}
    </div>
  )
})
