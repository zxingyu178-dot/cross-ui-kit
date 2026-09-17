/**
 * Popconfirm 气泡确认（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 点击触发切换显示，确认/取消按钮，绝对定位气泡。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { PopconfirmProps } from './Popconfirm.types'
import './Popconfirm.scss'

export function Popconfirm({
  title,
  description,
  onConfirm,
  onCancel,
  okText = '确定',
  cancelText = '取消',
  trigger,
  placement = 'bottom',
  className = '',
}: PopconfirmProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onConfirm?.()
    setOpen(false)
  }

  const handleCancel = () => {
    onCancel?.()
    setOpen(false)
  }

  return (
    <View className={`kit-popconfirm ${className}`.trim()}>
      <View className="kit-popconfirm__trigger" onClick={() => setOpen(!open)}>
        {trigger}
      </View>
      {open ? (
        <View className={`kit-popconfirm__content kit-popconfirm__content--${placement}`}>
          <Text className="kit-popconfirm__title">{title}</Text>
          {description ? <Text className="kit-popconfirm__desc">{description}</Text> : null}
          <View className="kit-popconfirm__actions">
            <View
              className="kit-popconfirm__btn kit-popconfirm__btn--cancel"
              onClick={handleCancel}
            >
              <Text>{cancelText}</Text>
            </View>
            <View className="kit-popconfirm__btn kit-popconfirm__btn--ok" onClick={handleConfirm}>
              <Text>{okText}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  )
}
