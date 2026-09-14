import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { cn } from '@kit/core'
import type { ButtonProps } from './Button.types'

/**
 * 变体样式（视觉值全部走 Tailwind 主题类，主题类在消费工程映射到 @kit/tokens CSS 变量）
 * 禁止在此出现裸颜色/裸数值；改视觉只改 token 源。
 */
export const buttonVariants = cva(
  // base：行内弹性布局、字体、圆角、过渡、聚焦环、禁用态
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ' +
    'transition-colors duration-fast ease-standard select-none ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus ' +
    'disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-default text-primary-text hover:bg-primary-hover active:bg-primary-active ' +
          'disabled:bg-primary-disabled disabled:text-primary-text',
        secondary:
          'border border-border-default bg-bg-card text-text-primary hover:bg-bg-hover active:bg-bg-active ' +
          'disabled:border-border-default disabled:text-text-disabled',
        ghost:
          'text-text-primary hover:bg-bg-hover active:bg-bg-active disabled:text-text-disabled',
        danger:
          'bg-danger-default text-white hover:bg-danger-hover active:bg-danger-default disabled:opacity-50',
        link: 'text-text-link underline-offset-4 hover:underline disabled:text-text-disabled',
      },
      size: {
        sm: 'h-control-sm px-3 text-body-sm',
        md: 'h-control-md px-4 text-body-md',
        lg: 'h-control-lg px-6 text-body-lg',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      block: false,
    },
  },
)

type ButtonVariants = VariantProps<typeof buttonVariants>

/** 加载指示器：尺寸取 iconSize token，颜色继承 currentColor */
function ButtonSpinner() {
  return (
    <svg
      className="animate-spin"
      style={{ width: 'var(--kit-icon-size-md)', height: 'var(--kit-icon-size-md)' }}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      block,
      loading = false,
      disabled = false,
      asChild = false,
      icon,
      children,
      ...rest
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    const mergedDisabled = disabled || loading

    // asChild 模式下不注入内部节点，仅透传 class 与状态
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size, block } as ButtonVariants), className)}
          aria-busy={loading || undefined}
          {...rest}
        >
          {children}
        </Comp>
      )
    }

    return (
      <Comp
        ref={ref}
        type="button"
        className={cn(buttonVariants({ variant, size, block } as ButtonVariants), className)}
        disabled={mergedDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? <ButtonSpinner /> : icon}
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
