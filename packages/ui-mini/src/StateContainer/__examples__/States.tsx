/** StateContainer 示例：可交互四态切换 + 重试 + 自定义 slot（mini）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '../../Button'
import { StateContainer } from '../index'
import type { LoadingMode, StateStatus } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--kit-radius-lg)',
        border: '1px solid var(--kit-color-border-default)',
        backgroundColor: 'var(--kit-color-bg-page)',
        overflow: 'hidden',
      }}
    >
      <Text
        style={{
          padding: '8px 16px',
          borderBottom: '1px solid var(--kit-color-border-default)',
          fontSize: 'var(--kit-font-size-caption)',
          color: 'var(--kit-color-text-tertiary)',
        }}
      >
        {label}
      </Text>
      {children}
    </View>
  )
}

function ListContent() {
  const rows = [
    '设备巡检工单 #A1023 · 进行中',
    '设备巡检工单 #A1022 · 已完成',
    '设备巡检工单 #A1021 · 已完成',
  ]
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 24 }}>
      {rows.map((r) => (
        <View
          key={r}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            borderRadius: 'var(--kit-radius-md)',
            border: '1px solid var(--kit-color-border-default)',
            backgroundColor: 'var(--kit-color-bg-card)',
            padding: '12px 16px',
          }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              backgroundColor: 'var(--kit-color-success-default)',
            }}
          />
          <Text
            style={{
              fontSize: 'var(--kit-font-size-body-sm)',
              color: 'var(--kit-color-text-primary)',
            }}
          >
            {r}
          </Text>
        </View>
      ))}
    </View>
  )
}

function InteractiveDemo() {
  const [status, setStatus] = useState<StateStatus>('success')
  const [loadingMode, setLoadingMode] = useState<LoadingMode>('skeleton')

  const handleRetry = () => {
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1200)
  }

  const pick = (s: StateStatus, text: string) => (
    <Button variant={status === s ? 'primary' : 'secondary'} size="sm" onPress={() => setStatus(s)}>
      {text}
    </Button>
  )

  return (
    <Card label="可交互：切换状态 / loading 形态 / 错误重试">
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 8,
          padding: 12,
          borderBottom: '1px solid var(--kit-color-border-default)',
        }}
      >
        {pick('loading', 'loading')}
        {pick('empty', 'empty')}
        {pick('error', 'error')}
        {pick('success', 'success')}
        <Button
          variant={loadingMode === 'skeleton' ? 'primary' : 'ghost'}
          size="sm"
          onPress={() => setLoadingMode('skeleton')}
        >
          骨架屏
        </Button>
        <Button
          variant={loadingMode === 'spinner' ? 'primary' : 'ghost'}
          size="sm"
          onPress={() => setLoadingMode('spinner')}
        >
          转圈
        </Button>
      </View>
      <StateContainer status={status} loadingMode={loadingMode} onRetry={handleRetry}>
        <ListContent />
      </StateContainer>
    </Card>
  )
}

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 16 }}>
      <InteractiveDemo />

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

      <Card label="默认兜底 · error（onRetry 提供重试）">
        <StateContainer status="error" onRetry={() => undefined}>
          <ListContent />
        </StateContainer>
      </Card>
    </View>
  )
}
