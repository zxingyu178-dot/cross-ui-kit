/** Empty 示例：基础、带操作、仅标题、自定义图标（mini）。 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '../../Button'
import { Empty } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--kit-radius-lg)',
        border: '1px solid var(--kit-color-border-default)',
        backgroundColor: 'var(--kit-color-bg-page)',
        overflow: 'hidden',
      }}
    >
      <Text
        style={{
          padding: '8px 16px',
          borderBottom: '1px solid var(--kit-color-border-default)',
          fontSize: 'var(--kit-font-size-caption)',
          color: 'var(--kit-color-text-tertiary)',
        }}
      >
        {label}
      </Text>
      {children}
    </View>
  )
}

/** 自定义「无搜索结果」图形：浅蓝圆底 + 放大镜（纯几何） */
function SearchEmptyIcon() {
  return (
    <View
      style={{
        width: 96,
        height: 96,
        borderRadius: 999,
        backgroundColor: 'var(--kit-color-primary-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ position: 'relative', width: 36, height: 36 }}>
        <View
          style={{
            position: 'absolute',
            top: 2,
            left: 2,
            width: 22,
            height: 22,
            borderRadius: 999,
            border: '2px solid var(--kit-color-primary-default)',
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: 4,
            bottom: 5,
            width: 10,
            height: 2,
            borderRadius: 999,
            backgroundColor: 'var(--kit-color-primary-default)',
            transform: 'rotate(45deg)',
          }}
        />
      </View>
    </View>
  )
}

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <Card label="基础空态（默认图形 + 标题 + 描述）">
        <Empty title="暂无数据" description="当前列表还没有内容，可尝试调整筛选条件。" />
      </Card>

      <Card label="带操作（action slot 放 Button）">
        <Empty
          title="还没有任何订单"
          description="完成首笔下单后，订单会展示在这里。"
          action={<Button size="sm">去下单</Button>}
        />
      </Card>

      <Card label="仅标题（无描述、无操作）">
        <Empty title="暂无搜索记录" />
      </Card>

      <Card label="自定义图标（无搜索结果场景）">
        <Empty
          icon={<SearchEmptyIcon />}
          title="未找到相关结果"
          description="换个关键词，或检查拼写后重试。"
          action={
            <Button variant="secondary" size="sm">
              清空筛选
            </Button>
          }
        />
      </Card>
    </View>
  )
}
