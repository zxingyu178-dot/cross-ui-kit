/** Empty 示例：基础、带操作、仅标题、自定义图标（native）。 */
import type { ReactNode } from 'react'
import { Stack, Text, YStack } from 'tamagui'
import { Button } from '../../Button'
import { Empty } from '../index'

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

/** 自定义「无搜索结果」图形：浅蓝圆底 + 放大镜（纯几何） */
function SearchEmptyIcon() {
  return (
    <Stack
      width={96}
      height={96}
      borderRadius={9999}
      backgroundColor="$primaryBg"
      alignItems="center"
      justifyContent="center"
    >
      <Stack width={36} height={36}>
        <Stack
          position="absolute"
          top={7}
          left={7}
          width={22}
          height={22}
          borderRadius={9999}
          borderWidth={2}
          borderColor="$primaryDefault"
        />
        <Stack
          position="absolute"
          bottom={5}
          right={3}
          width={10}
          height={2}
          borderRadius={9999}
          backgroundColor="$primaryDefault"
          transform={[{ rotate: '45deg' }]}
        />
      </Stack>
    </Stack>
  )
}

export function States() {
  return (
    <YStack gap="$4" padding="$4" backgroundColor="$bgPage">
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
    </YStack>
  )
}
