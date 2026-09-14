/**
 * __ComponentName__（mini 栈模板，Taro + NutUI 封装）
 * 复制到 packages/ui-mini/src/__ComponentName__/，替换占位符。
 * 规则：不直接暴露 NutUI 原始 API；视觉值用 token SCSS 变量；热区 ≥44px；平台 API 走 core adapter。
 */
import { View } from '@tarojs/components'
import type { __ComponentName__Props } from './__ComponentName__.types'

export function __ComponentName__({ children, className = '', ...rest }: __ComponentName__Props) {
  return (
    <View className={`kit-__component-name__ ${className}`} {...rest}>
      {children}
    </View>
  )
}
