import { useState } from 'react'
import type { ReactNode } from 'react'
import { Button } from '../../Button'
import { StateContainer } from '../index'
import type { LoadingMode, StateStatus } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border-default bg-bg-page">
      <span className="border-b border-border-default px-4 py-2 text-caption text-text-tertiary">
        {label}
      </span>
      {children}
    </div>
  )
}

/** 成功态的业务内容（假列表） */
function ListContent() {
  const rows = [
    '设备巡检工单 #A1023 · 进行中',
    '设备巡检工单 #A1022 · 已完成',
    '设备巡检工单 #A1021 · 已完成',
  ]
  return (
    <ul className="flex flex-col gap-3 p-6">
      {rows.map((r) => (
        <li
          key={r}
          className="flex items-center gap-3 rounded-md border border-border-default bg-bg-card px-4 py-3"
        >
          <span className="size-2 rounded-full bg-success-default" />
          <span className="text-body-sm text-text-primary">{r}</span>
        </li>
      ))}
    </ul>
  )
}

/** 可交互：切换四态、切换 loading 形态、错误重试（loading→success） */
function InteractiveDemo() {
  const [status, setStatus] = useState<StateStatus>('success')
  const [loadingMode, setLoadingMode] = useState<LoadingMode>('skeleton')

  // 模拟重试：先回到 loading，1.2s 后成功（真实项目由 core 的请求 hook 驱动）
  const handleRetry = () => {
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 1200)
  }

  const statusBtn = (s: StateStatus, text: string) => (
    <Button variant={status === s ? 'primary' : 'secondary'} size="sm" onClick={() => setStatus(s)}>
      {text}
    </Button>
  )

  return (
    <Card label="可交互：切换状态 / loading 形态 / 错误重试">
      <div className="flex flex-wrap items-center gap-2 border-b border-border-default px-4 py-3">
        {statusBtn('loading', 'loading')}
        {statusBtn('empty', 'empty')}
        {statusBtn('error', 'error')}
        {statusBtn('success', 'success')}
        <span className="mx-1 h-4 w-px bg-border-default" />
        <Button
          variant={loadingMode === 'skeleton' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setLoadingMode('skeleton')}
        >
          骨架屏
        </Button>
        <Button
          variant={loadingMode === 'spinner' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setLoadingMode('spinner')}
        >
          转圈
        </Button>
      </div>
      <StateContainer status={status} loadingMode={loadingMode} onRetry={handleRetry}>
        <ListContent />
      </StateContainer>
    </Card>
  )
}

export function States() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="md:col-span-2">
        <InteractiveDemo />
      </div>

      <Card label="默认兜底 · loading（skeleton）">
        <StateContainer status="loading">
          <ListContent />
        </StateContainer>
      </Card>

      <Card label="默认兜底 · loading（spinner）">
        <StateContainer status="loading" loadingMode="spinner">
          <ListContent />
        </StateContainer>
      </Card>

      <Card label="默认兜底 · empty">
        <StateContainer status="empty">
          <ListContent />
        </StateContainer>
      </Card>

      <Card label="默认兜底 · error（无 onRetry 则不显示重试按钮）">
        <StateContainer status="error">
          <ListContent />
        </StateContainer>
      </Card>

      <Card label="自定义 slot · error（完全接管错误视图）">
        <StateContainer
          status="error"
          error={
            <div className="flex flex-col items-center gap-3 px-6 py-10 text-center">
              <span className="text-body-md font-medium text-text-primary">
                服务暂时不可用（自定义视图）
              </span>
              <span className="max-w-[300px] text-caption text-text-tertiary">
                可在此放入任意自定义错误插画、错误码与多按钮组合。
              </span>
            </div>
          }
        >
          <ListContent />
        </StateContainer>
      </Card>
    </div>
  )
}
