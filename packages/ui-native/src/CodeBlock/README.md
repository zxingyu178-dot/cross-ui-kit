# CodeBlock 代码块（native）

暗色代码展示，支持语言标签与行号。

## 用法

```tsx
import { CodeBlock } from '@kit/ui-native'
<CodeBlock code={`const a = 1`} language="ts" showLineNumbers />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| code | string | — | 代码内容（必填） |
| language | string | 'text' | 语言标签 |
| showLineNumbers | boolean | false | 是否显示行号 |
| style | ViewStyle | — | 外层容器样式 |
