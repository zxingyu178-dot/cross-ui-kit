/**
 * PageHeader 页头（mini：小程序 / 移动 H5）—— 页面顶部的标题、副标题、面包屑和额外操作。
 */
import { Text, View } from '@tarojs/components'
import type { PageHeaderProps } from './PageHeader.types'
import './PageHeader.scss'

export function PageHeader({
  title,
  subTitle,
  breadcrumb,
  extra,
  footer,
  className = '',
}: PageHeaderProps) {
  return (
    <View className={`kit-page-header ${className}`.trim()}>
      {breadcrumb ? <Text className="kit-page-header__breadcrumb">{breadcrumb}</Text> : null}
      <View className="kit-page-header__main">
        <View className="kit-page-header__title-wrap">
          <Text className="kit-page-header__title">{title}</Text>
          {subTitle ? <Text className="kit-page-header__subtitle">{subTitle}</Text> : null}
        </View>
        {extra ? (
          <View className="kit-page-header__extra">
            <Text>{extra}</Text>
          </View>
        ) : null}
      </View>
      {footer ? (
        <View className="kit-page-header__footer">
          <Text>{footer}</Text>
        </View>
      ) : null}
    </View>
  )
}
