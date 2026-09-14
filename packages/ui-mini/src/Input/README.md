# Input 输入框（mini：小程序 / H5）

`@nutui/nutui-react-taro` Input 的统一封装，对外只暴露三栈统一 props。错误态与图标槽由封装层 View 容器提供（NutUI Taro 版无 status/图标槽能力）。

## 映射（统一 API → NutUI / Taro）

| 统一 | mini 实现 |
|---|---|
| onChange(value) | NutUI `onChange(value)`（NutUI 已归一化为值回调） |
| type=password | Taro `type='password'` |
| type=number | Taro `type='digit'`（带小数数字键盘） |
| type=tel/email/search | 降级 `text`（Taro 不支持） |
| size sm/md/lg | 容器 min-height `control-height-*`（32/40/48px） |
| error | 容器 `border-danger` + 下方错误文本 |
| prefixIcon/suffixIcon | 容器内左右图标槽 |
| maxLength | NutUI `maxLength` |

## Props

value/defaultValue/placeholder/type/size/error/disabled/readOnly/maxLength/prefixIcon/suffixIcon/onChange，语义与 web 完全一致（见 ui-web Input README 表）。

## 主题与样式

- 容器、文本、占位符、错误色全部引用 `var(--kit-*)`（见 `Input.scss`）；
- 占位符通过 NutUI `placeholderClass="kit-input__placeholder"` 着色；
- 暗色：页面根 View 切 `.dark` 类，CSS 变量运行时换肤。

## 验证

`__examples__/States.tsx` 在 H5（dev:h5）与微信开发者工具（dev:weapp）双端查看。
