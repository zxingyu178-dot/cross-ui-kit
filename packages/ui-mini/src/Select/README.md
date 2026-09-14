# Select 选择器（mini：小程序 / H5）

Taro `Picker mode="selector"`（底部滚轮选择，小程序/H5 标准交互）封装，触发框自建并对齐 token 视觉，`onChange` 归一为 value 字符串。

## 映射（统一 API -> Taro）

| 统一 | mini 实现 |
|---|---|
| options | `range`（取 label 字符串数组） |
| value/defaultValue | 换算为选中索引 `value: number` |
| onChange(value) | Picker `onChange(e.detail.value 索引)` 反查 options 取 value |
| size sm/md/lg | 触发框 min-height `control-height-*` |
| error | 触发框红边 + 下方错误文案 |
| disabled | Picker `disabled` + 触发框 bg-hover |
| placeholder | 无选中时触发框内灰色文本 |

## 约定

- mini 的系统 Picker 只能展示字符串，`option.label` 请传字符串（节点会被 `String()` 转换）；
- 系统 Picker 无法灰显单个选项，`option.disabled` 仅在回调侧拦截（建议禁用项不下发）；
- 箭头用字符 `▾`，颜色 `text-tertiary`；全部颜色/尺寸引用 `var(--kit-*)`。

## 验证

`__examples__/States.tsx` 在 H5（dev:h5）与微信开发者工具（dev:weapp）双端查看。
