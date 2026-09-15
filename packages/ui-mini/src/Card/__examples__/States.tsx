/** Card 示例：基础 / elevated / 头部 action / 仅内容（mini）。 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { Badge } from '../../Badge'
import { Button } from '../../Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../index'

function Stack({ children }: { children: ReactNode }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 16 }}>
      {children}
    </View>
  )
}

export function States() {
  return (
    <Stack>
      <Card>
        <CardHeader
          title="设备概览"
          description="今日车间关键设备运行状态汇总"
          action={<Badge variant="success">在线</Badge>}
        />
        <CardContent>
          <Text
            style={{
              fontSize: 'var(--kit-font-size-body-sm)',
              color: 'var(--kit-color-text-secondary)',
            }}
          >
            运行设备 128 台，告警 3 条，离线 2 台。数据每 30 秒自动刷新一次。
          </Text>
        </CardContent>
        <CardFooter>
          <Button size="sm">查看详情</Button>
          <Button variant="ghost" size="sm">
            导出
          </Button>
        </CardFooter>
      </Card>

      <Card variant="elevated">
        <CardHeader title="投影卡片（elevated）" description="带阴影层级，用于浮层/重点内容区" />
        <CardContent>
          <Text
            style={{
              fontSize: 'var(--kit-font-size-body-sm)',
              color: 'var(--kit-color-text-secondary)',
            }}
          >
            elevated 形态在描边基础上叠加 card 阴影。
          </Text>
        </CardContent>
      </Card>

      <Card>
        <CardHeader
          title="待办审批"
          description="4 条待你处理"
          action={
            <Button variant="ghost" size="sm">
              全部
            </Button>
          }
        />
        <CardContent>
          <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['采购申请单 #B-2041', '请假申请 #L-1187', '设备维修单 #R-0331'].map((t) => (
              <View
                key={t}
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text
                  style={{
                    fontSize: 'var(--kit-font-size-body-sm)',
                    color: 'var(--kit-color-text-primary)',
                  }}
                >
                  {t}
                </Text>
                <Badge variant="warning">待处理</Badge>
              </View>
            ))}
          </View>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <CardTitle>仅内容卡片</CardTitle>
          <CardDescription>不带 Header/Footer，直接在 Content 内组合标题。</CardDescription>
          <Text
            style={{
              display: 'block',
              marginTop: 12,
              fontSize: 'var(--kit-font-size-body-sm)',
              color: 'var(--kit-color-text-secondary)',
            }}
          >
            适合简单信息块、统计数字、图表容器。
          </Text>
        </CardContent>
      </Card>
    </Stack>
  )
}
