/**
 * Alert 警告提示条（mini：小程序 / 移动 H5）—— View+Text 自建，四语义色 + 可关闭 + 图标。
 * 颜色/字号/圆角全走 --kit-* token，与 web/native 的 soft 底 + 语义描边风格对齐。
 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import type { AlertProps, AlertType } from './Alert.types'
import './Alert.scss'

const TYPE_LABEL: Record<AlertType, string> = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
}

/** 语义图标字符（mini 端无图标库，用几何字符占位；生产应替换为 @kit/icons 或 svg） */
const TYPE_ICON: Record<AlertType, string> = {
  info: 'i',
  success: '✓',
  warning: '!',
  error: '×',
}

export function Alert({
  type = 'info',
  title,
  description,
  closable = false,
  onClose,
  showIcon = true,
  action,
  className = '',
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const handleClose = () => {
    setVisible(false)
    onClose?.()
  }

  const cls = ['kit-alert', `kit-alert--${TYPE_LABEL[type]}`, className].filter(Boolean).join(' ')

  return (
    <View className={cls}>
      {showIcon ? (
        <View className={`kit-alert__icon kit-alert__icon--${TYPE_LABEL[type]}`}>
          <Text className="kit-alert__icon-text">{TYPE_ICON[type]}</Text>
        </View>
      ) : null}
      <View className="kit-alert__content">
        {title ? <Text className="kit-alert__title">{title}</Text> : null}
        {description ? <Text className="kit-alert__desc">{description}</Text> : null}
      </View>
      {action ? <View className="kit-alert__action">{action}</View> : null}
      {closable ? (
        <View className="kit-alert__close" onClick={handleClose}>
          <Text className="kit-alert__close-text">×</Text>
        </View>
      ) : null}
    </View>
  )
}
