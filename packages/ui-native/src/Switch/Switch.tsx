/**
 * Switch（native：iOS / Android）—— Tamagui Switch + SwitchThumb 封装。
 * 视觉值只引用 Tamagui token；轨道色随开关态切换（受控/非受控均由内部 isOn 驱动）。
 * 滑块中性白（$primaryText）；loading 期间拦截切换但不置灰。
 */
import { useState } from 'react'
import { Pressable } from 'react-native'
import { Spinner, Switch as TamSwitch, SwitchThumb, Text, XStack, type SizeTokens } from 'tamagui'
import type { SwitchProps, SwitchSize } from './Switch.types'

/** 尺寸映射到 Tamagui size token（轨道与滑块等比缩放） */
const SIZE_TOKEN: Record<SwitchSize, SizeTokens> = {
  md: '$4',
  sm: '$3',
}

export function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  loading = false,
  size = 'md',
  label,
  accessibilityLabel,
}: SwitchProps) {
  // 非受控时内部维护状态以驱动轨道色；受控时完全跟随 checked
  const [inner, setInner] = useState(defaultChecked)
  const isOn = checked !== undefined ? checked : inner
  const a11yLabel = accessibilityLabel ?? (typeof label === 'string' ? label : undefined)

  const handle = (v: boolean) => {
    if (loading) return
    if (checked === undefined) setInner(v)
    onCheckedChange?.(v)
  }

  const track = (
    <TamSwitch
      checked={isOn}
      onCheckedChange={handle}
      disabled={disabled}
      size={SIZE_TOKEN[size]}
      backgroundColor={isOn ? '$primaryDefault' : '$bgHover'}
      opacity={disabled ? 0.5 : 1}
      accessibilityRole="switch"
      {...(a11yLabel !== undefined ? { accessibilityLabel: a11yLabel } : {})}
      accessibilityState={{ checked: isOn, disabled, busy: loading }}
    >
      <SwitchThumb backgroundColor="$primaryText">
        {loading ? <Spinner size="small" color="$primaryDefault" /> : null}
      </SwitchThumb>
    </TamSwitch>
  )

  if (label === undefined) {
    return track
  }

  return (
    <XStack gap="$2" alignItems="center">
      {track}
      <Pressable
        accessibilityRole="none"
        disabled={disabled || loading || checked === undefined}
        onPress={() => {
          if (checked !== undefined) handle(!checked)
        }}
      >
        <Text color={disabled ? '$textDisabled' : '$textPrimary'} fontSize="$bodyMd">
          {label}
        </Text>
      </Pressable>
    </XStack>
  )
}
