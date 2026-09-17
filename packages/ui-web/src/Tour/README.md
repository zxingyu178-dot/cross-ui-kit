# Tour 引导（web）

遮罩层 + 提示卡片 + 上一步/下一步/跳过/完成按钮。

## 用法

```tsx
import { Tour } from '@kit/ui-web'

const steps = [
  { title: '第一步', description: '这是第一步的说明' },
  { title: '第二步', description: '这是第二步的说明' },
]
<Tour steps={steps} onFinish={() => {}} onClose={() => {}} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| steps | TourStep[] | [] | 引导步骤列表 |
| current | number | — | 当前步骤（受控） |
| onChange | (current: number) => void | — | 步骤变化回调 |
| onFinish | () => void | — | 完成回调 |
| onClose | () => void | — | 关闭回调 |
| mask | boolean | true | 是否显示遮罩 |
| prevText | string | '上一步' | 上一步按钮文字 |
| nextText | string | '下一步' | 下一步按钮文字 |
| finishText | string | '完成' | 完成按钮文字 |
| skipText | string | '跳过' | 跳过按钮文字 |
| showSkip | boolean | true | 是否显示跳过按钮 |
| className | string | — | 外层容器类名 |
