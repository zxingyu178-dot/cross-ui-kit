# Alert 警告提示条（web）

页内非阻塞反馈，四语义色（info/success/warning/error）+ 可关闭 + 语义图标 + 操作区。

## 用法

```tsx
import { Alert } from '@kit/ui-web'

<Alert type="success" title="保存成功" description="修改已同步到服务器。" closable />
<Alert type="error" title="提交失败" description="请检查必填项后重试。" />
<Alert type="warning" description="磁盘空间不足 10%，建议清理。" />
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

- 关闭为内部非受控状态；受控场景由外部条件渲染。
- 短反馈用 Alert，需用户决策用 Dialog，自动消失用 Toast。
- 文案走 i18n key，不写死。
