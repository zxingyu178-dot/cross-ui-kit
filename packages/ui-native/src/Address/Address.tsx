/**
 * Address 地址选择器（native：iOS / Android）—— 省市区三级级联选择器。
 */
import { useMemo, useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { AddressOption, AddressProps } from './Address.types'

const DEFAULT_OPTIONS: AddressOption[] = [
  {
    value: 'beijing',
    label: '北京市',
    children: [
      {
        value: 'beijing-city',
        label: '北京市',
        children: [
          { value: 'dongcheng', label: '东城区' },
          { value: 'xicheng', label: '西城区' },
          { value: 'chaoyang', label: '朝阳区' },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海市',
    children: [
      {
        value: 'shanghai-city',
        label: '上海市',
        children: [
          { value: 'huangpu', label: '黄浦区' },
          { value: 'xuhui', label: '徐汇区' },
          { value: 'pudong', label: '浦东新区' },
        ],
      },
    ],
  },
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'guangzhou',
        label: '广州市',
        children: [
          { value: 'tianhe', label: '天河区' },
          { value: 'yuexiu', label: '越秀区' },
          { value: 'haizhu', label: '海珠区' },
        ],
      },
      {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          { value: 'nanshan', label: '南山区' },
          { value: 'futian', label: '福田区' },
          { value: 'luohu', label: '罗湖区' },
        ],
      },
    ],
  },
]

interface PickerColumnProps {
  label: string
  value?: string
  options: { value: string; label: string }[]
  placeholder: string
  disabled: boolean
  onSelect: (value: string) => void
}

function PickerColumn({
  label,
  value,
  options,
  placeholder,
  disabled,
  onSelect,
}: PickerColumnProps) {
  const [open, setOpen] = useState(false)
  const selectedLabel = options.find((o) => o.value === value)?.label

  return (
    <YStack flex={1}>
      <XStack
        height={40}
        paddingHorizontal={12}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
        backgroundColor="$bgCard"
        alignItems="center"
        onPress={disabled ? undefined : () => setOpen(!open)}
        opacity={disabled ? 0.5 : 1}
      >
        <Text fontSize={13} color={value ? '$textPrimary' : '$textTertiary'}>
          {value ? selectedLabel : `${placeholder}${label}`}
        </Text>
      </XStack>
      {open && !disabled && (
        <YStack
          marginTop={4}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          maxHeight={200}
        >
          {options.map((opt) => (
            <XStack
              key={opt.value}
              paddingHorizontal={12}
              paddingVertical={10}
              backgroundColor={opt.value === value ? '$primaryBg' : 'transparent'}
              onPress={() => {
                onSelect(opt.value)
                setOpen(false)
              }}
            >
              <Text fontSize={13} color={opt.value === value ? '$primaryDefault' : '$textPrimary'}>
                {opt.label}
              </Text>
            </XStack>
          ))}
        </YStack>
      )}
    </YStack>
  )
}

export function Address({
  value = {},
  onChange,
  options = DEFAULT_OPTIONS,
  placeholder = '请选择',
  disabled = false,
  style,
}: AddressProps) {
  const provinceOptions = useMemo(
    () => options.map((o) => ({ value: o.value, label: o.label })),
    [options],
  )
  const cityOptions = useMemo(() => {
    const province = options.find((o) => o.value === value.province)
    return province?.children?.map((c) => ({ value: c.value, label: c.label })) ?? []
  }, [options, value.province])
  const districtOptions = useMemo(() => {
    const province = options.find((o) => o.value === value.province)
    const city = province?.children?.find((c) => c.value === value.city)
    return city?.children?.map((d) => ({ value: d.value, label: d.label })) ?? []
  }, [options, value.province, value.city])

  return (
    <XStack gap={8} style={style}>
      <PickerColumn
        label="省份"
        {...(value.province ? { value: value.province } : {})}
        options={provinceOptions}
        placeholder={placeholder}
        disabled={disabled}
        onSelect={(province) => onChange?.({ province })}
      />
      <PickerColumn
        label="城市"
        {...(value.city ? { value: value.city } : {})}
        options={cityOptions}
        placeholder={placeholder}
        disabled={disabled || !value.province}
        onSelect={(city) => onChange?.({ ...value, city })}
      />
      <PickerColumn
        label="区县"
        {...(value.district ? { value: value.district } : {})}
        options={districtOptions}
        placeholder={placeholder}
        disabled={disabled || !value.city}
        onSelect={(district) => onChange?.({ ...value, district })}
      />
    </XStack>
  )
}
