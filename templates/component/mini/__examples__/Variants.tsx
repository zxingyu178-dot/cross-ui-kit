/** 示例：变体与状态（mini，H5/小程序共用） */
import { View } from '@tarojs/components'
import { __ComponentName__ } from '../index'

export function Variants() {
  return (
    <View style={{ display: 'flex', gap: 12 }}>
      <__ComponentName__ variant="primary">主要</__ComponentName__>
      <__ComponentName__ variant="secondary">次要</__ComponentName__>
      <__ComponentName__ loading>加载中</__ComponentName__>
      <__ComponentName__ disabled>禁用</__ComponentName__>
    </View>
  )
}
