/**
 * List 列表（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 支持数据源/头部底部/边框/尺寸/加载/空状态。
 */
import { Text, View } from '@tarojs/components'
import type { ListProps, ListSize } from './List.types'
import './List.scss'

const sizePadding: Record<ListSize, string> = {
  sm: 'kit-list__item--sm',
  md: 'kit-list__item--md',
  lg: 'kit-list__item--lg',
}

export function List({
  dataSource = [],
  header,
  footer,
  bordered = false,
  size = 'md',
  loading = false,
  emptyText = '暂无数据',
  className = '',
}: ListProps) {
  return (
    <View className={`kit-list ${bordered ? 'kit-list--bordered' : ''} ${className}`.trim()}>
      {header ? <View className={`kit-list__header ${sizePadding[size]}`}>{header}</View> : null}
      {loading ? (
        <View className={`kit-list__loading ${sizePadding[size]}`}>
          <View className="kit-list__skeleton" style={{ width: '60%' }} />
          <View className="kit-list__skeleton" style={{ width: '80%' }} />
          <View className="kit-list__skeleton" style={{ width: '50%' }} />
        </View>
      ) : dataSource.length === 0 ? (
        <View className={`kit-list__empty ${sizePadding[size]}`}>
          <Text className="kit-list__empty-text">{emptyText}</Text>
        </View>
      ) : (
        <View className="kit-list__body">
          {dataSource.map((item) => (
            <View
              key={item.key}
              className={`kit-list__item ${sizePadding[size]} ${item.disabled ? 'kit-list__item--disabled' : ''}`}
            >
              <View className="kit-list__item-content">
                <Text className="kit-list__item-title">{item.title}</Text>
                {item.description ? (
                  <Text className="kit-list__item-desc">{item.description}</Text>
                ) : null}
              </View>
              {item.extra ? <View className="kit-list__item-extra">{item.extra}</View> : null}
            </View>
          ))}
        </View>
      )}
      {footer ? <View className={`kit-list__footer ${sizePadding[size]}`}>{footer}</View> : null}
    </View>
  )
}
