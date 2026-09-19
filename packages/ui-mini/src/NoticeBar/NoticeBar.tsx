/**
 * NoticeBar 通知栏（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { NoticeBarProps } from './NoticeBar.types'
import './NoticeBar.scss'

export function NoticeBar({
  content,
  icon,
  action,
  onClose,
  tone = 'info',
  scrollable = false,
  className = '',
}: NoticeBarProps) {
  return (
    <View className={`kit-notice kit-notice--${tone} ${className}`.trim()}>
      {icon ? <View className="kit-notice__icon">{icon}</View> : null}
      <View
        className={`kit-notice__content ${scrollable ? 'kit-notice__content--scroll' : ''}`.trim()}
      >
        <Text className="kit-notice__text">{content}</Text>
      </View>
      {action ? <View className="kit-notice__action">{action}</View> : null}
      {onClose ? (
        <View className="kit-notice__close" {...(onClose ? { onClick: onClose } : {})}>
          <Text className="kit-notice__close-text">✕</Text>
        </View>
      ) : null}
    </View>
  )
}
