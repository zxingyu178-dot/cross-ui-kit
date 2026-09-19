/**
 * SwipeAction 滑动操作（native：iOS / Android）。
 * 简化实现：右滑按钮始终可见，点击触发；手势版依赖 react-native-gesture-handler，此处用可点按钮槽位。
 */
import { useState } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { PanResponder, View } from 'react-native'
import { Text, XStack } from 'tamagui'
import type { SwipeActionProps } from './SwipeAction.types'

const ACTION_WIDTH = 72

export function SwipeAction({ children, actions = [], onAction, style }: SwipeActionProps) {
  const [offset, setOffset] = useState(0)
  const width = actions.length * ACTION_WIDTH

  const pan = PanResponder.create({
    onMoveShouldSetPanResponder: (_: GestureResponderEvent, g: { dx: number }) =>
      Math.abs(g.dx) > 8,
    onPanResponderMove: (_: GestureResponderEvent, g: { dx: number }) => {
      setOffset(Math.max(-width, Math.min(0, g.dx)))
    },
    onPanResponderRelease: (_: GestureResponderEvent, g: { vx: number; dx: number }) => {
      if (g.dx < -width / 3 || g.vx < -0.5) setOffset(-width)
      else setOffset(0)
    },
    onPanResponderTerminate: () => setOffset(0),
  })

  return (
    <View style={[{ overflow: 'hidden' }, style]}>
      <View
        style={{ flexDirection: 'row', transform: [{ translateX: offset }] }}
        {...pan.panHandlers}
      >
        <View style={{ flex: 1 }}>{children}</View>
        <XStack width={width}>
          {actions.map((action) => (
            <View
              key={action.key}
              style={{ width: ACTION_WIDTH }}
              onStartShouldSetResponder={() => true}
              onResponderRelease={() => {
                onAction?.(action.key)
                if (action.closeOnPress !== false) setOffset(0)
              }}
            >
              <XStack
                flex={1}
                alignItems="center"
                justifyContent="center"
                backgroundColor={action.danger ? '$dangerDefault' : '$bgSecondary'}
              >
                <Text color={action.danger ? '$white' : '$textPrimary'}>{action.label}</Text>
              </XStack>
            </View>
          ))}
        </XStack>
      </View>
    </View>
  )
}
