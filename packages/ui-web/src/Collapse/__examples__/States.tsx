import { Collapse } from '../index'

const ITEMS = [
  {
    key: '1',
    title: '面板一：这是什么？',
    content:
      '这是一个跨端 UI 组件库，覆盖网页、PC 桌面、小程序和原生 App。三栈统一标准，开发即取即用。',
  },
  {
    key: '2',
    title: '面板二：如何使用？',
    content:
      '直接 import 对应端的组件包（@kit/ui-web / @kit/ui-mini / @kit/ui-native），按 registry 文档使用 props。',
  },
  {
    key: '3',
    title: '面板三：支持哪些端？',
    content: 'web（React DOM + Tauri）、mini（Taro 4 小程序）、native（Expo + Tamagui 原生 App）。',
  },
]

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（可多展开）</span>
        <Collapse items={ITEMS} defaultActiveKey={['1']} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">手风琴（只展开一个）</span>
        <Collapse items={ITEMS} accordion defaultActiveKey="1" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">含禁用项</span>
        <Collapse
          items={[
            ...ITEMS.slice(0, 2),
            { key: '3', title: '面板三（禁用，不可展开）', content: '不可展开', disabled: true },
          ]}
          defaultActiveKey={['1']}
        />
      </div>
    </div>
  )
}
