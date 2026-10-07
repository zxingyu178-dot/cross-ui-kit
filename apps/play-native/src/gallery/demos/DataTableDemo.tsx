import { useState } from 'react'
import { Button, DataTable } from '@kit/ui-native'
import { Text, XStack, YStack } from 'tamagui'
import type { SortState } from '@kit/core'
import { DemoScreen, Section } from '../DemoShell'

interface Row {
  id: number
  name: string
  age: number
  city: string
}

const DATA: Row[] = [
  { id: 1, name: '张三', age: 28, city: '徐州' },
  { id: 2, name: '李四', age: 34, city: '南京' },
  { id: 3, name: '王五', age: 22, city: '苏州' },
  { id: 4, name: '一个名字非常非常非常长的用户用于验证表格长内容', age: 41, city: '上海' },
]

const COLUMNS = [
  { key: 'name', title: '姓名', sortable: true },
  { key: 'age', title: '年龄', align: 'center' as const, sortable: true },
  { key: 'city', title: '城市', align: 'right' as const },
]

export default function DataTableDemo() {
  const [sort, setSort] = useState<SortState | null>(null)
  const [picked, setPicked] = useState('')
  return (
    <DemoScreen title="DataTable 数据表格">
      <Section label="正常 + 受控排序 + 行点击">
        <YStack gap="$2">
          <DataTable
            columns={COLUMNS}
            data={DATA}
            rowKey="id"
            sortState={sort}
            onSortChange={(key, order) => setSort({ key, order })}
            onRowClick={(row) => setPicked(row.name)}
          />
          <Text fontSize="$caption" color="$textTertiary">
            {picked ? `点击了：${picked}` : '点击某一行试试'}
          </Text>
        </YStack>
      </Section>

      <Section label="加载中">
        <DataTable columns={COLUMNS} data={[]} loading />
      </Section>

      <Section label="空态">
        <DataTable columns={COLUMNS} data={[]} empty="没有符合条件的数据" />
      </Section>

      <Section label="重置排序">
        <XStack>
          <Button size="sm" variant="ghost" onPress={() => setSort(null)}>
            清除排序
          </Button>
        </XStack>
      </Section>
    </DemoScreen>
  )
}
