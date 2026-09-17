# Upload 上传（web）

input type="file" + 文件列表展示 + 删除按钮，受控优先，支持多选/最大数量/文件类型过滤。

## 用法

```tsx
import { Upload } from '@kit/ui-web'
import type { UploadFile } from '@kit/ui-web'

const [files, setFiles] = useState<UploadFile[]>([])
<Upload value={files} onChange={setFiles} multiple maxCount={5} accept="image/*" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | UploadFile[] | — | 受控文件列表 |
| defaultValue | UploadFile[] | [] | 非受控默认文件列表 |
| onChange | (files: UploadFile[]) => void | — | 文件列表变化回调 |
| accept | string | — | 接受的文件类型 |
| multiple | boolean | false | 是否支持多选 |
| maxCount | number | — | 最大文件数量 |
| disabled | boolean | false | 是否禁用 |
| className | string | — | 外层容器类名 |

## UploadFile

| 属性 | 类型 | 说明 |
|---|---|---|
| uid | string | 唯一标识 |
| name | string | 文件名 |
| size | number | 文件大小（字节） |
| status | 'uploading' \| 'done' \| 'error' | 上传状态 |
| percent | number | 上传进度（0-100） |
| originFile | File | 原始 File 对象（web 端） |
| error | string | 错误信息 |
