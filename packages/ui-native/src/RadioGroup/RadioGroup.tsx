/**
 * RadioGroup（native：iOS / Android）—— Tamagui RadioGroup + Item + Indicator 封装。
 * 视觉值只引用 Tamagui token；圆圈/内点结构尺寸与 web 档对齐（md 20/10、sm 16/8）。
 * 选中互斥与键盘/无障碍行为由 Tamagui RadioGroup context 承担。
 */
import { useId } from 'react'
import { Circle, Label, RadioGroup as TamRadioGroup, XStack } from 'tamagui'
import type { RadioGroupProps, RadioGroupSize } from './RadioGroup.types'

/** 圆圈直径（结构尺寸，与 web Tailwind 档对齐） */
const CIRCLE: Record<RadioGroupSize, number> = { md: 20, sm: 16 }
/** 内点直径 */
const DOT: Record<RadioGroupSize, number> = { md: 10, sm: 8 }

export function RadioGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  direction = 'vertical',
  size = 'md',
  accessibilityLabel,
}: RadioGroupProps) {
  const uid = useId()
  const horizontal = direction === 'horizontal'

  return (
    <TamRadioGroup
      {...(value !== undefined ? { value } : {})}
      {...(defaultValue !== undefined ? { defaultValue } : {})}
      onValueChange={(v) => onValueChange?.(v)}
      flexDirection={horizontal ? 'row' : 'column'}
      gap={horizontal ? '$4' : '$3'}
      {...(horizontal ? { flexWrap: 'wrap' } : {})}
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      {options.map((opt) => {
        const itemDisabled = disabled || opt.disabled === true
        const itemId = `${uid}-${opt.value}`
        return (
          <XStack key={opt.value} gap="$2" alignItems="center">
            <TamRadioGroup.Item
              id={itemId}
              value={opt.value}
              disabled={itemDisabled}
              width={CIRCLE[size]}
              height={CIRCLE[size]}
              borderRadius={999}
              borderWidth={1}
              borderColor="$borderDefault"
              backgroundColor="$bgCard"
              {...(itemDisabled ? { opacity: 0.5 } : {})}
            >
              <TamRadioGroup.Indicator>
                <Circle width={DOT[size]} height={DOT[size]} backgroundColor="$primaryDefault" />
              </TamRadioGroup.Indicator>
            </TamRadioGroup.Item>
            <Label
              htmlFor={itemId}
              color={itemDisabled ? '$textDisabled' : '$textPrimary'}
              fontSize="$bodyMd"
            >
              {opt.label}
            </Label>
          </XStack>
        )
      })}
    </TamRadioGroup>
  )
}
