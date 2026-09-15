/**
 * Tag 标签（mini：小程序 / 移动 H5）—— 可选中（筛选）/ 可关闭（删除）的内容标签。
 * 调色板与 Badge 一致（Tag.scss 的 tone×variant 修饰类）；selected 强制 solid；
 * 关闭区点击阻止冒泡（Taro stopPropagation），不触发标签本身 onPress。
 */
import { Text, View } from '@tarojs/components'
import type { TagProps } from './Tag.types'
import './Tag.scss'

export function Tag({
  children,
  variant = 'neutral',
  tone = 'soft',
  size = 'md',
  selected = false,
  closable = false,
  disabled = false,
  onClose,
  onPress,
  className,
}: TagProps) {
  const effectiveTone = selected ? 'solid' : tone
  const clickable = typeof onPress === 'function' && !disabled
  const cls = [
    'kit-tag',
    `kit-tag--${effectiveTone}-${variant}`,
    `kit-tag--${size}`,
    closable && 'kit-tag--has-close',
    clickable && 'kit-tag--clickable',
    disabled && 'kit-tag--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <View className={cls} {...(clickable ? { onClick: onPress } : {})}>
      <Text className="kit-tag__text">{children}</Text>
      {closable && (
        <View
          className="kit-tag__close"
          {...(!disabled && typeof onClose === 'function'
            ? {
                onClick: (e) => {
                  e.stopPropagation()
                  onClose()
                },
              }
            : {})}
        >
          <Text className="kit-tag__close-x">×</Text>
        </View>
      )}
    </View>
  )
}
