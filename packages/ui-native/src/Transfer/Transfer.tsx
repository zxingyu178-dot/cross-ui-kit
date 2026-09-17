/**
 * Transfer 穿梭框（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 左右两个列表 + 中间操作按钮，支持勾选和移动。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TransferItem, TransferProps } from './Transfer.types'

export function Transfer({
  dataSource = [],
  targetKeys,
  onChange,
  titles = ['源列表', '目标列表'],
  operations = ['>', '<'],
  disabled = false,
  style,
}: TransferProps) {
  const isControlled = targetKeys !== undefined
  const [innerTarget, setInnerTarget] = useState<string[]>([])
  const [leftChecked, setLeftChecked] = useState<string[]>([])
  const [rightChecked, setRightChecked] = useState<string[]>([])
  const currentTarget = isControlled ? targetKeys : innerTarget

  const leftItems = dataSource.filter((item) => !currentTarget.includes(item.key))
  const rightItems = dataSource.filter((item) => currentTarget.includes(item.key))

  const commit = (keys: string[]) => {
    if (!isControlled) setInnerTarget(keys)
    onChange?.(keys)
  }

  const moveToRight = () => {
    commit([...currentTarget, ...leftChecked])
    setLeftChecked([])
  }

  const moveToLeft = () => {
    commit(currentTarget.filter((key) => !rightChecked.includes(key)))
    setRightChecked([])
  }

  const toggleCheck = (key: string, isRight: boolean) => {
    if (isRight) {
      setRightChecked((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    } else {
      setLeftChecked((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    }
  }

  const renderList = (items: TransferItem[], checked: string[], isRight: boolean) => (
    <YStack
      flex={1}
      height={192}
      overflow="hidden"
      borderWidth={1}
      borderColor="$borderDefault"
      borderRadius="$md"
      backgroundColor="$bgCard"
    >
      <XStack
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal={12}
        paddingVertical={8}
        borderBottomWidth={1}
        borderBottomColor="$borderDefault"
      >
        <Text fontSize="$bodySm" fontWeight="500" color="$textPrimary">
          {isRight ? titles[1] : titles[0]}
        </Text>
        <Text fontSize="$caption" color="$textTertiary">
          {checked.length}/{items.length}
        </Text>
      </XStack>
      <YStack flex={1} padding={4}>
        {items.length === 0 ? (
          <XStack flex={1} alignItems="center" justifyContent="center">
            <Text fontSize="$caption" color="$textTertiary">
              暂无数据
            </Text>
          </XStack>
        ) : (
          items.map((item) => (
            <XStack
              key={item.key}
              alignItems="center"
              gap={8}
              padding={6}
              borderRadius={4}
              backgroundColor={checked.includes(item.key) ? 'rgba(37,99,235,0.1)' : 'transparent'}
              opacity={item.disabled ? 0.5 : 1}
              onPress={() => !item.disabled && !disabled && toggleCheck(item.key, isRight)}
            >
              <YStack
                width={16}
                height={16}
                borderRadius={3}
                borderWidth={1}
                borderColor={checked.includes(item.key) ? '$primaryDefault' : '$borderDefault'}
                backgroundColor={checked.includes(item.key) ? '$primaryDefault' : 'transparent'}
              />
              <YStack flex={1} minWidth={0}>
                <Text fontSize="$bodySm" color="$textPrimary" numberOfLines={1}>
                  {item.title}
                </Text>
                {item.description ? (
                  <Text fontSize="$caption" color="$textTertiary" numberOfLines={1}>
                    {item.description}
                  </Text>
                ) : null}
              </YStack>
            </XStack>
          ))
        )}
      </YStack>
    </YStack>
  )

  return (
    <XStack alignItems="stretch" gap={12} style={style}>
      {renderList(leftItems, leftChecked, false)}
      <YStack justifyContent="center" gap={8}>
        <XStack
          width={32}
          height={32}
          borderRadius={6}
          alignItems="center"
          justifyContent="center"
          backgroundColor={disabled || leftChecked.length === 0 ? '$bgMuted' : '$primaryDefault'}
          onPress={() => !disabled && leftChecked.length > 0 && moveToRight()}
        >
          <Text
            fontSize="$bodySm"
            color={disabled || leftChecked.length === 0 ? '$textTertiary' : '#fff'}
          >
            {operations[0]}
          </Text>
        </XStack>
        <XStack
          width={32}
          height={32}
          borderRadius={6}
          alignItems="center"
          justifyContent="center"
          backgroundColor={disabled || rightChecked.length === 0 ? '$bgMuted' : '$primaryDefault'}
          onPress={() => !disabled && rightChecked.length > 0 && moveToLeft()}
        >
          <Text
            fontSize="$bodySm"
            color={disabled || rightChecked.length === 0 ? '$textTertiary' : '#fff'}
          >
            {operations[1]}
          </Text>
        </XStack>
      </YStack>
      {renderList(rightItems, rightChecked, true)}
    </XStack>
  )
}
