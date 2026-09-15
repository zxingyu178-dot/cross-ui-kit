/**
 * Tabs 选项卡（native：iOS / Android）—— Tamagui Tabs 封装，line（下划线）形态。
 * 内部统一受控（active = 外部 value ?? 内部 state），用激活值驱动下划线与文字色；
 * 颜色/字号/间距只引用 Tamagui token，非激活面板由 Tamagui 默认卸载。
 */
import { useState } from 'react'
import { Tabs as TamTabs, Text } from 'tamagui'
import type { TabsProps, TabsSize } from './Tabs.types'

const PAD: Record<TabsSize, { px: string; py: string; font: string }> = {
  md: { px: '$4', py: '$2', font: '$bodySm' },
  sm: { px: '$3', py: '$1', font: '$caption' },
}

export function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  size = 'md',
  accessibilityLabel,
}: TabsProps) {
  const [inner, setInner] = useState(defaultValue)
  const active = value !== undefined ? value : inner
  const pad = PAD[size]

  return (
    <TamTabs
      {...(active !== undefined ? { value: active } : {})}
      onValueChange={(v) => {
        setInner(v)
        onValueChange?.(v)
      }}
      orientation="horizontal"
      flexDirection="column"
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      <TamTabs.List flexDirection="row" borderBottomWidth={1} borderBottomColor="$borderDefault">
        {items.map((it) => {
          const on = active === it.value
          const disabled = it.disabled === true
          return (
            <TamTabs.Tab
              key={it.value}
              value={it.value}
              disabled={disabled}
              backgroundColor="transparent"
              paddingHorizontal={pad.px}
              paddingVertical={pad.py}
              borderBottomWidth={2}
              borderBottomColor={on ? '$primaryDefault' : 'transparent'}
              {...(disabled ? { opacity: 0.5 } : {})}
            >
              <Text
                fontSize={pad.font}
                fontWeight="$medium"
                color={on ? '$primaryDefault' : disabled ? '$textDisabled' : '$textTertiary'}
              >
                {it.label}
              </Text>
            </TamTabs.Tab>
          )
        })}
      </TamTabs.List>

      {items.map((it) =>
        it.content !== undefined ? (
          <TamTabs.Content key={it.value} value={it.value} paddingTop="$4">
            {it.content}
          </TamTabs.Content>
        ) : null,
      )}
    </TamTabs>
  )
}
