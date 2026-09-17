# Collapse 折叠面板（native）

受控优先，手风琴模式，禁用项，点击标题切换展开。Tamagui YStack+XStack+Text 自建。

## 用法

```tsx
import { Collapse } from '@kit/ui-native'

<Collapse
  items={[
    { key: '1', title: '面板一', content: '内容一' },
    { key: '2', title: '面板二', content: '内容二' },
  ]}
  defaultActiveKey={['1']}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | CollapseItem[] | — | 面板列表 |
| activeKey | string \| string[] | — | 受控展开 key |
| defaultActiveKey | string \| string[] | — | 非受控默认展开 |
| onChange | (activeKey) => void | — | 展开变化回调 |
| accordion | boolean | false | 手风琴模式 |
| style | ViewStyle | — | 外层容器样式 |
