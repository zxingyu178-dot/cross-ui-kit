/**
 * Cascader 级联选择（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 多列级联面板，受控优先，支持任意层级，点击叶子节点确认。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { CascaderOption, CascaderProps } from './Cascader.types'

function findLabelsByValue(options: CascaderOption[], values: string[]): React.ReactNode[] {
  const labels: React.ReactNode[] = []
  let currentOptions = options
  for (const v of values) {
    const found = currentOptions.find((o) => o.value === v)
    if (!found) break
    labels.push(found.label)
    currentOptions = found.children ?? []
  }
  return labels
}

export function Cascader({
  value,
  defaultValue,
  onChange,
  options,
  placeholder = '请选择',
  style,
}: CascaderProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string[]>(defaultValue ?? [])
  const [open, setOpen] = useState(false)
  const [activePath, setActivePath] = useState<CascaderOption[]>([])
  const current = isControlled ? value : inner

  const labels = findLabelsByValue(options, current)
  const displayText = labels.length > 0 ? labels.join(' / ') : ''

  const commit = (vals: string[]) => {
    if (!isControlled) setInner(vals)
    onChange?.(vals)
  }

  const handleSelect = (option: CascaderOption, level: number) => {
    const newPath = [...activePath.slice(0, level), option]
    setActivePath(newPath)
    if (!option.children || option.children.length === 0) {
      commit(newPath.map((o) => o.value))
      setOpen(false)
      setActivePath([])
    }
  }

  const columns: CascaderOption[][] = [options, ...activePath.map((o) => o.children ?? [])]

  return (
    <YStack position="relative" style={style}>
      <XStack
        height={40}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal={12}
        borderWidth={1}
        borderColor={open ? '$primaryDefault' : '$borderDefault'}
        borderRadius="$md"
        backgroundColor="$bgCard"
        onPress={() => setOpen(!open)}
      >
        <Text fontSize="$bodyMd" color={displayText ? '$textPrimary' : '$textTertiary'}>
          {displayText || placeholder}
        </Text>
        <Text fontSize={12} color="$textTertiary">
          ▼
        </Text>
      </XStack>
      {open ? (
        <XStack
          position="absolute"
          top="100%"
          left={0}
          right={0}
          marginTop={4}
          maxHeight={240}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
        >
          {columns.map((col, ci) => (
            <YStack
              key={ci}
              flex={1}
              minWidth={120}
              borderRightWidth={ci < columns.length - 1 ? 1 : 0}
              borderRightColor="$borderDefault"
              paddingVertical={4}
            >
              {col.map((opt) => (
                <XStack
                  key={opt.value}
                  paddingHorizontal={12}
                  paddingVertical={8}
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundColor={
                    activePath[ci]?.value === opt.value ? 'rgba(37,99,235,0.1)' : 'transparent'
                  }
                  onPress={() => handleSelect(opt, ci)}
                >
                  <Text
                    fontSize="$bodySm"
                    color={
                      activePath[ci]?.value === opt.value ? '$primaryDefault' : '$textSecondary'
                    }
                  >
                    {opt.label}
                  </Text>
                  {opt.children && opt.children.length > 0 ? (
                    <Text fontSize={14} color="$textTertiary" marginLeft={8}>
                      ›
                    </Text>
                  ) : null}
                </XStack>
              ))}
            </YStack>
          ))}
        </XStack>
      ) : null}
    </YStack>
  )
}
