/**
 * Timeline 时间线（mini：小程序 / 移动 H5）—— View+Text 自建垂直时间轴，
 * 语义色圆点 + 时间 + 标题 + 描述，支持倒序与自定义圆点。颜色全走 --kit-* token。
 */
import { Text, View } from '@tarojs/components'
import type { TimelineColor, TimelineProps } from './Timeline.types'
import './Timeline.scss'

const DOT_COLOR: Record<TimelineColor, string> = {
  primary: 'var(--kit-color-primary-default)',
  success: 'var(--kit-color-success-default)',
  warning: 'var(--kit-color-warning-default)',
  error: 'var(--kit-color-danger-default)',
  info: 'var(--kit-color-info-default)',
  neutral: 'var(--kit-color-border-default)',
}

export function Timeline({ items, reverse = false, className = '' }: TimelineProps) {
  const list = reverse ? [...items].reverse() : items
  return (
    <View className={`kit-timeline ${className}`.trim()}>
      <View className="kit-timeline__line" />
      {list.map((item, i) => {
        const color = item.color ?? 'neutral'
        const dotType = item.dotType ?? 'outline'
        return (
          <View key={i} className="kit-timeline__item">
            {item.customDot ? (
              <View className="kit-timeline__dot-custom">{item.customDot}</View>
            ) : (
              <View
                className={`kit-timeline__dot kit-timeline__dot--${dotType}`}
                style={{
                  borderColor: DOT_COLOR[color],
                  backgroundColor:
                    dotType === 'solid' ? DOT_COLOR[color] : 'var(--kit-color-bg-card)',
                }}
              />
            )}
            <View className="kit-timeline__content">
              {item.time ? <Text className="kit-timeline__time">{item.time}</Text> : null}
              {item.title ? <Text className="kit-timeline__title">{item.title}</Text> : null}
              {item.description ? (
                <Text className="kit-timeline__desc">{item.description}</Text>
              ) : null}
            </View>
          </View>
        )
      })}
    </View>
  )
}
