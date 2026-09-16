/** Pagination 示例：基础受控 / 小尺寸 / 禁用态 / 少页无省略号（mini）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Text, View } from '@tarojs/components'
import { Pagination } from '../index'

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Text
        style={{
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

export function States() {
  const [page, setPage] = useState(5)
  const [smallPage, setSmallPage] = useState(3)

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: 16 }}>
      <Group label="基础分页（total=123, pageSize=10, current=5，受控）">
        <Pagination current={page} pageSize={10} total={123} onChange={setPage} />
      </Group>

      <Group label="小尺寸（size=sm）">
        <Pagination
          current={smallPage}
          pageSize={10}
          total={86}
          onChange={setSmallPage}
          size="sm"
        />
      </Group>

      <Group label="禁用态（disabled）">
        <Pagination current={2} pageSize={10} total={56} onChange={() => {}} disabled />
      </Group>

      <Group label="少页无省略号（total=30 → 3 页）">
        <Pagination current={1} pageSize={10} total={30} onChange={() => {}} />
      </Group>
    </View>
  )
}
