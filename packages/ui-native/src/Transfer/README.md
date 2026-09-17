# Transfer 穿梭框（native）

Tamagui XStack+YStack+Text 自建，左右两个列表 + 中间操作按钮，支持勾选和移动。

## 用法

```tsx
import { Transfer } from '@kit/ui-native'
import type { TransferItem } from '@kit/ui-native'

const data: TransferItem[] = [
  { key: '1', title: '选项 1', description: '描述 1' },
]
const [target, setTarget] = useState<string[]>([])
<Transfer dataSource={data} targetKeys={target} onChange={setTarget} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| dataSource | TransferItem[] | [] | 数据源 |
| targetKeys | string[] | — | 右侧选中的 key 列表（受控） |
| onChange | (targetKeys: string[]) => void | — | 右侧选中变化回调 |
| titles | [string, string] | ['源列表', '目标列表'] | 左右标题 |
| operations | [string, string] | ['>', '<'] | 操作按钮文案 |
| disabled | boolean | false | 是否禁用 |
| style | ViewStyle | — | 外层容器样式 |
