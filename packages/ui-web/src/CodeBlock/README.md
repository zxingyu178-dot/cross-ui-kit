# CodeBlock 代码块（web）

暗色代码展示，支持语言标签、行号、复制。

## 用法

```tsx
import { CodeBlock } from '@kit/ui-web'
<CodeBlock code={`const a = 1`} language="ts" showLineNumbers />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| code | string | — | 代码内容（必填） |
| language | string | 'text' | 语言标签 |
| showLineNumbers | boolean | false | 是否显示行号 |
| copyable | boolean | true | 是否可复制 |
| className | string | — | 外层容器类名 |
