/** Anchor 示例：基础锚点导航（mini）。 */
import { View } from '@tarojs/components'
import { Anchor } from '../index'
import type { AnchorItem } from '../Anchor.types'

const items: AnchorItem[] = [
  { key: '1', title: '项目概述', href: 'overview' },
  { key: '2', title: '技术架构', href: 'architecture' },
  { key: '3', title: '组件列表', href: 'components' },
  { key: '4', title: '开发指南', href: 'guide' },
]

export function States() {
  return (
    <View style={{ padding: 12, width: 192 }}>
      <Anchor items={items} />
    </View>
  )
}
