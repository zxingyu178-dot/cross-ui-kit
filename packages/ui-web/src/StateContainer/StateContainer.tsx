/**
 * StateContainer 四态编排容器（web）—— 铁律#6「四态必齐」的一站式收口。
 * 受控 status：loading / empty / error / success，内部默认用 Skeleton(或 Spinner)、Empty、Result 兜底，
 * 各态均可经 loading/empty/error slot 整体覆盖；success 渲染 children。
 * 视图只做切换，数据与重试逻辑在 core / 父级（onRetry 仅把回调接到默认错误视图的按钮上）。
 */
import type { ReactNode } from 'react'
import { cn } from '@kit/core'
import { Button } from '../Button'
import { Empty } from '../Empty'
import { Result } from '../Result'
import { Skeleton } from '../Skeleton'
import { Spinner } from '../Spinner'
import type { LoadingMode, StateContainerProps } from './StateContainer.types'

// 兜底默认文案（中文）；生产环境应通过 empty/error slot 传入走 i18n 的视图
const FALLBACK_TEXT = {
  loading: '加载中',
  emptyTitle: '暂无数据',
  emptyDesc: '当前没有可展示的内容。',
  errorTitle: '加载失败',
  errorDesc: '数据加载出错，请稍后重试。',
  retry: '重试',
} as const

function DefaultLoading({ mode }: { mode: LoadingMode }) {
  if (mode === 'spinner') {
    return (
      <div className="flex w-full items-center justify-center px-6 py-10">
        <Spinner size="md" tone="muted" accessibilityLabel={FALLBACK_TEXT.loading} />
      </div>
    )
  }
  return (
    <div className="w-full p-6">
      <Skeleton variant="text" lines={4} />
    </div>
  )
}

function DefaultEmpty() {
  return <Empty title={FALLBACK_TEXT.emptyTitle} description={FALLBACK_TEXT.emptyDesc} />
}

function DefaultError({ onRetry }: { onRetry?: () => void }) {
  return (
    <Result
      status="error"
      title={FALLBACK_TEXT.errorTitle}
      description={FALLBACK_TEXT.errorDesc}
      {...(onRetry !== undefined
        ? {
            action: (
              <Button size="sm" onClick={onRetry}>
                {FALLBACK_TEXT.retry}
              </Button>
            ),
          }
        : {})}
    />
  )
}

export function StateContainer({
  status,
  loadingMode = 'skeleton',
  loading,
  empty,
  error,
  onRetry,
  children,
  accessibilityLabel,
  className,
  id,
}: StateContainerProps) {
  let body: ReactNode
  if (status === 'loading') {
    body = loading ?? <DefaultLoading mode={loadingMode} />
  } else if (status === 'empty') {
    body = empty ?? <DefaultEmpty />
  } else if (status === 'error') {
    body = error ?? <DefaultError {...(onRetry !== undefined ? { onRetry } : {})} />
  } else {
    body = children
  }

  return (
    <div
      {...(id !== undefined ? { id } : {})}
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
      {...(status === 'loading' ? { 'aria-busy': true } : {})}
      className={cn('w-full', className)}
    >
      {body}
    </div>
  )
}
