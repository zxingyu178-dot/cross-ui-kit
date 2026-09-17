/** PageHeader 示例：页头（mini）。 */
import { Text, View } from '@tarojs/components'
import { PageHeader } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础页头</Text>
        <View
          style={{
            padding: 16,
            borderRadius: 8,
            border: '1px solid var(--kit-color-border-default)',
            backgroundColor: 'var(--kit-color-bg-card)',
          }}
        >
          <PageHeader title="页面标题" subTitle="这是页面副标题，用于描述页面内容。" />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>带面包屑</Text>
        <View
          style={{
            padding: 16,
            borderRadius: 8,
            border: '1px solid var(--kit-color-border-default)',
            backgroundColor: 'var(--kit-color-bg-card)',
          }}
        >
          <PageHeader
            title="订单详情"
            subTitle="查看订单的详细信息和状态。"
            breadcrumb="首页 / 订单管理 / 订单详情"
          />
        </View>
      </View>
    </View>
  )
}
