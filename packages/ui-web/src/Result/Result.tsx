/**
 * Result 结果态（web）—— 四态之 error（亦覆盖成功/信息/警告/404 等结果反馈）。
 * status 驱动语义色圆底 + SVG 符号；纯组合布局，操作经 action/extra slot 传入。
 * 只负责结果视觉，是否渲染由父级（StateContainer）按数据状态控制。
 */
import { cn } from '@kit/core'
import type { ResultProps, ResultStatus } from './Result.types'

// status → 圆底色 / 符号色（全部 token 语义类）
const STATUS_THEME: Record<ResultStatus, { bg: string; fg: string }> = {
  success: { bg: 'bg-success-bg', fg: 'text-success-default' },
  info: { bg: 'bg-info-bg', fg: 'text-info-default' },
  warning: { bg: 'bg-warning-bg', fg: 'text-warning-default' },
  error: { bg: 'bg-danger-bg', fg: 'text-danger-default' },
  notFound: { bg: 'bg-bg-active', fg: 'text-text-tertiary' },
}

/** 默认状态图标：语义色圆底 + SVG 符号（notFound 为 404 文字），纯内联、零依赖 */
function ResultIcon({ status }: { status: ResultStatus }) {
  const t = STATUS_THEME[status]
  return (
    <div aria-hidden className={cn('flex size-24 items-center justify-center rounded-full', t.bg)}>
      {status === 'notFound' ? (
        <span className={cn('text-title-sm font-bold', t.fg)}>404</span>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={t.fg}
        >
          {status === 'success' && <path d="M4.5 12.5l5 5L19.5 7" />}
          {status === 'error' && (
            <>
              <path d="M6.5 6.5l11 11" />
              <path d="M17.5 6.5l-11 11" />
            </>
          )}
          {status === 'warning' && (
            <>
              <path d="M12 5v9" />
              <circle cx="12" cy="17.4" r="1.1" fill="currentColor" stroke="none" />
            </>
          )}
          {status === 'info' && (
            <>
              <circle cx="12" cy="7.2" r="1.1" fill="currentColor" stroke="none" />
              <path d="M12 11v8" />
            </>
          )}
        </svg>
      )}
    </div>
  )
}

export function Result({
  status = 'info',
  title,
  description,
  icon,
  action,
  extra,
  accessibilityLabel,
  className,
  id,
}: ResultProps) {
  return (
    <div
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
      {...(id !== undefined ? { id } : {})}
      className={cn(
        'flex w-full flex-col items-center justify-center px-6 py-10 text-center',
        className,
      )}
    >
      <div className="mb-4">{icon ?? <ResultIcon status={status} />}</div>
      {title !== undefined && (
        <div className="text-title-sm font-medium text-text-primary">{title}</div>
      )}
      {description !== undefined && (
        <div className="mt-2 max-w-[300px] text-body-sm text-text-secondary">{description}</div>
      )}
      {action !== undefined && (
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-3">
          {action}
        </div>
      )}
      {extra !== undefined && <div className="mt-3">{extra}</div>}
    </div>
  )
}
