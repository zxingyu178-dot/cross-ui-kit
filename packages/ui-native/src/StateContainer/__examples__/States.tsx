/** StateContainer 示例：可交互四态切换 + 重试（native）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Button } from '../../Button'
import { StateContainer } from '../index'
import type { LoadingMode, StateStatus } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="$bgPage"
      overflow="hidden"
    >
      <Text
        paddingHorizontal="$4"
        paddingVertical="$2"
        borderBottomWidth={1}
        borderBottomColor="$borderDefault"
        fontSize="$caption"
        color="$textTertiary"
      >
        {label}
      </Text>
      {children}
    </YStack>
  )
}

function ListContent() {
  const rows = [
    '设备巡检工单 #A1023 · 进行中',
    '设备巡检工单 #A1022 · 已完成',
    '设备巡检工单 #A1021 · 已完成',
  ]
  return (
    <YStack gap="$3" padding="$6">
      {rows.map((r) => (
        <XStack
          key={r}
          gap="$3"
          alignItems="center"
          borderRadius="$md"
          borderWidth={1}
          borderColor="$borderDefault"
          backgroundColor="$bgCard"
          paddingHorizontal="$4"
          paddingVertical="$3"
        >
          <YStack width={8} height={8} borderRadius={9999} backgroundColor="$successDefault" />
          <Text fontSize="$bodySm" color="$textPrimary">
            {r}
          </Text>
        </XStack>
      ))}
    </YStack>
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
      <XStack
        gap="$2"
        flexWrap="wrap"
        alignItems="center"
        padding="$3"
        borderBottomWidth={1}
        borderBottomColor="$borderDefault"
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
      </XStack>
      <StateContainer status={status} loadingMode={loadingMode} onRetry={handleRetry}>
        <ListContent />
      </StateContainer>
    </Card>
  )
}

export function States() {
  return (
    <YStack gap="$4" padding="$4" backgroundColor="$bgPage">
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
    </YStack>
  )
}
