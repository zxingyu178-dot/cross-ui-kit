/**
 * Steps 步骤条（mini：小程序 / 移动 H5）—— 横向/纵向两方向，四态圆点 + 连线。
 * 状态由 @kit/core 的 deriveStepStatus 推导；颜色/尺寸在 Steps.scss 全 token 化。
 * finish 步骤可点回溯（onPress）。小程序不使用 Fragment，节点全部以 View 包裹。
 */
import { Text, View } from '@tarojs/components'
import { deriveStepStatus, isConnectorActive } from '@kit/core'
import type { StepStatus } from '@kit/core'
import type { StepsProps } from './Steps.types'
import './Steps.scss'

function Indicator({ status, index }: { status: StepStatus; index: number }) {
  return (
    <View className={`kit-step__indicator kit-step__indicator--${status}`}>
      <Text>{status === 'finish' ? '✓' : status === 'error' ? '!' : index + 1}</Text>
    </View>
  )
}

export function Steps({
  items,
  current = 0,
  direction = 'horizontal',
  onChange,
  className = '',
}: StepsProps) {
  const horizontal = direction === 'horizontal'

  return (
    <View className={`kit-steps kit-steps--${direction} ${className}`}>
      {items.map((item, i) => {
        const status = deriveStepStatus(i, current, item.status)
        const connectorActive = isConnectorActive(i, current, item.status)
        const clickable = typeof onChange === 'function' && status === 'finish'
        const connectorCls = `kit-connector kit-connector--${direction}${
          connectorActive ? ' kit-connector--active' : ''
        }`

        const titleCls = `kit-step__title kit-step__title--${status}`
        const body = (
          <View className={`kit-step__body kit-step__body--${direction}`}>
            <Text className={titleCls}>{item.title}</Text>
            {item.description !== undefined && (
              <Text className="kit-step__desc">{item.description}</Text>
            )}
          </View>
        )

        if (horizontal) {
          return (
            <View className="kit-step kit-step--horizontal" key={i}>
              <View
                className={`kit-step__main kit-step__main--horizontal${clickable ? ' kit-step__main--clickable' : ''}`}
                {...(clickable ? { onClick: () => onChange(i) } : {})}
              >
                <Indicator status={status} index={i} />
                {body}
              </View>
              {i < items.length - 1 && <View className={connectorCls} />}
            </View>
          )
        }

        return (
          <View className="kit-step kit-step--vertical" key={i}>
            <View className="kit-step__rail">
              <View
                className={
                  clickable
                    ? 'kit-step__rail-main kit-step__rail-main--clickable'
                    : 'kit-step__rail-main'
                }
                {...(clickable ? { onClick: () => onChange(i) } : {})}
              >
                <Indicator status={status} index={i} />
              </View>
              {i < items.length - 1 && <View className={connectorCls} />}
            </View>
            <View className="kit-step__body-wrap">{body}</View>
          </View>
        )
      })}
    </View>
  )
}
