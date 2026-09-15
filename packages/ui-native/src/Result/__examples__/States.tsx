/** Result 示例：error/success/warning/info/notFound + 自定义图标（native）。 */
import type { ReactNode } from 'react'
import { Stack, Text, YStack } from 'tamagui'
import { Button } from '../../Button'
import { Result } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack
      borderRadius="$lg"
      borderWidth={1}
      borderColor="$borderDefault"
      backgroundColor="$bgPage"
      overflow="hidden"
    >
      <Text
        paddingHorizontal="$4"
        paddingVertical="$2"
        borderBottomWidth={1}
        borderBottomColor="$borderDefault"
        fontSize="$caption"
        color="$textTertiary"
      >
        {label}
      </Text>
      {children}
    </YStack>
  )
}

/** 自定义「维护中」图形：浅蓝圆底 + 菱形（纯几何，演示 icon slot 替换） */
function MaintainIcon() {
  return (
    <Stack
      width={96}
      height={96}
      borderRadius={9999}
      backgroundColor="$primaryBg"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        width={22}
        height={22}
        borderRadius={6}
        backgroundColor="$primaryDefault"
        transform={[{ rotate: '45deg' }]}
      />
    </Stack>
  )
}

export function States() {
  return (
    <YStack gap="$4" padding="$4" backgroundColor="$bgPage">
      <Card label="error · 加载失败（含重试，网络异常同此）">
        <Result
          status="error"
          title="加载失败"
          description="网络连接异常，请检查网络后重试。"
          action={<Button size="sm">重新加载</Button>}
          extra={
            <Button variant="ghost" size="sm">
              联系客服
            </Button>
          }
        />
      </Card>

      <Card label="success · 提交成功">
        <Result
          status="success"
          title="提交成功"
          description="工单已提交，可在「我的工单」查看处理进度。"
          action={<Button size="sm">查看工单</Button>}
        />
      </Card>

      <Card label="warning · 操作受限">
        <Result
          status="warning"
          title="操作受限"
          description="当前账号无权限执行该操作，请联系管理员开通。"
          action={
            <Button variant="secondary" size="sm">
              申请权限
            </Button>
          }
        />
      </Card>

      <Card label="info · 已是最新">
        <Result status="info" title="暂无更新" description="当前已是最新版本，无需更新。" />
      </Card>

      <Card label="notFound · 404 页面不存在">
        <Result
          status="notFound"
          title="页面不存在"
          description="你访问的页面已被移除，或地址有误。"
          action={
            <Button variant="secondary" size="sm">
              返回首页
            </Button>
          }
        />
      </Card>

      <Card label="自定义图标（icon slot 替换）">
        <Result
          icon={<MaintainIcon />}
          title="服务维护中"
          description="系统正在升级维护，预计 30 分钟后恢复。"
          action={<Button size="sm">刷新重试</Button>}
        />
      </Card>
    </YStack>
  )
}
