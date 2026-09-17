/** Collapse 示例：基础/手风琴/禁用项（native）。 */
import { YStack } from 'tamagui'
import { Collapse } from '../index'

const ITEMS = [
  {
    key: '1',
    title: '面板一：这是什么？',
    content: '这是一个跨端 UI 组件库，覆盖网页、PC 桌面、小程序和原生 App。',
  },
  {
    key: '2',
    title: '面板二：如何使用？',
    content: '直接 import 对应端的组件包，按 registry 文档使用 props。',
  },
  {
    key: '3',
    title: '面板三：支持哪些端？',
    content: 'web（React DOM）、mini（Taro 小程序）、native（Expo + Tamagui）。',
  },
]

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <Collapse items={ITEMS} defaultActiveKey={['1']} />
      <Collapse items={ITEMS} accordion defaultActiveKey="1" />
      <Collapse
        items={[
          ...ITEMS.slice(0, 2),
          { key: '3', title: '面板三（禁用）', content: '不可展开', disabled: true },
        ]}
        defaultActiveKey={['1']}
      />
    </YStack>
  )
}
