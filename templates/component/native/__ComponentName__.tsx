/**
 * __ComponentName__（native 栈模板，Expo + Tamagui）
 * 复制到 packages/ui-native/src/__ComponentName__/，替换占位符。
 * 规则：样式只走 Tamagui token（$color.xxx 等）；必须有 accessibility* 属性；热区 ≥44px。
 */
import { styled, View } from 'tamagui'
import type { __ComponentName__Props } from './__ComponentName__.types'

const Root = styled(View, {
  name: '__ComponentName__',
  // 视觉值一律引用 token，禁止裸颜色/数值
  // backgroundColor: '$color.primaryDefault',
  // borderRadius: '$radius.md',
})

export function __ComponentName__({ children, ...rest }: __ComponentName__Props) {
  return (
    <Root accessibilityRole="button" minHeight={44} {...rest}>
      {children}
    </Root>
  )
}
