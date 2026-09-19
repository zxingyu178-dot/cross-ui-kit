/**
 * Backdrop 遮罩层（native：iOS / Android）。
 */
import { Modal, Pressable } from 'react-native'
import { YStack } from 'tamagui'
import type { BackdropProps } from './Backdrop.types'

export function Backdrop({ open = false, onClose, children, opacity = 0.5, style }: BackdropProps) {
  return (
    <Modal transparent visible={open} onRequestClose={onClose} animationType="fade">
      <Pressable
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgba(0,0,0,${opacity})`,
          ...(style as object),
        }}
        onPress={onClose}
      >
        <YStack>{children}</YStack>
      </Pressable>
    </Modal>
  )
}
