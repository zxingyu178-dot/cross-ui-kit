/**
 * ActionSheet 底部动作面板（mini：小程序 / 移动 H5）。
 */
import { Text, View } from '@tarojs/components'
import type { ActionSheetProps, ActionSheetAction } from './ActionSheet.types'
import './ActionSheet.scss'

export function ActionSheet({
  open,
  actions,
  title,
  cancelText = '取消',
  onSelect,
  onClose,
  className = '',
}: ActionSheetProps) {
  if (!open) return null

  return (
    <View className={`kit-as ${className}`.trim()}>
      <View className="kit-as__mask" {...(onClose ? { onClick: onClose } : {})} />
      <View className="kit-as__panel">
        {title ? (
          <View className="kit-as__title">
            <Text className="kit-as__title-text">{title}</Text>
          </View>
        ) : null}
        {actions.map((action: ActionSheetAction) => (
          <View
            key={action.key}
            className={`kit-as__action ${action.danger ? 'kit-as__action--danger' : ''} ${action.disabled ? 'kit-as__action--disabled' : ''}`.trim()}
            {...(action.disabled
              ? {}
              : {
                  onClick: () => {
                    onSelect?.(action.key)
                    onClose?.()
                  },
                })}
          >
            <Text className="kit-as__action-text">{action.label}</Text>
          </View>
        ))}
        <View className="kit-as__cancel" {...(onClose ? { onClick: onClose } : {})}>
          <Text className="kit-as__cancel-text">{cancelText}</Text>
        </View>
      </View>
    </View>
  )
}
