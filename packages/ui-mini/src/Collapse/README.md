# Collapse 折叠面板（mini）

受控优先，手风琴模式，禁用项，点击标题切换展开。View+Text 自建，scss 全走 `--kit-*` token。

## 用法

```tsx
import { Collapse } from '@kit/ui-mini'

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
| items | CollapseItem[] | — | 面板列表（key/title/content/disabled） |
| activeKey | string \| string[] | — | 受控展开 key |
| defaultActiveKey | string \| string[] | — | 非受控默认展开 |
| onChange | (activeKey) => void | — | 展开变化回调 |
| accordion | boolean | false | 手风琴模式（只展开一个） |
| className | string | — | 外层容器类名 |
