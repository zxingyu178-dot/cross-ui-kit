/**
 * Dialog（mini：小程序 / 移动 H5）—— NutUI Popup（居中、受控）做弹层底座，
 * 卡片视觉自建（scss 全量引用 --kit-* token），底部按钮复用 registry 的 ui-mini Button。
 * 纯受控：组件只发 onOpenChange(false) 请求，是否真关由外部决定。
 */
import { Popup } from '@nutui/nutui-react-taro'
import { Text, View } from '@tarojs/components'
import { Button } from '../Button'
import type { DialogProps } from './Dialog.types'
import './Dialog.scss'

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  showCancel = true,
  confirmText = '确定',
  cancelText = '取消',
  confirmLoading = false,
  closeOnOverlayClick = true,
  onConfirm,
  onCancel,
  className = '',
}: DialogProps) {
  const requestClose = () => onOpenChange?.(false)
  const handleConfirm = () => {
    // onConfirm 返回 false 表示“暂不关闭”（异步提交场景：外部完成后再 setOpen(false)）
    if (onConfirm?.() === false) return
    requestClose()
  }
  const handleCancel = () => {
    onCancel?.()
    requestClose()
  }

  const body =
    children ?? (description ? <Text className="kit-dialog__desc">{description}</Text> : null)

  return (
    <Popup
      visible={open}
      position="center"
      round
      overlay
      closeable={false}
      destroyOnClose
      className={`kit-dialog-popup ${className}`.trim()}
      overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      onClose={requestClose}
      onOverlayClick={() => {
        // 返回 false 阻止 NutUI 关闭；否则放行并同步关闭请求给外部受控 state
        if (!closeOnOverlayClick) return false
        requestClose()
        return true
      }}
    >
      <View className="kit-dialog">
        <View className="kit-dialog__header">
          {title ? (
            <Text className="kit-dialog__title">{title}</Text>
          ) : (
            <View className="kit-dialog__header-spacer" />
          )}
          <View className="kit-dialog__close" onClick={handleCancel} aria-label="关闭">
            <Text className="kit-dialog__close-icon">✕</Text>
          </View>
        </View>

        {body ? <View className="kit-dialog__body">{body}</View> : null}

        {footer === undefined ? (
          <View className="kit-dialog__footer">
            {showCancel ? (
              <Button block variant="secondary" onPress={handleCancel}>
                {cancelText}
              </Button>
            ) : null}
            <Button block variant="primary" loading={confirmLoading} onPress={handleConfirm}>
              {confirmText}
            </Button>
          </View>
        ) : (
          footer
        )}
      </View>
    </Popup>
  )
}
