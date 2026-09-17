/**
 * TagGroup 标签组（mini：小程序 / 移动 H5）—— 多个 View 排列显示，超出显示 +N。
 */
import { Text, View } from '@tarojs/components'
import type { TagGroupProps } from './TagGroup.types'
import './TagGroup.scss'

const sizeMap = {
  sm: { height: 20, padding: '0 8px', fontSize: 12 },
  md: { height: 24, padding: '0 10px', fontSize: 13 },
  lg: { height: 28, padding: '0 12px', fontSize: 14 },
}

const colorMap = {
  primary: {
    bg: 'var(--kit-color-primary-bg)',
    text: 'var(--kit-color-primary-default)',
    border: 'var(--kit-color-primary-border)',
  },
  success: {
    bg: 'var(--kit-color-success-bg)',
    text: 'var(--kit-color-success-default)',
    border: 'var(--kit-color-success-border)',
  },
  warning: {
    bg: 'var(--kit-color-warning-bg)',
    text: 'var(--kit-color-warning-default)',
    border: 'var(--kit-color-warning-border)',
  },
  danger: {
    bg: 'var(--kit-color-danger-bg)',
    text: 'var(--kit-color-danger-default)',
    border: 'var(--kit-color-danger-border)',
  },
  info: {
    bg: 'var(--kit-color-info-bg)',
    text: 'var(--kit-color-info-default)',
    border: 'var(--kit-color-info-border)',
  },
  neutral: {
    bg: 'var(--kit-color-neutral-bg)',
    text: 'var(--kit-color-neutral-default)',
    border: 'var(--kit-color-neutral-border)',
  },
}

export function TagGroup({
  items = [],
  max,
  size = 'md',
  variant = 'soft',
  onClose,
  className = '',
}: TagGroupProps) {
  const displayItems = max !== undefined ? items.slice(0, max) : items
  const remaining = max !== undefined ? items.length - max : 0
  const sizeStyle = sizeMap[size]

  return (
    <View className={`kit-tag-group ${className}`.trim()}>
      {displayItems.map((item) => {
        const colorStyle = colorMap[item.color ?? 'neutral']
        const bgColor =
          variant === 'solid'
            ? colorStyle.text
            : variant === 'outline'
              ? 'transparent'
              : colorStyle.bg
        const textColor = variant === 'solid' ? '#fff' : colorStyle.text
        const borderColor = variant === 'solid' ? 'transparent' : colorStyle.border
        return (
          <View
            key={item.key}
            className="kit-tag-group__item"
            style={{
              height: sizeStyle.height,
              padding: sizeStyle.padding,
              backgroundColor: bgColor,
              borderColor,
              borderWidth: variant === 'solid' ? 0 : 1,
            }}
          >
            <Text
              className="kit-tag-group__label"
              style={{ fontSize: sizeStyle.fontSize, color: textColor }}
            >
              {item.label}
            </Text>
            {item.closable ? (
              <Text
                className="kit-tag-group__close"
                style={{ fontSize: sizeStyle.fontSize, color: textColor }}
                onClick={() => onClose?.(item.key)}
              >
                ×
              </Text>
            ) : null}
          </View>
        )
      })}
      {remaining > 0 ? (
        <View
          className="kit-tag-group__item kit-tag-group__item--more"
          style={{ height: sizeStyle.height, padding: sizeStyle.padding }}
        >
          <Text className="kit-tag-group__more-text" style={{ fontSize: sizeStyle.fontSize }}>
            +{remaining}
          </Text>
        </View>
      ) : null}
    </View>
  )
}
