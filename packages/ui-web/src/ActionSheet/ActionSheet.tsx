/**
 * ActionSheet 底部动作面板（web）。
 */
import { cn } from '@kit/core'
import type { ActionSheetProps } from './ActionSheet.types'

export function ActionSheet({
  open,
  actions,
  title,
  cancelText = '取消',
  onSelect,
  onClose,
  className,
}: ActionSheetProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 flex flex-col gap-1 rounded-t-2xl bg-bg-card p-3 pb-6',
          className,
        )}
      >
        {title ? (
          <div className="px-3 py-3 text-center text-caption text-text-tertiary">{title}</div>
        ) : null}
        {actions.map((action) => (
          <button
            key={action.key}
            type="button"
            disabled={action.disabled}
            onClick={() => {
              onSelect?.(action.key)
              onClose?.()
            }}
            className={cn(
              'rounded-lg bg-bg-secondary py-3 text-bodyMd transition-colors',
              action.disabled
                ? 'cursor-not-allowed text-text-tertiary'
                : action.danger
                  ? 'text-danger-default'
                  : 'text-text-primary hover:bg-bg-tertiary',
            )}
          >
            {action.label}
          </button>
        ))}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 rounded-lg bg-bg-secondary py-3 text-bodyMd text-text-secondary hover:bg-bg-tertiary"
        >
          {cancelText}
        </button>
      </div>
    </div>
  )
}
