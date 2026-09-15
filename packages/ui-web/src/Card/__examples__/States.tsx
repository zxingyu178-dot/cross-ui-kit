import type { ReactNode } from 'react'
import { Button } from '../../Button'
import { Badge } from '../../Badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../index'

function Grid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
}

export function States() {
  return (
    <Grid>
      <Card>
        <CardHeader
          title="设备概览"
          description="今日车间关键设备运行状态汇总"
          action={<Badge variant="success">在线</Badge>}
        />
        <CardContent>
          <p className="text-body-sm text-text-secondary">
            运行设备 128 台，告警 3 条，离线 2 台。数据每 30 秒自动刷新一次。
          </p>
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
          <p className="text-body-sm text-text-secondary">
            elevated 形态在描边基础上叠加 card 阴影。
          </p>
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
          <ul className="flex flex-col gap-3">
            {['采购申请单 #B-2041', '请假申请 #L-1187', '设备维修单 #R-0331'].map((t) => (
              <li key={t} className="flex items-center justify-between text-body-sm">
                <span className="text-text-primary">{t}</span>
                <Badge variant="warning">待处理</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <CardTitle>仅内容卡片</CardTitle>
          <CardDescription className="mt-1">
            不带 Header/Footer，直接在 Content 内组合标题。
          </CardDescription>
          <p className="mt-3 text-body-sm text-text-secondary">
            适合简单信息块、统计数字、图表容器。
          </p>
        </CardContent>
      </Card>
    </Grid>
  )
}
