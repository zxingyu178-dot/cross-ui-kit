/**
 * Tour 引导（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 遮罩层 + 提示卡片 + 上一步/下一步/跳过/完成按钮。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { TourProps } from './Tour.types'
import './Tour.scss'

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
  className = '',
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
    <View className={`kit-tour ${className}`.trim()}>
      {mask ? (
        <View className="kit-tour__mask" {...(onClose !== undefined ? { onClick: onClose } : {})} />
      ) : null}
      <View className="kit-tour__card">
        <View className="kit-tour__header">
          <Text className="kit-tour__title">{step.title}</Text>
          <Text
            className="kit-tour__close"
            {...(onClose !== undefined ? { onClick: onClose } : {})}
          >
            ×
          </Text>
        </View>
        <View className="kit-tour__body">
          <Text className="kit-tour__description">{step.content ?? step.description}</Text>
        </View>
        <View className="kit-tour__dots">
          {steps.map((_, index) => (
            <View
              key={index}
              className={`kit-tour__dot ${index === stepIndex ? 'kit-tour__dot--active' : ''}`}
            />
          ))}
        </View>
        <View className="kit-tour__footer">
          <View>
            {showSkip ? (
              <Text
                className="kit-tour__skip"
                {...(onClose !== undefined ? { onClick: onClose } : {})}
              >
                {skipText}
              </Text>
            ) : null}
          </View>
          <View className="kit-tour__buttons">
            {stepIndex > 0 ? (
              <View className="kit-tour__btn kit-tour__btn--default" onClick={handlePrev}>
                <Text>{prevText}</Text>
              </View>
            ) : null}
            <View className="kit-tour__btn kit-tour__btn--primary" onClick={handleNext}>
              <Text>{stepIndex >= steps.length - 1 ? finishText : nextText}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
