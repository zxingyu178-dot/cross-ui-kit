# Cell 列表项（native）

标题 + 描述 + 图标 + 右侧内容/箭头。

## 用法

```tsx
import { Cell } from '@kit/ui-native'
<Cell title="账号安全" description="已绑定手机" onClick={() => {}} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| description | ReactNode | — | 描述/副标题 |
| icon | ReactNode | — | 左侧图标 |
| right | ReactNode | — | 右侧内容 |
| onClick | () => void | — | 点击 |
| clickable | boolean | false | 是否可点击（显示右箭头） |
| style | ViewStyle | — | 外层容器样式 |
