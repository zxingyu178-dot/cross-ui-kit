# Alert 警告提示条（mini）

页内非阻塞反馈，四语义色 + 可关闭 + 语义图标。View+Text 自建，scss 全走 `--kit-*` token。

## 用法

```tsx
import { Alert } from '@kit/ui-mini'

<Alert type="success" title="保存成功" description="修改已同步。" closable />
<Alert type="error" title="提交失败" description="请检查必填项。" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| type | 'info' \| 'success' \| 'warning' \| 'error' | 'info' | 语义类型 |
| title | ReactNode | — | 标题 |
| description | ReactNode | — | 描述文本 |
| closable | boolean | false | 是否可关闭 |
| onClose | () => void | — | 关闭回调 |
| showIcon | boolean | true | 是否显示语义图标 |
| action | ReactNode | — | 自定义操作区 |
| className | string | — | 外层容器类名 |

## 注意事项

- mini 端图标暂用几何字符占位（i/✓/!/×），待 @kit/icons 完善后替换。
- 文案走 i18n key，不写死。
