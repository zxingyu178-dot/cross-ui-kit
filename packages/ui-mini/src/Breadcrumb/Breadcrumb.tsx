/**
 * Breadcrumb 面包屑（mini：小程序 / 移动 H5）—— 路径导航，最后一项为当前页。
 * 中间项绑 onNavigate（受控）；分隔符/颜色在 Breadcrumb.scss 全 token 化。
 */
import { Text, View } from '@tarojs/components'
import type { BreadcrumbProps } from './Breadcrumb.types'
import './Breadcrumb.scss'

export function Breadcrumb({
  items,
  separator = '/',
  onNavigate,
  className = '',
}: BreadcrumbProps) {
  return (
    <View className={`kit-breadcrumb ${className}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        const clickable = !isLast && typeof onNavigate === 'function'
        return (
          <View className="kit-breadcrumb__item" key={i}>
            {isLast ? (
              <Text className="kit-breadcrumb__current">{item.label}</Text>
            ) : (
              <Text
                className={`kit-breadcrumb__link${clickable ? ' kit-breadcrumb__link--clickable' : ''}`}
                {...(clickable ? { onClick: () => onNavigate(i) } : {})}
              >
                {item.label}
              </Text>
            )}
            {!isLast && (
              <Text className="kit-breadcrumb__sep" aria-hidden>
                {separator}
              </Text>
            )}
          </View>
        )
      })}
    </View>
  )
}
