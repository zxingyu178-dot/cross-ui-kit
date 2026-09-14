/**
 * Select（native：iOS / Android）—— Tamagui 触发框 + RN Modal 底部 action sheet。
 * 视觉值只引用 Tamagui token（Tamagui 组件 props 上才解析 token，RN 原生 style 不解析）；
 * onChange 归一为 value 字符串。
 */
import { Modal, Pressable as RNPressable } from 'react-native'
import { useState } from 'react'
import { Text, XStack, YStack, styled } from 'tamagui'
import type { SelectProps, SelectSize } from './Select.types'

/** 触发框（与 Input Field 视觉对齐） */
const Trigger = styled(XStack, {
  name: 'KitSelectTrigger',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  width: '100%',
  borderRadius: '$md',
  borderWidth: 1,
  borderColor: '$borderDefault',
  backgroundColor: '$bgCard',
  paddingHorizontal: '$3',
  variants: {
    size: {
      sm: { height: '$controlSm' },
      md: { height: '$controlMd' },
      lg: { height: '$controlLg' },
    },
    invalid: { true: { borderColor: '$borderDanger' } },
    disabled: { true: { backgroundColor: '$bgHover' } },
  },
})

const fontBySize: Record<SelectSize, '$bodySm' | '$bodyMd' | '$bodyLg'> = {
  sm: '$bodySm',
  md: '$bodyMd',
  lg: '$bodyLg',
}

export function Select({
  options,
  value,
  defaultValue,
  placeholder = '请选择',
  size = 'md',
  disabled = false,
  error = false,
  accessibilityLabel,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const invalid = Boolean(error)
  const errorText = typeof error === 'string' ? error : ''

  const current = value !== undefined ? value : defaultValue
  const selected = current !== undefined ? options.find((o) => o.value === current) : undefined
  const selectedLabel = selected
    ? typeof selected.label === 'string'
      ? selected.label
      : String(selected.label)
    : ''
  const a11yLabel =
    accessibilityLabel ?? (typeof placeholder === 'string' ? placeholder : undefined)
  const font = fontBySize[size]

  return (
    <YStack gap="$1" width="100%">
      <XStack
        accessibilityRole="button"
        accessibilityState={{ disabled, expanded: open }}
        {...(a11yLabel !== undefined ? { accessibilityLabel: a11yLabel } : {})}
        {...(disabled ? {} : { onPress: () => setOpen(true) })}
      >
        <Trigger size={size} invalid={invalid} disabled={disabled}>
          <Text
            flex={1}
            fontSize={font}
            color={selectedLabel ? '$textPrimary' : '$textTertiary'}
            {...(disabled ? { opacity: 0.6 } : {})}
            numberOfLines={1}
          >
            {selectedLabel || placeholder}
          </Text>
          <Text color="$textTertiary" fontSize={font}>
            ▾
          </Text>
        </Trigger>
      </XStack>

      {errorText ? (
        <Text color="$textDanger" fontSize="$bodySm" accessibilityRole="alert">
          {errorText}
        </Text>
      ) : null}

      <Modal visible={open} transparent animationType="slide" onRequestClose={() => setOpen(false)}>
        {/* 遮罩：点击关闭（RN 原生 Pressable，固定半透明色非 token） */}
        <RNPressable
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.45)' }}
          onPress={() => setOpen(false)}
        >
          <YStack justifyContent="flex-end" flex={1}>
            {/* 拦截冒泡：点击卡片本身不关闭 */}
            <RNPressable onPress={() => undefined}>
              <YStack
                backgroundColor="$bgCard"
                borderTopLeftRadius="$lg"
                borderTopRightRadius="$lg"
                borderWidth={1}
                borderColor="$borderDefault"
                maxHeight="70%"
              >
                {options.map((opt) => {
                  const label = typeof opt.label === 'string' ? opt.label : String(opt.label)
                  const active = opt.value === current
                  return (
                    <XStack
                      key={opt.value}
                      accessibilityRole="menuitem"
                      accessibilityState={{ selected: active, disabled: opt.disabled }}
                      {...(!opt.disabled
                        ? {
                            onPress: () => {
                              onChange?.(opt.value)
                              setOpen(false)
                            },
                            pressStyle: { backgroundColor: '$bgHover' },
                          }
                        : { opacity: 0.4 })}
                      alignItems="center"
                      justifyContent="space-between"
                      paddingHorizontal="$4"
                      paddingVertical="$3"
                    >
                      <Text
                        fontSize="$bodyMd"
                        color={opt.disabled ? '$textDisabled' : '$textPrimary'}
                      >
                        {label}
                      </Text>
                      {active ? (
                        <Text color="$primaryDefault" fontSize="$bodyMd">
                          ✓
                        </Text>
                      ) : null}
                    </XStack>
                  )
                })}
              </YStack>
            </RNPressable>
          </YStack>
        </RNPressable>
      </Modal>
    </YStack>
  )
}
