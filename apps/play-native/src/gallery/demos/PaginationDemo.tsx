import { useState } from 'react'
import { Pagination } from '@kit/ui-native'
import { Text, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function PaginationDemo() {
  const [page, setPage] = useState(1)
  return (
    <DemoScreen title="Pagination 分页">
      <Section label="受控（可真实翻页）">
        <YStack gap="$2">
          <Pagination total={83} pageSize={10} current={page} onChange={setPage} />
          <Text fontSize="$caption" color="$textTertiary">
            当前第 {page} 页
          </Text>
        </YStack>
      </Section>

      <Section label="小号 / 隐藏总数">
        <Pagination total={50} size="sm" showTotal={false} current={1} onChange={() => {}} />
      </Section>

      <Section label="禁用">
        <Pagination total={200} disabled current={3} onChange={() => {}} />
      </Section>
    </DemoScreen>
  )
}
