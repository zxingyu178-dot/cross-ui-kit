/**
 * Steps 步骤条（web）—— 引导多步流程，横向/纵向两方向。
 * 状态由 @kit/core 的 deriveStepStatus 推导（wait/process/finish/error），视图只负责渲染。
 * 圆点/连线/文字颜色全走 token 语义类；finish 步骤可点击回溯（role=button，Enter/Space 触发）。
 */
import { Fragment } from 'react'
import type { KeyboardEvent } from 'react'
import { cn, deriveStepStatus, isConnectorActive } from '@kit/core'
import type { StepStatus } from '@kit/core'
import type { StepsProps } from './Steps.types'

function Indicator({ status, index }: { status: StepStatus; index: number }) {
  return (
    <span
      className={cn(
        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-body-sm font-medium',
        status === 'finish' && 'bg-primary-default text-white',
        status === 'process' && 'border-2 border-primary-default bg-bg-card text-primary-default',
        status === 'wait' && 'bg-bg-active text-text-tertiary',
        status === 'error' && 'bg-danger-bg text-danger-default',
      )}
    >
      {status === 'finish' ? '✓' : status === 'error' ? '!' : index + 1}
    </span>
  )
}

function titleClass(status: StepStatus): string {
  return cn(
    'text-body-sm',
    status === 'wait' && 'text-text-tertiary',
    status === 'error' && 'text-danger-default',
    (status === 'finish' || status === 'process') && 'text-text-primary',
    status === 'process' && 'font-medium',
  )
}

export function Steps({
  items,
  current = 0,
  direction = 'horizontal',
  onChange,
  className,
  id,
}: StepsProps) {
  const horizontal = direction === 'horizontal'

  return (
    <ol id={id} className={cn('flex', horizontal ? 'flex-row items-start' : 'flex-col', className)}>
      {items.map((item, i) => {
        const status = deriveStepStatus(i, current, item.status)
        const connectorActive = isConnectorActive(i, current, item.status)
        const clickable = typeof onChange === 'function' && status === 'finish'
        const connectorColor = connectorActive ? 'bg-primary-default' : 'bg-border-default'

        const onKeyDown = clickable
          ? (e: KeyboardEvent<HTMLLIElement>) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onChange(i)
              }
            }
          : undefined

        const body = (
          <div className={cn('flex flex-col', horizontal ? 'mt-2' : 'ml-3')}>
            <span className={titleClass(status)}>{item.title}</span>
            {item.description !== undefined && (
              <span className="mt-0.5 text-caption text-text-tertiary">{item.description}</span>
            )}
          </div>
        )

        return (
          <Fragment key={i}>
            {horizontal ? (
              <li
                className={cn(
                  'flex flex-1 flex-col items-center text-center',
                  clickable && 'cursor-pointer select-none',
                )}
                {...(clickable
                  ? { role: 'button', tabIndex: 0, onClick: () => onChange(i), onKeyDown }
                  : {})}
                {...(status === 'process' ? { 'aria-current': 'step' } : {})}
              >
                <Indicator status={status} index={i} />
                {body}
              </li>
            ) : (
              <li
                className={cn(
                  'flex flex-row items-stretch',
                  clickable && 'cursor-pointer select-none',
                )}
                {...(clickable
                  ? { role: 'button', tabIndex: 0, onClick: () => onChange(i), onKeyDown }
                  : {})}
                {...(status === 'process' ? { 'aria-current': 'step' } : {})}
              >
                <div className="flex flex-col items-center">
                  <Indicator status={status} index={i} />
                  {i < items.length - 1 && (
                    <span aria-hidden className={cn('min-h-5 w-0.5 flex-1', connectorColor)} />
                  )}
                </div>
                <div className="flex-1 pb-5">{body}</div>
              </li>
            )}

            {horizontal && i < items.length - 1 && (
              <li aria-hidden className="mt-[13px] flex-1 self-start px-1">
                <span className={cn('block h-0.5 w-full', connectorColor)} />
              </li>
            )}
          </Fragment>
        )
      })}
    </ol>
  )
}
