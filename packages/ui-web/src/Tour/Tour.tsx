/**
 * Tour 引导（web）—— 遮罩层 + 提示卡片 + 上一步/下一步/跳过/完成按钮。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { TourProps } from './Tour.types'

export function Tour({
  steps = [],
  current,
  onChange,
  onFinish,
  onClose,
  mask = true,
  prevText = '上一步',
  nextText = '下一步',
  finishText = '完成',
  skipText = '跳过',
  showSkip = true,
  className,
}: TourProps) {
  const [innerCurrent, setInnerCurrent] = useState(0)
  const stepIndex = current ?? innerCurrent
  const step = steps[stepIndex]

  if (!step) return null

  const handlePrev = () => {
    const next = Math.max(0, stepIndex - 1)
    if (current === undefined) setInnerCurrent(next)
    onChange?.(next)
  }

  const handleNext = () => {
    if (stepIndex >= steps.length - 1) {
      onFinish?.()
      return
    }
    const next = stepIndex + 1
    if (current === undefined) setInnerCurrent(next)
    onChange?.(next)
  }

  return (
    <div className={cn('fixed inset-0 z-50', className)}>
      {mask ? <div className="absolute inset-0 bg-black/50" onClick={onClose} /> : null}
      <div className="absolute left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border-default bg-bg-card p-6 shadow-2xl">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-titleSm font-medium text-text-primary">{step.title}</h3>
          <button
            type="button"
            className="flex h-6 w-6 items-center justify-center rounded text-text-tertiary hover:bg-bg-muted hover:text-text-secondary"
            onClick={onClose}
            aria-label="关闭"
          >
            ×
          </button>
        </div>
        <div className="mb-4 text-bodySm text-text-secondary">
          {step.content ?? step.description}
        </div>
        <div className="mb-4 flex items-center gap-1">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-1.5 rounded-full transition-all',
                index === stepIndex ? 'w-6 bg-primary-default' : 'w-1.5 bg-border-default',
              )}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            {showSkip ? (
              <button
                type="button"
                className="text-bodySm text-text-tertiary hover:text-text-secondary"
                onClick={onClose}
              >
                {skipText}
              </button>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
            {stepIndex > 0 ? (
              <button
                type="button"
                className="rounded-md border border-border-default bg-bg-card px-3 py-1.5 text-bodySm text-text-primary hover:bg-bg-muted"
                onClick={handlePrev}
              >
                {prevText}
              </button>
            ) : null}
            <button
              type="button"
              className="rounded-md bg-primary-default px-3 py-1.5 text-bodySm text-white hover:bg-primary-default/90"
              onClick={handleNext}
            >
              {stepIndex >= steps.length - 1 ? finishText : nextText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
