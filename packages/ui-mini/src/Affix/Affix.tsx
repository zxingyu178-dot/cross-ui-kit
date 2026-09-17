/**
 * Affix 固钉（mini：小程序 / 移动 H5）—— 固定定位容器，
 * 小程序端简化为固定定位，offsetTop/offsetBottom 控制位置。
 */
import { View } from '@tarojs/components'
import type { CSSProperties } from 'react'
import type { AffixProps } from './Affix.types'
import './Affix.scss'

export function Affix({ offsetTop, offsetBottom, children, className = '' }: AffixProps) {
  const style: CSSProperties = {
    position: 'fixed',
    zIndex: 1000,
    ...(offsetTop !== undefined ? { top: `${offsetTop}px` } : {}),
    ...(offsetBottom !== undefined ? { bottom: `${offsetBottom}px` } : {}),
  }

  return (
    <View className={`kit-affix ${className}`.trim()} style={style}>
      {children}
    </View>
  )
}
