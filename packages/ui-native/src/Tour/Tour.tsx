/**
 * Tour 引导（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 遮罩层 + 提示卡片 + 上一步/下一步/跳过/完成按钮。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { TourProps } from './Tour.types'

export function Tour({
  steps = [],
  current,
  onChange,
  onFinish,
  onClose,
  mask = true,
  prevText = '上一步',
  nextText = '下一步',
  finishText = '完成',
  skipText = '跳过',
  showSkip = true,
  style,
}: TourProps) {
  const [innerCurrent, setInnerCurrent] = useState(0)
  const stepIndex = current ?? innerCurrent
  const step = steps[stepIndex]

  if (!step) return null

  const handlePrev = () => {
    const next = Math.max(0, stepIndex - 1)
    if (current === undefined) setInnerCurrent(next)
    onChange?.(next)
  }

  const handleNext = () => {
    if (stepIndex >= steps.length - 1) {
      onFinish?.()
      return
    }
    const next = stepIndex + 1
    if (current === undefined) setInnerCurrent(next)
    onChange?.(next)
  }

  return (
    <YStack position="absolute" top={0} left={0} right={0} bottom={0} zIndex={50} style={style}>
      {mask ? (
        <YStack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0,0,0,0.5)"
          onPress={onClose}
        />
      ) : null}
      <YStack
        position="absolute"
        top="50%"
        left="50%"
        width={384}
        padding={24}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$lg"
        backgroundColor="$bgCard"
        shadowColor="#000"
        shadowOffset={{ width: 0, height: 8 }}
        shadowOpacity={0.2}
        shadowRadius={32}
        elevation={16}
        style={{ transform: [{ translateX: -192 }, { translateY: -100 }] }}
      >
        <XStack alignItems="center" justifyContent="space-between" marginBottom={8}>
          <Text fontSize="$titleSm" fontWeight="500" color="$textPrimary">
            {step.title}
          </Text>
          <Text
            width={24}
            height={24}
            fontSize={18}
            color="$textTertiary"
            textAlign="center"
            onPress={onClose}
          >
            ×
          </Text>
        </XStack>
        <YStack marginBottom={16}>
          <Text fontSize="$bodySm" color="$textSecondary" lineHeight={24}>
            {step.content ?? step.description}
          </Text>
        </YStack>
        <XStack gap={4} marginBottom={16}>
          {steps.map((_, index) => (
            <YStack
              key={index}
              height={6}
              borderRadius={3}
              backgroundColor={index === stepIndex ? '$primaryDefault' : '$borderDefault'}
              style={{ width: index === stepIndex ? 24 : 6 }}
            />
          ))}
        </XStack>
        <XStack alignItems="center" justifyContent="space-between">
          {showSkip ? (
            <Text fontSize="$bodySm" color="$textTertiary" onPress={onClose}>
              {skipText}
            </Text>
          ) : (
            <YStack />
          )}
          <XStack gap={8}>
            {stepIndex > 0 ? (
              <XStack
                paddingHorizontal={12}
                paddingVertical={6}
                borderRadius="$md"
                borderWidth={1}
                borderColor="$borderDefault"
                backgroundColor="$bgCard"
                onPress={handlePrev}
              >
                <Text fontSize="$bodySm" color="$textPrimary">
                  {prevText}
                </Text>
              </XStack>
            ) : null}
            <XStack
              paddingHorizontal={12}
              paddingVertical={6}
              borderRadius="$md"
              backgroundColor="$primaryDefault"
              onPress={handleNext}
            >
              <Text fontSize="$bodySm" color="#fff">
                {stepIndex >= steps.length - 1 ? finishText : nextText}
              </Text>
            </XStack>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
}
