/** 示例：变体与状态（native） */
import { YStack } from 'tamagui'
import { __ComponentName__ } from '../index'

export function Variants() {
  return (
    <YStack gap={12}>
      <__ComponentName__ variant="primary" accessibilityLabel="主要操作">
        主要
      </__ComponentName__>
      <__ComponentName__ variant="secondary">次要</__ComponentName__>
      <__ComponentName__ loading>加载中</__ComponentName__>
      <__ComponentName__ disabled>禁用</__ComponentName__>
    </YStack>
  )
}
