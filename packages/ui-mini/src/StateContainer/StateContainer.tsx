/**
 * StateContainer 四态编排容器（mini：小程序 / 移动 H5）—— 铁律#6「四态必齐」一站式收口。
 * 受控 status：loading / empty / error / success，默认用 Skeleton(或 Spinner)、Empty、Result 兜底，
 * 各态均可经 loading/empty/error slot 整体覆盖；success 渲染 children。
 * 视图只做切换，数据与重试逻辑在 core / 父级（onRetry 仅接到默认错误视图按钮上）。
 */
import type { ReactNode } from 'react'
import { View } from '@tarojs/components'
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
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
        }}
      >
        <Spinner size="md" tone="muted" accessibilityLabel={FALLBACK_TEXT.loading} />
      </View>
    )
  }
  return (
    <View style={{ width: '100%', boxSizing: 'border-box', padding: 24 }}>
      <Skeleton variant="text" lines={4} />
    </View>
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
              <Button size="sm" onPress={onRetry}>
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
    <View
      className={cn('kit-state-container', className)}
      style={{ width: '100%' }}
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
    >
      {body as ReactNode}
    </View>
  )
}
