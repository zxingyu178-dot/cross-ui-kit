# Input 输入框（native：iOS / Android）

Tamagui Input（RN TextInput）封装，视觉值全部引用 Tamagui token。

## 映射（统一 API -> React Native）

| 统一 | native 实现 |
|---|---|
| onChange(value) | `onChangeText`（天然值回调） |
| type=password | `secureTextEntry` |
| type=number/tel/email | `keyboardType` numeric / phone-pad / email-address；search 降级 default |
| disabled | `editable=false` + 容器 bgHover 置灰 |
| readOnly | `editable=false`（不置灰） |
| error | 容器 borderDanger + 下方错误文本 |
| size sm/md/lg | 高度 `$controlSm/Md/Lg` + 字号 `$bodySm/Md/Lg` |
| prefixIcon/suffixIcon | XStack 行内左右图标槽（图标色 `$textTertiary`） |

## Props

value/defaultValue/placeholder/type/size/error/disabled/readOnly/maxLength/prefixIcon/suffixIcon/accessibilityLabel/onChange，语义与 web/mini 一致。

## tamagui.config 需注册的 token（在 Button 清单基础上新增）

- color：`textTertiary / textDanger / borderDanger / bgHover`（Button 清单已含其余）
- size：`controlSm / controlMd / controlLg`；space：`1 / 2 / 3`；font：`bodySm / bodyMd / bodyLg`

## 无障碍

输入框必须传 `accessibilityLabel`；错误时 `accessibilityState.invalid`，错误文本 `accessibilityRole="alert"`。
