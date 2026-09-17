# Upload 上传（native）

Tamagui XStack+YStack+Text 自建，文件列表展示 + 删除按钮，受控优先，支持多选/最大数量。

## 用法

```tsx
import { Upload } from '@kit/ui-native'
import type { UploadFile } from '@kit/ui-native'

const [files, setFiles] = useState<UploadFile[]>([])
<Upload value={files} onChange={setFiles} multiple maxCount={5} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | UploadFile[] | — | 受控文件列表 |
| defaultValue | UploadFile[] | [] | 非受控默认文件列表 |
| onChange | (files: UploadFile[]) => void | — | 文件列表变化回调 |
| multiple | boolean | false | 是否支持多选 |
| maxCount | number | — | 最大文件数量 |
| disabled | boolean | false | 是否禁用 |
| style | ViewStyle | — | 外层容器样式 |
